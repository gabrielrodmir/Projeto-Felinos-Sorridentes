import { carregarCadastro, salvarCadastro } from './storage.js';

function configurarValidacao(form) {
	form.setAttribute('novalidate', 'novalidate');

	form.querySelectorAll('input').forEach((input) => {
		const message = document.createElement('small');
		message.className = 'field-message';
		message.setAttribute('aria-live', 'polite');
		input.insertAdjacentElement('afterend', message);

		const setMessage = () => {
			const isEmpty = input.value.trim() === '';

			if (isEmpty) {
				input.classList.remove('is-valid', 'is-invalid');
				message.textContent = '';
				message.classList.remove('success', 'error');
				return;
			}

			if (input.validity.valid) {
				input.classList.add('is-valid');
				input.classList.remove('is-invalid');
				message.textContent = 'Campo preenchido corretamente.';
				message.classList.add('success');
				message.classList.remove('error');
			} else {
				input.classList.add('is-invalid');
				input.classList.remove('is-valid');
				message.textContent = 'Campo inválido. Verifique as informações.';
				message.classList.remove('success');
				message.classList.add('error');
			}
		};

		input.addEventListener('input', setMessage);
		input.addEventListener('blur', setMessage);
		input.addEventListener('invalid', (event) => {
			event.preventDefault();
			setMessage();
		});

		setMessage();
	});
}

export function configurarFormulario() {
	const form = document.querySelector('form');
	if (!form || form.dataset.configurado === 'true') return;

	form.dataset.configurado = 'true';

	if (window.IMask) {
		IMask(form.elements.namedItem('cpf'), { mask: '000.000.000-00' });
		IMask(form.elements.namedItem('tel'), { mask: '(00) 00000-0000' });
		IMask(form.elements.namedItem('cep'), { mask: '00000-000' });
	} else {
		console.warn('IMask.js não foi carregado.');
	}

	configurarValidacao(form);

	const cadastro = carregarCadastro();
	if (cadastro) {
		Object.entries(cadastro).forEach(([campo, valor]) => {
			const input = form.elements.namedItem(campo);
			if (input) input.value = valor;
		});
		console.log('Somente os dados básicos foram carregados:', cadastro);
	} else {
		console.log('Nenhum cadastro salvo no localStorage.');
	}

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		if (!form.checkValidity()) {
			form.querySelectorAll('input').forEach((input) => {
				input.dispatchEvent(new Event('blur'));
			});
			console.warn('Cadastro não salvo: existem campos inválidos ou vazios.');
			return;
		}

		const dadosCadastro = salvarCadastro(form);
		console.log('Somente os dados básicos foram salvos:', dadosCadastro);

		const toast = document.querySelector('#form-toast');
		if (toast) {
			toast.hidden = false;
			window.setTimeout(() => {
				toast.hidden = true;
			}, 3500);
		}
	});
}
