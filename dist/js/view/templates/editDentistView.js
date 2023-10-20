import { ControllerRouteTS } from "../../controller/controllerTS.js";
export class EditDentistView {
    static screenEditar(objectDentist) {
        const template = `Templete Editar
        
        
        ${objectDentist.map((update) => {
            return `

            <form action="" id="form_editar">
                <label name="croEditar">CRO</label>
                <input type="text" id="croEditar" disabled value="${update.cro}">

                <label name="nomeCompletoEditar">Nome Completo</label>
                <input type="text" class="editar" id="nomeCompletoEditar" disabled value="${update.nomeCompleto}">
                <input type="text" class="editar" id="especialidadeEditar" disabled value="${update.especialidade}">
                <input type="text" class="editar" id="dataNascimentoEditar" disabled value="${update.dataNascimento}">
                <input type="text" class="editar" id="cpfEditar" disabled value="${update.cpf}">
                <input type="text" class="editar" id="telefoneResidencialEditar" disabled value="${update.telefoneResidencial}">
                <input type="text" class="editar" id="telefoneCelularEditar" disabled value="${update.telefoneCelular}">
                <input type="text" class="editar" id="emailEditar" disabled value="${update.email}">
                <input type="text" class="editar" id="ruaEditar" disabled value="${update.rua}">
                <input type="text" class="editar" id="numeroEditar" disabled value="${update.numero}">
                <input type="text" class="editar" id="bairroEditar" disabled value="${update.bairro}">
                <input type="text" class="editar" id="cidadeEditar" disabled value="${update.cidade}">
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
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            const formSubmit = document.querySelector('#form_editar');
            if (!formSubmit) {
                console.error("Problema encontrado ao renderizar formulário. ");
                return;
            }
            else {
                const nomeCompletoEditado = (_a = formSubmit.querySelector('#nomeCompletoEditar')) === null || _a === void 0 ? void 0 : _a.value;
                const dataNascimentoEditado = (_b = formSubmit.querySelector('#dataNascimentoEditar')) === null || _b === void 0 ? void 0 : _b.value;
                const cpfEditado = (_c = formSubmit.querySelector('#cpfEditar')) === null || _c === void 0 ? void 0 : _c.value;
                const croEditado = (_d = formSubmit.querySelector('#croEditar')) === null || _d === void 0 ? void 0 : _d.value;
                const especialidadeEditado = (_e = formSubmit.querySelector('#especialidadeEditar')) === null || _e === void 0 ? void 0 : _e.value;
                const telefoneResidencialEditado = (_f = formSubmit.querySelector('#telefoneResidencialEditar')) === null || _f === void 0 ? void 0 : _f.value;
                const telefoneCelularEditado = (_g = formSubmit.querySelector('#telefoneCelularEditar')) === null || _g === void 0 ? void 0 : _g.value;
                const emailEditado = (_h = formSubmit.querySelector('#emailEditar')) === null || _h === void 0 ? void 0 : _h.value;
                const ruaEditado = (_j = formSubmit.querySelector('#ruaEditar')) === null || _j === void 0 ? void 0 : _j.value;
                const numeroEditado = (_k = formSubmit.querySelector('#numeroEditar')) === null || _k === void 0 ? void 0 : _k.value;
                const bairroEditado = (_l = formSubmit.querySelector('#bairroEditar')) === null || _l === void 0 ? void 0 : _l.value;
                const cidadeEditado = (_m = formSubmit.querySelector('#cidadeEditar')) === null || _m === void 0 ? void 0 : _m.value;
                const estadoEditado = (_o = formSubmit.querySelector('#estadoEditar')) === null || _o === void 0 ? void 0 : _o.value;
                const dentistaDataJSON = {
                    nomeCompleto: nomeCompletoEditado,
                    rua: ruaEditado,
                    numero: numeroEditado,
                    bairro: bairroEditado,
                    cidade: cidadeEditado,
                    estado: estadoEditado,
                    email: emailEditado,
                    dataNascimento: dataNascimentoEditado,
                    telefoneResidencial: telefoneResidencialEditado,
                    telefoneCelular: telefoneCelularEditado,
                    especialidade: especialidadeEditado,
                    cro: croEditado,
                    cpf: cpfEditado
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
                        throw new Error('Erro ao enviar os dados para o servidor.');
                    }
                    if (!response.ok) {
                        return response.json();
                    }
                })
                    .then((data) => {
                    console.log('then do fetch acionado');
                    console.log('Resposta do servidor:', data);
                    console.log('Dados atualizados com sucesso !');
                    console.log(dentistaDataJSON);
                })
                    .catch((error) => {
                    console.error(error);
                });
            }
        });
        optionDelete.addEventListener('click', () => {
            alert('Excluir em contrução...');
            location.reload();
        });
    }
}
