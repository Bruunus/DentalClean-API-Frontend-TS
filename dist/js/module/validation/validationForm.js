import { MessagesForm } from "../application/messagesForm.js";
export class Validation {
    constructor() {
        this.error = new MessagesForm();
        this.colorError = '#fb8b77';
        this.colorOriginalDentist = '#61a19352';
        this.nomeCompleto = document.querySelector('#nomeCompleto');
        this.dataNascimento = document.querySelector('#dataNascimento');
        this.cpf = document.querySelector('#cpf');
        this.cro = document.querySelector('#cro');
        this.especialidade = document.querySelector('#especialidade');
        this.telefoneResidencial = document.querySelector('#telefoneResidencial');
        this.telefoneCelular = document.querySelector('#telefoneCelular');
        this.email = document.querySelector('#email');
        this.rua = document.querySelector('#rua');
        this.numero = document.querySelector('#numero');
        this.bairro = document.querySelector('#bairro');
        this.cidade = document.querySelector('#cidade');
        this.estado = document.querySelector('#estado');
        this.spanNomeCompleto = document.querySelector('.container-nome-completo span');
        this.spanDataNascimento = document.querySelector('.container-data-nascimento span');
        this.spanCpf = document.querySelector('.container-cpf span');
        this.spanCro = document.querySelector('.container-cro span');
        this.spanEspecialidade = document.querySelector('.container-especialidade span');
        this.spanTelefoneResidencial = document.querySelector('.container-tel-res span');
        this.spanTelefoneCelular = document.querySelector('.container-tel-cel span');
        this.spanEmail = document.querySelector('.container-email span');
        this.spanRua = document.querySelector('.container-rua span');
        this.spanNumero = document.querySelector('.container-numero span');
        this.spanBairro = document.querySelector('.container-bairro span');
        this.spanCidade = document.querySelector('.container-cidade span');
        this.spanEstado = document.querySelector('.container-estado span');
        this.formSubmit = document.querySelector('#form_cadastro_dentista');
    }
    validationNomeCompletoDentist() {
        const hasNumbers = /\d/.test(this.nomeCompleto.value);
        if (this.nomeCompleto.value.length > 4) {
            return true;
        }
        else if (this.nomeCompleto.value === '') {
            this.error.setErrorMessageInput(this.nomeCompleto, this.spanNomeCompleto, this.colorError, 'Message: O campo não pode estar vazio');
            return false;
        }
        else {
            let message = '';
            message = 'Message: Nome fornecido incorreto';
            this.error.setErrorMessageInput(this.nomeCompleto, this.spanNomeCompleto, this.colorError, message);
            return false;
        }
    }
    validationDataNascimento() {
        const selectedDate = new Date(this.dataNascimento.value);
        const currentDate = new Date();
        const diffInYears = currentDate.getFullYear() - selectedDate.getFullYear();
        let message = '';
        if (this.dataNascimento.value === '') {
            message = 'Message: Obrigatório o preenchimento deste campo';
            this.error.setErrorMessageInput(this.dataNascimento, this.spanDataNascimento, this.colorError, message);
            return false;
        }
        else if (diffInYears < 18) {
            message = 'Message: O cadastrado deve ter idade maior que 18 anosSSS';
            this.error.setErrorMessageInput(this.dataNascimento, this.spanDataNascimento, this.colorError, message);
            return false;
        }
        else if (diffInYears > 70) {
            message = 'Message: Idade fora do parâmetro para cadastro de dentista';
            this.error.setErrorMessageInput(this.dataNascimento, this.spanDataNascimento, this.colorError, message);
            return false;
        }
        this.error.setRemoveMessageErrorInput(this.dataNascimento, this.spanDataNascimento, this.colorOriginalDentist);
        return true;
    }
    validationCpf() {
        if (this.cpf.value.length < 14) {
            this.error.setErrorMessageInput(this.cpf, this.spanCpf, this.colorError, 'Message: CPF inválido');
            return false;
        }
        else {
            this.error.setRemoveMessageErrorInput(this.cpf, this.spanCpf, this.colorOriginalDentist);
        }
        this.error.setRemoveErrorMessageInputEvent(this.cpf, this.spanCpf, this.colorOriginalDentist);
        return true;
    }
    validationCro() {
        if (this.cro.value.length < 4) {
            this.error.setErrorMessageInput(this.cro, this.spanCro, this.colorError, 'Message: CRO inválido');
            return false;
        }
        else {
            this.error.setRemoveMessageErrorInput(this.cro, this.spanCro, this.colorOriginalDentist);
        }
        return true;
    }
    validationEspecialidade() {
        if (this.especialidade.value.length === 0) {
            this.error.setErrorMessageInput(this.especialidade, this.spanEspecialidade, this.colorError, 'Message: O campo não pode estar vazio');
            return false;
        }
        else {
            this.error.setRemoveMessageErrorInput(this.especialidade, this.spanEspecialidade, this.colorOriginalDentist);
        }
        return true;
    }
    validationTelefoneResidencial() {
        if (this.telefoneResidencial.value.length < 14) {
            this.error.setErrorMessageInput(this.telefoneResidencial, this.spanTelefoneResidencial, this.colorError, 'Message: Número de telefone incorreto');
            return false;
        }
        else {
            this.error.setRemoveMessageErrorInput(this.telefoneResidencial, this.spanTelefoneResidencial, this.colorOriginalDentist);
        }
        return true;
    }
    validationTelefoneCelular() {
        if (this.telefoneCelular.value.length < 16) {
            this.error.setErrorMessageInput(this.telefoneCelular, this.spanTelefoneCelular, this.colorError, 'Message: Número de celular incorreto');
            return false;
        }
        else {
            this.error.setRemoveMessageErrorInput(this.telefoneCelular, this.spanTelefoneCelular, this.colorOriginalDentist);
        }
        return true;
    }
    validationEmail() {
        const regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regex2 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!regex1.test(this.email.value) || !regex2.test(this.email.value)) {
            let message = 'Message: E-mail inválido';
            this.error.setErrorMessageInput(this.email, this.spanEmail, this.colorError, message);
            return false;
        }
        else {
            this.error.setRemoveMessageErrorInput(this.email, this.spanEmail, this.colorOriginalDentist);
        }
        return true;
    }
    validationRua() {
        if (this.rua.value.length > 2) {
            return true;
        }
        else if (this.rua.value === '') {
            this.error.setErrorMessageInput(this.rua, this.spanRua, this.colorError, 'Message: O campo não pode estar vazio');
            return false;
        }
        else {
            this.error.setErrorMessageInput(this.rua, this.spanRua, this.colorError, 'Message: Descrição de rua incorreta');
            return false;
        }
    }
    validationNumero() {
        if (this.numero.value === '') {
            this.error.setErrorMessageInput(this.numero, this.spanNumero, this.colorError, 'Message: O campo não pode estar vazio');
            return false;
        }
        else {
            this.error.setRemoveMessageErrorInput(this.numero, this.spanNumero, this.colorOriginalDentist);
            return true;
        }
    }
    validationBairro() {
        if (this.bairro.value === '') {
            this.error.setErrorMessageInput(this.bairro, this.spanBairro, this.colorError, 'Message: O campo não pode estar vazio');
            return false;
        }
        else {
            this.error.setRemoveMessageErrorInput(this.bairro, this.spanBairro, this.colorOriginalDentist);
            return true;
        }
    }
    validationCidade() {
        if (this.cidade.value === '') {
            this.error.setErrorMessageInput(this.cidade, this.spanCidade, this.colorError, 'Message: O campo não pode estar vazio');
            return false;
        }
        else {
            this.error.setRemoveMessageErrorInput(this.cidade, this.spanCidade, this.colorOriginalDentist);
            return true;
        }
    }
    validationEstado() {
        if (this.estado.value === '') {
            this.error.setErrorMessageInput(this.estado, this.spanEstado, this.colorError, 'Message: O campo não pode estar vazio');
            return false;
        }
        else {
            this.error.setRemoveMessageErrorInput(this.estado, this.spanEstado, this.colorOriginalDentist);
            return true;
        }
    }
}
