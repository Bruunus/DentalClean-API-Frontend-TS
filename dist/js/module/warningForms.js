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
        this.spanCro = document.querySelector('.container-cro span');
        this.spanEspecialidade = document.querySelector('.container-especialidade span');
        this.spanTelRes = document.querySelector('.container-tel-res span');
        this.spanTelCel = document.querySelector('.container-tel-cel span');
        this.spanEmail = document.querySelector('.container-email span');
        this.spanRua = document.querySelector('.container-rua span');
        this.spanNumero = document.querySelector('.container-numero span');
        this.spanBairro = document.querySelector('.container-bairro span');
        this.spanCidade = document.querySelector('.container-cidade span');
        this.spanEstado = document.querySelector('.container-estado span');
        this.colorError = '#fb8b77';
        this.colorOriginalDentist = '#61a19352';
    }
    warningNomeCompleto(input) {
        input.addEventListener('focusout', () => {
            if (input.value === '') {
                this.error.setErrorMessageInput(input, this.spanNomeCompleto, this.colorError, 'Message: O campo não pode estar vazio');
            }
            else if (input.value.length < 4) {
                this.error.setErrorMessageInput(input, this.spanNomeCompleto, this.colorError, 'Message: Nome fornecido incorreto');
            }
            else {
                this.error.setRemoveMessageErrorInput(input, this.spanNomeCompleto, this.colorOriginalDentist);
            }
        });
        this.error.setRemoveErrorMessageInputEvent(input, this.spanNomeCompleto, this.colorOriginalDentist);
    }
    ;
    warningDataDeNascimento(input) {
        input.addEventListener('focusout', () => {
            const selectedDate = new Date(input.value);
            const currentDate = new Date();
            const diffInYears = currentDate.getFullYear() - selectedDate.getFullYear();
            let message = '';
            if (input.value === '') {
                message = 'Message: O campo não pode estar vazio';
                this.error.setErrorMessageInput(input, this.spanDataNascimento, this.colorError, message);
                return false;
            }
            else if (diffInYears < 18) {
                message = 'Message: O cadastrado deve ter idade maior que 18 anos';
                this.error.setErrorMessageInput(input, this.spanDataNascimento, this.colorError, message);
                return false;
            }
            else if (diffInYears > 70) {
                message = 'Message: Idade fora do parâmetro para cadastro de dentista';
                this.error.setErrorMessageInput(input, this.spanDataNascimento, this.colorError, message);
                return false;
            }
            else {
                this.error.setRemoveMessageErrorInput(input, this.spanDataNascimento, this.colorOriginalDentist);
            }
        });
        this.error.setRemoveErrorMessageInputEvent(input, this.spanDataNascimento, this.colorOriginalDentist);
        return true;
    }
    warningCpf(input) {
        input.addEventListener('focusout', () => {
            if (input.value.length < 14) {
                this.error.setErrorMessageInput(input, this.spanCpf, this.colorError, 'Message: CPF inválido');
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
                this.error.setErrorMessageInput(input, this.spanCro, this.colorError, 'Message: CRO inválido');
            }
            else {
                this.error.setRemoveMessageErrorInput(input, this.spanCro, this.colorOriginalDentist);
            }
        });
        this.error.setRemoveErrorMessageInputEvent(input, this.spanCro, this.colorOriginalDentist);
    }
    warningEspecialidade(input) {
        input.addEventListener('focusout', () => {
            if (input.value.length === 0) {
                this.error.setErrorMessageInput(input, this.spanEspecialidade, this.colorError, 'Message: O campo não pode estar vazio');
            }
            else {
                this.error.setRemoveMessageErrorInput(input, this.spanEspecialidade, this.colorOriginalDentist);
            }
        });
        this.error.setRemoveErrorMessageInputEvent(input, this.spanEspecialidade, this.colorOriginalDentist);
    }
    warningTelefoneResidencial(input) {
        input.addEventListener('focusout', () => {
            if (input.value.length < 14) {
                this.error.setErrorMessageInput(input, this.spanTelRes, this.colorError, 'Message: Número de telefone incorreto');
            }
            else {
                this.error.setRemoveMessageErrorInput(input, this.spanTelRes, this.colorOriginalDentist);
            }
        });
        this.error.setRemoveErrorMessageInputEvent(input, this.spanTelRes, this.colorOriginalDentist);
    }
    warningTelefoneCelular(input) {
        input.addEventListener('focusout', () => {
            if (input.value.length < 16) {
                this.error.setErrorMessageInput(input, this.spanTelCel, this.colorError, 'Message: Número de celular incorreto');
            }
            else {
                this.error.setRemoveMessageErrorInput(input, this.spanTelCel, this.colorOriginalDentist);
            }
        });
        this.error.setRemoveErrorMessageInputEvent(input, this.spanTelCel, this.colorOriginalDentist);
    }
    warningEmail(input) {
        const regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regex2 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        input.addEventListener('focusout', () => {
            if (!regex1.test(input.value) || !regex2.test(input.value)) {
                let message = 'Message: E-mail inválido';
                this.error.setErrorMessageInput(input, this.spanEmail, this.colorError, message);
            }
            else {
                this.error.setRemoveMessageErrorInput(input, this.spanEmail, this.colorOriginalDentist);
            }
        });
        this.error.setRemoveErrorMessageInputEvent(input, this.spanEmail, this.colorOriginalDentist);
    }
    ;
    warningRua(input) {
        input.addEventListener('focusout', () => {
            if (input.value === '') {
                this.error.setErrorMessageInput(input, this.spanRua, this.colorError, 'Message: O campo não pode estar vazio');
            }
            else if (input.value.length < 3) {
                this.error.setErrorMessageInput(input, this.spanRua, this.colorError, 'Message: Descrição de rua incorreta');
            }
            else {
                this.error.setRemoveMessageErrorInput(input, this.spanRua, this.colorOriginalDentist);
            }
        });
        this.error.setRemoveErrorMessageInputEvent(input, this.spanRua, this.colorOriginalDentist);
    }
    warningNumero(input) {
        input.addEventListener('focusout', () => {
            if (input.value === '') {
                this.error.setErrorMessageInput(input, this.spanNumero, this.colorError, 'Message: O campo não pode estar vazio');
            }
            else {
                this.error.setRemoveMessageErrorInput(input, this.spanNumero, this.colorOriginalDentist);
            }
        });
        this.error.setRemoveErrorMessageInputEvent(input, this.spanNumero, this.colorOriginalDentist);
    }
    warningBairro(input) {
        input.addEventListener('focusout', () => {
            if (input.value === '') {
                this.error.setErrorMessageInput(input, this.spanBairro, this.colorError, 'Message: O campo não pode estar vazio');
            }
            else {
                this.error.setRemoveMessageErrorInput(input, this.spanBairro, this.colorOriginalDentist);
            }
        });
        this.error.setRemoveErrorMessageInputEvent(input, this.spanBairro, this.colorOriginalDentist);
    }
    warningCidade(input) {
        input.addEventListener('focusout', () => {
            if (input.value === '') {
                this.error.setErrorMessageInput(input, this.spanCidade, this.colorError, 'Message: O campo não pode estar vazio');
            }
            else {
                this.error.setRemoveMessageErrorInput(input, this.spanCidade, this.colorOriginalDentist);
            }
        });
        this.error.setRemoveErrorMessageInputEvent(input, this.spanCidade, this.colorOriginalDentist);
    }
    warningEstado(input) {
        input.addEventListener('focusout', () => {
            if (input.value === '') {
                this.error.setErrorMessageInput(input, this.spanEstado, this.colorError, 'Message: O campo não pode estar vazio');
            }
            else {
                this.error.setRemoveMessageErrorInput(input, this.spanEstado, this.colorOriginalDentist);
            }
        });
        this.error.setRemoveErrorMessageInputEvent(input, this.spanEstado, this.colorOriginalDentist);
    }
}
