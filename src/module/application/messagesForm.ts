import { CadastroDentistaView } from "../../view/templates/dentist/register/cadastroDentistaView.js";

export class MessagesForm {


    private cadastroDentistaView: CadastroDentistaView;


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



    /**
     * Mensagem de confirmação para cada transação para o banco de dados.
     * 
     * @param messages 
     */
    public alertSuccess(messages: string): void  {
     
        const containerPai = document.querySelector('#container-pai');
        const template = `
        
            <div class="alert alert-success" role="alert">
                ${messages}
            </div>
        
        `;

        containerPai.insertAdjacentHTML('beforeend', template);
        
        const divAlert = document.querySelector('.alert-success') as HTMLDivElement;

        if(window.matchMedia("(max-width: 843px) and (min-width: 376px)").matches) {

            divAlert.style.transform = 'translate(-50%, 0)';
            divAlert.style.top = '10px';
            divAlert.style.left = '50%';
            divAlert.style.right = 'auto';
            divAlert.style.opacity = '0';
            divAlert.style.opacity = '0';


            if(window.matchMedia("(max-width: 375px)").matches) {
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

        } else {

            // Exibir mensagem com animação sweep-to-left (demais código estão na folha de estilo)        
            divAlert.style.transform = 'translateX(100%)';

                setTimeout(() => {
                    divAlert.style.transform = 'translateX(0)';
                }, 0); // Aplica a transformação no próximo frame

                // Ocultar mensagem após 3 segundos com animação de fade
                setTimeout(() => {
                    divAlert.style.opacity = '0';
                setTimeout(() => {
                    divAlert.style.display = 'none';
                    divAlert.style.transform = 'translateX(100%)'; // Reinicia a posição para futuras exibições
                    location.reload();
                }, 300); // Tempo de animação de fade
            }, 1500); // Tempo de exibição da mensagem

        }

    };

 
    public alertError(): void {

        const containerPai = document.querySelector('#container-pai');
        const template = `
          <div class="alert alert-danger" role="alert">
            <span class="close-button">&times;</span>
            Erro ocorrido ao enviar os dados!
          </div>
        `;
        containerPai.insertAdjacentHTML('beforeend', template);
      
        const divAlertError = document.querySelector('.alert-danger') as HTMLDivElement;
        const closeButton = divAlertError.querySelector('.close-button');
      

        if(window.matchMedia("(max-width: 843px) and (min-width: 376px)").matches) {
            divAlertError.style.transform = 'translate(-50%, 0)';
            divAlertError.style.top = '10px';
            divAlertError.style.left = '50%';
            divAlertError.style.right = 'auto';


            if(window.matchMedia("(max-width: 375px)").matches) {
                divAlertError.textContent = 'Erro ao enviar!';
                divAlertError.style.textAlign = 'center';
            } 


            closeButton.addEventListener('click', () => {
                divAlertError.style.opacity = '0';
                setTimeout(() => {
                    divAlertError.parentNode.removeChild(divAlertError);
                }, 500); // Tempo de animação de fade
            });

            setTimeout(() => {
                divAlertError.style.opacity = '1';
            }, 0);

            setTimeout(() => {
                divAlertError.style.opacity = '0';
                setTimeout(() => {
                    divAlertError.parentNode.removeChild(divAlertError);
                }, 500); // Tempo de animação de fade
                }, 5000);


        }  else {
        
            divAlertError.style.transform = 'translateX(100%)';
            divAlertError.style.bottom = '10px';
            divAlertError.style.right = '10px';
            divAlertError.style.opacity = '0';

            closeButton.addEventListener('click', () => {
                divAlertError.style.opacity = '0';
                divAlertError.style.transform = 'translateX(100%)';
                setTimeout(() => {
                divAlertError.parentNode.removeChild(divAlertError);
                }, 500); // Tempo de animação de fade
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
                }, 500); // Tempo de animação de fade
            }, 5000);

        }


     
    
    }


}