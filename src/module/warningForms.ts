import { CadastroController } from "../controller/cadastroController.js";
import { Dentist } from "./dentist.js";
import { MessagesForm } from "./messagesForm.js";

export class WarningForms {

  private inputNomeCompleto: HTMLInputElement;
  private inputDataNascimento: HTMLInputElement;
  private inputCpf: HTMLInputElement;
  private inputCro: HTMLInputElement;


  private spanNomeCompleto: HTMLSpanElement;
  private spanDataNascimento: HTMLSpanElement;
  private spanCpf: HTMLSpanElement;
  private spanCro: HTMLSpanElement;
  private spanEspecialidade: HTMLSpanElement;
  private spanEmail: HTMLSpanElement;
  private spanTelRes: HTMLSpanElement;
  private spanTelCel: HTMLSpanElement;
  private spanRua: HTMLSpanElement;
  private spanNumero: HTMLSpanElement;
  private spanBairro: HTMLSpanElement;
  private spanCidade: HTMLSpanElement;
  private spanEstado: HTMLSpanElement;





    
  private error: MessagesForm;
  private colorError: string;
  private colorOriginalDentist: string;
  


  public constructor() {

    this.error = new MessagesForm();

    this.inputNomeCompleto = document.querySelector('.container-nome-completo input');
    this.inputDataNascimento = document.querySelector('.container-data-nascimento input');
    this.inputCpf = document.querySelector('.container-cpf input');
    
    this.spanNomeCompleto = document.querySelector('.container-nome-completo span')
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

 

    /**
       * Regra aplicada expressamente no campo 'Nome completo' que não será aceito se houver
       * a conjunção de até 3 letras.
       */
    public warningNomeCompleto(input: HTMLInputElement, span: HTMLSpanElement): void {

      input.addEventListener('focusout', () => {
        /* console.log('focus enter') */
        if(input.value === '') {
          this.error.setErrorMessageInput(input, span, this.colorError, 'Message: O campo não pode estar vazio');
         /*  console.log('Nome vazio') */
        } else if (input.value.length < 4) {
          this.error.setErrorMessageInput(input, span, this.colorError, 'Message: Nome fornecido incorreto');
          /* console.log('Nome menor ') */
        } else {
          this.error.setRemoveMessageErrorInput(input, span, this.colorOriginalDentist);
        }
      });

      this.error.setRemoveErrorMessageInputEvent(input, span, this.colorOriginalDentist);
        

        
    };

 

    /**
     * Método que valida se a data de nascimento é menor que 18 anos.
     * 
     * Ele colete o valor inserido pelo usuário e a data atual do sistema.
     * É realizado um cálculo de subtração da data atual do ano de nascimento coletado, após a operação 
     * é iniciado a validação para 
     * @param input 
     */
    public warningDataDeNascimento(input: HTMLInputElement, span: HTMLSpanElement): boolean {

      input.addEventListener('focusout', () => {

        const selectedDate = new Date(input.value);
        const currentDate = new Date();
        const diffInYears = currentDate.getFullYear() - selectedDate.getFullYear();
        let message: string = '';
          if(input.value === '') {
            message = 'Message: O campo não pode estar vazio';
            this.error.setErrorMessageInput(input, span, this.colorError, message);
            return false;
          } else if (diffInYears < 18) {
            message = 'Message: O cadastrado deve ter idade maior que 18 anos';
            this.error.setErrorMessageInput(input, span, this.colorError, message);
            return false;
          } else if (diffInYears > 70) {
            message = 'Message: Idade fora do parâmetro para cadastro de dentista';
            this.error.setErrorMessageInput(input, span, this.colorError, message);
            return false;
          }
          else {
            this.error.setRemoveMessageErrorInput(input, span, this.colorOriginalDentist);     
          }

      });

      this.error.setRemoveErrorMessageInputEvent(input, span, this.colorOriginalDentist);     
      return true;

    }


    public warningCpf(input: HTMLInputElement, span: HTMLSpanElement): void {
      input.addEventListener('focusout', () => {
        if(input.value.length < 14) {
          this.error.setErrorMessageInput(input, span, this.colorError, 'Message: CPF inválido')
        }else {
          this.error.setRemoveMessageErrorInput(input, span, this.colorOriginalDentist)
        }
      });
      this.error.setRemoveErrorMessageInputEvent(input, span, this.colorOriginalDentist);
    }


    public warningCro(input: HTMLInputElement, span: HTMLSpanElement): void {
      input.addEventListener('focusout', () => {
        if(input.value.length < 4) {
          this.error.setErrorMessageInput(input, span, this.colorError, 'Message: CRO inválido');
        } else {
          this.error.setRemoveMessageErrorInput(input, span, this.colorOriginalDentist);
        }
      });
      this.error.setRemoveErrorMessageInputEvent(input, span, this.colorOriginalDentist);
    }


    public warningEspecialidade(input: HTMLInputElement, span: HTMLSpanElement): void {
      input.addEventListener('focusout', () => {
        if(input.value.length === 0) {
          this.error.setErrorMessageInput(input, span, this.colorError, 'Message: O campo não pode estar vazio')
        } else {
          this.error.setRemoveMessageErrorInput(input, span, this.colorOriginalDentist);
        }
      });
      this.error.setRemoveErrorMessageInputEvent(input, span, this.colorOriginalDentist);
    }


    public warningTelefoneResidencial(input: HTMLInputElement, span: HTMLSpanElement): void {
      input.addEventListener('focusout', () => {
        if(input.value.length < 14) {
          this.error.setErrorMessageInput(input, span, this.colorError, 'Message: Número de telefone incorreto')
        } else {
          this.error.setRemoveMessageErrorInput(input, span, this.colorOriginalDentist);
        }
      });
      this.error.setRemoveErrorMessageInputEvent(input, span, this.colorOriginalDentist);
    }

    
    public warningTelefoneCelular(input: HTMLInputElement, span: HTMLSpanElement): void {
      input.addEventListener('focusout', () => {
        if(input.value.length < 16) {
          this.error.setErrorMessageInput(input, span, this.colorError, 'Message: Número de celular incorreto')
        } else {
          this.error.setRemoveMessageErrorInput(input, span, this.colorOriginalDentist);
        }
      });
      this.error.setRemoveErrorMessageInputEvent(input, span, this.colorOriginalDentist);
    }


    public warningEmail(input: HTMLInputElement, span: HTMLSpanElement): void {

      const regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const regex2 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

      input.addEventListener('focusout', () => {

        if(!regex1.test(input.value) || !regex2.test(input.value)) {
          let message = 'Message: E-mail inválido';
          this.error.setErrorMessageInput(input, span, this.colorError, message);
        } else {
          this.error.setRemoveMessageErrorInput(input, span, this.colorOriginalDentist);
        }

      });

      this.error.setRemoveErrorMessageInputEvent(input, span, this.colorOriginalDentist);

    };



    public warningRua(input: HTMLInputElement, span: HTMLSpanElement): void {

      input.addEventListener('focusout', () => {
        if(input.value === '') {
          this.error.setErrorMessageInput(input, span, this.colorError, 'Message: O campo não pode estar vazio');
        } else if (input.value.length < 3) {
          this.error.setErrorMessageInput(input, span, this.colorError, 'Message: Descrição de rua incorreta');
        } else {
          this.error.setRemoveMessageErrorInput(input, span, this.colorOriginalDentist);
        }
      });

      this.error.setRemoveErrorMessageInputEvent(input, span, this.colorOriginalDentist);
    }



    public warningNumero(input: HTMLInputElement, span: HTMLSpanElement): void {
      input.addEventListener('focusout', () => {
        if(input.value === '') {
          this.error.setErrorMessageInput(input, span, this.colorError, 'Message: O campo não pode estar vazio');
        } else {
          this.error.setRemoveMessageErrorInput(input, span, this.colorOriginalDentist);
        }
      });
      this.error.setRemoveErrorMessageInputEvent(input, span, this.colorOriginalDentist);
    }



    public warningBairro(input: HTMLInputElement, span: HTMLSpanElement): void {
      input.addEventListener('focusout', () => {
        if(input.value === '') {
          this.error.setErrorMessageInput(input, span, this.colorError, 'Message: O campo não pode estar vazio');
        }  else if(input.value.length < 4) {
          this.error.setErrorMessageInput(input, span, this.colorError, 'Message: Descrição de bairro inválido');
        } else {
          this.error.setRemoveMessageErrorInput(input, span, this.colorOriginalDentist);
        }
      });
      this.error.setRemoveErrorMessageInputEvent(input, span, this.colorOriginalDentist);
    }


    public warningCidade(input: HTMLInputElement, span: HTMLSpanElement): void {
      input.addEventListener('focusout', () => {
        if(input.value === '') {
          this.error.setErrorMessageInput(input, span, this.colorError, 'Message: O campo não pode estar vazio');
        } else if(input.value.length < 4) {
          this.error.setErrorMessageInput(input, span, this.colorError, 'Message: Descrição de cidade inválida');
        } else {
          this.error.setRemoveMessageErrorInput(input, span, this.colorOriginalDentist);
        }
      });
      this.error.setRemoveErrorMessageInputEvent(input, span, this.colorOriginalDentist);
    }


    public warningEstado(input: HTMLInputElement, span: HTMLSpanElement): void {
      input.addEventListener('focusout', () => {
        if(input.value === '') {
          this.error.setErrorMessageInput(input, span, this.colorError, 'Message: O campo não pode estar vazio');
        } else if(input.value.length < 2) {
          this.error.setErrorMessageInput(input, span, this.colorError, 'Message: Estado inválido');
        } else {
          this.error.setRemoveMessageErrorInput(input, span, this.colorOriginalDentist);
        }
      });
      this.error.setRemoveErrorMessageInputEvent(input, span, this.colorOriginalDentist);
    }




 







    


   





 

        

}

    





 