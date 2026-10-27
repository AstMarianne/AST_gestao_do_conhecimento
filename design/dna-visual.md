# DNA visual do curso — Onboarding Asterisco

Origem: `/op nova` caso B (sem módulo de referência). Identidade extraída dos
sites da empresa, indicados pela usuária em 26/10/2026:
<https://asteriscoeducacao.com.br/> e <https://www.handsoncreator.ai/pt-br>.
Capturas e logos salvos em `design/identidade/`. Hexadecimais lidos do CSS
publicado dos dois sites (não amostrados de imagem).

**Personalidade:** educação corporativa com pé em tecnologia. A Asterisco
fala com segurança e calor humano; a Hands-on é a face de produto, mais
lúdica e enérgica. O onboarding é interno: une as duas marcas, com a
Asterisco no comando.

**Atmosfera:** corporativo-acolhedor. Roxo profundo transmite solidez, o
verde elétrico e o rosa-coral trazem energia. Nada sisudo, nada infantil.

**Paleta funcional:**

| Token SCSS | Hex | Origem | Papel |
|---|---|---|---|
| `$roxo-noite` | `#2b0068` | header AST / Hands-on | fundo do header, bandas escuras, texto de título sobre claro |
| `$roxo-ast` | `#330a8d` | AST (cor mais usada) | cor primária: títulos, abas ativas, accordion, bandas de abertura |
| `$violeta` | `#6706ff` | AST (fundo de soluções) | acento vibrante: gradientes, foco, bandas de destaque |
| `$roxo-handson` | `#4900a0` | Hands-on `--dark` | variação de gradiente, textos de destaque |
| `$lilas` | `#a77cfc` | Hands-on `--secondary` | eyebrows sobre escuro, ícones secundários, bordas |
| `$lavanda` | `#f3f0ff` / `#e6e5f4` | Hands-on `--primary-soft/pale` | fundo claro das telas de conteúdo, cards |
| `$verde-ast` | `#54e377` | AST (traço, símbolo) | traço sob títulos, rótulos "tag", check, sobre fundo escuro |
| `$verde-handson` | `#58b14a` | Hands-on `--primary` | marcas/realce sobre fundo claro (nunca texto branco sobre ele: contraste 2,7:1) |
| `$rosa-cta` | `#ea3266` (site) → `#d81f57` no curso | AST (botões "Fale com a gente") | ação primária (botões). Escurecido para atingir 4,5:1 com texto branco |
| `$cinza-ast` | `#cdcdd2` / `#ebebeb` | AST (faixas cinza) | fundo neutro alternado |
| `$texto` | `#2e2a3d` | derivado de `#494949`/`#5d5f68` com leve viés roxo | corpo de texto |

**Tipografia:** os dois sites usam **Intelo** (comercial, servida pelo CDN do
Webflow) com Poppins de apoio. Substituta provisória: **Figtree** (Google
Fonts, licença OFL, embutida em `dist/css/fonts/` para funcionar offline no
SCORM). Mesma estrutura geométrica-humanista, "a" de dois andares. Trocar por
Intelo quando a equipe enviar os arquivos licenciados (pedido `FONTE-INTELO`
em `asset-requests.json`).
Hierarquia observada nos sites e aplicada: títulos grandes em peso regular a
semibold (o site AST usa títulos finos e grandes), corpo 400, ênfases 700.
Eyebrow em caixa alta, tracking largo, peso 700, tamanho pequeno.

**Logos:** Asterisco horizontal negativa (símbolo verde + "ASTERISCO" branco)
só sobre roxo. Hands-on em duas versões oficiais: fundo claro (roxo+verde) e
negativa. Nunca redesenhar. Não há versão AST positiva para fundo claro; por
isso o header é roxo-noite, como no site AST.

**Linguagem das imagens:** fotos com tratamento roxo/violeta e luz de tela
(site AST). Neste onboarding as imagens são prints reais de processo (mapa de
imagens do roteiro): recorte limpo da janela, cantos arredondados, sombra
suave, sem tratamento de cor.

**Linguagem das ilustrações:** ícones de traço (Font Awesome do projeto) em
círculos de cor sólida. Sem ilustração figurativa gerada.

**Estilo de backgrounds:** faixas de cor sólida ou gradiente roxo→violeta;
lavanda/branco para leitura longa. Sem `background-attachment: fixed` (o
próprio roteiro orienta evitar no iOS).

**Iconografia:** Font Awesome sólido, em círculo cheio (`$roxo-ast` ou
`$verde-ast`), tamanho médio.

**Formas e grafismos:** (1) **traço curto horizontal** sob o título
(48×4 px, verde sobre escuro, verde-handson ou rosa sobre claro), assinatura
do site AST; (2) **rótulo destacado** (fundo verde, texto roxo-noite, caixa
alta), como "APRENDIZAGEM DIGITAL" no site AST e o realce de palavra da
Hands-on; (3) **canto em aba arredondada** (recorte de 48 px) nas transições
entre faixas, como no site AST.

**Botões e componentes institucionais:** pílula (raio 999 px), rosa-cta com
texto branco 700 = ação primária; contorno roxo = secundária; links externos
com ícone de seta para fora. Abas/accordion em roxo-ast, ativos em violeta.

**Cabeçalho, navegação e rodapé:** header roxo-noite com logo AST negativa;
barra de progresso verde→violeta; menu lateral roxo translúcido.

**Superfícies, profundidade e sombras:** cards brancos com raio 20 px, borda
1 px lavanda escura e sombra baixa e difusa (sites usam cards brancos sobre
violeta). Nada de sombras pesadas.

**Espaçamentos, bordas:** raio 20 px (cards), 12 px (prints), 999 px
(botões/chips). Espaçamento vertical só com `padding-*-small/medium/large`.

**Densidade:** média. Um assunto por tela, texto em colunas de leitura
confortável (máx. ~70 caracteres).

**Ritmo:** cada menu abre com uma faixa roxa de abertura (número + título +
atalhos para os assuntos); telas de conteúdo alternam fundo claro/lavanda;
destaques em card com faixa lateral.

**Linguagem de movimento:** direta e curta: só `fadeInUp/Left/Right`,
`fadeIn`, `zoomIn`, sem stagger. Hover com elevação de 2–3 px.

**Linguagem das interações:** sóbria e funcional, de consulta: nada de quiz
ou trava (roteiro proíbe). Abas, accordion, slider, flipcards, palavras
interativas (modal), checklists de marcação livre e botões de link.

**Comportamento mobile:** colunas empilham; abertura de menu vira bloco
único; chips de atalho quebram em linhas; prints ocupam largura total.

**Padrões de composição:** abertura de menu em faixa escura; telas de
assunto com eyebrow (nome do menu) + título + traço; duas colunas texto/print
alternando o lado; bloco único centralizado quando não há segunda coluna.

**Nível de ousadia:** moderado. Cor forte nas aberturas, leitura limpa nas
telas de conteúdo.

**Elementos com aprovação evidente:** logos, paleta e CTA rosa (publicados
nos sites oficiais).

**Elementos incompatíveis com o projeto:** o vermelho Bradesco (`#CC092F`),
os fundos e imagens do piloto modelo e a fonte Lato herdados do projeto-base;
gradientes "neon" exagerados; ilustrações genéricas de IA no lugar de prints
de processo.

## Classificação

1. **Congelado e obrigatório:** logos (arquivos oficiais), paleta da tabela
   acima, rosa como ação primária, header roxo-noite.
2. **Reutilizável e adaptável:** traço sob título, rótulo verde, aba
   arredondada, cards brancos, ícones em círculo, gradiente roxo→violeta.
3. **Aberto à criação:** composição de cada tela, escolha de interação,
   abertura de menu, tratamento de checklists e de blocos de código.

## Decisões derivadas para a interface (referência para as telas seguintes)

- Eyebrow de tela = nome do menu (texto de navegação, não conteúdo).
- "DESTAQUE — X" do roteiro → card `destaque-ast` (faixa lateral verde,
  título X em negrito).
- "INTERAÇÃO — X" / "CHECKLIST — X" → X vira subtítulo (`h3`) do bloco.
- Comandos e códigos do roteiro → bloco `codigo-ast` (monoespaçado, fundo
  roxo-noite, texto lavanda).
- Marcador pendente do roteiro ("COLOCAR …") → chip `marcador-pendente`
  (amarelo-alerta tracejado), preservando o texto literal.
- Placeholder de print → caixa `placeholder-asset` tracejada lilás com o
  código do pedido visível.
