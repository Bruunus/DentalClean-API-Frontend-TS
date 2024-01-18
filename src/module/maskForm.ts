export class MaskForm {




    public blockNumbersAnsCharacters(inputs: HTMLInputElement[]): void {
        inputs.forEach((input) => {
          input.addEventListener('keydown', (event) => {
            const key = event.key;
            // Impedir a digitação de números e caracteres não alfabéticos, exceto o espaço
            if (!/[a-zA-ZÀ-ÖØ-öø-ÿĀ-žŁ-őŒ-œƒ ]/.test(key)) {
              event.preventDefault();
            }
          });
        });
    }


    /**
   * Método que transforma todos os caracteres em maiúsculo.
   */
    public upperCaseLongMask(inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
      input.addEventListener('focusout', () => {
        input.value = input.value.toUpperCase();
      });
    });
  }


  /**
     * Método de máscara para impedir digitação de letras e caracteres
     * no campo. 
     * @param input 
     */
  public noWordsAndCharacters(inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
      input.addEventListener('keypress', (event) => {
          const key = event.key;
          /* impedindo digitação de caracteres*/
          if(!/^\d$/.test(key) || key === '¨' || key === '*') {
              event.preventDefault();
          }
      });
    });
  };




  public characterLowerCaseMask(inputs: HTMLInputElement[]): void {

    inputs.forEach((input) => {    
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
    });
  };
  


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
  }



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


}