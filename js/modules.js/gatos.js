export const listaGatos = [
	{
		nome: 'Ilya e Shane',
		badge: 'Adoção Responsável',
		descricao: 'Dois filhotes resgatados procurando um novo lar.',
		imagemPng: '../assets/img/ilya-e-shane.jpg',
		imagemWebp: '../assets/img/ilya-e-shane.webp'
	},
	{
		nome: 'Frajolinha',
		badge: 'Reabilitado',
		descricao: 'Gatinho carinhoso, castrado e pronto para a sua nova família.',
		imagemPng: '../assets/img/frajolinha.jpeg',
		imagemWebp: '../assets/img/frajolinha.webp'
	}
];

export function gerarCardsGatos() {
	return listaGatos.map((gato) => `
		<article class="card-gato col-4">
			<h4>${gato.nome}</h4>
			<span class="badge badge-sucesso">${gato.badge}</span>
			<picture>
				<source srcset="${gato.imagemWebp}" type="image/webp">
				<img src="${gato.imagemPng}" alt="${gato.nome}" class="imagem-png">
			</picture>
			<p>${gato.descricao}</p>
			<button type="button" class="btn-adotar">Quero Adotar</button>
		</article>
	`).join('');
}
