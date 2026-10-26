/*
  custom.js — AST Onepage
  Pequenos incrementos de UX sem mexer nas classes do framework.

  1) Menu: cria um backdrop e controla a classe body.menu-open.
  2) Quiz: ao clicar em "Confirmar resposta", adiciona .answered no bloco do quiz
     para desativar hovers depois da confirmação.
*/

(function () {
  'use strict';

  function isVisible(el) {
    if (!el) return false;
    const s = window.getComputedStyle(el);
    if (s.display === 'none' || s.visibility === 'hidden' || Number(s.opacity) === 0) return false;
    const r = el.getBoundingClientRect();
    return !!(r.width || r.height);
  }

  function ensureBackdrop() {
    let bd = document.getElementById('as-menu-backdrop');
    if (bd) return bd;
    bd = document.createElement('div');
    bd.id = 'as-menu-backdrop';
    document.body.appendChild(bd);
    return bd;
  }

  function initMenuUX() {
    const bd = ensureBackdrop();

    function getEls() {
      return {
        bt: document.querySelector('button.bt-menu'),
        menu: document.querySelector('.as-menu .menu-conteudo')
      };
    }

    function sync() {
      const { menu } = getEls();
      const open = isVisible(menu) && menu && menu.children && menu.children.length > 0;
      document.body.classList.toggle('menu-open', !!open);
    }

    // Fecha menu ao clicar no backdrop (simula clique no botão)
    bd.addEventListener('click', function () {
      const { bt } = getEls();
      if (bt) bt.click();
    });

    // Observa mudanças na árvore (menu abre/fecha sem evento público)
    const obs = new MutationObserver(sync);
    obs.observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['class', 'style'] });

    // Também tenta sync no click do botão
    document.addEventListener('click', function (e) {
      const t = e.target;
      if (t && (t.closest && t.closest('button.bt-menu'))) {
        setTimeout(sync, 30);
      }
    }, true);

    // Boot
    setTimeout(sync, 50);
  }

  function initQuizUX() {
    // Delegação: captura cliques no "Confirmar resposta" dentro do quiz
    document.addEventListener('click', function (e) {
      const btn = e.target && e.target.closest ? e.target.closest('.as-question button') : null;
      if (!btn) return;

      // Se estiver desabilitado, ignora
      if (btn.disabled) return;

      // Marca o quiz como respondido; a lib pode re-renderizar depois, então repetimos
      const quiz = btn.closest('.as-question');
      if (quiz) {
        quiz.classList.add('answered');
        setTimeout(function () { quiz.classList.add('answered'); }, 150);
      }

      // Também marca opções como disabled visualmente (só CSS) após confirmar
      setTimeout(function () {
        const q = quiz || btn.closest('[class*="as-question"]');
        if (!q) return;
        q.querySelectorAll('.as-question-option').forEach(function (opt) {
          opt.classList.add('disabled');
        });
      }, 120);
    }, true);
  }

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  onReady(function () {
    initMenuUX();
    initQuizUX();
  });
})();


document.addEventListener("DOMContentLoaded", () => {
  // Tooltip único
  const tooltip = document.createElement("div");
  tooltip.className = "ast-tooltip";
  tooltip.setAttribute("role", "tooltip");
  document.body.appendChild(tooltip);

  let activeEl = null;

  function showTip(el) {
    const text = el.getAttribute("data-tip");
    if (!text) return;

    activeEl = el;
    tooltip.textContent = text;
    tooltip.classList.add("is-visible");

    // acessibilidade
    if (!el.id) el.id = "ast-tip-" + Math.random().toString(16).slice(2);
    tooltip.id = el.id + "-tooltip";
    el.setAttribute("aria-describedby", tooltip.id);

    positionTip(el);
  }

  function hideTip(el) {
    tooltip.classList.remove("is-visible");
    if (el) el.removeAttribute("aria-describedby");
    activeEl = null;
  }

  function positionTip(el) {
    const rect = el.getBoundingClientRect();
    const pad = 12;

    tooltip.style.left = "0px";
    tooltip.style.top = "0px";

    const tipRect = tooltip.getBoundingClientRect();

    let top = rect.top - tipRect.height - 12;
    let left = rect.left + rect.width / 2 - tipRect.width / 2;

    if (top < pad) top = rect.bottom + 12;

    left = Math.max(pad, Math.min(left, window.innerWidth - tipRect.width - pad));

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;

    const centerX = rect.left + rect.width / 2;
    const arrowLeft = Math.max(14, Math.min(centerX - left - 5, tipRect.width - 24));

    const isBelow = top > rect.top;

    tooltip.style.setProperty("--arrow-left", `${arrowLeft}px`);
    tooltip.style.setProperty("--arrow-top", isBelow ? "-6px" : "auto");
    tooltip.style.setProperty("--arrow-bottom", isBelow ? "auto" : "-6px");
    tooltip.style.setProperty("--arrow-rotate", isBelow ? "225deg" : "45deg");
  }

  // patch da seta
  const stylePatch = document.createElement("style");
  stylePatch.textContent = `
    .ast-tooltip::after {
      left: var(--arrow-left, 18px);
      top: var(--arrow-top, auto);
      bottom: var(--arrow-bottom, -6px);
      transform: rotate(var(--arrow-rotate, 45deg));
    }`;
  document.head.appendChild(stylePatch);

  // eventos
  document.addEventListener("mouseover", (e) => {
    const el = e.target.closest(".ast-tip");
    if (el) showTip(el);
  });

  document.addEventListener("mouseout", (e) => {
    const el = e.target.closest(".ast-tip");
    if (el) hideTip(el);
  });

  document.addEventListener("focusin", (e) => {
    const el = e.target.closest(".ast-tip");
    if (el) showTip(el);
  });

  document.addEventListener("focusout", (e) => {
    const el = e.target.closest(".ast-tip");
    if (el) hideTip(el);
  });

  // mobile
  document.addEventListener("click", (e) => {
    const el = e.target.closest(".ast-tip");
    if (el) {
      if (activeEl === el && tooltip.classList.contains("is-visible")) {
        hideTip(el);
      } else {
        showTip(el);
      }
      e.preventDefault();
      return;
    }
    if (tooltip.classList.contains("is-visible")) hideTip(activeEl);
  });

  window.addEventListener("scroll", () => {
    if (activeEl) positionTip(activeEl);
  }, { passive: true });

  window.addEventListener("resize", () => {
    if (activeEl) positionTip(activeEl);
  });
});
