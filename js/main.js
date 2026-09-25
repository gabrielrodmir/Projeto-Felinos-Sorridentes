import { gerarCardsGatos } from './modules.js/gatos.js';
import { configurarFormulario } from './modules.js/formHandler.js';
import { apagarCadastro } from './modules.js/storage.js';
import { criarRotas, normalizarRota } from './modules.js/router.js';

const initialContent = document.querySelector('main.layout-grid')?.innerHTML || '';

window.apagarCadastro = () => {
  apagarCadastro();
  console.log('Cadastro apagado do localStorage.');
};

console.log('main.js carregado.');

const routes = criarRotas(initialContent, gerarCardsGatos);

function renderRoute() {
  const mainContainer = document.querySelector('main.layout-grid');
  if (!mainContainer) return;

  const route = normalizarRota();

  if (route === '#/index') {
    mainContainer.innerHTML = initialContent;
    configurarFormulario();
    return;
  }

  mainContainer.innerHTML = routes[route] ?? '';
}

document.querySelectorAll('.nav-button').forEach((link) => {
  const href = link.getAttribute('href');

  if (!href) return;

  if (href === '#') {
    link.addEventListener('click', (event) => {
      event.preventDefault();
    });
    return;
  }

  if (href.startsWith('#/')) {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.hash = href;
    });
  }
});

window.addEventListener('hashchange', renderRoute);
window.addEventListener('DOMContentLoaded', () => {
  if (!window.location.hash) {
    window.location.hash = '#/index';
  }
  renderRoute();
});