export class ErrorAndWarningSystem {






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




    public setErrorMessage(input: HTMLInputElement, span: HTMLSpanElement, borderColor: string, message: string)  {
        return this.messageError(input, span, borderColor, message);
    }

    public setRemoveMessageError(input: HTMLInputElement, span: HTMLSpanElement, borderColor: string) {
        return this.removeMessageError(input, span, borderColor);
    }



}