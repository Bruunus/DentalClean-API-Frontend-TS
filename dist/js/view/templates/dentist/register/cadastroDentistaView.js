import { ValidationAndMask } from "../../../../module/validationAndMask.js";
export class CadastroDentistaView {
    constructor(renderizadorId) {
        this.elementDOM = document.querySelector(renderizadorId);
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
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-md-6 col-sm-12 container-data-nascimento"> 
                        <label for="dataNascimento" class="label-form">Data de nascimento</label>
                        <input type="date" name="dataNascimento" id="dataNascimento" class="form-control form-input required">
                        <span class="spanMessage">O campo não pode estar vazio</span>
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
                        <label for="telefoneResidencial" class="label-form">Telefine Residencial</label>
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
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                event.preventDefault();
                const nomeCompleto = ((_a = formSubmit.querySelector('#nomeCompleto')) === null || _a === void 0 ? void 0 : _a.value) || '';
                const dataNascimento = ((_b = formSubmit.querySelector('#dataNascimento')) === null || _b === void 0 ? void 0 : _b.value) || '';
                const cpf = ((_c = formSubmit.querySelector('#cpf')) === null || _c === void 0 ? void 0 : _c.value) || '';
                const cro = ((_d = formSubmit.querySelector('#cro')) === null || _d === void 0 ? void 0 : _d.value) || '';
                const especialidadeSelect = document.querySelector('#especialidade');
                const especialidade = especialidadeSelect === null || especialidadeSelect === void 0 ? void 0 : especialidadeSelect.value;
                const telefoneResidencial = ((_e = formSubmit.querySelector('#telefoneResidencial')) === null || _e === void 0 ? void 0 : _e.value) || '';
                const telefoneCelular = ((_f = formSubmit.querySelector('#telefoneCelular')) === null || _f === void 0 ? void 0 : _f.value) || '';
                const email = ((_g = formSubmit.querySelector('#email')) === null || _g === void 0 ? void 0 : _g.value) || '';
                const rua = ((_h = formSubmit.querySelector('#rua')) === null || _h === void 0 ? void 0 : _h.value) || '';
                const numero = (_j = formSubmit.querySelector('#numero')) === null || _j === void 0 ? void 0 : _j.value;
                const bairro = ((_k = formSubmit.querySelector('#bairro')) === null || _k === void 0 ? void 0 : _k.value) || '';
                const cidade = ((_l = formSubmit.querySelector('#cidade')) === null || _l === void 0 ? void 0 : _l.value) || '';
                const estado = ((_m = formSubmit.querySelector('#estado')) === null || _m === void 0 ? void 0 : _m.value) || '';
                const nomeCompletoValid = document.querySelector('#nomeCompleto');
                const dataNascimentoValid = document.querySelector('#dataNascimento');
                const cpfValid = document.querySelector('#cpf');
                const telefoneResidencialValid = document.querySelector('#telefoneResidencial');
                const telefoneCelularValid = document.querySelector('#telefoneCelular');
                const croValid = document.querySelector('#cro');
                const especialidadeValid = document.querySelector('#especialidade');
                const emailValid = document.querySelector('#email');
                const numeroValid = document.querySelector('#numero');
                const ruaValid = document.querySelector('#rua');
                const bairroValid = document.querySelector('#bairro');
                const cidadeValid = document.querySelector('#cidade');
                const estadoValid = document.querySelector('#estado');
                const validation = new ValidationAndMask();
                validation.validationRulerForm(nomeCompletoValid, dataNascimentoValid, cpfValid, croValid, especialidadeValid, telefoneResidencialValid, telefoneCelularValid, emailValid, ruaValid, numeroValid, bairroValid, cidadeValid, estadoValid);
            });
        }
    }
    maskAndValidation() {
        const mask = new ValidationAndMask();
        const nomeCompletoMask = document.querySelector('#nomeCompleto');
        const dataNascimentoMask = document.querySelector('#dataNascimento');
        const cpfMask = document.querySelector('#cpf');
        const telefoneResidencialMask = document.querySelector('#telefoneResidencial');
        const telefonecelularMask = document.querySelector('#telefoneCelular');
        const croMask = document.querySelector('#cro');
        const especialidadeMask = document.querySelector('#especialidade');
        const emailMask = document.querySelector('#email');
        const numeroMask = document.querySelector('#numero');
        const ruaMask = document.querySelector('#rua');
        const bairroMask = document.querySelector('#bairro');
        const cidadeMask = document.querySelector('#cidade');
        const estadoMask = document.querySelector('#estado');
        mask.bloquearNumerosECaracteres(nomeCompletoMask);
        mask.characterLowerCase(nomeCompletoMask);
        mask.cpfMask(cpfMask);
        mask.bloquearLetrasECaracteres(croMask);
        mask.bloquearLetrasECaracteres(numeroMask);
        mask.telefoneResidencialMask(telefoneResidencialMask);
        mask.bloquearLetrasECaracteres(telefoneResidencialMask);
        mask.telefonecelularMask(telefonecelularMask);
        mask.bloquearLetrasECaracteres(telefonecelularMask);
        mask.bloquearNumerosECaracteres(ruaMask);
        mask.bloquearNumerosECaracteres(bairroMask);
        mask.bloquearNumerosECaracteres(cidadeMask);
        mask.bloquearNumerosECaracteres(estadoMask);
        mask.upperCaseLong(estadoMask);
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
