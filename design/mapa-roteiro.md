# Mapa do roteiro — Onboarding Asterisco

Fonte: `design/roteiro-extraido.md` (conferido contra `roteiro-original.docx` e `.pdf`). Cobertura: os 12 menus da tabela *Estrutura e recursos* e as 63 seções `##` do roteiro, na ordem do documento. Seções do roteiro com conteúdo grande foram divididas em 2 telas (indicadas abaixo) sem perder ou reordenar texto.

Papéis: `Texto na tela` = corpo; `INTERAÇÃO/CHECKLIST/MODELO — X` = X vira subtítulo do bloco; `DESTAQUE — X` = card de destaque; `Produção`, `Fonte`, `Materiais de apoio` = fora da tela; `Demonstração` = vídeo de demonstração (as-video com placeholder; briefing em `roteiros-de-video.md`); `Imagem de apoio Gxx` / `IMAGENS OPxx/CLxx` = print pendente (`asset-requests.json`). Marcadores `COLOCAR …` que estão dentro de texto de tela aparecem literais, como chip amarelo de pendência.

Interações customizadas (sem `as-*` equivalente): **checklist de marcação livre** — não há componente nativo de checklist; usa `<input type=checkbox>` nativo, sem JS, sem nota e sem trava (roteiro proíbe avaliação). **Cards de link, tabelas, árvore de pastas, etapas e passos numerados** são apresentação estática, sem comportamento.

| Trecho do roteiro | Tela | Apresentação | Interação | Status |
|---|---|---|---|---|
| Título do roteiro: Onboarding Asterisco | tela_01 | título da capa + logo AST + botão Começar (UI) | nenhuma | implementado (prints/vídeos pendentes quando indicado) |
| Boas-vindas — Texto na tela | tela_02 | título da tela (1ª linha) + corpo | nenhuma | implementado (prints/vídeos pendentes quando indicado) |
| Boas-vindas — INTERAÇÃO O que você vai aprender | tela_02 | subtítulo + comando + 3 flipcards (rótulo/descrição) | as-flipcard ×3 | implementado (prints/vídeos pendentes quando indicado) |
| Menu 2 — Integração AST (tabela Estrutura e recursos) | tela_03 | abertura de menu: número, título, atalhos por âncora | navegação por âncoras | implementado (prints/vídeos pendentes quando indicado) |
| Institucional — Texto na tela + canais + Central de Ética | tela_04 | eyebrow, título, corpo; G01 = logo oficial (asset aprovado) | cards de link ×6 (nova aba) + destaque | implementado (prints/vídeos pendentes quando indicado) |
| Formatos de peças — Texto + O que produzimos | tela_05 | título, corpo, subtítulo, comando | as-flipcard ×5 (ícones provisórios; G02 opcional) | implementado (prints/vídeos pendentes quando indicado) |
| Sistemas — Texto + Onde resolvo cada coisa | tela_06 | título, corpo; cada aba = sistema + pergunta + print G03 | as-abas ×5 | implementado (prints/vídeos pendentes quando indicado) |
| Harvest — Texto + destaque + Demonstração | tela_07 | título, corpo, destaque | as-video (demonstração DEMO01, placeholder) | implementado (prints/vídeos pendentes quando indicado) |
| Forecast — Texto na tela | tela_08 | bloco único centralizado | nenhuma | implementado (prints/vídeos pendentes quando indicado) |
| Slack — Texto + Canais da rotina + destaque | tela_09 | título, corpo, destaque; canal = item | as-accordion ×7 | implementado (prints/vídeos pendentes quando indicado) |
| Google Drive e OneDrive — Texto + destaque | tela_10 | título; Drive à esquerda, OneDrive + destaque à direita | nenhuma | implementado (prints/vídeos pendentes quando indicado) |
| Fortime — Texto na tela | tela_11 | bloco único centralizado | nenhuma | implementado (prints/vídeos pendentes quando indicado) |
| Padrões de e-mails — Texto + Configurações e modelos | tela_12 | título, corpo, print G04; item = slide | as-slider ×4 | implementado (prints/vídeos pendentes quando indicado) |
| Projetos — Texto + Antes de produzir | tela_13 | print G05 à esquerda, texto à direita; 4 cards de pergunta | cards estáticos ×4 (apresentação) | implementado (prints/vídeos pendentes quando indicado) |
| Menu 3 — Capacitação (tabela Estrutura e recursos) | tela_14 | abertura de menu: número, título, atalhos por âncora | navegação por âncoras | implementado (prints/vídeos pendentes quando indicado) |
| Cursos obrigatórios AST — Texto + Acessar os cursos | tela_15 | título, corpo | cards de link ×5 (nova aba) | implementado (prints/vídeos pendentes quando indicado) |
| Glossário AST — Texto + Palavras interativas | tela_16 | título, corpo; termo = chip, definição no modal | as-modal ×12 (palavras interativas) | implementado (prints/vídeos pendentes quando indicado) |
| Acessos e ferramentas de produção — Texto + Checklist | tela_17 | menu Acessos; título, corpo | checklist de marcação livre ×5 | implementado (prints/vídeos pendentes quando indicado) |
| Menu 5 — DG Ambientação (tabela Estrutura e recursos) | tela_18 | abertura de menu: número, título, atalhos por âncora | navegação por âncoras | implementado (prints/vídeos pendentes quando indicado) |
| Ferramentas para sincronização da máquina | tela_19 | título, corpo, destaque, print G06 | as-video DEMO02 | implementado (prints/vídeos pendentes quando indicado) |
| Orientações básicas para produção de peças | tela_20 | título, corpo; passos numerados | lista de passos (apresentação) | implementado (prints/vídeos pendentes quando indicado) |
| Como fazer uma OP com HTML e CSS — introdução | tela_21 | título, corpo; atalhos para os 12 passos | navegação por âncoras | implementado (prints/vídeos pendentes quando indicado) |
| Passo 1 Preparar a máquina | tela_22 | rótulo Passo N + título; corpo, códigos, destaque; prints OP | nenhuma (consulta); botão pendente PDF de setup | implementado (prints/vídeos pendentes quando indicado) |
| Passo 2 Consultar a OP modelo de interações | tela_23 | rótulo Passo N + título; corpo, códigos, destaque; prints OP | nenhuma (consulta); card de link | implementado (prints/vídeos pendentes quando indicado) |
| Passo 3 Obter o repositório do projeto | tela_24 | rótulo Passo N + título; corpo, códigos, destaque; prints OP | nenhuma (consulta) | implementado (prints/vídeos pendentes quando indicado) |
| Passo 4 Abrir o curso pela primeira vez | tela_25 | rótulo Passo N + título; corpo, códigos, destaque; prints OP | nenhuma (consulta) | implementado (prints/vídeos pendentes quando indicado) |
| Passo 5 Reabrir uma cópia já preparada | tela_26 | rótulo Passo N + título; corpo, códigos, destaque; prints OP | nenhuma (consulta) | implementado (prints/vídeos pendentes quando indicado) |
| Passo 6 Abrir e preparar o Koala antes dos estilos | tela_27 | rótulo Passo N + título; corpo, códigos, destaque; prints OP | nenhuma (consulta) | implementado (prints/vídeos pendentes quando indicado) |
| Passo 7 Conhecer as pastas e localizar a tela | tela_28 | rótulo Passo N + título; corpo, códigos, destaque; prints OP | nenhuma (consulta) | implementado (prints/vídeos pendentes quando indicado) |
| Passo 8 Montar e editar as telas | tela_29 | rótulo Passo N + título; corpo, códigos, destaque; prints OP | nenhuma (consulta) | implementado (prints/vídeos pendentes quando indicado) |
| Passo 9 Editar o estilo e conferir a compilação | tela_30 | rótulo Passo N + título; corpo, códigos, destaque; prints OP | nenhuma (consulta) | implementado (prints/vídeos pendentes quando indicado) |
| Passo 10 Inserir as interações e as mídias | tela_31 | rótulo Passo N + título; corpo, códigos, destaque; prints OP | nenhuma (consulta) | implementado (prints/vídeos pendentes quando indicado) |
| Passo 11 Salvar registrar e sincronizar | tela_32 | rótulo Passo N + título; corpo, códigos, destaque; prints OP | nenhuma (consulta) | implementado (prints/vídeos pendentes quando indicado) |
| Passo 12 Conferir e gerar o pacote final | tela_33 | rótulo Passo N + título; corpo, códigos, destaque; prints OP | nenhuma (consulta) | implementado (prints/vídeos pendentes quando indicado) |
| Como fazer uma OP com apoio do Claude — Texto + Prepare o contexto + Modelo de pedido | tela_34 | título, corpo, modelo de pedido | as-abas verticais ×6 | implementado (prints/vídeos pendentes quando indicado) |
| Como fazer uma OP com apoio do Claude — Comandos do fluxo local + destaque + CL01–CL03 + Demonstração | tela_35 | título = rótulo da interação; tabela de comandos | tabela (apresentação) + as-video DEMO03 | implementado (prints/vídeos pendentes quando indicado) |
| Softwares por tipo de material | tela_36 | título, corpo; tabela com marcadores pendentes visíveis | tabela (apresentação) | implementado (prints/vídeos pendentes quando indicado) |
| Storyline e formatos de publicação | tela_37 | título, corpo, destaque (Fonte técnica não vai para a tela) | as-abas ×4 | implementado (prints/vídeos pendentes quando indicado) |
| Menu 6 — DG Processos (tabela Estrutura e recursos) | tela_38 | abertura de menu: número, título, atalhos por âncora | navegação por âncoras | implementado (prints/vídeos pendentes quando indicado) |
| Organização de pastas DG | tela_39 | título, corpo, print G07; pastas em lista; 3 etapas; destaque | apresentação (árvore + etapas) | implementado (prints/vídeos pendentes quando indicado) |
| Nomenclatura dos arquivos | tela_40 | título, corpo; tabela de exemplos | tabela (apresentação) | implementado (prints/vídeos pendentes quando indicado) |
| Limpeza antes do arquivamento | tela_41 | título, corpo | checklist ×6 | implementado (prints/vídeos pendentes quando indicado) |
| Tutorial Hands-on e GitHub — Texto + destaque + Preparar o ambiente | tela_42 | título, corpo, destaque, passos | lista de passos | implementado (prints/vídeos pendentes quando indicado) |
| Tutorial Hands-on e GitHub — Comandos + Demonstração + Antes de encerrar + Materiais de apoio | tela_43 | título = rótulo da interação; botões pendentes com marcador literal | as-abas ×3 + as-video DEMO04 | implementado (prints/vídeos pendentes quando indicado) |
| Edição simplificada para o cliente | tela_44 | bloco único; botão de consulta (link do Drive) | card de link | implementado (prints/vídeos pendentes quando indicado) |
| Fechamento do pacote SCORM | tela_45 | título, corpo | checklist ×6 | implementado (prints/vídeos pendentes quando indicado) |
| ID AST nos pacotes | tela_46 | título, corpo, print G08 | as-video DEMO05 | implementado (prints/vídeos pendentes quando indicado) |
| Envio de arquivos fontes | tela_47 | título, corpo | checklist ×5 | implementado (prints/vídeos pendentes quando indicado) |
| Otimização de imagens | tela_48 | título, corpo, print G09 | as-video DEMO06 | implementado (prints/vídeos pendentes quando indicado) |
| Flipbook scormizado | tela_49 | título, corpo, print G09 | as-video DEMO07 | implementado (prints/vídeos pendentes quando indicado) |
| Homologação OP | tela_50 | título, corpo, print G10 | checklist ×8 | implementado (prints/vídeos pendentes quando indicado) |
| Vídeos interativos | tela_51 | título, corpo, passos, print G11; botões pendentes | lista de passos + as-abas ×2 | implementado (prints/vídeos pendentes quando indicado) |
| Storyboard e pré-produção — Texto + Etapas da pré-produção | tela_52 | título, corpo; etapa = slide (número preservado) | as-slider ×8 | implementado (prints/vídeos pendentes quando indicado) |
| Storyboard e pré-produção — Registro por cena + destaque + Demonstração | tela_53 | título = rótulo do modelo; cabeçalho de tabela literal; print G12 | as-video DEMO08 (Materiais de apoio/Produção ficam fora da tela) | implementado (prints/vídeos pendentes quando indicado) |
| Referências e animação no VEO ou Flow | tela_54 | título, corpo, modelo de prompt, print G12, destaque | as-accordion ×6 | implementado (prints/vídeos pendentes quando indicado) |
| Como gerar locuções | tela_55 | título, corpo, passos (números preservados), modelo de orientação, print G13, destaque | lista de passos + as-video DEMO09 (Demonstração — Google AI Studio) | implementado (prints/vídeos pendentes quando indicado) |
| Menu 7 — DG Soluções de problemas (tabela Estrutura e recursos) | tela_56 | abertura de menu: número, título, atalhos por âncora | navegação por âncoras | implementado (prints/vídeos pendentes quando indicado) |
| iOS e backgrounds | tela_57 | título, corpo, botão pendente (marcador literal), print G14 | as-video DEMO10 | implementado (prints/vídeos pendentes quando indicado) |
| iOS e bullets | tela_58 | título, corpo, botão de link (GitHub), print G14; código do cartão vai no briefing do vídeo | as-video DEMO11 | implementado (prints/vídeos pendentes quando indicado) |
| Menu 8 — DG Acessibilidade (tabela Estrutura e recursos) | tela_59 | abertura de menu: número, título, atalhos por âncora | navegação por âncoras | implementado (prints/vídeos pendentes quando indicado) |
| Audiodescrição | tela_60 | título, corpo, lista, print G15 | lista (apresentação) | implementado (prints/vídeos pendentes quando indicado) |
| Imagemap na Hands-on | tela_61 | bloco único + print largo G15 | nenhuma | implementado (prints/vídeos pendentes quando indicado) |
| PDF e descrição acessível | tela_62 | título, corpo, passos, print G15, botão pendente | lista de passos | implementado (prints/vídeos pendentes quando indicado) |
| Vídeos com Libras e legendas | tela_63 | título, corpo, destaque, botão pendente, print G15 | checklist ×5 | implementado (prints/vídeos pendentes quando indicado) |
| Menu 9 — DG Catálogos e Marketing (tabela Estrutura e recursos) | tela_64 | abertura de menu: número, título, atalhos por âncora | navegação por âncoras | implementado (prints/vídeos pendentes quando indicado) |
| Padrão dos cursos criados na Hands-on (DG Catálogos) | tela_65 | título, corpo, print G16, caminho do checklist | checklist ×7 | implementado (prints/vídeos pendentes quando indicado) |
| Peças AST e Hands-on (DG Marketing) | tela_66 | bloco único + logo Hands-on + print G16 | nenhuma | implementado (prints/vídeos pendentes quando indicado) |
| Menu 10 — DI Processos (tabela Estrutura e recursos) | tela_67 | abertura de menu: número, título, atalhos por âncora | navegação por âncoras | implementado (prints/vídeos pendentes quando indicado) |
| Mapa instrucional e roteiro | tela_68 | título, corpo, link de referência, print G17 | as-abas ×2 | implementado (prints/vídeos pendentes quando indicado) |
| Ajustes e atualizações de conteúdo | tela_69 | título, corpo, print G17 | as-video DEMO12 | implementado (prints/vídeos pendentes quando indicado) |
| Locução com IA | tela_70 | bloco único; botão âncora para “Como gerar locuções” (Produção: única fonte) | navegação por âncora | implementado (prints/vídeos pendentes quando indicado) |
| Organização da pasta DI | tela_71 | título, corpo, destaque, print G17 | apresentação (árvore de pastas) | implementado (prints/vídeos pendentes quando indicado) |
| Menu 11 — DI Catálogos e Marketing (tabela Estrutura e recursos) | tela_72 | abertura de menu: número, título, atalhos por âncora | navegação por âncoras | implementado (prints/vídeos pendentes quando indicado) |
| Ementa e geração de roteiros com IA (DI Catálogos) | tela_73 | título, corpo, passos (números preservados), referências, print G18 | lista de passos + cards de link ×2 | implementado (prints/vídeos pendentes quando indicado) |
| Conteúdo e postagem nas redes sociais (DI Marketing) | tela_74 | bloco único + print G18 | nenhuma | implementado (prints/vídeos pendentes quando indicado) |
| Encerramento — Texto + Checklist | tela_75 | título, corpo; logos AST e Hands-on no rodapé | checklist ×6 | implementado (prints/vídeos pendentes quando indicado) |
