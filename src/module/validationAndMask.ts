import { CadastroController } from "../controller/cadastroController.js";
import { Dentist } from "./dentist.js";
import { ErrorAndWarningSystem } from "./errorAndWarningSystem.js";

export class ValidationAndMask {


    
    private error: ErrorAndWarningSystem;
    private spanNomeCompleto: HTMLSpanElement;
    private spanDataNascimento: HTMLSpanElement;
    private spanEmail: HTMLSpanElement;
    private colorError: string;
    private colorOriginalDentist: string;



    private inputDataNascimento: HTMLInputElement;


    public constructor() {

      this.error = new ErrorAndWarningSystem();
      
      this.spanNomeCompleto = document.querySelector('.container-nome-completo span')
      this.spanDataNascimento = document.querySelector('.container-data-nascimento span');
      this.spanEmail = document.querySelector('.container-email span')

      this.colorError = '#fb8b77';
      this.colorOriginalDentist = '#61a19352';
      
      this.inputDataNascimento = document.querySelector('#dataNascimento');
      
    }




    /* Máscaras */

    



    /**
     * Método de mascara para cpf. Realiza a exclusão de inserção de letras e
     * caracteres especiais para entrada de dados exceto aos do próprio CPF.
     * A cada inserção a mascara adiciona o caracter de separação do CPF automáticamente.
     * 
     */
    public cpfMask(input: HTMLInputElement): void {

        input.addEventListener('keypress', (event) => { 

            const key = event.key;
            const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

            if(!validKeys.includes(key) || (key >= 'a' && key <= 'z')) {
                event.preventDefault();
            } else {
                let inputCpfMask = input.value.length;
                if(inputCpfMask === 3 || inputCpfMask === 7) {
                    input.value += '.';
                } else if(inputCpfMask === 11) {
                    input.value += '-';
                }
            }

        });
    };
    


    /**
     * Método que realiza a mascara de telefone residencial
     */
    public telefoneResidencialMask(input: HTMLInputElement): void {
        
        input.addEventListener('keypress', () => {

            const applyMask = input.value.length;
        
            if(applyMask === 0) {
                input.value += '(';
            } else if(applyMask === 3) {
                input.value += ') ';
            } else if(applyMask === 9) {
                input.value += '-';
            }
        })
    };



    /**
     * Método de mascara para autopreenchimento do campo "Telefone Celular".
     * O Switch esutara a inserção do campo e adicionará a mascara préviamente
     * declarada.
     * 
     * @param input 
     */
    public telefonecelularMask(input: HTMLInputElement): void {

        input.addEventListener('keypress', () => {

            let telCelMask = input.value.length;
            
            switch (telCelMask) {

                case 0: input.value += '(';
                    break;
                case 3: input.value += ') ';
                    break;
                case 4: input.value += ' ';
                    break;
                case 6: input.value += ' ';
                    break;
                case 11: input.value += '-';
            }

        });
    };



    /**
     * Método de máscara para impedir digitação de letras e caracteres
     * no campo. 
     * @param input 
     */
    public bloquearLetrasECaracteresMask(input: HTMLInputElement): void {

        input.addEventListener('keypress', (event) => {

            const key = event.key;
            
            /* impedindo digitação de caracteres*/
            if(!/^\d$/.test(key) || key === '¨' || key === '*') {
                event.preventDefault();
            }

        })


    };



    /**
     * Método bloqueador de números e caracteres. 
     * @param input 
     */
    public bloquearNumerosECaracteresMask(input: HTMLInputElement): void {
        input.addEventListener('keydown', (event) => {
          const key = event.key;
          // Impedir a digitação de números e caracteres não alfabéticos, exceto o espaço
          if (!/[a-zA-ZÀ-ÖØ-öø-ÿĀ-žŁ-őŒ-œƒ ]/.test(key)) {
            event.preventDefault();
          }
        });
      }





      

      public characterLowerCaseMask(input: HTMLInputElement): void {
        input.addEventListener('focusout', () => {

          const inputValue = input.value;
          let transformedValue = '';
      
          let capitalizeNext = true;
          let capitalizeAfterComma = false;

          for (let i = 0; i < inputValue.length; i++) {
            const currentChar = inputValue.charAt(i);
            if (capitalizeNext && currentChar !== ' ') {
              transformedValue += currentChar.toUpperCase();
              capitalizeNext = false;
            } else {
              transformedValue += currentChar;
            }
      
            if (currentChar === ' ') {
              capitalizeNext = true;
            }
      
            if (currentChar === ',') {
              capitalizeAfterComma = true;
            }
      
            if (capitalizeAfterComma && currentChar !== ',' && currentChar !== ' ') {
              transformedValue += currentChar.toUpperCase();
              capitalizeAfterComma = false;
            }
          }
      
          input.value = transformedValue;
        });

      };
      
      

      /**
       * Método que transforma todos os caracteres em maiúsculo.
       */
      public upperCaseLongMask(input: HTMLInputElement): void {

        input.addEventListener('focusout', () => {
          input.value = input.value.toUpperCase();
        })



      }



      /* Validações */





      /**
       * Método para validar campos do formulário de dentistas se estão vazios.
       * Este método é usado de modo expresso na classe CadastroDentistaView.ts
       * Não pode ser usado em nenhuma outra parte do código.
       * 
       * Recebe como parâmetro as variáveis do formulário após o clique do botão 
       * "Salvar". Nesse contexto, os dados são adicionados em array para 
       * manipulação. Mapeado todas as classes do formulário correspondentes a 
       * tag span para notificação da mensagem de erro. A constante verificadorDeCampoVazio
       * armazena a percorrência do arrays para procurar algum input que tenha o valor 
       * vazio, dentro da condição no caso verdadeiro o campo vazio recebe o erro para 
       * correção, do contrário os dados são enviado para api para processamento de inserção
       * no banco de dados.
       */
      public validationRulerForm (

        nomeCompleto: HTMLInputElement,
        dataNascimento: HTMLInputElement,
        cpf: HTMLInputElement,
        cro: HTMLInputElement,
        especialidade: HTMLInputElement,
        telefoneResidencial: HTMLInputElement,
        telefoneCelular: HTMLInputElement,
        email: HTMLInputElement,
        rua: HTMLInputElement,
        numero: HTMLInputElement,
        bairro: HTMLInputElement,
        cidade: HTMLInputElement,
        estado: HTMLInputElement

      ): void {

        const inputs = [
            nomeCompleto,
            dataNascimento,
            cpf,
            cro,
            especialidade,
            telefoneResidencial,
            telefoneCelular,
            email,
            rua,
            numero,
            bairro,
            cidade,
            estado
          ];

        const spanMessage: NodeListOf<HTMLSpanElement> = document.querySelectorAll<HTMLSpanElement>('.spanMessage');
        const verificadorDeCampoVazio = inputs.some((item) => item.value === '');
        let message = 'O campo não pode estar vazio';
        
        if(verificadorDeCampoVazio) {

          inputs.forEach((item, index) => {
            if (item.value === '') {
              this.error.setErrorMessage(item, spanMessage[index], this.colorError, message);                      
            } else {
              this.error.setRemoveMessageError(item, spanMessage[index], this.colorOriginalDentist);
            }

            item.addEventListener('focusout', () => {
              if (item.value === '') {
                this.error.setErrorMessage(item, spanMessage[index], this.colorError, message);
              } else {
                this.error.setRemoveMessageError(item, spanMessage[index], this.colorOriginalDentist);
              }

            });

          });
        } 

      }



 

 

     
         

         
 


      







    /**
       * Regra aplicada expressamente no campo 'Nome completo' que não será aceito se houver
       * a conjunção de até 3 letras.
       */
    public nomeCompletoValidator(input: HTMLInputElement): void {

      input.addEventListener('focusout', () => {
        if (input.value.length < 4) {
          this.error.setErrorMessage(input, this.spanNomeCompleto, this.colorError, 'Erro: Forneça um nome');
        } else {
          this.error.setRemoveMessageError(input, this.spanNomeCompleto, this.colorOriginalDentist);
        }
      });

        this.removeError(input, this.spanNomeCompleto);
    };

 

    /**
     * Método que valida se a data de nascimento é menor que 18 anos.
     * 
     * Ele colete o valor inserido pelo usuário e a data atual do sistema.
     * É realizado um cálculo de subtração da data atual do ano de nascimento coletado, após a operação 
     * é iniciado a validação para 
     * @param input 
     */
    public datadeNascimentoValidator(input: HTMLInputElement): void {

      input.addEventListener('focusout', () => {

        const selectedDate = new Date(input.value);
        const currentDate = new Date();
        const diffInYears = currentDate.getFullYear() - selectedDate.getFullYear();

          if (diffInYears < 18) {
            this.error.setErrorMessage(input, this.spanDataNascimento, this.colorError, 'Erro: O cadastrado deve ter idade maior que 18 anos');
           
          } else if (diffInYears > 70){
            this.error.setErrorMessage(input, this.spanDataNascimento, this.colorError, 'Erro: Idade fora do parâmetro para cadastro de dentista');
          }
          else {
            this.error.setRemoveMessageError(input, this.spanDataNascimento, this.colorOriginalDentist);            
          }

      });



      //this.removeError(input, this.spanDataNascimento);


    }





    public emailValidator(input: HTMLInputElement): void {

      const regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const regex2 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

      input.addEventListener('focusout', () => {

        if(!regex1.test(input.value) || !regex2.test(input.value)) {
          let message = 'Erro: E-mail inválido';
          this.error.setErrorMessage(input, this.spanEmail, this.colorError, message);
        } else {
          this.error.setRemoveMessageError(input, this.spanEmail, this.colorOriginalDentist);
        }

      });

      this.removeError(input, this.spanEmail);

    };


    /**
     * Método que remove mensagem de erro dos inputs
     * @param input 
     * @param span 
     */
    public removeError(input: HTMLInputElement, span: HTMLSpanElement): void {
      input.addEventListener('focusin', () => {
        this.error.setRemoveMessageError(input, span, this.colorOriginalDentist);
      });
    };

        

}

    





 