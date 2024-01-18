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
    messageErrorSelect(input, span, borderColor, message) {
        input.style.borderColor = borderColor;
        span.style.display = 'block';
        span.textContent = message;
    }
    removeMessageErrorSelect(input, span, borderColor) {
        input.style.borderColor = borderColor;
        span.style.display = 'none';
        span.textContent = '';
    }
    removeErrorInput(input, span, borderColor) {
        input.addEventListener('focusin', () => {
            this.setRemoveMessageErrorInput(input, span, borderColor);
        });
    }
    ;
    removeErrorSelect(input, span, borderColor) {
        input.addEventListener('focusin', () => {
            this.setRemoveMessageErrorSelect(input, span, borderColor);
        });
    }
    ;
    setErrorMessageInput(input, span, borderColor, message) {
        return this.messageError(input, span, borderColor, message);
    }
    setRemoveMessageErrorInput(input, span, borderColor) {
        return this.removeMessageError(input, span, borderColor);
    }
    setErrorMessageSelect(input, span, borderColor, message) {
        return this.messageErrorSelect(input, span, borderColor, message);
    }
    setRemoveMessageErrorSelect(input, span, borderColor) {
        return this.removeMessageErrorSelect(input, span, borderColor);
    }
    setRemoveErrorMessageInputEvent(input, span, borderColor) {
        return this.removeErrorInput(input, span, borderColor);
    }
    setRemoveErrorMessageSelectEvent(input, span, borderColor) {
        return this.removeErrorSelect(input, span, borderColor);
    }
}
