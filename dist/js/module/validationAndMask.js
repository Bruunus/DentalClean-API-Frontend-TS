import { ErrorMessageForm } from "./errorMessageForm.js";
export class WarningForms {
    constructor() {
        this.error = new ErrorMessageForm();
        this.inputNomeCompleto = document.querySelector('.container-nome-completo input');
        this.inputDataNascimento = document.querySelector('.container-data-nascimento input');
        this.inputCpf = document.querySelector('.container-cpf input');
        this.spanNomeCompleto = document.querySelector('.container-nome-completo span');
        this.spanDataNascimento = document.querySelector('.container-data-nascimento span');
        this.spanCpf = document.querySelector('.container-cpf span');
        this.spanEmail = document.querySelector('.container-email span');
        this.spanCro = document.querySelector('.container-cro span');
        this.spanTelRes = document.querySelector('.container-tel-res span');
        this.colorError = '#fb8b77';
        this.colorOriginalDentist = '#61a19352';
    }
    noEmptyInputsValidation(nomeCompleto, dataNascimento, cpf, cro, especialidade, telefoneResidencial, telefoneCelular, email, rua, numero, bairro, cidade, estado) {
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
                    this.error.setErrorMessageInput(item, spanMessage[index], this.colorError, message);
                    return false;
                }
                else {
                    this.error.setRemoveMessageErrorInput(item, spanMessage[index], this.colorOriginalDentist);
                }
                item.addEventListener('focusout', () => {
                    if (item.value === '') {
                        this.error.setErrorMessageInput(item, spanMessage[index], this.colorError, message);
                        return false;
                    }
                    else {
                        this.error.setRemoveMessageErrorInput(item, spanMessage[index], this.colorOriginalDentist);
                    }
                });
            });
        }
        return true;
    }
    warningNomeCompleto(input) {
        input.addEventListener('focusout', () => {
            if (input.value.length < 4) {
                this.error.setErrorMessageInput(input, this.spanNomeCompleto, this.colorError, 'Erro: Forneça um nome');
                return false;
            }
            else {
                this.error.setRemoveMessageErrorInput(input, this.spanNomeCompleto, this.colorOriginalDentist);
                return true;
            }
        });
        this.error.setRemoveErrorMessageInputEvent(input, this.spanNomeCompleto, this.colorOriginalDentist);
        return true;
    }
    ;
    warningDataDeNascimento(input) {
        input.addEventListener('focusout', () => {
            const selectedDate = new Date(input.value);
            const currentDate = new Date();
            const diffInYears = currentDate.getFullYear() - selectedDate.getFullYear();
            if (diffInYears < 18) {
                this.error.setErrorMessageInput(input, this.spanDataNascimento, this.colorError, 'Erro: O cadastrado deve ter idade maior que 18 anos');
            }
            else if (diffInYears > 70) {
                this.error.setErrorMessageInput(input, this.spanDataNascimento, this.colorError, 'Erro: Idade fora do parâmetro para cadastro de dentista');
            }
            else {
                this.error.setRemoveMessageErrorInput(input, this.spanDataNascimento, this.colorOriginalDentist);
            }
        });
        this.error.setRemoveErrorMessageInputEvent(input, this.spanDataNascimento, this.colorOriginalDentist);
    }
    warningCpf(input) {
        input.addEventListener('focusout', () => {
            if (input.value.length < 14) {
                this.error.setErrorMessageInput(input, this.spanCpf, this.colorError, 'CPF inválido (cpf notification)');
            }
            else {
                this.error.setRemoveMessageErrorInput(input, this.spanCpf, this.colorOriginalDentist);
            }
        });
        this.error.setRemoveErrorMessageInputEvent(input, this.spanCpf, this.colorOriginalDentist);
    }
    warningCro(input) {
        input.addEventListener('focusout', () => {
            if (input.value.length < 4) {
                this.error.setErrorMessageInput(input, this.spanCro, this.colorError, 'CRO inválido');
            }
            else {
                this.error.setRemoveMessageErrorInput(input, this.spanCro, this.colorOriginalDentist);
            }
        });
        this.error.setRemoveErrorMessageInputEvent(input, this.spanCro, this.colorOriginalDentist);
    }
    warningEmail(input) {
        const regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regex2 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        input.addEventListener('focusout', () => {
            if (!regex1.test(input.value) || !regex2.test(input.value)) {
                let message = 'Erro: E-mail inválido';
                this.error.setErrorMessageInput(input, this.spanEmail, this.colorError, message);
            }
            else {
                this.error.setRemoveMessageErrorInput(input, this.spanEmail, this.colorOriginalDentist);
            }
        });
        this.error.setRemoveErrorMessageInputEvent(input, this.spanEmail, this.colorOriginalDentist);
    }
    ;
    warningTelRes(input) {
        input.addEventListener('focusout', () => {
            if (input.value.length < 14) {
                this.error.setErrorMessageInput(input, this.spanTelRes, this.colorError, 'Número de telefone incorreto');
            }
            else {
                this.error.setRemoveMessageErrorInput(input, this.spanTelRes, this.colorOriginalDentist);
            }
        });
        this.error.setRemoveErrorMessageInputEvent(input, this.spanTelRes, this.colorOriginalDentist);
    }
    warninaSDgCpf() {
        const cpf = document.querySelector('#cpf');
        const spanCpf = document.querySelector('#spanCpf');
        const message = 'CPF inválido';
        if (cpf.value.length < 14) {
            this.error.setErrorMessageInput(cpf, spanCpf, this.colorError, message);
            return false;
        }
        return true;
    }
}
