import { CadastroController } from "../../../../controller/cadastroController.js";
import { MessagesForm } from "../../../../module/messagesForm.js";
import { Validation } from "../../../../module/validationForm.js";
import { WarningForms } from "../../../../module/warningForms.js";
import { MaskForm } from "../../../../module/maskForm.js";
export class CadastroDentistaView {
    constructor(renderizadorId) {
        this.error = new MessagesForm();
        this.dentistaAPI = new CadastroController();
        this.maskForm = new MaskForm();
        this.validationForm = new Validation();
        this.colorError = '#fb8b77';
        this.colorOriginal = '#61a19352';
        this.elementDOM = document.querySelector(renderizadorId);
        this.spanNomeCompleto = document.querySelector('#nomeCompleto');
        this.spanNomeCompleto = document.querySelector('.container-nome-completo span');
        this.spanCro = document.querySelector('.container-cro span');
        this.spanTelRes = document.querySelector('#container-register-dentist .container-tel-res span');
    }
    templateCadastroDentista() {
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
    eventSubmit() {
        const formSubmit = document.querySelector('#form_cadastro_dentista');
        if (!formSubmit) {
            console.error("Problema encontrado ao renderizar formulário.");
            return;
        }
        else {
            formSubmit.addEventListener('submit', (event) => {
                event.preventDefault();
                const nomeCompleto = formSubmit.querySelector('#nomeCompleto');
                const dataNascimento = formSubmit.querySelector('#dataNascimento');
                const cpf = formSubmit.querySelector('#cpf');
                const cro = formSubmit.querySelector('#cro');
                const especialidade = document.querySelector('#especialidade');
                const telefoneResidencial = formSubmit.querySelector('#telefoneResidencial');
                const telefoneCelular = formSubmit.querySelector('#telefoneCelular');
                const email = formSubmit.querySelector('#email');
                const rua = formSubmit.querySelector('#rua');
                const numero = formSubmit.querySelector('#numero');
                const bairro = formSubmit.querySelector('#bairro');
                const cidade = formSubmit.querySelector('#cidade');
                const estado = formSubmit.querySelector('#estado');
                this.validation(nomeCompleto, dataNascimento, cpf, cro, especialidade, telefoneResidencial, telefoneCelular, email, rua, numero, bairro, cidade, estado);
            });
        }
    }
    mask() {
        const nome = document.querySelector('#nomeCompleto');
        const cpf = document.querySelector('#cpf');
        const cro = document.querySelector('#cro');
        const telefoneResidencial = document.querySelector('#telefoneResidencial');
        const telefoneCelular = document.querySelector('#telefoneCelular');
        const rua = document.querySelector('#rua');
        const numero = document.querySelector('#numero');
        const bairro = document.querySelector('#bairro');
        const cidade = document.querySelector('#cidade');
        const estado = document.querySelector('#estado');
        const noNumbersAndCharacters = [nome, bairro, cidade, estado];
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
    limpaCamposDentista() {
        const nomeCompleto = document.querySelector('#nomeCompleto');
        const dataNascimento = document.querySelector('#dataNascimento');
        const cpf = document.querySelector('#cpf');
        const cro = document.querySelector('#cro');
        const especialidade = document.querySelector('#especialidade');
        const telefoneResidencial = document.querySelector('#telefoneResidencial');
        const telefoneCelular = document.querySelector('#telefoneCelular');
        const email = document.querySelector('#email');
        const rua = document.querySelector('#rua');
        const numero = document.querySelector('#numero');
        const bairro = document.querySelector('#bairro');
        const cidade = document.querySelector('#cidade');
        const estado = document.querySelector('#estado');
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
    validation(nomeForm, dataForm, cpfForm, croForm, especialidadeForm, telResForm, telCelForm, emailForm, ruaForm, numeroForm, bairroForm, cidadeForm, estadoForm) {
        const validation = new Validation();
        const alert = this.error;
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
        if (!nome || !data || !cpf || !cro || !especialidade || !telRes || !telCel || !email ||
            !rua || !numero || !bairro || !cidade || !estado) {
            event.preventDefault();
            alert.alertError();
            return false;
        }
        else if (nome && data && cpf && cro && especialidade && telRes && telCel && email &&
            rua && numero && bairro && cidade && estado) {
            this.dentistaAPI.cadastrarDentista(nomeForm.value, dataForm.value, cpfForm.value, croForm.value, especialidadeForm.value, telResForm.value, telCelForm.value, emailForm.value, ruaForm.value, numeroForm.value, bairroForm.value, cidadeForm.value, estadoForm.value);
            this.limpaCamposDentista();
            alert.alertSuccess('Dados salvos com sucesso!');
            return true;
        }
        ;
    }
    ;
    warning() {
        const nomeCompleto = document.querySelector('#nomeCompleto');
        const dataNascimento = document.querySelector('#dataNascimento');
        const cpf = document.querySelector('#cpf');
        const cro = document.querySelector('#cro');
        const especialidade = document.querySelector('#especialidade');
        const telefoneResidencial = document.querySelector('#telefoneResidencial');
        const telefoneCelular = document.querySelector('#telefoneCelular');
        const email = document.querySelector('#email');
        const rua = document.querySelector('#rua');
        const numero = document.querySelector('#numero');
        const bairro = document.querySelector('#bairro');
        const cidade = document.querySelector('#cidade');
        const estado = document.querySelector('#estado');
        const spanNomeCompleto = document.querySelector('.container-nome-completo span');
        const spanDataNascimento = document.querySelector('.container-data-nascimento span');
        const spanCpf = document.querySelector('.container-cpf span');
        const spanCro = document.querySelector('.container-cro span');
        const spanEspecialidade = document.querySelector('.container-especialidade span');
        const spanTelefoneResidencial = document.querySelector('.container-telefone-residencial span');
        const spanTelefoneCelular = document.querySelector('.container-telefone-celular span');
        const spanemail = document.querySelector('.container-email span');
        const spanRua = document.querySelector('.container-rua span');
        const spanNumero = document.querySelector('.container-numero span');
        const spanBairro = document.querySelector('.container-bairro span');
        const spanCidade = document.querySelector('.container-cidade span');
        const spanEstado = document.querySelector('.container-estado span');
        const warning = new WarningForms();
        warning.warningNomeCompleto(nomeCompleto, spanNomeCompleto);
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
    formProcess(event) {
        event.preventDefault();
    }
    render() {
        const formSubmit = document.querySelector('#form_cadastro_dentista');
        this.elementDOM.innerHTML = this.templateCadastroDentista();
        this.mask();
        this.warning();
        this.eventSubmit();
        if (formSubmit) {
            formSubmit.addEventListener('submit', this.formProcess.bind(this));
        }
    }
}
