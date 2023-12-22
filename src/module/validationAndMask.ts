import { CadastroController } from "../controller/cadastroController.js";

export class ValidationAndMask {


    private dentistaAPI = new CadastroController();



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
    public bloquearLetrasECaracteres(input: HTMLInputElement): void {

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
    public bloquearNumerosECaracteres(input: HTMLInputElement): void {
        input.addEventListener('keydown', (event) => {
          const key = event.key;
          // Impedir a digitação de números e caracteres não alfabéticos, exceto o espaço
          if (!/[a-zA-ZÀ-ÖØ-öø-ÿĀ-žŁ-őŒ-œƒ ]/.test(key)) {
            event.preventDefault();
          }
        });
      }





      /**
       * Regra aplicada expressamente no campo 'Nome completo' que não será aceito se houver
       * a conjunção de até 3 letras.
       */
      public nomeValidation(input: HTMLInputElement): void {

        input.addEventListener('focusout', () => {

            if (input.value.length < 4) {
                input.style.borderColor = '#fb8b77';
                console.log('nome incorreto');
            } else {
                input.style.borderColor = '#61a19352';
                console.log('nome correto');

 
                
            }




            

        })

      };

      public characterLowerCase(input: HTMLInputElement): void {
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
      public upperCaseLong(input: HTMLInputElement): void {

        input.addEventListener('focusout', () => {
          input.value = input.value.toUpperCase();
        })



      }


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
        
        const dataNascimentoInput = inputs[1];
        const dataNascimentoValor = dataNascimentoInput.value;

        const selectedDate = new Date(dataNascimentoValor);
        const currentDate = new Date();
        const diffInYears = currentDate.getFullYear() - selectedDate.getFullYear();


        if(verificadorDeCampoVazio) {

            inputs.forEach((item, index) => {

                if (item.value === '' ) {

                    item.style.borderColor = '#fb8b77';
                    
                    spanMessage[index].style.display = 'block';
                    

                    } else if(diffInYears < 18) {

                      item.style.borderColor = '#fb8b77';
                      spanMessage[1].textContent = 'Data de nascimento abaixo de 18 anos';
                      spanMessage[index].style.display = 'block';


                      /* PRECISAMOS ARRUMAR ISSO */
                      return
                        throw new Error('Data de nascimento abaixo de 18 anos');

                    } else {
                      item.style.borderColor = '#61a19352';
                      spanMessage[index].style.display = 'none';
                    }

                  item.addEventListener('focusout', () => {
                    if (item.value === '') {
                      item.style.borderColor = '#fb8b77';
                      spanMessage[index].style.display = 'block';
                    } else {
                      item.style.borderColor = '#61a19352';
                      spanMessage[index].style.display = 'none';
                    }

                  });

            });





        } else {



            this.dentistaAPI.cadastrarDentista (                        
                nomeCompleto.value,
                dataNascimento.value,
                cpf.value,
                cro.value,
                especialidade.value,
                telefoneResidencial.value,
                telefoneCelular.value,
                email.value,
                rua.value,
                numero.value,
                bairro.value,
                cidade.value,
                estado.value  
            );

            this.limpaCampos();
            
        }
        




      }

 

     
         

         
 


      /**
       * Método expresso para limpar os campos do formulário de cadastro de dentista.
       * Este método privado é para ser usado expressament dentro do método 
       * validationRulerForm desta classe.
       */
      private limpaCampos(): void {

        const nomeCompleto = document.querySelector('#nomeCompleto') as HTMLInputElement;
        const dataNascimento = document.querySelector('#dataNascimento') as HTMLInputElement;
        const cpf = document.querySelector('#cpf') as HTMLInputElement;
        const cro = document.querySelector('#cro') as HTMLInputElement;
        const especialidade = document.querySelector('#especialidade') as HTMLInputElement;
        const telefoneResidencial = document.querySelector('#telefoneResidencial') as HTMLInputElement;
        const telefoneCelular = document.querySelector('#telefoneCelular') as HTMLInputElement;
        const email = document.querySelector('#email') as HTMLInputElement;
        const rua = document.querySelector('#rua') as HTMLInputElement;
        const numero = document.querySelector('#numero') as HTMLInputElement;
        const bairro = document.querySelector('#bairro') as HTMLInputElement;
        const cidade = document.querySelector('#cidade') as HTMLInputElement;
        const estado = document.querySelector('#estado') as HTMLInputElement;


        nomeCompleto.value = '';
        dataNascimento.value = '';
        cpf.value = '';
        cro.value = '';
        especialidade.value = '';
        telefoneResidencial.value = '';
        telefoneCelular.value = '';
        email.value = '';
        rua.value = '';
        numero.value = '';
        bairro.value = '';
        cidade.value = '';
        estado.value = '';

    }

 

    /**
     * Método que valida se a data de nascimento é menor que 18 anos.
     * 
     * Ele colete o valor inserido pelo usuário e a data atual do sistema.
     * É realizado um cálculo de subtração da data atual do ano de nascimento coletado, após a operação 
     * é iniciado a validação para 
     * @param input 
     */
    public checkValidationYear(input: HTMLInputElement): void {

      input.addEventListener('focusout', () => {

        const selectedDate = new Date(input.value);
        const currentDate = new Date();
    
        const diffInYears = currentDate.getFullYear() - selectedDate.getFullYear();
    
        if (diffInYears < 18) {
          alert('Você deve ter pelo menos 18 anos de idade.');
        }
      });

    }

        

}

    





 