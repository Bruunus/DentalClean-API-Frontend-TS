import { MessagesForm } from "../application/messagesForm.js";


export class Validation {

  private error: MessagesForm;
  private colorError: string;
  private colorOriginalDentist: string;

  private nomeCompleto: HTMLInputElement;
  private dataNascimento: HTMLInputElement;
  private cpf: HTMLInputElement;
  private cro: HTMLInputElement;
  private especialidade: HTMLInputElement;
  private telefoneResidencial: HTMLInputElement;
  private telefoneCelular: HTMLInputElement;
  private email: HTMLInputElement;
  private rua: HTMLInputElement;
  private numero: HTMLInputElement;
  private bairro: HTMLInputElement;
  private cidade: HTMLInputElement;
  private estado: HTMLInputElement;

  private spanNomeCompleto: HTMLSpanElement;
  private spanDataNascimento: HTMLSpanElement;
  private spanCpf: HTMLSpanElement;
  private spanCro: HTMLSpanElement;
  private spanEspecialidade: HTMLSpanElement;
  private spanTelefoneResidencial: HTMLSpanElement;
  private spanTelefoneCelular: HTMLSpanElement;
  private spanEmail: HTMLSpanElement;
  private spanRua: HTMLSpanElement;
  private spanNumero: HTMLSpanElement;
  private spanBairro: HTMLSpanElement;
  private spanCidade: HTMLSpanElement;
  private spanEstado: HTMLSpanElement;

  private formSubmit: HTMLFormElement;


  public constructor() {

      this.error = new MessagesForm();
      this.colorError = '#fb8b77';
      this.colorOriginalDentist = '#61a19352';

      this.nomeCompleto = document.querySelector('#nomeCompleto') as HTMLInputElement;
      this.dataNascimento = document.querySelector('#dataNascimento') as HTMLInputElement;
      this.cpf = document.querySelector('#cpf') as HTMLInputElement;
      this.cro = document.querySelector('#cro') as HTMLInputElement;
      this.especialidade = document.querySelector('#especialidade') as HTMLInputElement;
      this.telefoneResidencial = document.querySelector('#telefoneResidencial') as HTMLInputElement;
      this.telefoneCelular = document.querySelector('#telefoneCelular') as HTMLInputElement;
      this.email = document.querySelector('#email') as HTMLInputElement;
      this.rua = document.querySelector('#rua') as HTMLInputElement;
      this.numero = document.querySelector('#numero') as HTMLInputElement;
      this.bairro = document.querySelector('#bairro') as HTMLInputElement;
      this.cidade = document.querySelector('#cidade') as HTMLInputElement;
      this.estado = document.querySelector('#estado') as HTMLInputElement;

      this.spanNomeCompleto = document.querySelector('.container-nome-completo span') as HTMLSpanElement;
      this.spanDataNascimento = document.querySelector('.container-data-nascimento span') as HTMLSpanElement;
      this.spanCpf = document.querySelector('.container-cpf span') as HTMLSpanElement;
      this.spanCro = document.querySelector('.container-cro span') as HTMLSpanElement;
      this.spanEspecialidade = document.querySelector('.container-especialidade span') as HTMLSpanElement;
      this.spanTelefoneResidencial = document.querySelector('.container-tel-res span') as HTMLSpanElement;
      this.spanTelefoneCelular = document.querySelector('.container-tel-cel span') as HTMLSpanElement;
      this.spanEmail = document.querySelector('.container-email span') as HTMLSpanElement;
      this.spanRua = document.querySelector('.container-rua span') as HTMLSpanElement;
      this.spanNumero = document.querySelector('.container-numero span');
      this.spanBairro = document.querySelector('.container-bairro span');
      this.spanCidade = document.querySelector('.container-cidade span');
      this.spanEstado = document.querySelector('.container-estado span');


      this.formSubmit = document.querySelector('#form_cadastro_dentista');
  }


  public validationNomeCompletoDentist(): boolean  {  

    const hasNumbers = /\d/.test(this.nomeCompleto.value);

    if(this.nomeCompleto.value.length > 4) {
        return true;
    } else if (this.nomeCompleto.value === '') {
        this.error.setErrorMessageInput(this.nomeCompleto, this.spanNomeCompleto, this.colorError, 'Message: O campo não pode estar vazio');
        return false;
    }  else {
        //console.log('Nome menor que 4')
        let message = '' as string; 
        message = 'Message: Nome fornecido incorreto';
        this.error.setErrorMessageInput(this.nomeCompleto, this.spanNomeCompleto, this.colorError, message);
        return false;
    }

  }


  public validationDataNascimento(): boolean {
      const selectedDate = new Date(this.dataNascimento.value);
      const currentDate = new Date();
      const diffInYears = currentDate.getFullYear() - selectedDate.getFullYear();
      let message: string = '';
      if(this.dataNascimento.value === '') {
        message = 'Message: Obrigatório o preenchimento deste campo';
        this.error.setErrorMessageInput(this.dataNascimento, this.spanDataNascimento, this.colorError, message);
        return false;
      } else if (diffInYears < 18) {
        message = 'Message: O cadastrado deve ter idade maior que 18 anosSSS'
        this.error.setErrorMessageInput(this.dataNascimento, this.spanDataNascimento, this.colorError, message);
        return false;
      } else if (diffInYears > 70){
        message = 'Message: Idade fora do parâmetro para cadastro de dentista';
        this.error.setErrorMessageInput(this.dataNascimento, this.spanDataNascimento, this.colorError, message);
        return false;  
      }
      this.error.setRemoveMessageErrorInput(this.dataNascimento, this.spanDataNascimento, this.colorOriginalDentist); 
      return true;
  }


  public validationCpf(): boolean {
    if(this.cpf.value.length < 14) {
      this.error.setErrorMessageInput(this.cpf, this.spanCpf, this.colorError, 'Message: CPF inválido');
      return false;
    } else {
      this.error.setRemoveMessageErrorInput(this.cpf, this.spanCpf, this.colorOriginalDentist);
    }
    
    this.error.setRemoveErrorMessageInputEvent(this.cpf, this.spanCpf, this.colorOriginalDentist);
    return true;
  }


  public validationCro(): boolean {
    if(this.cro.value.length < 4) {
      this.error.setErrorMessageInput(this.cro, this.spanCro, this.colorError, 'Message: CRO inválido');
      return false
    } else {
      this.error.setRemoveMessageErrorInput(this.cro, this.spanCro, this.colorOriginalDentist);
    }
    return true;
  }


  public validationEspecialidade(): boolean {
    if(this.especialidade.value.length === 0) {
      this.error.setErrorMessageInput(this.especialidade, this.spanEspecialidade, this.colorError, 'Message: O campo não pode estar vazio')
      return false;
    } else {
      this.error.setRemoveMessageErrorInput(this.especialidade, this.spanEspecialidade, this.colorOriginalDentist);
    }
    return true;
  }
  

  public validationTelefoneResidencial(): boolean {
    if(this.telefoneResidencial.value.length < 14) {
      this.error.setErrorMessageInput(this.telefoneResidencial, this.spanTelefoneResidencial, this.colorError, 'Message: Número de telefone incorreto')
      return false;
    } else {
      this.error.setRemoveMessageErrorInput(this.telefoneResidencial, this.spanTelefoneResidencial, this.colorOriginalDentist);
    }
    return true;
  }


  public validationTelefoneCelular(): boolean {
    if(this.telefoneCelular.value.length < 16) {
      this.error.setErrorMessageInput(this.telefoneCelular, this.spanTelefoneCelular, this.colorError, 'Message: Número de celular incorreto');
      return false;
    } else {
      this.error.setRemoveMessageErrorInput(this.telefoneCelular, this.spanTelefoneCelular, this.colorOriginalDentist);
    }
    return true;
  }


  public validationEmail(): boolean {
    const regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regex2 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if(!regex1.test(this.email.value) || !regex2.test(this.email.value)) {
      let message = 'Message: E-mail inválido';
      this.error.setErrorMessageInput(this.email, this.spanEmail, this.colorError, message);
      return false;
    } else {
      this.error.setRemoveMessageErrorInput(this.email, this.spanEmail, this.colorOriginalDentist);
    }

    return true;
  }



  public validationRua(): boolean {
    if(this.rua.value.length > 2) {
      return true;
    } else if (this.rua.value === '') {
      this.error.setErrorMessageInput(this.rua, this.spanRua, this.colorError, 'Message: O campo não pode estar vazio');
      return false;
    } else {
      this.error.setErrorMessageInput(this.rua, this.spanRua, this.colorError, 'Message: Descrição de rua incorreta');
      return false;
    }
  }


public validationNumero(): boolean {
  if(this.numero.value === '') {
    this.error.setErrorMessageInput(this.numero, this.spanNumero, this.colorError, 'Message: O campo não pode estar vazio');
    return false;
  } else {
    this.error.setRemoveMessageErrorInput(this.numero, this.spanNumero, this.colorOriginalDentist);
    return true;
  }
}





public validationBairro(): boolean {
  if(this.bairro.value === '') {
    this.error.setErrorMessageInput(this.bairro, this.spanBairro, this.colorError, 'Message: O campo não pode estar vazio');
    return false;
  } else {
    this.error.setRemoveMessageErrorInput(this.bairro, this.spanBairro, this.colorOriginalDentist);
    return true;
  }
}


public validationCidade(): boolean {
  if(this.cidade.value === '') {
    this.error.setErrorMessageInput(this.cidade, this.spanCidade, this.colorError, 'Message: O campo não pode estar vazio');
    return false;
  } else {
    this.error.setRemoveMessageErrorInput(this.cidade, this.spanCidade, this.colorOriginalDentist);
    return true;
  }
}


public validationEstado(): boolean {
  if(this.estado.value === '') {
    this.error.setErrorMessageInput(this.estado, this.spanEstado, this.colorError, 'Message: O campo não pode estar vazio');
    return false;
  } else {
    this.error.setRemoveMessageErrorInput(this.estado, this.spanEstado, this.colorOriginalDentist);
    return true;
  }
}
 








       



}