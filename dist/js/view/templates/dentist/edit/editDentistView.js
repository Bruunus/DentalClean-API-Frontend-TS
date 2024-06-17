import { ControllerRouteTS } from "../../../../controller/controllerRouterTS.js";
import { ModalController } from "../../../../controller/modal-controller/modalController.js";
import { MaskForm } from "../../../../module/maskForm.js";
import { WarningForms } from "../../../../module/validation/warningForms.js";
export class EditDentistView {
    constructor(objectDentist) {
        this.modalController = new ModalController();
        this.maskForm = new MaskForm();
        this.warningForms = new WarningForms();
        if (objectDentist.length > 0) {
            const firstDentist = objectDentist[0];
            this.id = firstDentist.id;
            this.croEditado = firstDentist.cro || '';
            this.nomeCompletoEditado = firstDentist.nomeCompleto || '';
            this.ruaEditado = firstDentist.rua || '';
            this.numeroEditado = firstDentist.numero || '';
            this.bairroEditado = firstDentist.bairro || '';
            this.cidadeEditado = firstDentist.cidade || '';
            this.estadoEditado = firstDentist.estado || '';
            this.emailEditado = firstDentist.email || '';
            this.dataNascimentoEditado = firstDentist.dataNascimento || '';
            this.telefoneResidencialEditado = firstDentist.telefoneResidencial || '';
            this.telefoneCelularEditado = firstDentist.telefoneCelular || '';
            this.especialidadeEditado = firstDentist.especialidade || '';
            this.cpfEditado = firstDentist.cpf || '';
        }
        else {
        }
        this.template = `
        <head>
            <style>
              



            </style>
        </head>


        <div id="container-pai-editar-temp">
            
            <div class="div_titulo_edit_dentist">
                    <h4 class="no-select">Editar Dentista</h4>
            </div>
            <div id="container_editar" >
                <form  id="form_editar">
                   <div class="form-row">
                        <!-- col 1 -->
            
                        <div class="form-group col-md-6 container-nome-completo">
                            <label class="system-color-text label-form" for="nomeCompletoEditado">Nome Completo</label>
                            <input type="text" class="form-control form-input editar " id="nomeCompletoEditado" maxlength="20" disabled value="${this.nomeCompletoEditado}">
                            <span class="spanMessage"></span>
                        </div>
                        <div class="form-group col-md-3 container-data-nascimento">
                            <label class="system-color-text label-form" for="dataNascimentoEditar">Data nascimento</label>
                            <input type="date" class="form-control form-input editar " id="dataNascimentoEditar" disabled value="${this.dataNascimentoEditado}">
                            <span class="spanMessage"></span>
                        </div>
                        <div class="form-group  col-md-3 container-cpf">
                            <label class="system-color-text label-form" for="cpfEditar">CPF</label>
                            <input type="text" class="form-control form-input editar" id="cpfEditar" disabled value="${this.cpfEditado}" maxlength="14">
                            <span class="spanMessage"></span>
                        </div>
                        <!-- col 2 -->
                        <div class="form-group col-12 col-sm-12 col-lg-6 container-cro">
                            <label class="system-color-text label-form" for="croEditar">CRO</label>
                            <input type="number" class="form-control form-input editar" id="croEditar" disabled  value="${this.croEditado}" maxlength="4">
                            <span class="spanMessage"></span>
                        </div>
                        <div class="form-group col-12 col-sm-12 col-lg-6 container-especialidade">
                            <label class="system-color-text label-form" for="especialidadeEditar">Especialidade</label>
                            <select id="especialidadeEditar" class="form-control select-form editar" disabled >
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
                        <div class="form-group col-md-6 container-telefone-residencial">
                            <label class="system-color-text label-form" for="telefoneResidencialEditar">Telefine Residencial</label>
                            <input type="text" class="form-control form-input editar" id="telefoneResidencialEditar" 
                                disabled value="${this.telefoneResidencialEditado}" maxlength="14">
                            <span class="spanMessage"></span>
                        </div>
                        <div class="form-group col-md-6 container-telefone-celular">
                            <label class="system-color-text label-form" for="telefoneCelularEditar">Telefone Celular</label>
                            <input type="text" class="form-control form-input editar" id="telefoneCelularEditar" 
                                disabled value="${this.telefoneCelularEditado}" maxlength="16">
                            <span class="spanMessage"></span>
                        </div>
                        <!-- col 3 -->
                        <div class="form-group col-md-12 container-email">
                            <label class="system-color-text label-form" for="emailEditar">E-mail</label>
                            <input type="text" class="form-control form-input editar" id="emailEditar" disabled maxlength="31" value="${this.emailEditado}">
                            <span class="spanMessage"></span>
                        </div>
                        <!-- col 4 -->
                        <div class="form-group col-md-5 container-rua">
                            <label class="system-color-text label-form" for="ruaEditar">Rua</label>
                            <input type="text" class="form-control form-input editar" id="ruaEditar" disabled maxlength="25" value="${this.ruaEditado}">
                            <span class="spanMessage"></span>
                        </div>
                        <div class="form-group col-md-3 container-numero">
                            <label class="system-color-text label-form" for="numeroEditar">Número</label>
                            <input type="text" class="form-control form-input editar" id="numeroEditar" disabled maxlength="6" value="${this.numeroEditado}">
                            <span class="spanMessage"></span>
                        </div>
                        <div class="form-group col-md-4 container-bairro">
                            <label class="system-color-text label-form" for="bairroEditar">Bairro</label>
                            <input type="text" class="form-control form-input editar" id="bairroEditar" disabled maxlength="24" value="${this.bairroEditado}">
                            <span class="spanMessage"></span>
                        </div>
                        <!-- col 5 -->
                        <div class="form-group col-md-9 container-cidade">
                            <label class="system-color-text label-form" for="cidadeEditar">Cidade</label>
                            <input type="text" class="form-control form-input editar" id="cidadeEditar" disabled maxlength="24" value="${this.cidadeEditado}">
                            <span class="spanMessage"></span>
                        </div>
                        <div class="form-group col-md-3 container-estado">
                            <label class="system-color-text label-form" for="estadoEditar">Estado</label>
                            <input type="text" class="form-control form-input editar" id="estadoEditar" disabled maxlength="2" value="${this.estadoEditado}">
                            <span class="spanMessage"></span>
                        </div>
            
                    </div>
                <br>
                
                <div id="container-father-div-editar">
                   
                    <button type="button" class="btn btn-secondary" id="btnUpdate">Editar</button>
                    <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#" id="btnSave" disabled>Atualizar</button>
                    <button type="button" class="btn btn-secondary" id="btnDelete">Excluir</button>
                    
                </div>

                </form>
            </div>
        </div>
        `;
        this.controllerRouterTS = new ControllerRouteTS();
        this.controllerRouterTS.loadCallEditDentist(this.template);
        this.nomeCompletoInput = document.querySelector('#nomeCompletoEditado');
        this.dataNascimentoInput = document.querySelector('#dataNascimentoEditar');
        this.cpfInput = document.querySelector('#cpfEditar');
        this.croInput = document.querySelector('#croEditar');
        this.especialidadeInput = document.querySelector('#especialidadeEditar');
        this.telefoneResidencialInput = document.querySelector('#telefoneResidencialEditar');
        this.telefoneCelularInput = document.querySelector('#telefoneCelularEditar');
        this.emailInput = document.querySelector('#emailEditar');
        this.ruaInput = document.querySelector('#ruaEditar');
        this.numeroInput = document.querySelector('#numeroEditar');
        this.bairroInput = document.querySelector('#bairroEditar');
        this.cidadeInput = document.querySelector('#cidadeEditar');
        this.estadoInput = document.querySelector('#estadoEditar');
        this.nomeCompletoSpan = document.querySelector('.container-nome-completo span');
        this.dataNascimentoSpan = document.querySelector('.container-data-nascimento span');
        this.cpfSpan = document.querySelector('.container-cpf span');
        this.croSpan = document.querySelector('.container-cro span');
        this.especialidadeSpan = document.querySelector('.container-especialidade span');
        this.telefoneResidencialSpan = document.querySelector('.container-telefone-residencial span');
        this.telefoneCelularSpan = document.querySelector('.container-telefone-celular span');
        this.emailSpan = document.querySelector('.container-email span');
        this.ruaSpan = document.querySelector('.container-rua span');
        this.numeroSpan = document.querySelector('.container-numero span');
        this.bairroSpan = document.querySelector('.container-bairro span');
        this.cidadeSpan = document.querySelector('.container-cidade span');
        this.estadoSpan = document.querySelector('.container-estado span');
        this.mask(this.nomeCompletoInput, this.croInput, this.bairroInput, this.cidadeInput, this.estadoInput, this.ruaInput, this.numeroInput, this.telefoneResidencialInput, this.telefoneCelularInput, this.cpfInput);
        this.warning(this.nomeCompletoInput, this.dataNascimentoInput, this.cpfInput, this.croInput, this.especialidadeInput, this.telefoneResidencialInput, this.telefoneCelularInput, this.emailInput, this.ruaInput, this.numeroInput, this.bairroInput, this.cidadeInput, this.estadoInput);
        const validationNameAndCROJSON = {
            nome: this.nomeCompletoEditado,
            cro: this.croEditado
        };
        this.form = document.querySelector('#container_editar form');
        this.btnEditOptions = document.querySelector('#btnUpdate');
        this.btnDelete = document.querySelector('#btnDelete');
        this.btnSave = document.querySelector('#btnSave');
        this.btnEditOptions.addEventListener('click', this.editOptionsViwer);
        this.btnSave.addEventListener('click', () => { this.update(this.form, this.id, [validationNameAndCROJSON]); });
        this.btnDelete.addEventListener('click', () => { this.controllerRouterTS.deleteDentist(this.id); });
    }
    ;
    getTemplate() {
        return this.template;
    }
    getBtnSave() {
        return this.btnSave;
    }
    mask(nomeInput, croInput, bairroInput, cidadeInput, estadoInput, ruaInput, numeroInput, telefoneResidencialInput, telefoneCelularInput, cpfInput) {
        const noNumbersAndCharacters = [nomeInput, bairroInput, cidadeInput, estadoInput];
        const upperCaseCharacters = [estadoInput];
        const characterLowerCase = [nomeInput, ruaInput, bairroInput, cidadeInput, estadoInput];
        const noWordsAndCharacters = [croInput, numeroInput, telefoneResidencialInput, telefoneCelularInput];
        this.maskForm.blockNumbersAnsCharacters(noNumbersAndCharacters);
        this.maskForm.upperCaseLongMask(upperCaseCharacters);
        this.maskForm.characterLowerCaseMask(characterLowerCase);
        this.maskForm.noWordsAndCharacters(noWordsAndCharacters);
        this.maskForm.cpfMask(cpfInput);
        this.maskForm.telefoneResidencialMask(telefoneResidencialInput);
        this.maskForm.telefonecelularMask(telefoneCelularInput);
    }
    warning(nomeCompleto, dataNascimento, cpf, cro, especialidade, telefoneResidencial, telefoneCelular, email, rua, numero, bairro, cidade, estado) {
        this.warningForms.warningNomeCompleto(nomeCompleto, this.nomeCompletoSpan);
        this.warningForms.warningDataDeNascimento(dataNascimento, this.dataNascimentoSpan);
        this.warningForms.warningCpf(cpf, this.cpfSpan);
        this.warningForms.warningCro(cro, this.croSpan);
        this.warningForms.warningEspecialidade(especialidade, this.especialidadeSpan);
        this.warningForms.warningTelefoneResidencial(telefoneResidencial, this.telefoneResidencialSpan);
        this.warningForms.warningTelefoneCelular(telefoneCelular, this.telefoneCelularSpan);
        this.warningForms.warningEmail(email, this.emailSpan);
        this.warningForms.warningRua(rua, this.ruaSpan);
        this.warningForms.warningNumero(numero, this.numeroSpan);
        this.warningForms.warningBairro(bairro, this.bairroSpan);
        this.warningForms.warningCidade(cidade, this.cidadeSpan);
        this.warningForms.warningEstado(estado, this.estadoSpan);
    }
    editOptionsViwer() {
        const camposEditar = document.querySelectorAll('form .editar');
        camposEditar.forEach(tags => {
            tags.removeAttribute('disabled');
        });
        const btnUpdate = document.querySelector('#btnSave');
        btnUpdate.removeAttribute('disabled');
    }
    update(formSubmit, id, validation) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (!formSubmit) {
            console.error("Problema encontrado ao renderizar formulário.");
            return;
        }
        else {
            this.nomeCompletoEditado = ((_a = formSubmit.querySelector('#nomeCompletoEditado')) === null || _a === void 0 ? void 0 : _a.value) || '';
            this.dataNascimentoEditado = ((_b = formSubmit.querySelector('#dataNascimentoEditar')) === null || _b === void 0 ? void 0 : _b.value) || '';
            this.cpfEditado = ((_c = formSubmit.querySelector('#cpfEditar')) === null || _c === void 0 ? void 0 : _c.value) || '';
            this.croEditado = ((_d = formSubmit.querySelector('#croEditar')) === null || _d === void 0 ? void 0 : _d.value) || '';
            this.especialidadeEditado = ((_e = formSubmit.querySelector('#especialidadeEditar')) === null || _e === void 0 ? void 0 : _e.value) || '';
            this.telefoneResidencialEditado = ((_f = formSubmit.querySelector('#telefoneResidencialEditar')) === null || _f === void 0 ? void 0 : _f.value) || '';
            this.telefoneCelularEditado = ((_g = formSubmit.querySelector('#telefoneCelularEditar')) === null || _g === void 0 ? void 0 : _g.value) || '';
            this.emailEditado = ((_h = formSubmit.querySelector('#emailEditar')) === null || _h === void 0 ? void 0 : _h.value) || '';
            this.ruaEditado = ((_j = formSubmit.querySelector('#ruaEditar')) === null || _j === void 0 ? void 0 : _j.value) || '';
            this.numeroEditado = ((_k = formSubmit.querySelector('#numeroEditar')) === null || _k === void 0 ? void 0 : _k.value) || '';
            this.bairroEditado = ((_l = formSubmit.querySelector('#bairroEditar')) === null || _l === void 0 ? void 0 : _l.value) || '';
            this.cidadeEditado = ((_m = formSubmit.querySelector('#cidadeEditar')) === null || _m === void 0 ? void 0 : _m.value) || '';
            this.estadoEditado = ((_o = formSubmit.querySelector('#estadoEditar')) === null || _o === void 0 ? void 0 : _o.value) || '';
            console.log('Pegando os valores:\n\n', this.nomeCompletoEditado, '\n', this.dataNascimentoEditado, '\n', this.cpfEditado, '\n', this.croEditado, '\n', this.especialidadeEditado, '\n', this.telefoneResidencialEditado, '\n', this.telefoneCelularEditado, '\n', this.emailEditado, '\n', this.ruaEditado, '\n', this.numeroEditado, '\n', this.bairroEditado, '\n', this.cidadeEditado, '\n', this.estadoEditado);
            const updateObjectDentist = {
                nomeCompleto: this.nomeCompletoEditado,
                rua: this.ruaEditado,
                numero: this.numeroEditado,
                bairro: this.bairroEditado,
                cidade: this.cidadeEditado,
                estado: this.estadoEditado,
                email: this.emailEditado,
                dataNascimento: this.dataNascimentoEditado,
                telefoneResidencial: this.telefoneCelularEditado,
                telefoneCelular: this.telefoneCelularEditado,
                especialidade: this.especialidadeEditado,
                cro: this.croEditado,
                cpf: this.cpfEditado
            };
            let nomeOriginal;
            let croOriginal;
            validation.forEach(objeto => {
                for (const chave in objeto) {
                    if (objeto.hasOwnProperty(chave)) {
                        const valor = objeto[chave];
                        if (chave === 'nome') {
                            nomeOriginal = valor;
                        }
                        if (chave === 'cro') {
                            croOriginal = valor;
                        }
                    }
                }
            });
            if (updateObjectDentist.nomeCompleto === nomeOriginal && updateObjectDentist.cro != croOriginal) {
                console.log('Entrado em condição - MODAL_CHANGE_CRO');
                this.modalController.modalInformationUpdateDentist('MODAL_CHANGE_CRO', id, updateObjectDentist);
            }
            else if (updateObjectDentist.nomeCompleto != nomeOriginal && updateObjectDentist.cro === croOriginal) {
                console.log('Entrado em condição - MODAL_CHANGE_NAME');
                this.modalController.modalInformationUpdateDentist('MODAL_CHANGE_NAME', id, updateObjectDentist);
            }
            else if (updateObjectDentist.nomeCompleto != nomeOriginal && updateObjectDentist.cro != croOriginal) {
                console.log('Entrado em condição - NEW_CRO_AND_NEW_NAME');
                this.modalController.modalInformationUpdateDentist('NEW_CRO_AND_NEW_NAME', id, updateObjectDentist);
            }
            else {
                this.controllerRouterTS.updateDentist(id, updateObjectDentist);
            }
        }
    }
}
