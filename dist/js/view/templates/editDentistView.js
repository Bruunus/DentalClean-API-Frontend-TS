import { ControllerRouteTS } from "../../controller/controllerRouterTS.js";
import { DentistaController } from "../../controller/dentistaController.js";
import { Dentist } from "../../module/dentist.js";
export class EditDentistView {
    constructor(objectDentist) {
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
            
                        <div class="form-group col-md-6">
                            <label class="system-color-text" name="nomeCompletoEditado">Nome Completo</label>
                            <input type="text" class="form-control editar " id="nomeCompletoEditado" maxlength="20" disabled value="${this.nomeCompletoEditado}">
                        </div>
                        <div class="form-group col-md-3">
                            <label class="system-color-text" name="dataNascimentoEditar">Data nascimento</label>
                            <input type="date" class="form-control editar " id="dataNascimentoEditar" disabled value="${this.dataNascimentoEditado}">
                        </div>
                        <div class="form-group  col-md-3">
                            <label class="system-color-text" name="cpfEditar">CPF</label>
                            <input type="text" class="form-control editar" id="cpfEditar" disabled value="${this.cpfEditado}">
                        </div>
                        <!-- col 2 -->
                        <div class="form-group col-2">
                            <label class="system-color-text" name="cro">CRO</label>
                            <input type="number" class="form-control editar" id="croEditar" disabled  value="${this.croEditado}">
                        </div>
                        <div class="form-group col-2">
                            <label class="system-color-text" name="especialidadeEditar">Especialidade</label>
                           <!-- <input type="text" class="form-control editar" id="especialidadeEditar" disabled value="${this.especialidadeEditado}">
                            -->
                            <select id="especialidadeEditar" class="form-control editar" disabled >
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
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label class="system-color-text" name="telefoneResidencialEditar">Telefone Res.</label>
                            <input type="text" class="form-control editar" id="telefoneResidencialEditar" disabled value="${this.telefoneResidencialEditado}">
                        </div>
                        <div class="form-group col-md-4">
                            <label class="system-color-text" name="telefoneCelularEditar">Telefone Cel.</label>
                            <input type="text" class="form-control editar" id="telefoneCelularEditar" disabled value="${this.telefoneCelularEditado}">
                        </div>
                        <!-- col 3 -->
                        <div class="form-group col-md-12">
                            <label class="system-color-text" name="emailEditar">E-mail</label>
                            <input type="text" class="form-control editar" id="emailEditar" disabled maxlength="35" value="${this.emailEditado}">
                        </div>
                        <!-- col 4 -->
                        <div class="form-group col-md-5">
                            <label class="system-color-text" name="ruaEditar">Rua</label>
                            <input type="text" class="form-control editar" id="ruaEditar" disabled maxlength="32" value="${this.ruaEditado}">
                        </div>
                        <div class="form-group col-md-3">
                            <label class="system-color-text" name="numeroEditar">Número</label>
                            <input type="text" class="form-control editar" id="numeroEditar" disabled maxlength="5" value="${this.numeroEditado}">
                        </div>
                        <div class="form-group col-md-4">
                            <label class="system-color-text" name="bairroEditar">Bairro</label>
                            <input type="text" class="form-control editar" id="bairroEditar" disabled maxlength="20" value="${this.bairroEditado}">
                        </div>
                        <!-- col 5 -->
                        <div class="form-group col-md-9">
                            <label class="system-color-text" name="cidadeEditar">Cidade</label>
                            <input type="text" class="form-control editar" id="cidadeEditar" disabled maxlength="24" value="${this.cidadeEditado}">
                        </div>
                        <div class="form-group col-md-3">
                            <label class="system-color-text" name="estadoEditar">Estado</label>
                            <input type="text" class="form-control editar" id="estadoEditar" disabled maxlength="35" value="${this.estadoEditado}">
                        </div>
            
                    </div>
                <br>
                <br>
                
                <button type="button" class="btn btn-primary" id="btnUpdate">Editar</button>
                <button type="submit" class="btn btn-primary" id="btnSave" data-toggle="modal" disabled>Atualizar</button>
                <button type="button" class="btn btn-primary" id="btnDelete">Excluir</button>
                </form>
            </div>
        </div>
        `;
        this.controllerRouterTS = new ControllerRouteTS();
        this.controllerRouterTS.loadCallEditDentist(this.template);
        const validationNameAndCROJSON = {
            nome: this.nomeCompletoEditado,
            cro: this.croEditado
        };
        this.btnEditOptions = document.querySelector('#btnUpdate');
        this.btnDelete = document.querySelector('#btnDelete');
        this.btnUpdate = document.querySelector('#btnSave');
        this.btnEditOptions.addEventListener('click', this.editOptionsViwer);
        this.btnUpdate.addEventListener('click', () => { this.update(this.id, [validationNameAndCROJSON]); });
        this.btnDelete.addEventListener('click', () => { this.delete(this.id); });
    }
    ;
    getTemplate() {
        return this.template;
    }
    editOptionsViwer() {
        const camposEditar = document.querySelectorAll('form .editar');
        camposEditar.forEach(tags => {
            tags.removeAttribute('disabled');
        });
        const btnUpdate = document.querySelector('#btnSave');
        btnUpdate.removeAttribute('disabled');
    }
    update(id, validation) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const formSubmit = document.querySelector('#form_editar');
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
            const updateObjectDentist = {
                nomeCompleto: this.nomeCompletoEditado,
                rua: this.ruaEditado,
                numero: this.numeroEditado,
                bairro: this.bairroEditado,
                cidade: this.cidadeEditado,
                estado: this.estadoEditado,
                email: this.emailEditado,
                dataNascimento: this.dataNascimentoEditado,
                telefoneResidencial: this.telefoneResidencialEditado,
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
                        console.log(`Chave: ${chave}, Valor: ${valor}`);
                    }
                }
            });
            const modal = new Dentist();
            if (nomeOriginal !== this.nomeCompletoEditado && croOriginal === this.croEditado) {
                modal.modalInformationUpdateDentist('MODAL_CHANGE_NAME', id, updateObjectDentist);
            }
            else if (croOriginal !== this.croEditado && nomeOriginal === this.nomeCompletoEditado) {
                modal.modalInformationUpdateDentist('MODAL_CHANGE_CRO', id, updateObjectDentist);
            }
            else if (nomeOriginal !== this.nomeCompletoEditado && croOriginal !== this.croEditado) {
                modal.modalInformationUpdateDentist('NEW_CRO_AND_NEW_NAME', id, updateObjectDentist);
            }
            else if (croOriginal === this.croEditado && nomeOriginal === this.nomeCompletoEditado) {
                modal.modalInformationUpdateDentist('NORMAL_MODE', id, updateObjectDentist);
            }
        }
    }
    delete(id) {
        fetch(`http://localhost:8080/api/delete/dentista/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
            if (response.ok) {
                alert('Dentista excluído com sucesso!');
                this.renderTemplate = new DentistaController();
                this.renderTemplate.accessListDentist();
            }
            else {
                throw new Error('Erro ao excluir os dados');
            }
        })
            .catch(error => {
            console.error(error);
        });
    }
}
