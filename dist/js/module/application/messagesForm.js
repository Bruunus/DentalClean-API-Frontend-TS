export class MessagesForm {
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
    alertSuccess(messages) {
        const containerPai = document.querySelector('#container-pai');
        const template = `
        
            <div class="alert alert-success" role="alert">
                ${messages}
            </div>
        
        `;
        containerPai.insertAdjacentHTML('beforeend', template);
        const divAlert = document.querySelector('.alert-success');
        if (window.matchMedia("(max-width: 843px) and (min-width: 376px)").matches) {
            divAlert.style.transform = 'translate(-50%, 0)';
            divAlert.style.top = '10px';
            divAlert.style.left = '50%';
            divAlert.style.right = 'auto';
            divAlert.style.opacity = '0';
            divAlert.style.opacity = '0';
            if (window.matchMedia("(max-width: 375px)").matches) {
                divAlert.textContent = 'Dados gravados!';
                divAlert.style.textAlign = 'center';
            }
            setTimeout(() => {
                divAlert.style.opacity = '1';
            }, 0);
            setTimeout(() => {
                divAlert.style.opacity = '0';
                setTimeout(() => {
                    divAlert.parentNode.removeChild(divAlert);
                    divAlert.style.display = 'none';
                    location.reload();
                }, 500);
            }, 1500);
        }
        else {
            divAlert.style.transform = 'translateX(100%)';
            setTimeout(() => {
                divAlert.style.transform = 'translateX(0)';
            }, 0);
            setTimeout(() => {
                divAlert.style.opacity = '0';
                setTimeout(() => {
                    divAlert.style.display = 'none';
                    divAlert.style.transform = 'translateX(100%)';
                    location.reload();
                }, 300);
            }, 1500);
        }
    }
    ;
    alertError() {
        const containerPai = document.querySelector('#container-pai');
        const template = `
          <div class="alert alert-danger" role="alert">
            <span class="close-button">&times;</span>
            Erro ocorrido ao enviar os dados!
          </div>
        `;
        containerPai.insertAdjacentHTML('beforeend', template);
        const divAlertError = document.querySelector('.alert-danger');
        const closeButton = divAlertError.querySelector('.close-button');
        if (window.matchMedia("(max-width: 843px) and (min-width: 376px)").matches) {
            divAlertError.style.transform = 'translate(-50%, 0)';
            divAlertError.style.top = '10px';
            divAlertError.style.left = '50%';
            divAlertError.style.right = 'auto';
            if (window.matchMedia("(max-width: 375px)").matches) {
                divAlertError.textContent = 'Erro ao enviar!';
                divAlertError.style.textAlign = 'center';
            }
            closeButton.addEventListener('click', () => {
                divAlertError.style.opacity = '0';
                setTimeout(() => {
                    divAlertError.parentNode.removeChild(divAlertError);
                }, 500);
            });
            setTimeout(() => {
                divAlertError.style.opacity = '1';
            }, 0);
            setTimeout(() => {
                divAlertError.style.opacity = '0';
                setTimeout(() => {
                    divAlertError.parentNode.removeChild(divAlertError);
                }, 500);
            }, 5000);
        }
        else {
            divAlertError.style.transform = 'translateX(100%)';
            divAlertError.style.bottom = '10px';
            divAlertError.style.right = '10px';
            divAlertError.style.opacity = '0';
            closeButton.addEventListener('click', () => {
                divAlertError.style.opacity = '0';
                divAlertError.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    divAlertError.parentNode.removeChild(divAlertError);
                }, 500);
            });
            setTimeout(() => {
                divAlertError.style.opacity = '1';
                divAlertError.style.transform = 'translateX(0)';
            }, 0);
            setTimeout(() => {
                divAlertError.style.opacity = '0';
                divAlertError.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    divAlertError.parentNode.removeChild(divAlertError);
                }, 500);
            }, 5000);
        }
    }
}
