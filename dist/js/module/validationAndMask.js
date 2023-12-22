import { CadastroController } from "../controller/cadastroController.js";
export class ValidationAndMask {
    constructor() {
        this.dentistaAPI = new CadastroController();
    }
    cpfMask(input) {
        input.addEventListener('keypress', (event) => {
            const key = event.key;
            const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            if (!validKeys.includes(key) || (key >= 'a' && key <= 'z')) {
                event.preventDefault();
            }
            else {
                let inputCpfMask = input.value.length;
                if (inputCpfMask === 3 || inputCpfMask === 7) {
                    input.value += '.';
                }
                else if (inputCpfMask === 11) {
                    input.value += '-';
                }
            }
        });
    }
    ;
    telefoneResidencialMask(input) {
        input.addEventListener('keypress', () => {
            const applyMask = input.value.length;
            if (applyMask === 0) {
                input.value += '(';
            }
            else if (applyMask === 3) {
                input.value += ') ';
            }
            else if (applyMask === 9) {
                input.value += '-';
            }
        });
    }
    ;
    telefonecelularMask(input) {
        input.addEventListener('keypress', () => {
            let telCelMask = input.value.length;
            switch (telCelMask) {
                case 0:
                    input.value += '(';
                    break;
                case 3:
                    input.value += ') ';
                    break;
                case 4:
                    input.value += ' ';
                    break;
                case 6:
                    input.value += ' ';
                    break;
                case 11: input.value += '-';
            }
        });
    }
    ;
    bloquearLetrasECaracteres(input) {
        input.addEventListener('keypress', (event) => {
            const key = event.key;
            if (!/^\d$/.test(key) || key === '¨' || key === '*') {
                event.preventDefault();
            }
        });
    }
    ;
    bloquearNumerosECaracteres(input) {
        input.addEventListener('keydown', (event) => {
            const key = event.key;
            if (!/[a-zA-ZÀ-ÖØ-öø-ÿĀ-žŁ-őŒ-œƒ ]/.test(key)) {
                event.preventDefault();
            }
        });
    }
    nomeValidation(input) {
        input.addEventListener('focusout', () => {
            if (input.value.length < 4) {
                input.style.borderColor = '#fb8b77';
                console.log('nome incorreto');
            }
            else {
                input.style.borderColor = '#61a19352';
                console.log('nome correto');
            }
        });
    }
    ;
    characterLowerCase(input) {
        input.addEventListener('focusout', () => {
            const inputValue = input.value;
            let transformedValue = '';
            let capitalizeNext = true;
            let capitalizeAfterComma = false;
            for (let i = 0; i < inputValue.length; i++) {
                const currentChar = inputValue.charAt(i);
                if (capitalizeNext && currentChar !== ' ') {
                    transformedValue += currentChar.toUpperCase();
                    capitalizeNext = false;
                }
                else {
                    transformedValue += currentChar;
                }
                if (currentChar === ' ') {
                    capitalizeNext = true;
                }
                if (currentChar === ',') {
                    capitalizeAfterComma = true;
                }
                if (capitalizeAfterComma && currentChar !== ',' && currentChar !== ' ') {
                    transformedValue += currentChar.toUpperCase();
                    capitalizeAfterComma = false;
                }
            }
            input.value = transformedValue;
        });
    }
    ;
    upperCaseLong(input) {
        input.addEventListener('focusout', () => {
            input.value = input.value.toUpperCase();
        });
    }
    validationRulerForm(nomeCompleto, dataNascimento, cpf, cro, especialidade, telefoneResidencial, telefoneCelular, email, rua, numero, bairro, cidade, estado) {
        const inputs = [
            nomeCompleto,
            dataNascimento,
            cpf,
            cro,
            especialidade,
            telefoneResidencial,
            telefoneCelular,
            email,
            rua,
            numero,
            bairro,
            cidade,
            estado
        ];
        const spanMessage = document.querySelectorAll('.spanMessage');
        const verificadorDeCampoVazio = inputs.some((item) => item.value === '');
        const dataNascimentoInput = inputs[1];
        const dataNascimentoValor = dataNascimentoInput.value;
        const selectedDate = new Date(dataNascimentoValor);
        const currentDate = new Date();
        const diffInYears = currentDate.getFullYear() - selectedDate.getFullYear();
        if (verificadorDeCampoVazio) {
            inputs.forEach((item, index) => {
                if (item.value === '') {
                    item.style.borderColor = '#fb8b77';
                    spanMessage[index].style.display = 'block';
                }
                else if (diffInYears < 18) {
                    item.style.borderColor = '#fb8b77';
                    spanMessage[1].textContent = 'Data de nascimento abaixo de 18 anos';
                    spanMessage[index].style.display = 'block';
                    return;
                    throw new Error('Data de nascimento abaixo de 18 anos');
                }
                else {
                    item.style.borderColor = '#61a19352';
                    spanMessage[index].style.display = 'none';
                }
                item.addEventListener('focusout', () => {
                    if (item.value === '') {
                        item.style.borderColor = '#fb8b77';
                        spanMessage[index].style.display = 'block';
                    }
                    else {
                        item.style.borderColor = '#61a19352';
                        spanMessage[index].style.display = 'none';
                    }
                });
            });
        }
        else {
            this.dentistaAPI.cadastrarDentista(nomeCompleto.value, dataNascimento.value, cpf.value, cro.value, especialidade.value, telefoneResidencial.value, telefoneCelular.value, email.value, rua.value, numero.value, bairro.value, cidade.value, estado.value);
            this.limpaCampos();
        }
    }
    limpaCampos() {
        const nomeCompleto = document.querySelector('#nomeCompleto');
        const dataNascimento = document.querySelector('#dataNascimento');
        const cpf = document.querySelector('#cpf');
        const cro = document.querySelector('#cro');
        const especialidade = document.querySelector('#especialidade');
        const telefoneResidencial = document.querySelector('#telefoneResidencial');
        const telefoneCelular = document.querySelector('#telefoneCelular');
        const email = document.querySelector('#email');
        const rua = document.querySelector('#rua');
        const numero = document.querySelector('#numero');
        const bairro = document.querySelector('#bairro');
        const cidade = document.querySelector('#cidade');
        const estado = document.querySelector('#estado');
        nomeCompleto.value = '';
        dataNascimento.value = '';
        cpf.value = '';
        cro.value = '';
        especialidade.value = '';
        telefoneResidencial.value = '';
        telefoneCelular.value = '';
        email.value = '';
        rua.value = '';
        numero.value = '';
        bairro.value = '';
        cidade.value = '';
        estado.value = '';
    }
    checkValidationYear(input) {
        input.addEventListener('focusout', () => {
            const selectedDate = new Date(input.value);
            const currentDate = new Date();
            const diffInYears = currentDate.getFullYear() - selectedDate.getFullYear();
            if (diffInYears < 18) {
                alert('Você deve ter pelo menos 18 anos de idade.');
            }
        });
    }
}
