import { ErrorAndWarningSystem } from "./warning.js";
export class Validation {
    constructor() {
        this.error = new ErrorAndWarningSystem();
        this.colorError = '#fb8b77';
        this.colorOriginalDentist = '#61a19352';
    }
    validationNomeCompletoDentist() {
        const nomeCompleto = document.querySelector('#nomeCompleto');
        const spanMessage = document.querySelector('.container-nome-completo span');
        const message = '';
        if (nomeCompleto.value === '') {
            this.error.setErrorMessageInput(nomeCompleto, spanMessage, this.colorError, 'Este campo não pode estar vazio');
            return false;
        }
        else if (nomeCompleto.value.length < 4) {
            this.error.setErrorMessageInput(nomeCompleto, spanMessage, this.colorError, 'Declaração de nome incorreto');
            return false;
        }
        return true;
    }
}
