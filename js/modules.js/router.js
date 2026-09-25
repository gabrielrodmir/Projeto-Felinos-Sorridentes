export function criarRotas(initialContent, gerarCardsGatos) {
	return {
		'#/index': initialContent,
		'#/projetos': '',
		'#/castracao': '',
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
		'#/sobrenos': '',
		'#/contato': ''
	};
}

export function normalizarRota() {
	const hash = window.location.hash || '#/index';
	return hash.startsWith('#') ? hash : `#${hash}`;
}
