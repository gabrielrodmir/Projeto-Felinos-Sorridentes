import { gerarCardsGatos } from './modules.js/gatos.js';
import { configurarFormulario } from './modules.js/formHandler.js';
import { apagarCadastro } from './modules.js/storage.js';
import { criarRotas, normalizarRota } from './modules.js/router.js';

const themeToggle = document.querySelector('#theme-toggle');
const STORAGE_KEY_TEMA = 'temaEscolhido';

if (themeToggle) {
  function aplicarTema(tema) {
    const temaAtual = tema === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', temaAtual);
    themeToggle.setAttribute('aria-pressed', temaAtual === 'dark' ? 'true' : 'false');
    themeToggle.textContent = temaAtual === 'dark' ? '☀️ Modo claro' : '🌙 Modo escuro';
  }

  aplicarTema(localStorage.getItem(STORAGE_KEY_TEMA) || 'light');

  themeToggle.addEventListener('click', () => {
    const novoTema = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY_TEMA, novoTema);
    aplicarTema(novoTema);
  });
}

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