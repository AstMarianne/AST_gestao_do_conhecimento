# Contexto do projeto

**Tipo do projeto:** OP (One Page) interna de onboarding da Asterisco, material
de consulta: sem exercícios, quiz, nota ou trava (orientação de produção do
roteiro). Hands-on, exportação SCORM 1.2.

**Origem da OP:** `/op nova` caso B (sem módulo de referência), em 26/10/2026.
Estrutura: o projeto já era uma cópia do curso "Piloto Modelo" (Hands-on);
as 11 telas do piloto foram substituídas pelas 75 telas do roteiro e o
conteúdo/mídias do piloto removidos. Identidade: sites oficiais da empresa,
indicados pela usuária ([asteriscoeducacao.com.br](https://asteriscoeducacao.com.br/)
e [handsoncreator.ai/pt-br](https://www.handsoncreator.ai/pt-br)). Ver
`design/dna-visual.md` e `design/identidade/`.

**Roteiro utilizado:** `Roteiro_Onboarding_Asterisco` (anexado à conversa em
26/10/2026). Cópias: `design/roteiro-original.docx` (fonte primária) e
`design/roteiro-original.pdf` (exportação; conferido palavra a palavra:
conteúdo idêntico). Os hiperlinks do .docx foram reinseridos manualmente em
`design/roteiro-extraido.md`, porque o extrator os descartava.
Material de apoio citado pelo roteiro: `docs/mapa_imagens_prints_onboarding.md`.

**Mapa do roteiro:** `design/mapa-roteiro.md`.

**Telas aprovadas e congeladas:** nenhuma ainda.

**Telas incompletas:** as que têm print (`OPxx`, `CLxx`, `Gxx`) ou vídeo de
demonstração (`DEMO01`–`DEMO12`) pendentes. A estrutura, o texto e as
interações estão completos.

**Ponto de continuação:** integrar prints e vídeos quando chegarem; preencher
os marcadores `COLOCAR …` do roteiro quando a equipe definir.

**Escopo permitido nesta fase:** curso inteiro.

**Referências fornecidas:** sites da empresa (identidade).

**Assets disponíveis:** logos oficiais AST (negativa) e Hands-on (clara e
negativa), copiados dos sites para `dist/midias/interface/`. Ícones SVG dos
flipcards criados para o curso (`dist/midias/imagens/ico_*.svg`).

**Decisões já tomadas:**
- `Demonstração` do roteiro → vídeo de demonstração (`as-video` com
  `midias/video/video_placeholder.mp4`); briefing em `design/roteiros-de-video.md`.
  Se a equipe preferir prints em vez de gravação, troque o vídeo por imagem.
- Marcadores `COLOCAR …` que estão dentro do texto de tela ficam visíveis como
  chip amarelo de pendência (roteiro: "manter os marcadores… até a definição").
  Os que estão só em notas de Produção não aparecem.
- Cada menu da tabela "Estrutura e recursos" abre com uma faixa de abertura
  (número, título e atalhos por âncora para os assuntos): é a navegação por
  âncoras pedida na Produção das Boas-vindas. Percursos DG e DI ficam
  abertos na mesma OP, sem trava.
- Componentes com `required: true` (padrão da biblioteca): o check verde
  aparece depois da interação. Nenhuma seção está travada.
- Fonte: Figtree embutida como substituta provisória da Intelo.

**Arquivos e componentes protegidos:** `dist/js/app.js`, `main.css`,
`custom-carousel.js` e `custom.js` (compartilhados do modelo).

**Possíveis resíduos da OP-base:** `preCompiledStyle: bradesco-agro.css` no
`course-data.sqlite` (configuração da plataforma, mantida) e o ZIP
`curso piloto-modelo v7579 ….zip` na raiz (mantido; não entra no pacote).
Título, código, logo, estilos de fundo e mídias do piloto já foram trocados ou
removidos.

**Pedidos de imagem em aberto:** ver `design/asset-requests.json` (54 prints +
fonte Intelo).

**Como o curso foi montado nesta sessão:** sem o `hands-on-server` (repositório
privado não instalado). O SCSS foi compilado com Dart Sass (mesma saída que o
Koala) e o `dist/js/data.js` e o `dist/css/custom.css` foram regenerados no
formato do servidor a partir de `dist/_telas` e do `course-data.sqlite`. Ao
abrir o projeto com `yarn dev`, o servidor regera esses arquivos a partir das
mesmas fontes.
