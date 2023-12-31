import { ErrorAndWarningSystem } from "./errorAndWarningSystem.js";
export class ValidationAndMask {
    constructor() {
        this.error = new ErrorAndWarningSystem();
        this.spanNomeCompleto = document.querySelector('.container-nome-completo span');
        this.spanDataNascimento = document.querySelector('.container-data-nascimento span');
        this.spanEmail = document.querySelector('.container-email span');
        this.colorError = '#fb8b77';
        this.colorOriginalDentist = '#61a19352';
        this.inputDataNascimento = document.querySelector('#dataNascimento');
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
    bloquearLetrasECaracteresMask(input) {
        input.addEventListener('keypress', (event) => {
            const key = event.key;
            if (!/^\d$/.test(key) || key === '¨' || key === '*') {
                event.preventDefault();
            }
        });
    }
    ;
    bloquearNumerosECaracteresMask(input) {
        input.addEventListener('keydown', (event) => {
            const key = event.key;
            if (!/[a-zA-ZÀ-ÖØ-öø-ÿĀ-žŁ-őŒ-œƒ ]/.test(key)) {
                event.preventDefault();
            }
        });
    }
    characterLowerCaseMask(input) {
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
    upperCaseLongMask(input) {
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
        let message = 'O campo não pode estar vazio';
        if (verificadorDeCampoVazio) {
            inputs.forEach((item, index) => {
                if (item.value === '') {
                    this.error.setErrorMessage(item, spanMessage[index], this.colorError, message);
                }
                else {
                    this.error.setRemoveMessageError(item, spanMessage[index], this.colorOriginalDentist);
                }
                item.addEventListener('focusout', () => {
                    if (item.value === '') {
                        this.error.setErrorMessage(item, spanMessage[index], this.colorError, message);
                    }
                    else {
                        this.error.setRemoveMessageError(item, spanMessage[index], this.colorOriginalDentist);
                    }
                });
            });
        }
    }
    nomeCompletoValidator(input) {
        input.addEventListener('focusout', () => {
            if (input.value.length < 4) {
                this.error.setErrorMessage(input, this.spanNomeCompleto, this.colorError, 'Erro: Forneça um nome');
            }
            else {
                this.error.setRemoveMessageError(input, this.spanNomeCompleto, this.colorOriginalDentist);
            }
        });
        this.removeError(input, this.spanNomeCompleto);
    }
    ;
    datadeNascimentoValidator(input) {
        input.addEventListener('focusout', () => {
            const selectedDate = new Date(input.value);
            const currentDate = new Date();
            const diffInYears = currentDate.getFullYear() - selectedDate.getFullYear();
            if (diffInYears < 18) {
                this.error.setErrorMessage(input, this.spanDataNascimento, this.colorError, 'Erro: O cadastrado deve ter idade maior que 18 anos');
            }
            else if (diffInYears > 70) {
                this.error.setErrorMessage(input, this.spanDataNascimento, this.colorError, 'Erro: Idade fora do parâmetro para cadastro de dentista');
            }
            else {
                this.error.setRemoveMessageError(input, this.spanDataNascimento, this.colorOriginalDentist);
            }
        });
    }
    emailValidator(input) {
        const regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regex2 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        input.addEventListener('focusout', () => {
            if (!regex1.test(input.value) || !regex2.test(input.value)) {
                let message = 'Erro: E-mail inválido';
                this.error.setErrorMessage(input, this.spanEmail, this.colorError, message);
            }
            else {
                this.error.setRemoveMessageError(input, this.spanEmail, this.colorOriginalDentist);
            }
        });
        this.removeError(input, this.spanEmail);
    }
    ;
    removeError(input, span) {
        input.addEventListener('focusin', () => {
            this.error.setRemoveMessageError(input, span, this.colorOriginalDentist);
        });
    }
    ;
}
