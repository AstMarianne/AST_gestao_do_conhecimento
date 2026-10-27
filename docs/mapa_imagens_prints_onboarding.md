# Mapa de imagens e prints do onboarding

Este guia indica onde cada captura entra no roteiro. Os códigos são de produção e não aparecem na OP final. A prioridade é mostrar o processo real: não precisamos criar ilustrações genéricas para os tutoriais de software.

## O que capturar primeiro

1. **OP09 e OP10 — Koala:** são os prints novos mais importantes, pois essa etapa não aparece no PDF de setup. Mostrar a pasta do projeto, o SCSS de entrada, o CSS de saída e a configuração de compilação efetivamente usada.
2. **OP14 — Compilação em funcionamento:** SCSS salvo, sucesso no Koala e CSS atualizado. Preferir uma sequência curta de imagens ou gravação de tela.
3. **OP03 e OP04 — Curso modelo:** repositório com o menu Code aberto e a biblioteca de interações funcionando.
4. **OP06, OP08 e OP19 — Comandos:** primeira abertura, reabertura e geração do pacote, cada uma identificada pela sua finalidade. Há referências no PDF que podem ser reutilizadas se estiverem atuais e legíveis.
5. **OP12, OP16 e OP17 — Editor e componente:** mostrar a relação entre tela, engrenagem, painel de edição e resultado no curso.

## Fluxo de criação da OP

| Código | Onde entra | O que mostrar | Origem ou pendência |
|---|---|---|---|
| OP01 | Passo 1 Preparar a máquina | Visão das ferramentas do fluxo: VS Code, terminal, Koala e navegador. Pode ser um esquema simples com nomes e ícones aprovados. | Novo; não exige print de instaladores. |
| OP02 | Passo 1 Preparar a máquina | Configuração de acesso ao GitHub e identificação do Git. Mostrar a finalidade dos campos, sem expor chaves ou credenciais. | PDF páginas 2 a 5 como referência; atualizar apenas o que precisar. |
| OP03 | Passo 2 Curso modelo | Página hands-on-curso-modelo, menu Code aberto, opções de clonagem e download ZIP. | Novo print. Link: https://github.com/asteriscoeducacao/hands-on-curso-modelo |
| OP04 | Passo 2 Curso modelo | Biblioteca funcionando, com exemplos de abas, acordeão, slider, flipcard, vídeo e questão. | Novo print ou sequência com exemplos reais. Não precisa responder à questão. |
| OP05 | Passo 3 Repositório | Comando git clone e pasta do curso aberta no VS Code. Destacar a raiz do curso, diferenciando da pasta que reúne vários projetos. | Referência no PDF páginas 6 a 9. |
| OP06 | Passo 4 Primeira abertura | Terminal na raiz do curso, yarn dev e inicialização concluída. | Referência no PDF páginas 9 e 10. |
| OP07 | Passo 4 Primeira abertura | Interface Hands-on aberta depois do comando. | Referência no PDF página 10. |
| OP08 | Passo 5 Reabertura | Terminal com o comando de reabertura e legenda distinguindo as três finalidades. O PDF indica yarn hands-on-server para reabrir. | Referências no PDF páginas 10 e 14; confirmar a menção de Marianne a hands on build. |
| OP09 | Passo 6 Koala | Koala aberto, pasta de estilos do projeto correto e SCSS selecionado. | **Novo print necessário.** |
| OP10 | Passo 6 Koala | Configuração real: entrada SCSS, saída CSS, modo de compilação e resultado. Capturar controles e opções legíveis. | **Novo print necessário.** Não há essa etapa no PDF. |
| OP11 | Passo 7 Estrutura da OP | Explorador do VS Code mostrando dist/_telas, dist/css e dist/midias, um HTML e os estilos correspondentes. | Novo print do projeto escolhido. |
| OP12 | Passo 8 Editar telas | Interface Hands-on, botão Editar curso e identificação da seção no curso. | Referência no PDF página 11. |
| OP13 | Passo 8 Editar telas | HTML no VS Code e o mesmo título/conteúdo no navegador. Fazer duas capturas legíveis, em vez de reduzir toda a tela a uma miniatura. | Novo print, após escolher uma tela de demonstração. |
| OP14 | Passo 9 Estilos | SCSS alterado e salvo, compilação bem-sucedida no Koala e CSS de destino atualizado. | **Novo print ou gravação necessária.** |
| OP15 | Passo 9 Estilos | Resultado antes/depois no desktop e no mobile. Mesma tela e mesmo conteúdo para permitir comparação. | Novo print. |
| OP16 | Passo 10 Componentes | Componente no curso e engrenagem que abre sua edição. | Referência no PDF página 12; atualizar se necessário. |
| OP17 | Passo 10 Componentes | Painel do acordeão e resultado preenchido. Um segundo componente mostra que os campos variam conforme o recurso. | Referência no PDF páginas 12 e 13 + exemplo da biblioteca. |
| OP18 | Passo 11 Salvar e sincronizar | Controle de versão, arquivos alterados, comentário de commit e resultado da sincronização. | Referência no PDF páginas 13 e 14. |
| OP19 | Passo 12 Gerar pacote | Ctrl+C no terminal, yarn hands-on-build-dist e conclusão da geração. | Referência no PDF página 15. |
| OP20 | Passo 12 Gerar pacote | ZIP gerado na raiz e sua identificação para homologação. Não mostrar apenas a mensagem do terminal. | Referência no PDF página 15; complementar com o arquivo real. |

## OP com Claude

| Código | Onde entra | O que mostrar | Origem ou pendência |
|---|---|---|---|
| CL01 | Como fazer uma OP com apoio do Claude | Projeto correto aberto, roteiro e referência disponibilizados. | Novo print do ambiente que a equipe utiliza. |
| CL02 | Pedido e aplicação | Exemplo de pedido com escopo claro e os arquivos alterados. | Novo print; usar uma demanda de demonstração. |
| CL03 | Conferência do resultado | Curso no navegador e compilação conferida no Koala quando o Claude alterar SCSS. | Novo print; não basta mostrar a resposta do chat. |

## Demais pontos da OP

As imagens abaixo apoiam a consulta. Não precisam virar uma nova captura quando o material já recebido ou uma demonstração anterior atender ao mesmo objetivo.

| Código | Onde entra | Imagem ou recurso previsto | Situação |
|---|---|---|---|
| G01 | Institucional | Logo oficial e links de canais. | Usar asset aprovado; não precisa de novo print do cartão Institucional. |
| G02 | Formatos de peças | Miniatura de uma OP, Storyline, animação, flipbook e podcast aprovados. | Selecionar exemplos internos; apresentar identificação e botão de consulta. |
| G03 | Sistemas | Capturas da ação principal no Harvest, programação no Forecast, canais no Slack, pastas DNA/PA no Drive e registro no Fortime. | Podem ser imagens ou pequenos trechos de tela por ferramenta; não capturar informações pessoais de ponto ou produtividade. |
| G04 | Padrões de e-mail | Configuração de assinatura, assinatura correta e configuração de ausência. | Precisamos dos modelos vigentes. Prints devem acompanhar o passo correspondente. |
| G05 | Projetos | Fluxo visual das etapas e dos responsáveis. | Base nos slides 1 e 2 da integração; não criar responsáveis sem confirmar o fluxo. |
| G06 | Acessos e sincronização | Caminho de solicitação e exemplo de arquivo sincronizado no local compartilhado. | Capturar a operação, sem exibir senhas. Se o texto e o link resolverem, dispensar imagem decorativa. |
| G07 | Organização, nomes e limpeza DG | Árvore de pastas e exemplos de nomenclatura. Checklist de limpeza em texto. | **Árvore e cartão de nomenclatura já recebidos.** Reutilizar a árvore; converter as regras em conteúdo, sem usar o print inteiro do Trello como tutorial. |
| G08 | Fechamento, ID e fontes | Campos de título/ID e exemplo do pacote de fontes. | Publicação reaproveita OP19/OP20. Falta exemplo dos campos de ID e fluxo de fontes. |
| G09 | Otimização e flipbook | Antes/depois da exportação de imagem e configuração/resultado do flipbook. | Depende dos cartões T10/T11 e da definição do software. |
| G10 | Homologação | Desktop/mobile da mesma OP e registro dos itens verificados. | Reaproveitar OP15 quando adequado; o checklist pode ser texto. |
| G11 | Vídeo interativo | Ponto de decisão e caminhos; exemplo na OP e exemplo em pacote separado. | Falta consultar os dois documentos vinculados de Camtasia. |
| G12 | Storyboard e vídeo com IA | Template preenchido, referência canônica e exemplo de continuidade entre cenas. | Template do Storyboarder já disponível. Selecionar roteiro e imagens aprovadas para demonstrar. Não gerar novas imagens só para preencher o tutorial. |
| G13 | Locuções | Interface da ferramenta, configuração de voz, geração/escuta e pasta de áudios. | Definir exemplo e atualizar a interface apresentada; software padrão permanece pendente. |
| G14 | iOS | Comparação do background e dos bullets no iPhone, com detalhe do código corrigido. | Cartões recebidos. Capturar comportamento real; evitar apenas print de código sem resultado. |
| G15 | Acessibilidade | Configuração de imagemap; PDF com ordem de leitura/estrutura; vídeo com template de Libras e legenda. | Faltam T16/T17 e arquivos externos. PDF recebido exige revisão técnica do fluxo; não usar aparência visual como comprovação. |
| G16 | Catálogo e marketing DG | Header de catálogo aprovado, seções desbloqueadas, checklist e templates de peças. | Cartão de catálogo recebido; planilha completa e marketing ainda pendentes. |
| G17 | DI Processos | Pasta _DI, mapa/roteiro e exemplo de consideração interna em slide. | Referência no curso de DI; usar documentos fictícios ou autorizados para demonstrar. |
| G18 | DI Catálogo e Marketing | Formulário/ementa, revisão e modelo de pauta/postagem. | Curso de DI cobre parte do fluxo; processo de marketing ainda será definido. |

## Onde não precisamos de imagem nova

- Boas-vindas, objetivos e encerramento: texto bem organizado é suficiente.
- Glossário: termos expansíveis, sem ilustração por sigla.
- Lista de softwares: preencher os campos definidos pela equipe; não precisa de print de cada instalação.
- Checklists de revisão, limpeza e primeira demanda: texto legível, sem exigir que a pessoa responda ou conclua uma atividade.
- Links de tutoriais e arquivos externos: botão com nome descritivo; incluir imagem apenas se ela ajudar a entender o recurso.

## Como enviar as capturas

- Se possível, nomear com o código, como OP09_koala_pasta.png e OP10_koala_configuracao.png.
- Mostrar o estado necessário à etapa e manter os textos legíveis.
- Em uma sequência, identificar a ordem, por exemplo OP14_01, OP14_02 e OP14_03.
- Não precisamos do desktop inteiro se o recorte da janela já explicar a ação.
- Para os links vinculados, enviar os endereços copiados além das imagens; os botões dependem do endereço exato.
