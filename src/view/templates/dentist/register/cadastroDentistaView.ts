import { CadastroController } from "../../../../controller/cadastroController.js";
import { ErrorMessageForm } from "../../../../module/errorMessageForm.js";
import { Validation } from "../../../../module/validationForm.js";
import { WarningForms } from "../../../../module/warningForms.js";
import { MaskForm } from "../../../../module/maskForm.js";

export class CadastroDentistaView {


    private error: ErrorMessageForm;
    private dentistaAPI: CadastroController;
    private maskForm: MaskForm;
    private validationForm: Validation;


    private inputNomeCompleto: HTMLInputElement;

    private elementDOM: HTMLElement;

    private static nomeCompleto: HTMLInputElement = document.querySelector('#nomeCompleto') as HTMLInputElement;

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
        this.error = new ErrorMessageForm();
        this.dentistaAPI = new CadastroController();
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
                        <span id="spanNomeCompletoDentist" class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-md-6 col-sm-12 container-data-nascimento"> 
                        <label for="dataNascimento" class="label-form">Data de nascimento</label>
                        <input type="date" name="dataNascimento" id="dataNascimento" class="form-control form-input required">
                        <span id="spanDataNascimentoDentist" class="spanMessage">O campo não pode estar vazio</span>
                    </div>
                    
                    <div class="form-group col-md-4 col-sm-12 container-cpf"> 
                        <label for="cpf" class="label-form">CPF</label>
                        <input type="text" autocomplete="off" name="cpf" id="cpf" class="form-control form-input cpfInputFormDentist required" maxlength="14">
                        <span id="spanCpf" class="spanMessage">O campo não pode estar vazio</span>
                    </div>
                    
                    <div class="form-group col-md-4 col-sm-12 container-cro">
                        <label for="cro" class="label-form">CRO</label>
                        <input type="text" name="cro" id="cro" class="form-control form-input required" maxlength="4">
                        <span id="spanCro" class="spanMessage">O campo não pode estar vazio</span>
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
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-tel-res"> 
                        <label for="telefoneResidencial" class="label-form">Telefone Residencial</label>
                        <input type="text" name="telefoneResidencial" id="telefoneResidencial" class="form-control form-input required" maxlength="14">
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-tel-cel"> 
                        <label for="telefoneCelular" class="label-form">Telefone Celular</label>
                        <input type="text" name="telefoneCelular" id="telefoneCelular" class="form-control form-input required" maxlength="16">
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-email"> 
                        <label for="email" class="label-form">E-mail</label>
                        <input type="text" name="email" id="email" maxlength="35" class="form-control form-input required" maxlength="31">
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-md-6 col-sm-12 container-rua"> 
                        <label for="rua" class="label-form">Rua</label>
                        <input type="text" name="rua" id="rua" maxlength="20" class="form-control form-input required" maxlength="25">
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-md-6 col-sm-12 container-numero"> 
                        <label for="numero" class="label-form">Número</label>
                        <input type="text" name="numero" id="numero" maxlength="6" class="form-control form-input required" >
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-bairro"> 
                        <label for="bairro" class="label-form">Bairro</label>
                        <input type="text" name="bairro" id="bairro" maxlength="24" class="form-control form-input required">
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div class="form-group col-md-4">

                    <div class="form-group col-md-4 col-sm-12 container-cidade"> 
                        <label for="cidade" class="label-form">Cidade</label>
                        <input type="text" name="cidade" id="cidade" maxlength="24" class="form-control form-input required">
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-estado"> 
                        <label for="estado" class="label-form">Estado</label>
                        <input type="text" name="estado" maxlength="2" id="estado" class="form-control form-input required">
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-12">
                        <div>
                            <button type="submit" class="btn btn-secondary">Salvar</button>
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
                //const especialidade = especialidadeSelect?.value;                
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
    


    private validation(
        nomeForm: HTMLInputElement, dataForm: HTMLInputElement, cpfForm: HTMLInputElement, croForm: HTMLInputElement,
        especialidadeForm: HTMLInputElement, telResForm: HTMLInputElement, telCelForm: HTMLInputElement, 
        emailForm: HTMLInputElement, ruaForm: HTMLInputElement, numeroForm: HTMLInputElement, bairroForm: HTMLInputElement,
        cidadeForm: HTMLInputElement, estadoForm: HTMLInputElement): boolean {

        const validation = new Validation();

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
            console.log('Dados não aceitos !!!')
            return false;
            
        } else if (nome && data && cpf && cro && especialidade && telRes && telCel && email &&
            rua && numero && bairro && cidade && estado) {

            alert('Dados aceitos !!!');
            


        

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



            console.log (                        
                nomeForm.value, "\n",
                dataForm.value, "\n",
                cpfForm.value, "\n",
                croForm.value, "\n",
                especialidadeForm.value, "\n",
                telResForm.value, "\n",
                telCelForm.value, "\n",
                emailForm.value, "\n",
                ruaForm.value, "\n",
                numeroForm.value, "\n",
                bairroForm.value, "\n",
                cidadeForm.value, "\n",
                estadoForm.value  
            );


            this.limpaCampos();
            location.reload(); 



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

        const warning = new WarningForms();

        warning.warningNomeCompleto(nomeCompleto);
        warning.warningDataDeNascimento(dataNascimento);
        warning.warningCpf(cpf);
        warning.warningCro(cro);
        warning.warningEspecialidade(especialidade);
        warning.warningTelefoneResidencial(telefoneResidencial);
        warning.warningTelefoneCelular(telefoneCelular);
        warning.warningEmail(email);
        warning.warningRua(rua);
        warning.warningNumero(numero);
        warning.warningBairro(bairro);
        warning.warningCidade(cidade);
        warning.warningEstado(estado);
   
    }



    private formProcess(event: Event) {
        event.preventDefault();
    }


    render(): void {

        this.elementDOM.innerHTML = this.templateCadastroDentista();
        this.mask();
        this.warning();
        this.eventSubmit();
        const formSubmit = document.querySelector('#form_cadastro_dentista');
        if(!formSubmit) {
            formSubmit.addEventListener('submit', this.formProcess.bind(this));
        }
    }




}