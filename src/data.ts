/* eslint-disable quotes */
/* Arquivo gerado automaticamente. */
/* Não o atualize manualmente, pois as modificações serão perdidas na próxima vez que o arquivo for gerado. */
import { IComponent, ICourse } from 'hands-on-common';
import { Accordion, Assessment, FlipCard, Gallery, ImageMap, LockByClick, MenuItem, Modal, Question, Section, Slider, Tabs, Video } from 'hands-on-course';

export const iCourse: ICourse = {
	id: 1,
	title: `Bradesco Seguro Auto Frota: Proteção para 2 ou mais veículos`,
	code: `0624`,
	version: 3935,
	logoImagePath: `midias/interface/marca.svg`,
	language: `pt`,
	mobileBreakPoint: 640,
	preCompiledStyle: `bradesco-agro.css`,
	showSearchBar: false,
	createdAt: new Date(1632770015000),
	updatedAt: new Date(1663955448000),
};

export const components: IComponent[] = [];
const ce6c5 = new MenuItem(
	'e6c5',
	{"version":1,"required":true,"label":"Introdução","link":"#","isTitle":false},
);
components.push(ce6c5);

const c9ffe = new MenuItem(
	'9ffe',
	{"version":1,"required":true,"label":"Informações Essenciais","link":"#","isTitle":false},
);
components.push(c9ffe);

const c5805 = new Tabs(
	'5805',
	{"version":1,"required":true,"direction":"HORIZONTAL","items":[{"title":"Pessoa Física","content":"<p>Para esse tipo de Seguro, é obrigatório que todos os veículos estejam em nome do próprio Segurado. Não serão aceitos veículos com propriedade de terceiros, por exemplo, cônjuges, filhos, etc.</p>\n<p>No Questionário de Avaliação de Risco (QAR), que você verá a seguir, deverá ser selecionada a opção de propriedade: Empresas/O Próprio.</p>\n<p>Qualquer exceção deve ser tratada junto à Mesa de Negócios no momento da negociação. Informações inverídicas no preenchimento do QAR poderão ocasionar perda de direitos.</p>\n"},{"title":"Pessoa Jurídica","content":"<p>Nesses casos, os veículos podem ser de propriedade da empresa, agregados, funcionários, locados, sócios e diretores, desde que eles sejam utilizados no desempenho das atividades da empresa proponente.</p>\n<p><b>Atenção:</b> a opção “outros” do QAR deve ser utilizada quando a propriedade não se enquadrar nos critérios acima, com a condição de que os veículos sejam utilizados no desempenho das atividades da empresa proponente. Veja alguns exemplos:</p>\n<ul class=\"lista \">\n<li>Empresas do grupo que desempenham atividade para a empresa proponente;</li>\n<li>Veículos de terceiros que prestam serviço exclusivo para a empresa proponente.</li><p></p><div class=\"frame\"<i class=\"fa-solid fa-circle-exclamation\"></i> <p><b>Fique atento!</b></p><p>Não é permitida a inclusão de veículos de outras propriedades que não estejam relacionadas à atividade da empresa. Qualquer exceção deve ser tratada junto à Mesa de Negócios no momento da negociação. Informações inverídicas no preenchimento do QAR poderão ocasionar perda de direitos.</p>\n </div>"}]},
);
components.push(c5805);

const c6c73 = new Slider(
	'6c73',
	{"version":2,"required":true,"direction":"HORIZONTAL","maxHeight":400,"items":[{"content":"        <div class=\"box offset-1 l-10 tl-6 ml-12\">\n<h5><b>Exemplo 1</b></h5>\n\n<p class=\"cor-primaria-1\"><i><b>“Deseja excluir a cobertura para alguma região?”</b></i></p>\n<p>O Seguro possui como padrão cobertura para todo o território Nacional. Será facultado ao Cliente excluir a cobertura em regiões do Brasil nas quais não circule com objetivo de redução do prêmio do Seguro. Exemplo: Rio de Janeiro e/ou São Paulo, demais regiões do Sudeste, região Sul, Norte, Nordeste e/ou Centro-Oeste. Caso não deseje excluir basta selecionar a opção: <b>“Não desejo excluir”</b>. \n</p>\n<div class=\"frame-branco\"><p class=\"\"><b>Fique atento!</b><br />Se algum item da frota sofrer qualquer tipo de sinistro nas regiões excluídas, não haverá cobertura para o evento.</p></div>\n</div>"},{"content":"<div class=\"box offset-1 l-10 tl-6 ml-12\"><h5><b>Exemplo 2</b></h5>\n\n<p class=\"cor-primaria-1\"><i><b>“A frota faz parte de algum programa de gerenciamento de risco?”</b></i></p>\n<p>E a opção de resposta é sim ou não. Uma frota que possui controles de prevenção tende a ficar menos exposta ao risco, o que pode ser um elemento favorável à precificação do Seguro. Em caso afirmativo o proponente deverá detalhar da seguinte forma:</p>\n<p class=\"cor-primaria-1\"><b><i>“Assinale as medidas utilizadas para prevenção e gerenciamento de risco.”</i></b></p>\n<p>E as opções de resposta serão: </p>\n<ul class=\"lista\">\n<li>Consulta a cadastro de Motorista. </li>\n<li>Escolta armada. </li>\n<li>Monitoramento/Rastreamento por Satélite. </li>\n<li>Rotograma. </li>\n<li>Uso de iscas eletrônicas. </li>\n<li>Certificação de Motorista Profissional. </li>\n</ul>\n<div class=\"d-flex-v-middle t-flex-v-middle frame-branco\"><img class=\"l-2 tl-2 ml-12 no-padding\" src=\"./midias/imagens/aureo_bola.png\"><p class=\"l-10 tl-10 ml-12\">Caso a opção Monitoramento/Rastreamento por Satélite seja selecionada, pelo menos um dos itens da frota deverá possuir dispositivo antifurto.</p></div>\n</div>"},{"content":"<div class=\"box offset-1 l-10 tl-6 ml-12\"><h5><b>Exemplo 3</b></h5>\n<p class=\"cor-primaria-1\"><i><b>“Em caso de viagem, onde o veículo pernoita com mais frequência?”</b></i></p><p>As opções de resposta serão:</p>\n<ul class=\"lista\">\n<li>Posto de atendimento autorizado. </li>\n<li>Posto de gasolina ou rodoviário. </li>\n<li>Estacionamento fechado. </li>\n<li>Não viaja.</li>\n</ul>\n</div>"},{"content":"<div class=\"box offset-1 l-10 tl-6 ml-12\"><h5><b>Exemplo 4</b></h5>\n<p class=\"cor-primaria-1\"><i><b>“Qual a propriedade dos veículos?”</b></i></p><ul class=\"lista\">\n<li>Agregados.</li>\n<li>Empresa/O Próprio.</li>\n<li>Funcionários.</li>\n<li>Locados.</li>\n<li>Sócios.</li>\n<li>Outros.</li>\n</ul>\n</div>"},{"content":"<div class=\"box offset-1 l-10 tl-6 ml-12\"><h5><b>Exemplo 5</b></h5>\n<p class=\"cor-primaria-1\"><i><b>Informações a respeito da carga transportada.</b></i></p>\n\n       <div class=\"box l-12 tl-12 ml-12\">\n\n          <img class=\"\" src=\"./midias/imagens/tela_12_img01.png\" alt=\"\">\n\n        </div>\n</div>"}]},
);
components.push(c6c73);

const cdef3 = new MenuItem(
	'def3',
	{"version":1,"required":true,"label":"Coberturas Básicas","link":"#","isTitle":false},
);
components.push(cdef3);

const ca969 = new Accordion(
	'a969',
	{"version":2,"required":true,"clickableArea":"WHOLE_ITEM","symbol":"FIXO","items":[{"title":"Compreensiva: colisão, incêndio e roubo (cláusula nº 1)","content":"<p>A cobertura compreensiva é a mais completa e recomendada para todas as cotações. Ela oferece indenização para os prejuízos decorrentes de <b>danos materiais</b> ou <b>perda do veículo</b>. Os principais incidentes cobertos são:</p>\n<ul class=\"lista\">\n<li><b>Acidentes de trânsito</b>, colisão, choque, abalroamento, capotagem, tombamento, derrapagem ou queda acidental em precipícios, pontes ou viadutos.</li>\n<li><b>Atos danosos praticados por terceiros</b>, exceto os danos causados exclusivamente à pintura, que são entendidos como atos isolados e esporádicos.</li>\n<li><b>Queda acidental</b> de qualquer objeto externo <b>sobre o veículo</b>, que não seja parte integrante deste ou não esteja nele fixado; Queda, deslizamento ou vazamento de carga transportada, desde que decorrente de riscos cobertos.</li>\n<li><b>Fenômenos naturais</b>, como vendaval, granizo, furacão, terremoto e raios.</li>\n<li><b>Incêndio ou explosão</b>.</li>\n<li><b>Roubo ou furto parcial ou total do veículo.</b></li>\n</ul>\n"},{"title":"Incêndio e roubo (cláusula nº 2)","content":"<p>A cobertura de incêndio e roubo é uma cobertura mais limitada. Ela tem como objetivo indenizar o Segurado por prejuízos decorrentes de danos materiais ou perda do veículo. Os principais incidentes cobertos são:</p>\n<ul class=\"lista\">\n<li>Danos causados ao veículo do Segurado por <b>incêndio, explosão, raio</b> e suas consequências.</li>\n<li><b>Roubo</b> total ou <b>furto</b> total do veículo Segurado, assim como danos causados ao veículo durante o período em que perdurou o roubo ou furto (nesse caso, o Segurado participará com a franquia).</li>\n</ul>\n<p class=\"frame\"><b>Fique atento!</b><br />Haverá prestação de serviços de socorro e salvamento sempre que a necessidade for decorrente de um dos riscos cobertos.</p>"},{"title":"Danos Materiais e/ou Danos Corporais a Terceiros – RCF (cláusula nº 93)","content":"<p><b>Responsabilidade Civil Facultativa – RCF</b></p> \n<p>O Seguro de Responsabilidade Civil de Veículo (RCF-V) garante o reembolso das indenizações que o Segurado for obrigado a pagar por danos materiais e/ou danos corporais causados involuntariamente a terceiros. </p>\n<ul class=\"lista\">\n<li><b>Garantia de Danos Materiais (DM):</b> é o dano causado exclusivamente à propriedade material da pessoa, bens móveis ou imóveis e coisas.</li>\n<li><b>Garantia de Danos Corporais (DC):</b> é um tipo de dano caracterizado por lesões físicas no corpo da pessoa, excluindo-se dessa definição os danos estéticos.</li>\n</ul>\n"},{"title":"Cobertura de Seguro em Garantia Única – RCF-V-GU (cláusula nº 58)","content":"<p>A cobertura de Seguro em Garantia Única garante o reembolso das indenizações que o Segurado for obrigado a pagar tanto por danos materiais quanto por danos corporais.</p>\n<p>Por exemplo: o Segurado contrata R$ 1 milhão da GU (danos materiais e corporais) para cada item da frota. Na ocasião de um sinistro, o acidente envolveu um custo de R$ 300 mil reais com o carro de um terceiro e R$ 500 mil com danos corporais. A soma da indenização totalizou R$ 800 mil e ainda sobrariam R$ 200 mil da GU para futura utilização dentro da vigência.</p>\n<p class=\"frame\"><b>Fique atento!</b><br />A cobertura de GU nunca é destinada para todos os itens da frota e sim para cada item em particular.</p>\n"}]},
);
components.push(ca969);

const cb1be = new MenuItem(
	'b1be',
	{"version":1,"required":true,"label":"Coberturas Acessórias","link":"#","isTitle":false},
);
components.push(cb1be);

const cfa2a = new Accordion(
	'fa2a',
	{"version":2,"required":true,"clickableArea":"WHOLE_ITEM","symbol":"FIXO","items":[{"title":"Cláusula Nº 98 (Reparo de Vidros – veículos de passeio)","content":"<p>O Reparo de Vidros (cl. 98) garante a prestação dos serviços de reparo do vidro em caso de sinistro no para-brisa. Seguindo critérios técnicos, profissionais especializados efetuarão a análise para apurar se o vidro poderá ser reparado.</p>\n<div class=\"frame\"><p><b>Fique atento!</b><br />Não há franquia para serviço de reparo.</p>\n<p>Fique atento também a algumas condições desse serviço:</p>\n<ul class=\"lista\">\n<li><b>Trincas:</b> rachadura que divide ao meio, no sentido longitudinal, a quebra no para-brisa, sendo menor que 10 cm.</li>\n<li><b>Pontos de quebra:</b> local onde houve impacto, produzindo uma fissura de forma arredondada, que pode ou não ter prolongamentos do tipo rachaduras, com diâmetro inferior a 4 cm.</li></ul></div>"},{"title":"Cláusula Nº 25 (Vidro Protegido - veículos de passeio) ","content":"<p>Este serviço garante, em todo o território nacional, a prestação dos serviços de troca dos vidros ou reparo do para-brisa. As despesas relativas à troca de todos os vidros estão sujeitas à franquia, conforme estipulada na apólice, exceto no caso em que for constatada apenas a necessidade de reparo do para-brisa.</p>"},{"title":"Cláusula Nº 24 (Vidro Protegido Plus – veículos de passeio) ","content":"<p>O Vidro Protegido Plus (cl. 24) é a cobertura mais completa, abrangendo, além de para-brisa, os faróis, lanternas e retrovisores. Essa cobertura conta com:</p>\n<ul class=\"lista\">\n<li><b>Reparo do para-brisa</b>, quando tecnicamente possível, e troca dos vidros.</li>\n<li><b>Aplicação da película protetora</b>, exceto no para-brisa e nos vidros trocados que apresentarem originalmente a película protetora.</li>\n<li><b>Substituição de faróis e pisca-pisca</b> dianteiros e lanternas traseiras.</li>\n<li><b>Reposição das lentes</b> (antioxidante e antiestilhaçante) dos retrovisores externos, além da troca ou reparo dessas peças, seus suportes internos e carenagem (carcaça).</li>\n</ul>\n<p>As despesas relativas à troca de todos os vidros, faróis, lanternas traseiras, pisca-pisca e retrovisores estão sujeitas à franquia, conforme estipulada na apólice, exceto no caso em que for constatada apenas a necessidade de reparo do para-brisa.</p>\n"},{"title":"Cláusula Nº 83 (Vidro Protegido - carga)","content":"<p>O Vidro Protegido Carga (cl. 83) tem por objetivo garantir, em todo o território nacional, a prestação dos serviços de troca dos vidros ou reparo do para-brisa, quando tecnicamente possível, em caso de quebra ou trinca do vidro.</p>"}]},
);
components.push(cfa2a);

const c8523 = new MenuItem(
	'8523',
	{"version":1,"required":true,"label":"Bônus em Frota","link":"#","isTitle":false},
);
components.push(c8523);

const c6121 = new MenuItem(
	'6121',
	{"version":1,"required":true,"label":"Diferenciais do Bradesco Seguro Auto Frota","link":"#","isTitle":false},
);
components.push(c6121);

const c5196 = new Tabs(
	'5196',
	{"version":1,"required":true,"direction":"HORIZONTAL","items":[{"title":1,"content":"<p>Serviço para o caso de defeito de origem mecânica ou elétrica, que impeça a locomoção do veículo, o mesmo será rebocado até oficina mais próxima para reparo ou local Seguro para sua guarda, limitado em até 200 km. Neste caso, correrão por conta do Segurado as despesas com conserto do veículo e reposição de peças. </p>"},{"title":2,"content":"<p>Desde que previamente aprovado pelo Segurado, será providenciado o envio de socorro mecânico para que o veículo seja reparado, se tecnicamente possível, e desde que haja recursos no local, responsabilizando-se a Empresa de Assistência Dia e Noite apenas pelo custo da mão de obra. </p>"},{"title":3,"content":"<p>A responsabilidade da Empresa de Assistência Dia e Noite fica limitada à prestação de apenas um serviço de reboque, por pane mecânica ou elétrica, para oficina mais próxima até 200 km do local do evento, limitado em até dois eventos durante a vigência da apólice.</p>"}]},
);
components.push(c5196);

const ce24a = new MenuItem(
	'e24a',
	{"version":1,"required":true,"label":"Direcionamento e Dicas de Negociação","link":"#","isTitle":false},
);
components.push(ce24a);

const c4580 = new MenuItem(
	'4580',
	{"version":1,"required":true,"label":"Conclusão","link":"#","isTitle":false},
);
components.push(c4580);

export const sections: Section[] = [];
sections.push(
	new Section(
		'header',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_01',
		false,
		false,
		[ce6c5],
	),
);
sections.push(
	new Section(
		'tela_02',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_03',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_04',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_05',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_06',
		false,
		false,
		[c9ffe],
	),
);
sections.push(
	new Section(
		'tela_07',
		true,
		false,
		[c5805],
	),
);
sections.push(
	new Section(
		'tela_08',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_09',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_10',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_11',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_12',
		true,
		false,
		[c6c73],
	),
);
sections.push(
	new Section(
		'tela_13',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_14',
		false,
		false,
		[cdef3],
	),
);
sections.push(
	new Section(
		'tela_15',
		true,
		false,
		[ca969],
	),
);
sections.push(
	new Section(
		'tela_16',
		false,
		false,
		[cb1be],
	),
);
sections.push(
	new Section(
		'tela_17',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_18',
		true,
		false,
		[cfa2a],
	),
);
sections.push(
	new Section(
		'tela_19',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_20',
		false,
		false,
		[c8523],
	),
);
sections.push(
	new Section(
		'tela_21',
		false,
		false,
		[c6121],
	),
);
sections.push(
	new Section(
		'tela_22',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_23',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_24',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_25',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_26',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_27',
		true,
		false,
		[c5196],
	),
);
sections.push(
	new Section(
		'tela_28',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_29',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_30',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_31',
		false,
		false,
		[ce24a],
	),
);
sections.push(
	new Section(
		'tela_32',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_33',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_34',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_35',
		false,
		false,
		[],
	),
);
sections.push(
	new Section(
		'tela_36',
		false,
		false,
		[c4580],
	),
);
sections.push(
	new Section(
		'tela_37',
		false,
		true,
		[],
	),
);
