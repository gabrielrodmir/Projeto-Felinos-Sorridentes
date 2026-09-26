# Felinos Sorridentes

## Sobre o Projeto
Site institucional da ONG Felinos Sorridentes, com cadastro de voluntários e feira de adoção. Tecnologias: HTML5, CSS3, JavaScript (ES Modules).

## Tecnologias Utilizadas
HTML5 semântico, CSS3 (variáveis, grid responsivo), JavaScript puro com módulos ES (roteamento via hash, localStorage) e a biblioteca IMask.js para máscaras de input.

## Pré-requisitos
Navegador atualizado (Chrome, Firefox ou Edge) e Git instalado para clonar o repositório. Não há dependências de build ou gerenciador de pacotes.

## Instalação
1. Clone o repositório:

git clone https://github.com/gabrielrodmir/Projeto-Felinos-Sorridentes.git

2. Acesse a pasta do projeto.
3. Abra o arquivo `html/felinos.html` diretamente no navegador.

## Estrutura de Pastas
- `assets/img`: imagens dos gatos
- `css`: estilos globais
- `html`: páginas do site
- `js`: `main.js` e módulos (`formHandler`, `gatos`, `router`, `storage`) em `js/modules.js`

## Versionamento
Este projeto segue a estratégia **GitFlow**:
- `main`: versões estáveis
- `develop`: desenvolvimento contínuo
- `feature/`: funcionalidades isoladas (ex: `feature/cadastro-gatos`)

As mensagens de commit seguem o padrão **Conventional Commits** (`feat:`, `fix:`), e as entregas relevantes são marcadas com tags de versionamento semântico (ex: `v1.0.0`).