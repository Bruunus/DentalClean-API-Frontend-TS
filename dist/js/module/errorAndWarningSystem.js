export class ErrorAndWarningSystem {
    messageError(input, span, borderColor, message) {
        input.style.borderColor = borderColor;
        span.style.display = 'block';
        span.textContent = message;
    }
    removeMessageError(input, span, borderColor) {
        input.style.borderColor = borderColor;
        span.style.display = 'none';
        span.textContent = '';
    }
    setErrorMessage(input, span, borderColor, message) {
        return this.messageError(input, span, borderColor, message);
    }
    setRemoveMessageError(input, span, borderColor) {
        return this.removeMessageError(input, span, borderColor);
    }
}
