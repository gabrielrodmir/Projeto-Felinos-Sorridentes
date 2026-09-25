const STORAGE_KEY = 'cadastroVoluntario';
const CAMPOS_BASICOS = ['nome', 'email'];

export function carregarCadastro() {
	const cadastroSalvo = localStorage.getItem(STORAGE_KEY);
	if (!cadastroSalvo) return null;

	try {
		const cadastro = JSON.parse(cadastroSalvo);
		const dadosBasicos = Object.fromEntries(
			CAMPOS_BASICOS
				.filter((campo) => cadastro[campo])
				.map((campo) => [campo, cadastro[campo]])
		);

		localStorage.setItem(STORAGE_KEY, JSON.stringify(dadosBasicos));
		return dadosBasicos;
	} catch {
		localStorage.removeItem(STORAGE_KEY);
		return null;
	}
}

export function salvarCadastro(form) {
	const dadosCadastro = Object.fromEntries(
		CAMPOS_BASICOS.map((campo) => [campo, form.elements.namedItem(campo).value])
	);

	localStorage.setItem(STORAGE_KEY, JSON.stringify(dadosCadastro));
	return dadosCadastro;
}

export function apagarCadastro() {
	localStorage.removeItem(STORAGE_KEY);
}
