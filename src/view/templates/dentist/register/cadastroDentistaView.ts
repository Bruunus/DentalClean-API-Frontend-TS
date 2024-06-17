import { CadastroService } from "../../../../service/cadastroService.js";
import { MessagesForm } from "../../../../module/application/messagesForm.js";
import { Validation } from "../../../../module/validation/validationForm.js";
import { WarningForms } from "../../../../module/validation/warningForms.js";
import { MaskForm } from "../../../../module/maskForm.js";


export class CadastroDentistaView {


    private error: MessagesForm;
    private dentistaAPI: CadastroService;
    private maskForm: MaskForm;
    private validationForm: Validation;


    private inputNomeCompleto: HTMLInputElement;

    private elementDOM: HTMLElement;


    private spanNomeCompleto: HTMLSpanElement;
    private spanCpf: HTMLSpanElement;
    private spanCro: HTMLSpanElement;
    private spanEspecialidade: HTMLSpanElement;
    private spanTelRes: HTMLSpanElement;
    private spanTelCel: HTMLSpanElement;
    private spanEmail: HTMLSpanElement;
    private spanRua: HTMLSpanElement;
    private spanNumero: HTMLSpanElement;
    private spanBairro: HTMLSpanElement;
    private spanCidade: HTMLSpanElement;
    private spanEstado: HTMLSpanElement;


    private colorError: string;
    private colorOriginal: string;
    

  
    /**
     * O Construtor precisa de um id em uma tag html para poder renderizar o formulário.
     */
    public constructor(renderizadorId: string) {
        this.error = new MessagesForm();
        this.dentistaAPI = new CadastroService();
        this.maskForm = new MaskForm();
        this.validationForm = new Validation();

        this.colorError = '#fb8b77';
        this.colorOriginal = '#61a19352';

        this.elementDOM = document.querySelector(renderizadorId);

        this.spanNomeCompleto = document.querySelector('#nomeCompleto') as HTMLInputElement;

        this.spanNomeCompleto = document.querySelector('.container-nome-completo span') as HTMLSpanElement;
        this.spanCro = document.querySelector('.container-cro span') as HTMLSpanElement;
        this.spanTelRes = document.querySelector('#container-register-dentist .container-tel-res span') as HTMLSpanElement;
       
        
    }


    private templateCadastroDentista(): string { 

        return `           

            <div class="div_titulo_dentist div_titulo_dentist_register">
                <h4 class="no-select">Cadastro Dentista</h4>
            </div>


            <div id="container-register-dentist">

                <form id="form_cadastro_dentista" class="row"> 
                    <!-- col 1 -->

                    <div class="form-group col-md-6 col-sm-12 container-nome-completo">                        
                        <label for="nomeCompleto" class="label-form">Nome completo (ou abreviado)</label>
                        <input type="text" name="nomeCompleto" id="nomeCompleto" class="form-control form-input required" maxlength="20">                        
                        <span class="spanMessage"></span>
                    </div>

                    <div class="form-group col-md-6 col-sm-12 container-data-nascimento"> 
                        <label for="dataNascimento" class="label-form">Data de nascimento</label>
                        <input type="date" name="dataNascimento" id="dataNascimento" class="form-control form-input required">
                        <span class="spanMessage"></span>
                    </div>
                    
                    <div class="form-group col-md-4 col-sm-12 container-cpf"> 
                        <label for="cpf" class="label-form">CPF</label>
                        <input type="text" autocomplete="off" name="cpf" id="cpf" class="form-control form-input cpfInputFormDentist required" maxlength="14">
                        <span class="spanMessage"></span>
                    </div>
                    
                    <div class="form-group col-md-4 col-sm-12 container-cro">
                        <label for="cro" class="label-form">CRO</label>
                        <input type="text" name="cro" id="cro" class="form-control form-input required" maxlength="4">
                        <span class="spanMessage"></span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-especialidade"> 
                        <label for="especialidade" class="label-form">Especialidade</label>
                        <select id="especialidade" class="form-control select-form required">
                            <option value="" disabled selected>Selecione</option>
                            <option value="Cirurgia">Cirurgia</option>
                            <option value="Cirurgia Bucomaxilofacial">Cirurgia Bucomaxilofacial</option>
                            <option value="Dentística">Dentística</option>
                            <option value="Endodontia">Endodontia</option>
                            <option value="Odontopediatria">Odontopediatria</option>
                            <option value="Prótese Dentária">Prótese Dentária</option>
                            <option value="Periodontia">Periodontia</option>
                            <option value="Odontogeriatria">Odontogeriatria</option>
                            <option value="Estética">Estética</option>
                        </select>
                        <span class="spanMessage"></span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-tel-res"> 
                        <label for="telefoneResidencial" class="label-form">Telefone Residencial</label>
                        <input type="text" name="telefoneResidencial" id="telefoneResidencial" class="form-control form-input required" maxlength="14">
                        <span class="spanMessage"></span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-tel-cel"> 
                        <label for="telefoneCelular" class="label-form">Telefone Celular</label>
                        <input type="text" name="telefoneCelular" id="telefoneCelular" class="form-control form-input required" maxlength="16">
                        <span class="spanMessage"></span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-email"> 
                        <label for="email" class="label-form">E-mail</label>
                        <input type="text" name="email" id="email" maxlength="35" class="form-control form-input required" maxlength="31">
                        <span class="spanMessage"></span>
                    </div>

                    <div class="form-group col-md-6 col-sm-12 container-rua"> 
                        <label for="rua" class="label-form">Rua</label>
                        <input type="text" name="rua" id="rua" maxlength="20" class="form-control form-input required" maxlength="25">
                        <span class="spanMessage"></span>
                    </div>

                    <div class="form-group col-md-6 col-sm-12 container-numero"> 
                        <label for="numero" class="label-form">Número</label>
                        <input type="text" name="numero" id="numero" maxlength="6" class="form-control form-input required" >
                        <span class="spanMessage"></span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-bairro"> 
                        <label for="bairro" class="label-form">Bairro</label>
                        <input type="text" name="bairro" id="bairro" maxlength="24" class="form-control form-input required">
                        <span class="spanMessage"></span>
                    </div class="form-group col-md-4">

                    <div class="form-group col-md-4 col-sm-12 container-cidade"> 
                        <label for="cidade" class="label-form">Cidade</label>
                        <input type="text" name="cidade" id="cidade" maxlength="24" class="form-control form-input required">
                        <span class="spanMessage"></span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-estado"> 
                        <label for="estado" class="label-form">Estado</label>
                        <input type="text" name="estado" maxlength="2" id="estado" class="form-control form-input required">
                        <span class="spanMessage"></span>
                    </div>

                    <div class="form-group col-12">
                        <div>
                            <button type="submit" id="btn-cadastro-dentista" class="btn btn-secondary">Salvar</button>
                        </div>
                    </div>

                </form> 

            </div>

        `;

    }



    private eventSubmit(): void {

        const formSubmit = document.querySelector('#form_cadastro_dentista');
        
        if(!formSubmit) {
            console.error("Problema encontrado ao renderizar formulário.");
            return;
        } else {
            
            formSubmit.addEventListener('submit', (event) => {
                event.preventDefault();

                const nomeCompleto = (formSubmit.querySelector('#nomeCompleto') as HTMLInputElement);
                const dataNascimento = (formSubmit.querySelector('#dataNascimento') as HTMLInputElement);
                const cpf = (formSubmit.querySelector('#cpf') as HTMLInputElement);
                const cro = (formSubmit.querySelector('#cro') as HTMLInputElement);                
                const especialidade = document.querySelector('#especialidade') as HTMLInputElement;          
                const telefoneResidencial = (formSubmit.querySelector('#telefoneResidencial') as HTMLInputElement);
                const telefoneCelular = (formSubmit.querySelector('#telefoneCelular') as HTMLInputElement);
                const email = (formSubmit.querySelector('#email') as HTMLInputElement);
                const rua = (formSubmit.querySelector('#rua') as HTMLInputElement);
                const numero = (formSubmit.querySelector('#numero') as HTMLInputElement);
                const bairro = (formSubmit.querySelector('#bairro') as HTMLInputElement);
                const cidade = (formSubmit.querySelector('#cidade') as HTMLInputElement);
                const estado = (formSubmit.querySelector('#estado') as HTMLInputElement);

                this.validation(nomeCompleto,dataNascimento,cpf,cro,especialidade,telefoneResidencial,telefoneCelular,
                    email,rua,numero,bairro,cidade,estado);

            });












            
        }
    }


    private mask(): void {

        const nome = document.querySelector('#nomeCompleto') as HTMLInputElement;
        const cpf = document.querySelector('#cpf') as HTMLInputElement;
        const cro = document.querySelector('#cro') as HTMLInputElement;
        const telefoneResidencial = document.querySelector('#telefoneResidencial') as HTMLInputElement;
        const telefoneCelular = document.querySelector('#telefoneCelular') as HTMLInputElement;
        const rua = document.querySelector('#rua') as HTMLInputElement;
        const numero = document.querySelector('#numero') as HTMLInputElement;
        const bairro = document.querySelector('#bairro') as HTMLInputElement;
        const cidade = document.querySelector('#cidade') as HTMLInputElement;
        const estado = document.querySelector('#estado') as HTMLInputElement;
        
        const noNumbersAndCharacters = [nome, bairro, cidade, estado] ;
        const upperCaseCharacters = [estado];
        const characterLowerCase = [nome, rua, bairro, cidade, estado];
        const noWordsAndCharacters = [cro, numero, telefoneResidencial, telefoneCelular];

        this.maskForm.blockNumbersAnsCharacters(noNumbersAndCharacters);
        this.maskForm.upperCaseLongMask(upperCaseCharacters);
        this.maskForm.characterLowerCaseMask(characterLowerCase);
        this.maskForm.noWordsAndCharacters(noWordsAndCharacters); 


        this.maskForm.cpfMask(cpf);
        this.maskForm.telefoneResidencialMask(telefoneResidencial);
        this.maskForm.telefonecelularMask(telefoneCelular);


        
    }


       /**
       * Método expresso para limpar os campos do formulário de cadastro de dentista.
       * Este método privado é para ser usado expressament dentro do método 
       * validationRulerForm desta classe.
       */
    public limpaCamposDentista(): void {

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
    


    private validation(
        nomeForm: HTMLInputElement, dataForm: HTMLInputElement, cpfForm: HTMLInputElement, croForm: HTMLInputElement,
        especialidadeForm: HTMLInputElement, telResForm: HTMLInputElement, telCelForm: HTMLInputElement, 
        emailForm: HTMLInputElement, ruaForm: HTMLInputElement, numeroForm: HTMLInputElement, bairroForm: HTMLInputElement,
        cidadeForm: HTMLInputElement, estadoForm: HTMLInputElement): boolean {

        const validation = new Validation();
        const alert = this.error;   // Atribuição para corrigir o nome

        const nome = validation.validationNomeCompletoDentist();
        const data = validation.validationDataNascimento();
        const cpf = validation.validationCpf();
        const cro = validation.validationCro();
        const especialidade = validation.validationEspecialidade();
        const telRes = validation.validationTelefoneResidencial();
        const telCel = validation.validationTelefoneCelular();
        const email = validation.validationEmail();
        const rua = validation.validationRua();
        const numero = validation.validationNumero();
        const bairro = validation.validationBairro();
        const cidade = validation.validationCidade();
        const estado = validation.validationEstado();


        if(!nome || !data || !cpf || !cro || !especialidade || !telRes || !telCel || !email ||
            !rua || !numero || !bairro || !cidade || !estado) {
            event.preventDefault();
            alert.alertError();
            return false;
            
        } else if (nome && data && cpf && cro && especialidade && telRes && telCel && email &&
            rua && numero && bairro && cidade && estado) 
        {
            this.dentistaAPI.cadastrarDentista (                        
                nomeForm.value,
                dataForm.value,
                cpfForm.value,
                croForm.value,
                especialidadeForm.value,
                telResForm.value,
                telCelForm.value,
                emailForm.value,
                ruaForm.value,
                numeroForm.value,
                bairroForm.value,
                cidadeForm.value,
                estadoForm.value  
            );

            this.limpaCamposDentista();
            alert.alertSuccess('Dados salvos com sucesso!');
            return true;
            
        };
         
         
        
        



    };



    private warning(): void {

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

        const spanNomeCompleto = document.querySelector('.container-nome-completo span') as HTMLSpanElement;
        const spanDataNascimento = document.querySelector('.container-data-nascimento span') as HTMLSpanElement;
        const spanCpf = document.querySelector('.container-cpf span') as HTMLSpanElement;
        const spanCro = document.querySelector('.container-cro span') as HTMLSpanElement;
        const spanEspecialidade = document.querySelector('.container-especialidade span') as HTMLSpanElement;
        const spanTelefoneResidencial = document.querySelector('.container-telefone-residencial span') as HTMLSpanElement; 
        const spanTelefoneCelular = document.querySelector('.container-telefone-celular span') as HTMLSpanElement;
        const spanemail = document.querySelector('.container-email span') as HTMLSpanElement; 
        const spanRua = document.querySelector('.container-rua span') as HTMLSpanElement;
        const spanNumero = document.querySelector('.container-numero span') as HTMLSpanElement;
        const spanBairro = document.querySelector('.container-bairro span') as HTMLSpanElement;
        const spanCidade = document.querySelector('.container-cidade span') as HTMLSpanElement;
        const spanEstado = document.querySelector('.container-estado span') as HTMLSpanElement;

        const warning = new WarningForms();

        warning.warningNomeCompleto(nomeCompleto, spanNomeCompleto) ;
        warning.warningDataDeNascimento(dataNascimento, spanDataNascimento);
        warning.warningCpf(cpf, spanCpf);
        warning.warningCro(cro, spanCro);
        warning.warningEspecialidade(especialidade, spanEspecialidade);
        warning.warningTelefoneResidencial(telefoneResidencial, spanTelefoneResidencial);
        warning.warningTelefoneCelular(telefoneCelular, spanTelefoneCelular);
        warning.warningEmail(email, spanemail);
        warning.warningRua(rua, spanRua);
        warning.warningNumero(numero, spanNumero);
        warning.warningBairro(bairro, spanBairro);
        warning.warningCidade(cidade, spanCidade);
        warning.warningEstado(estado, spanEstado);
   
    }



    private formProcess(event: Event) {
        event.preventDefault();
    }


    render(): void {
        const formSubmit = document.querySelector('#form_cadastro_dentista');
        this.elementDOM.innerHTML = this.templateCadastroDentista();
        this.mask();
        this.warning();
        this.eventSubmit();
        
        if(formSubmit) {
            formSubmit.addEventListener('submit', this.formProcess.bind(this));
        }
    }




}