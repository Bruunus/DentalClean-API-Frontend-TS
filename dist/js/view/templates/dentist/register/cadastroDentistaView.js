import { CadastroController } from "../../../../controller/cadastroController.js";
import { ErrorAndWarningSystem } from "../../../../module/errorAndWarningSystem.js";
import { ValidationAndMask } from "../../../../module/validationAndMask.js";
export class CadastroDentistaView {
    constructor(renderizadorId) {
        this.error = new ErrorAndWarningSystem();
        this.dentistaAPI = new CadastroController();
        this.colorError = '#fb8b77';
        this.colorOriginal = '#61a19352';
        this.elementDOM = document.querySelector(renderizadorId);
        this.spanCpf = document.querySelector('.container-cpf span');
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
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>
                    
                    <div class="form-group col-md-4 col-sm-12 container-cro">
                        <label for="cro" class="label-form">CRO</label>
                        <input type="text" name="cro" id="cro" class="form-control form-input required" maxlength="4">
                        <span class="spanMessage">O campo não pode estar vazio</span>
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
                console.log('Nome completo: ' + nomeCompleto.value +
                    '\nData nascimento: ' + dataNascimento.value +
                    '\nCPF: ' + cpf.value +
                    '\nCRO: ' + cro.value +
                    '\nEspecialidade: ' + especialidade.value +
                    '\nTelefone Res: ' + telefoneResidencial.value +
                    '\nTelefone Cel: ' + telefoneCelular.value +
                    '\nE-mail: ' + email.value +
                    '\nRua: ' + rua.value +
                    '\nNúmero: ' + numero.value + '  (' + typeof numero + ')' +
                    '\nBairro: ' + bairro.value +
                    '\nCidade: ' + cidade.value +
                    '\nEstado: ' + estado.value);
                const validationAndMask = new ValidationAndMask();
                validationAndMask.validationRulerForm(nomeCompleto, dataNascimento, cpf, cro, especialidade, telefoneResidencial, telefoneCelular, email, rua, numero, bairro, cidade, estado);
                const selectedDate = new Date(dataNascimento.value);
                const currentDate = new Date();
                const diffInYears = currentDate.getFullYear() - selectedDate.getFullYear();
                const spanDataNascimento = document.querySelector('.container-data-nascimento .spanMessage');
                const spanNomeCompleto = document.querySelector('.container-nome-completo span');
                const spanEmail = document.querySelector('.container-email span');
                const regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                const regex2 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                let messageServer = 'Erro: Erro de parâmetro ou campo vazio';
                if (nomeCompleto.value.length < 4) {
                    this.error.setErrorMessage(nomeCompleto, spanNomeCompleto, this.colorError, messageServer);
                }
                else if (diffInYears < 18 || diffInYears > 70) {
                    this.error.setErrorMessage(dataNascimento, spanDataNascimento, this.colorError, messageServer);
                }
                else if (!regex1.test(email.value) || !regex2.test(email.value)) {
                    this.error.setErrorMessage(email, spanEmail, this.colorError, messageServer);
                }
                else {
                    this.dentistaAPI.cadastrarDentista(nomeCompleto.value, dataNascimento.value, cpf.value, cro.value, especialidade.value, telefoneResidencial.value, telefoneCelular.value, email.value, rua.value, numero.value, bairro.value, cidade.value, estado.value);
                    this.limpaCampos();
                    location.reload();
                }
            });
        }
    }
    limpaCampos() {
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
    maskAndValidation() {
        const mask = new ValidationAndMask();
        const validation = mask;
        const nomeCompleto = document.querySelector('#nomeCompleto');
        const dataNascimento = document.querySelector('#dataNascimento');
        const cpf = document.querySelector('#cpf');
        const telefoneResidencial = document.querySelector('#telefoneResidencial');
        const telefonecelular = document.querySelector('#telefoneCelular');
        const cro = document.querySelector('#cro');
        const especialidade = document.querySelector('#especialidade');
        const email = document.querySelector('#email');
        const numero = document.querySelector('#numero');
        const rua = document.querySelector('#rua');
        const bairro = document.querySelector('#bairro');
        const cidade = document.querySelector('#cidade');
        const estado = document.querySelector('#estado');
        mask.bloquearNumerosECaracteresMask(nomeCompleto);
        mask.characterLowerCaseMask(nomeCompleto);
        validation.nomeCompletoValidator(nomeCompleto);
        validation.datadeNascimentoValidator(dataNascimento);
        validation.removeError(dataNascimento, this.spanCpf);
        mask.cpfMask(cpf);
        mask.telefoneResidencialMask(telefoneResidencial);
        mask.bloquearLetrasECaracteresMask(telefoneResidencial);
        mask.telefonecelularMask(telefonecelular);
        mask.bloquearLetrasECaracteresMask(telefonecelular);
        mask.bloquearLetrasECaracteresMask(cro);
        validation.emailValidator(email);
        mask.bloquearLetrasECaracteresMask(numero);
        mask.bloquearNumerosECaracteresMask(rua);
        mask.bloquearNumerosECaracteresMask(bairro);
        mask.bloquearNumerosECaracteresMask(cidade);
        mask.bloquearNumerosECaracteresMask(estado);
        mask.upperCaseLongMask(estado);
    }
    formProcess(event) {
        event.preventDefault();
    }
    render() {
        this.elementDOM.innerHTML = this.templateCadastroDentista();
        this.maskAndValidation();
        this.eventSubmit();
        const formSubmit = document.querySelector('#form_cadastro_dentista');
        if (!formSubmit) {
            formSubmit.addEventListener('submit', this.formProcess.bind(this));
        }
    }
}
