document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.bradesco-carousel');
  if (!carousel) return;

  // ✅ Evita que o leitor de tela “fique preso” no carrossel anunciando mudanças enquanto
  // o usuário já está em outras seções. O aria-live deve ficar APENAS no status.
  carousel.removeAttribute('aria-live');
  carousel.removeAttribute('aria-atomic');

  const slides = carousel.querySelectorAll('.carousel-slide');
  const dotsContainer = carousel.querySelector('.carousel-dots');

  let currentIndex = 0;
  let intervalId;
  const intervalTime = 5000; // 5s
  let isAutoPlayEnabled = true;
  let isCarouselActiveForA11y = true;

  // Status para leitores de tela (único aria-live do carrossel)
  const accessibilityAnnouncer = document.createElement('div');
  accessibilityAnnouncer.setAttribute('role', 'status');
  accessibilityAnnouncer.setAttribute('aria-live', 'polite');
  accessibilityAnnouncer.setAttribute('aria-atomic', 'true');
  accessibilityAnnouncer.className = 'sr-only';
  carousel.appendChild(accessibilityAnnouncer);

  function isFocusInsideCarousel() {
    return carousel.contains(document.activeElement);
  }

  function announceSlide(index) {
    if (!isCarouselActiveForA11y) return;

    // Preferência por h1; fallback para h2
    const title = slides[index].querySelector('h1, h2, [data-slide-title]');
    if (title) {
      accessibilityAnnouncer.textContent = `Slide ${index + 1} de ${slides.length}: ${title.textContent.trim()}`;
    }
  }

  function updateDots(index) {
    if (!dotsContainer) return;

    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.remove('active');
      dot.setAttribute('aria-selected', 'false');
      dot.setAttribute('aria-label', `Ir para o slide ${i + 1}`);
      if (i === index) {
        dot.classList.add('active');
        dot.setAttribute('aria-selected', 'true');
      }
    });
  }

  function showSlide(index) {
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle('active', active);
      slide.setAttribute('aria-hidden', active ? 'false' : 'true');
      slide.setAttribute('tabindex', active ? '0' : '-1');
    });

    updateDots(index);
    currentIndex = index;
    announceSlide(index);

    // Se o usuário está navegando pelo teclado dentro do carrossel, leve o foco ao título
    if (isFocusInsideCarousel()) {
      const title = slides[index].querySelector('h1, h2');
      if (title) {
        title.setAttribute('tabindex', '-1');
        title.focus({ preventScroll: true });
      }
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function startTimer() {
    if (!isAutoPlayEnabled) return;
    stopTimer();
    intervalId = setInterval(() => {
      // ✅ Só troca slide se o carrossel estiver “ativo” e visível para A11y
      if (!isCarouselActiveForA11y) return;
      nextSlide();
    }, intervalTime);
  }

  function stopTimer() {
    clearInterval(intervalId);
  }

  function disableCarouselA11y() {
    isCarouselActiveForA11y = false;

    // Esconde do leitor de tela (mas sem mexer na parte visual)
    carousel.setAttribute('aria-hidden', 'true');

    // Para autoplay e anúncios
    stopTimer();
    accessibilityAnnouncer.textContent = '';
  }

  function enableCarouselA11y() {
    isCarouselActiveForA11y = true;
    carousel.setAttribute('aria-hidden', 'false');

    // Retoma autoplay somente se o usuário estiver no carrossel
    if (isAutoPlayEnabled) startTimer();
    announceSlide(currentIndex);
  }

  // Expor para o botão/links (ex.: gotoTela02)
  window.disableCarouselA11y = disableCarouselA11y;
  window.enableCarouselA11y = enableCarouselA11y;

  // Dots: clique/teclado
  if (dotsContainer) {
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      // Garante foco por teclado
      if (!dot.hasAttribute('tabindex')) dot.setAttribute('tabindex', '0');
      dot.setAttribute('role', 'tab');

      dot.addEventListener('click', () => {
        stopTimer();
        showSlide(i);
        startTimer();
      });

      dot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          stopTimer();
          showSlide(i);
          startTimer();
        }
      });
    });
  }

  // Pausar autoplay ao mouse/hover
  carousel.addEventListener('mouseenter', stopTimer);
  carousel.addEventListener('mouseleave', () => {
    if (isCarouselActiveForA11y) startTimer();
  });

  // ✅ Setas só funcionam quando o foco estiver dentro do carrossel
  document.addEventListener('keydown', (e) => {
    if (!isCarouselActiveForA11y) return;
    if (!isFocusInsideCarousel()) return;

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      stopTimer();
      prevSlide();
      startTimer();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      stopTimer();
      nextSlide();
      startTimer();
    }
  });

  // ✅ Quando o foco sai do carrossel, desliga A11y dele (evita sobrepor leitura em outras telas)
  carousel.addEventListener('focusin', () => {
    enableCarouselA11y();
  });

  carousel.addEventListener('focusout', () => {
    // Se o foco foi para fora do carrossel
    setTimeout(() => {
      if (!isFocusInsideCarousel()) {
        disableCarouselA11y();
      }
    }, 0);
  });

  // ✅ Quando o carrossel sai da viewport, desliga A11y e autoplay
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target !== carousel) continue;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          // Só reativa se o usuário estiver nele (para não roubar leitura)
          if (isFocusInsideCarousel()) enableCarouselA11y();
        } else {
          disableCarouselA11y();
        }
      }
    }, { threshold: [0, 0.25, 0.5] });

    io.observe(carousel);
  }

  // Função: rolar para a próxima tela (viewport height = uma "tela")
  // ✅ Agora também desativa o carrossel para A11y e move foco para o conteúdo seguinte.
  window.gotoTela02 = function (e) {
    if (e && e.preventDefault) e.preventDefault();

    disableCarouselA11y();

    document.documentElement.style.scrollBehavior = 'smooth';
    const scrollDistance = window.innerHeight;

    window.scrollBy({ top: scrollDistance, behavior: 'smooth' });

    // Depois do scroll, foca o primeiro título que estiver “no topo” da viewport
    setTimeout(() => {
      const candidates = Array.from(document.querySelectorAll('h1, h2, [role="heading"]'));
      const target = candidates.find((el) => {
        const r = el.getBoundingClientRect();
        return r.top >= 0 && r.top <= 220 && r.height > 0;
      });
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    }, 650);
  };

  // Pausar autoplay quando a aba perde foco
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopTimer();
    else if (isCarouselActiveForA11y) startTimer();
  });

  // Inicialização
  showSlide(currentIndex);
  // Começa com A11y ligado somente se o foco estiver no carrossel
  if (!isFocusInsideCarousel()) {
    disableCarouselA11y();
  } else {
    enableCarouselA11y();
  }

  // Classe sr-only (fallback)
  if (!document.querySelector('style[data-sr-only]')) {
    const style = document.createElement('style');
    style.setAttribute('data-sr-only', 'true');
    style.textContent = `
      .sr-only {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }
    `;
    document.head.appendChild(style);
  }
});
