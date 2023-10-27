import { ControllerRouteTS } from "../../controller/controllerTS.js";
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
        const template = `

            <form action="" id="form_editar"> 
            
                <input type="text" id="spanId" disabled value="${this.id}"> 
          
                <label name="nomeCompletoEditado">Nome Completo</label>
                <input type="text" class="editar" id="nomeCompletoEditado" disabled value="${this.nomeCompletoEditado}">

                <label name="dataNascimentoEditar">Data nascimento</label>
                <input type="date" class="editar" id="dataNascimentoEditar" disabled value="${this.dataNascimentoEditado}">

                <label name="cpfEditar">CPF</label>
                <input type="text" class="editar" id="cpfEditar" disabled value="${this.cpfEditado}">

                <label name="cro">CRO</label>
                <input type="text" class="editar" id="cro" disabled value="${this.croEditado}">

                <label name="especialidadeEditar">Especialidade</label>
                <input type="text" class="editar" id="especialidadeEditar" disabled value="${this.especialidadeEditado}">
                
                <label name="telefoneResidencialEditar">Telefone Res.</label>
                <input type="text" class="editar" id="telefoneResidencialEditar" disabled value="${this.telefoneResidencialEditado}">

                <label name="telefoneCelularEditar">Telefone Cel.</label>
                <input type="text" class="editar" id="telefoneCelularEditar" disabled value="${this.telefoneCelularEditado}">

                <label name="emailEditar">E-mail</label>
                <input type="text" class="editar" id="emailEditar" disabled value="${this.emailEditado}">

                <label name="ruaEditar">Rua</label>
                <input type="text" class="editar" id="ruaEditar" disabled value="${this.ruaEditado}">

                <label name="numeroEditar">Número</label>
                <input type="text" class="editar" id="numeroEditar" disabled value="${this.numeroEditado}">

                <label name="bairroEditar">Bairro</label>
                <input type="text" class="editar" id="bairroEditar" disabled value="${this.bairroEditado}">

                <label name="cidadeEditar">Cidade</label>
                <input type="text" class="editar" id="cidadeEditar" disabled value="${this.cidadeEditado}">

                <label name="estadoEditar">Estado</label>
                <input type="text" class="editar" id="estadoEditar" disabled value="${this.estadoEditado}">  

            

            <br>
            <br>
            <br>

            <button type="button" class="btn btn-primary" id="btnUpdate">Editar</button>
            <button type="submit" class="btn btn-primary" id="btnSave" disabled>Atualizar</button>
            <button type="button" class="btn btn-primary" id="btnDelete">Excluir</button>

            </form>
            `;
        ControllerRouteTS.loadScreenAllViewDentist(template);
        this.btnEditOptions = document.querySelector('#btnUpdate');
        this.btnDelete = document.querySelector('#btnDelete');
        this.btnUpdate = document.querySelector('#btnSave');
        this.btnEditOptions.addEventListener('click', () => { this.editOptionsViwer(); });
        this.btnUpdate.addEventListener('click', () => { this.update(this.id); });
        this.btnDelete.addEventListener('click', () => { this.delete(this.id); });
    }
    ;
    editOptionsViwer() {
        const camposEditar = document.querySelectorAll('form .editar');
        camposEditar.forEach(tags => {
            tags.removeAttribute('disabled');
        });
        this.btnUpdate.removeAttribute('disabled');
    }
    update(id) {
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
            const objectDentist = {
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
            fetch(`http://localhost:8080/atualizar/cadastro/dentista/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objectDentist),
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
                console.log(objectDentist);
            })
                .catch((error) => {
                console.error(error);
            });
            location.reload();
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
