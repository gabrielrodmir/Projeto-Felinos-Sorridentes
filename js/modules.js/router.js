export function criarRotas(initialContent, gerarCardsGatos) {
	return {
		'#/index': initialContent,
		'#/projetos': '',
		'#/castracao': `
			<h2 class="col-12">Castração responsável</h2>
			<p class="col-12">A castração é uma medida importante para prevenir ninhadas não planejadas e promover o bem-estar dos gatos. A decisão e o momento do procedimento devem ser avaliados por um médico-veterinário, considerando a saúde e as necessidades de cada animal.</p>
			<section class="col-12">
				<h3>Por que a castração é importante?</h3>
				<ul>
					<li>Ajuda a evitar gestações não planejadas e contribui para reduzir o abandono.</li>
					<li>Pode diminuir o risco de alguns problemas de saúde reprodutiva; os benefícios variam conforme cada gato.</li>
					<li>Faz parte de um cuidado responsável, junto com vacinação, identificação e acompanhamento veterinário.</li>
				</ul>
			</section>
			<section class="col-12">
				<h3>Como funciona o cuidado?</h3>
				<ol>
					<li><strong>Avaliação:</strong> o veterinário examina o gato e orienta sobre preparo e momento adequado.</li>
					<li><strong>Procedimento:</strong> a cirurgia é realizada por profissional habilitado, com anestesia e acompanhamento.</li>
					<li><strong>Recuperação:</strong> siga as orientações recebidas, mantenha o animal em local tranquilo e procure a clínica se notar algo preocupante.</li>
				</ol>
			</section>
			<section class="col-12">
				<h3>Gatos comunitários</h3>
				<p>O cuidado com gatos que vivem nas ruas ou em colônias deve ser organizado com apoio de profissionais e iniciativas locais de proteção animal. O transporte, a recuperação e o retorno ao local precisam considerar a segurança e a saúde de cada gato.</p>
				<p><strong>Importante:</strong> não medique nem tente realizar cuidados clínicos por conta própria. Procure orientação veterinária para tomar decisões seguras.</p>
			</section>
		`,
		'#/adocao': `
			<h2 class="col-12">Quero Adotar</h2>
			<p class="col-12">Adotar é um ato de amor! Confira o submenu Feira de Adoção para ver nossos gatinhos.</p>
		`,
		'#/feira': `
			<h2 class="col-12" style="margin-bottom: 0;">Feira de Adoção</h2>
			<p class="col-12" style="grid-column: 1 / -1; margin-top: 8px; margin-bottom: 16px;">Estes são os gatinhos disponíveis na nossa feira esta semana:</p>
			<div class="grid-gatos" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; width: 100%; grid-column: 1 / -1;">
				${gerarCardsGatos()}
			</div>
		`,
		'#/sobrenos': `
			<h2 class="col-12">Sobre Nós</h2>
			<p class="col-12">A Felinos Sorridentes é uma organização sem fins lucrativos dedicada ao resgate, à reabilitação, à castração e à adoção de gatos abandonados.</p>
			<section class="col-12">
				<h3>Nossa missão</h3>
				<p>Promover mais bem-estar para os gatos e apoiar uma convivência responsável entre os animais e a comunidade.</p>
			</section>
			<section class="col-12">
				<h3>Como atuamos</h3>
				<p>Nosso trabalho reúne ações de resgate e cuidado, incentivo à castração e vacinação de gatos comunitários, além de iniciativas para aproximar gatos reabilitados de novas famílias.</p>
			</section>
			<section class="col-12">
				<h3>Adoção responsável</h3>
				<p>Realizamos feiras e campanhas para conectar gatos reabilitados e vacinados a pessoas interessadas em oferecer um lar. A adoção é um compromisso com o cuidado e a segurança do animal.</p>
			</section>
		`,
		'#/contato': `
			<h2 class="col-12">Contato</h2>
			<p class="col-12">Tem dúvidas sobre nossos projetos, adoção ou voluntariado? Entre em contato pelos canais abaixo.</p>
			<section class="col-12">
				<h3>Fale com a gente</h3>
				<address>
					<p><strong>E-mail:</strong> <a href="mailto:contato@felinossorridentes.org">contato@felinossorridentes.org</a></p>
					<p><strong>Telefone:</strong> <a href="tel:+551117051705">(11) 1705-1705</a></p>
				</address>
			</section>
		`
	};
}

export function normalizarRota() {
	const hash = window.location.hash || '#/index';
	return hash.startsWith('#') ? hash : `#${hash}`;
}
