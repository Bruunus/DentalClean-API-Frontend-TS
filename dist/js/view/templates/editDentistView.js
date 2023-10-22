import { ControllerRouteTS } from "../../controller/controllerTS.js";
export class EditDentistView {
    constructor() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        this.formSubmit = document.querySelector('#form_editar');
        this.croEditado = ((_a = this.formSubmit.querySelector('#croEditar')) === null || _a === void 0 ? void 0 : _a.value) || '';
        this.nomeCompletoEditado = ((_b = this.formSubmit.querySelector('#nomeCompletoEditar')) === null || _b === void 0 ? void 0 : _b.value) || '';
        this.ruaEditado = (_c = this.formSubmit.querySelector('#ruaEditar')) === null || _c === void 0 ? void 0 : _c.value;
        this.numeroEditado = (_d = this.formSubmit.querySelector('#numeroEditar')) === null || _d === void 0 ? void 0 : _d.value;
        this.bairroEditado = (_e = this.formSubmit.querySelector('#bairroEditar')) === null || _e === void 0 ? void 0 : _e.value;
        this.cidadeEditado = (_f = this.formSubmit.querySelector('#cidadeEditar')) === null || _f === void 0 ? void 0 : _f.value;
        this.estadoEditado = (_g = this.formSubmit.querySelector('#estadoEditar')) === null || _g === void 0 ? void 0 : _g.value;
        this.emailEditado = (_h = this.formSubmit.querySelector('#emailEditar')) === null || _h === void 0 ? void 0 : _h.value;
        this.dataNascimentoEditado = (_j = this.formSubmit.querySelector('#dataNascimentoEditar')) === null || _j === void 0 ? void 0 : _j.value;
        this.telefoneResidencialEditado = (_k = this.formSubmit.querySelector('#telefoneResidencialEditar')) === null || _k === void 0 ? void 0 : _k.value;
        this.telefoneCelularEditado = (_l = this.formSubmit.querySelector('#telefoneCelularEditar')) === null || _l === void 0 ? void 0 : _l.value;
        this.especialidadeEditado = (_m = this.formSubmit.querySelector('#especialidadeEditar')) === null || _m === void 0 ? void 0 : _m.value;
        this.cpfEditado = (_o = this.formSubmit.querySelector('#cpfEditar')) === null || _o === void 0 ? void 0 : _o.value;
    }
    ;
    static screenEditar(objectDentist) {
        const template = `Templete Editar
        
        
        ${objectDentist.map((update) => {
            return `

            <form action="" id="form_editar">
                <label name="croEditar">CRO</label>
                <input type="text" id="croEditar" disabled value="${update.cro}">

                <label name="nomeCompletoEditar">Nome Completo</label>
                <input type="text" class="editar" id="nomeCompletoEditar" disabled value="${update.nomeCompleto}">

                <label name="especialidadeEditar">Especialidade</label>
                <input type="text" class="editar" id="especialidadeEditar" disabled value="${update.especialidade}">

                <label name="dataNascimentoEditar">Data nascimento</label>
                <input type="date" class="editar" id="dataNascimentoEditar" disabled value="${update.dataNascimento}">

                <label name="cpfEditar">CPF</label>
                <input type="text" class="editar" id="cpfEditar" disabled value="${update.cpf}">

                <label name="telefoneResidencialEditar">Telefone Res.</label>
                <input type="text" class="editar" id="telefoneResidencialEditar" disabled value="${update.telefoneResidencial}">

                <label name="telefoneCelularEditar">Telefone Cel.</label>
                <input type="text" class="editar" id="telefoneCelularEditar" disabled value="${update.telefoneCelular}">

                <label name="emailEditar">E-mail</label>
                <input type="text" class="editar" id="emailEditar" disabled value="${update.email}">

                <label name="ruaEditar">Rua</label>
                <input type="text" class="editar" id="ruaEditar" disabled value="${update.rua}">

                <label name="numeroEditar">Número</label>
                <input type="text" class="editar" id="numeroEditar" disabled value="${update.numero}">

                <label name="bairroEditar">Bairro</label>
                <input type="text" class="editar" id="bairroEditar" disabled value="${update.bairro}">

                <label name="cidadeEditar">Cidade</label>
                <input type="text" class="editar" id="cidadeEditar" disabled value="${update.cidade}">

                <label name="estadoEditar">Estado</label>
                <input type="text" class="editar" id="estadoEditar" disabled value="${update.estado}">

            </form>

            <br>
            <br>
            <br>

            <button class="btn btn-primary" id="btnUpdate">Atualizar</button>
            <button class="btn btn-primary" id="btnSave" disabled>Salvar</button>
            <button class="btn btn-primary" id="btnDelete">Excluir</button>
            
            `;
        }).join('')}
        
        `;
        ControllerRouteTS.loadScreenAllViewDentist(template);
        const optionUpdate = document.querySelector('#btnUpdate');
        const optionDelete = document.querySelector('#btnDelete');
        const optionSave = document.querySelector('#btnSave');
        optionUpdate.addEventListener('click', () => {
            const camposEditar = document.querySelectorAll('form .editar');
            camposEditar.forEach(tags => {
                tags.removeAttribute('disabled');
            });
            optionSave.removeAttribute('disabled');
        });
        optionSave.addEventListener('click', () => {
            const cro = new EditDentistView();
            EditDentistView.update();
        });
        optionDelete.addEventListener('click', () => {
            const cro = new EditDentistView();
            EditDentistView.delete();
        });
    }
    static update() {
        const editDentistView = new EditDentistView();
        const dentistaDataJSON = {
            nomeCompleto: editDentistView.nomeCompletoEditado,
            rua: editDentistView.ruaEditado,
            numero: editDentistView.numeroEditado,
            bairro: editDentistView.bairroEditado,
            cidade: editDentistView.cidadeEditado,
            estado: editDentistView.estadoEditado,
            email: editDentistView.emailEditado,
            dataNascimento: editDentistView.dataNascimentoEditado,
            telefoneResidencial: editDentistView.telefoneResidencialEditado,
            telefoneCelular: editDentistView.telefoneCelularEditado,
            especialidade: editDentistView.especialidadeEditado,
            cro: editDentistView.croEditado,
            cpf: editDentistView.cpfEditado
        };
        fetch(`http://localhost:8080/atualizar/cadastro/dentista?cro=${dentistaDataJSON.cro}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dentistaDataJSON),
        })
            .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro ao atualizar os dados`);
            }
            if (!response.ok) {
                return response.json();
            }
        })
            .then((data) => {
            console.log(`Dados atualizados com sucesso !`);
            console.log(dentistaDataJSON);
        })
            .catch((error) => {
            console.error(error);
        });
    }
    static delete() {
        const deleteDentistView = new EditDentistView();
        const cro = deleteDentistView.croEditado;
        console.log(cro);
        fetch(`http://localhost:8080/api/delete/dentista?cro=${cro}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao excluir os dados');
            }
            return response.json();
        })
            .then(data => {
            console.log('Dados excluídos com sucesso!');
            console.log(data);
        })
            .catch(error => {
            console.error(error);
        });
    }
}
