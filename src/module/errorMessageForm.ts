export class ErrorMessageForm {






    private messageError(input: HTMLInputElement, span: HTMLSpanElement, borderColor: string, message: string): void {

        input.style.borderColor = borderColor;
        span.style.display = 'block';
        span.textContent = message;

    }   

    private removeMessageError(input: HTMLInputElement, span: HTMLSpanElement, borderColor: string ): void {

        input.style.borderColor = borderColor;
        span.style.display = 'none';
        span.textContent = '';

    }




    private messageErrorSelect(input: HTMLSelectElement, span: HTMLSpanElement, borderColor: string, message: string): void {

        input.style.borderColor = borderColor;
        span.style.display = 'block';
        span.textContent = message;

    }

    private removeMessageErrorSelect(input: HTMLSelectElement, span: HTMLSpanElement, borderColor: string ): void {

        input.style.borderColor = borderColor;
        span.style.display = 'none';
        span.textContent = '';

    }

    /**
     * Método que remove mensagem de erro dos inputs
     * @param input 
     * @param span 
     */
    private removeErrorInput(input: HTMLInputElement, span: HTMLSpanElement, borderColor: string): void {
        input.addEventListener('focusin', () => {
        this.setRemoveMessageErrorInput(input, span, borderColor);
        });
    };


    /**
     * Método que remove mensagem de erro do(s) select(s)
     * @param input 
     * @param span 
     */
    private removeErrorSelect(input: HTMLSelectElement, span: HTMLSpanElement, borderColor: string): void {
        input.addEventListener('focusin', () => {
        this.setRemoveMessageErrorSelect(input, span, borderColor);
        });
    };




    public setErrorMessageInput(input: HTMLInputElement, span: HTMLSpanElement, borderColor: string, message: string)  {
        return this.messageError(input, span, borderColor, message);
    }

    public setRemoveMessageErrorInput(input: HTMLInputElement, span: HTMLSpanElement, borderColor: string) {
        return this.removeMessageError(input, span, borderColor);
    }



    public setErrorMessageSelect(input: HTMLSelectElement, span: HTMLSpanElement, borderColor: string, message: string)  {
        return this.messageErrorSelect(input, span, borderColor, message);
    }

    public setRemoveMessageErrorSelect(input: HTMLSelectElement, span: HTMLSpanElement, borderColor: string) {
        return this.removeMessageErrorSelect(input, span, borderColor);
    }



    public setRemoveErrorMessageInputEvent(input: HTMLInputElement, span: HTMLSpanElement, borderColor: string) {
        return this.removeErrorInput(input, span,borderColor);
    }

    public setRemoveErrorMessageSelectEvent(input: HTMLSelectElement, span: HTMLSpanElement, borderColor: string) {
        return this.removeErrorSelect(input, span, borderColor);
    }


    





}