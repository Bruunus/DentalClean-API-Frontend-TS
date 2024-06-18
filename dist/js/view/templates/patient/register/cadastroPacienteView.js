import { CadastroService } from "../../../../service/cadastroService.js";
export class CadastroPacienteView {
    constructor(renderizadorId) {
        this.pacienteAPI = new CadastroService();
        this.elementDOM = document.querySelector(renderizadorId);
    }
    templatePaciente() {
        return `
        
            <div class="div_titulo_dentist div_titulo_patient_register">
                <h4 class="no-select">Cadastro Paciente</h4>
            </div>


            <div id="container-register-patient" style="border 0.5px solid lightgray">

                <form id="form_cadastro_paciente" class="row">

                    <div class="form-group col-md-6 col-sm-12 container-nome-completo">  
                        <label for="nomeCompleto">Nome completo</label>
                        <input type="text" name="nomeCompleto" id="nomeCompleto" class="form-control form-input required" maxlength="20">
                        <span class="spanMessage"></span>
                    </div>

                    <div class="form-group col-md-6 col-sm-12 container-data-nascimento"> 
                        <label for="dataNascimento" class="label-form">Data de nascimento</label>
                        <input type="date" name="dataNascimento" id="dataNascimento" class="form-control form-input required">
                        <span class="spanMessage"></span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-sexo"> 
                        <label for="sexo" class="label-form">Sexo</label>
                        <select id="sexo" class="form-control select-form required">
                            <option value="" disabled selected>Selecione</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outros">Outros</option>
                        </select>
                        <span class="spanMessage"></span>
                    </div>


                    <div class="form-group col-md-4 col-sm-12 container-email"> 
                        <label for="email" class="label-form">E-mail</label>
                        <input type="text" name="email" id="email" maxlength="35" class="form-control form-input required" maxlength="31">
                        <span class="spanMessage"></span>
                    </div>

 
                    <div class="form-group col-md-4 col-sm-12 container-convenio"> 
                        <label for="convenio" class="label-form">Convênio</label>
                        <select id="convenio" class="form-control select-form required">
                            <option value="" disabled selected>Selecione</option>
                            <option value="amilDental">Amil Dental</option>

                            <option value="bradescoDental">Bradesco Dental</option>
                            <option value="dentalUni">Dental Uni</option>
                            <option value="odontoprev">Odontoprev</option>
                            <option value="sulamericaOdonto">Unimed Odonto</option>
                            <option value="unidemOdonto">Prótese Dentária</option>
                            <option value="portoSeguroOdontologico">Porto Seguro Odontológico</option>
                            <option value="dentalEstetica">Dental Estética</option>
                            <option value="Estética">Estética</option>
                            <option value="interodonto">Interodonto</option>
                            <option value="prodent">Prodent</option>
                        </select>
                        <span class="spanMessage"></span>
                    </div>
                    
                     <div class="form-group col-md-4 col-sm-12 container-num-carteirinha"> 
                        <label for="numCarteirinha" class="label-form">Número Carteirinha</label>
                        <input type="text" name="numCarteirinha" id="numCarteirinha" class="form-control form-input required" maxlength="14">
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
        const formSubmit = document.querySelector('#form_cadastro_paciente');
        if (!formSubmit) {
            console.error("Problema encontrado ao renderizar formulário.");
            return;
        }
        else {
            formSubmit.addEventListener('submit', (event) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                event.preventDefault();
                const nomeCompleto = ((_a = formSubmit.querySelector('#nomeCompleto')) === null || _a === void 0 ? void 0 : _a.value) || '';
                const dataNascimento = ((_b = formSubmit.querySelector('#dataNascimento')) === null || _b === void 0 ? void 0 : _b.value) || '';
                const selectElementGenero = formSubmit.querySelector('#genero');
                const selectedIndexGenero = selectElementGenero.selectedIndex;
                const genero = selectedIndexGenero !== -1 ? selectElementGenero.options[selectedIndexGenero].text : '';
                const email = ((_c = formSubmit.querySelector('#email')) === null || _c === void 0 ? void 0 : _c.value) || '';
                const selectElementConvenio = formSubmit.querySelector('#convenio');
                const selectedIndexConvenio = selectElementConvenio.selectedIndex;
                const convenio = selectedIndexConvenio !== -1 ? selectElementConvenio.options[selectedIndexConvenio].text : '';
                const numeroCarteirinha = (_d = formSubmit.querySelector('#numCarteirinha')) === null || _d === void 0 ? void 0 : _d.value;
                const rua = ((_e = formSubmit.querySelector('#rua')) === null || _e === void 0 ? void 0 : _e.value) || '';
                const numero = (_f = formSubmit.querySelector('#numero')) === null || _f === void 0 ? void 0 : _f.value;
                const bairro = ((_g = formSubmit.querySelector('#bairro')) === null || _g === void 0 ? void 0 : _g.value) || '';
                const cidade = ((_h = formSubmit.querySelector('#cidade')) === null || _h === void 0 ? void 0 : _h.value) || '';
                const estado = ((_j = formSubmit.querySelector('#estado')) === null || _j === void 0 ? void 0 : _j.value) || '';
                console.log('Nome completo: ' + nomeCompleto +
                    '\nData nascimento: ' + dataNascimento +
                    '\nGênero: ' + genero +
                    '\nE-mail: ' + email +
                    '\nConvênio: ' + convenio +
                    '\nN Carteirinha: ' + numeroCarteirinha + '  (' + typeof numeroCarteirinha + ')' +
                    '\nRua: ' + rua +
                    '\nNúmero: ' + numero + '  (' + typeof numero + ')' +
                    '\nBairro: ' + bairro +
                    '\nCidade: ' + cidade +
                    '\nEstado: ' + estado);
                try {
                    this.pacienteAPI.cadastrarPaciente(nomeCompleto, dataNascimento, genero, email, convenio, numeroCarteirinha, rua, numero, bairro, cidade, estado);
                    this.limpaCampos();
                    alert('Registro realizado com sucesso!');
                    location.reload();
                }
                catch (error) {
                    console.log('Erro ao envidar JSON: ' + error.message);
                }
            });
        }
    }
    limpaCampos() {
        const nomeCompleto = document.querySelector('#nomeCompleto');
        const dataNascimento = document.querySelector('#dataNascimento');
        const genero = document.querySelector('#genero');
        const email = document.querySelector('#email');
        const convenio = document.querySelector('#convenio');
        const numeroCarteirinha = document.querySelector('#numCarteirinha');
        const rua = document.querySelector('#rua');
        const numero = document.querySelector('#numero');
        const bairro = document.querySelector('#bairro');
        const cidade = document.querySelector('#cidade');
        const estado = document.querySelector('#estado');
        nomeCompleto.value = '';
        dataNascimento.value = '';
        genero.value = '';
        email.value = '';
        convenio.value = '';
        numeroCarteirinha.value = '';
        rua.value = '';
        numero.value = '';
        bairro.value = '';
        cidade.value = '';
        estado.value = '';
    }
    formProcess(event) {
        event.preventDefault();
        console.log('formProcess - Submit acionado - metodo cadastrarPaciente()');
    }
    render() {
        this.elementDOM.innerHTML = this.templatePaciente();
        this.eventSubmit();
        const formSubmit = document.querySelector('#form_cadastro_paciente');
        if (formSubmit) {
            formSubmit.addEventListener('submit', this.formProcess.bind(this));
        }
    }
}
