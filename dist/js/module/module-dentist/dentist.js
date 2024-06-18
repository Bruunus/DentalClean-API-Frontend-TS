import { ControllerRouteTS } from "../../controller/controllerRouterTS.js";
import { EditDentistView } from "../../view/templates/dentist/edit/editDentistView.js";
import { AppModule } from "../appModule.js";
export class Dentist {
    constructor() {
        this.controllerRouterTs = new ControllerRouteTS();
    }
    static sortDentists(dentistData, sortBy) {
        switch (sortBy) {
            case 'nomeCompleto':
                dentistData.sort((a, b) => a.nomeCompleto.localeCompare(b.nomeCompleto));
                break;
            case 'dataNascimento':
                dentistData.sort((a, b) => b.dataNascimento.localeCompare(a.dataNascimento));
                break;
            case 'cpf':
                dentistData.sort((a, b) => a.cpf.localeCompare(b.cpf));
                break;
            case 'cro':
                dentistData.sort((a, b) => a.cro - b.cro);
                break;
            case 'especialidade':
                dentistData.sort((a, b) => a.especialidade.localeCompare(b.especialidade));
                break;
            case 'cidade':
                dentistData.sort((a, b) => a.cidade.localeCompare(b.cidade));
                break;
            case 'estado':
                dentistData.sort((a, b) => a.estado.localeCompare(b.estado));
        }
        return dentistData;
    }
    static renderDentistList(dentistData) {
        const tableBody = document.querySelector('.table_hover_dentist');
        tableBody.innerHTML = '';
        dentistData.forEach((dentist) => {
            const row = document.createElement('tr');
            row.classList.add('no-select', 'tr_format');
            const nomeCompletoCell = document.createElement('td');
            nomeCompletoCell.classList.add('nomeCompleto');
            const dataNascCell = document.createElement('td');
            dataNascCell.classList.add('dataNascimento');
            const cpfCell = document.createElement('td');
            cpfCell.classList.add('cpf');
            const croCell = document.createElement('td');
            croCell.classList.add('cro');
            const especialidadeCell = document.createElement('td');
            especialidadeCell.classList.add('especialidade');
            const telefoneResidencialCell = document.createElement('td');
            telefoneResidencialCell.classList.add('telefoneResidencial');
            const telefoneCelularCell = document.createElement('td');
            telefoneCelularCell.classList.add('telefoneCelular');
            const emailCell = document.createElement('td');
            emailCell.classList.add('email');
            const ruaCell = document.createElement('td');
            ruaCell.classList.add('rua');
            const numeroCell = document.createElement('td');
            numeroCell.classList.add('numero');
            const bairroCell = document.createElement('td');
            bairroCell.classList.add('bairro');
            const cidadeCell = document.createElement('td');
            cidadeCell.classList.add('cidade');
            const estadoCell = document.createElement('td');
            estadoCell.classList.add('estado');
            const editarCell = document.createElement('td');
            const linkEditar = document.createElement('a');
            linkEditar.href = '#';
            nomeCompletoCell.textContent = dentist.nomeCompleto;
            dataNascCell.textContent = dentist.dataNascimento;
            cpfCell.textContent = dentist.cpf;
            croCell.textContent = dentist.cro;
            especialidadeCell.textContent = dentist.especialidade;
            telefoneResidencialCell.textContent = dentist.telefoneResidencial;
            telefoneCelularCell.textContent = dentist.telefoneCelular;
            emailCell.textContent = dentist.email;
            ruaCell.textContent = dentist.numero;
            numeroCell.textContent = dentist.numero;
            bairroCell.textContent = dentist.bairro;
            cidadeCell.textContent = dentist.cidade;
            estadoCell.textContent = dentist.estado;
            linkEditar.textContent = 'Editar';
            linkEditar.classList.add('editar');
            linkEditar.addEventListener('click', (event) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
                const elementoClicado = event.target;
                const linha = elementoClicado.closest('.table_hover_dentist tr');
                if (linha) {
                    const nomeCompletoEditar = (_a = linha.querySelector('.nomeCompleto')) === null || _a === void 0 ? void 0 : _a.textContent;
                    const dataNascimentoEditar = (_b = linha.querySelector('.dataNascimento')) === null || _b === void 0 ? void 0 : _b.textContent;
                    const cpfEditar = (_c = linha.querySelector('.cpf')) === null || _c === void 0 ? void 0 : _c.textContent;
                    const croEditar = (_d = linha.querySelector('.cro')) === null || _d === void 0 ? void 0 : _d.textContent;
                    const especialidadeEditar = (_e = linha.querySelector('.especialidade')) === null || _e === void 0 ? void 0 : _e.textContent;
                    const telefoneResidencialEditar = (_f = linha.querySelector('.telefoneResidencial')) === null || _f === void 0 ? void 0 : _f.textContent;
                    const telefoneCelularEditar = (_g = linha.querySelector('.telefoneCelular')) === null || _g === void 0 ? void 0 : _g.textContent;
                    const emailEditar = (_h = linha.querySelector('.email')) === null || _h === void 0 ? void 0 : _h.textContent;
                    const ruaEditar = (_j = linha.querySelector('.rua')) === null || _j === void 0 ? void 0 : _j.textContent;
                    const numeroEditar = (_k = linha.querySelector('.numero')) === null || _k === void 0 ? void 0 : _k.textContent;
                    const bairroEditar = (_l = linha.querySelector('.bairro')) === null || _l === void 0 ? void 0 : _l.textContent;
                    const cidadeEditar = (_m = linha.querySelector('.cidade')) === null || _m === void 0 ? void 0 : _m.textContent;
                    const estadoEditar = (_o = linha.querySelector('.estado')) === null || _o === void 0 ? void 0 : _o.textContent;
                    const JSONUpdate = {
                        id: dentist.id,
                        nomeCompleto: nomeCompletoEditar,
                        dataNascimento: dataNascimentoEditar,
                        cpf: cpfEditar,
                        cro: croEditar,
                        especialidade: especialidadeEditar,
                        telefoneResidencial: telefoneResidencialEditar,
                        telefoneCelular: telefoneCelularEditar,
                        email: emailEditar,
                        rua: ruaEditar,
                        numero: numeroEditar,
                        bairro: bairroEditar,
                        cidade: cidadeEditar,
                        estado: estadoEditar
                    };
                    const sendArray = [JSONUpdate];
                    this.renderEditDentistView = new EditDentistView(sendArray);
                }
                ;
            });
            editarCell.appendChild(linkEditar);
            row.appendChild(nomeCompletoCell);
            row.appendChild(dataNascCell);
            row.appendChild(cpfCell);
            row.appendChild(croCell);
            row.appendChild(especialidadeCell);
            row.appendChild(telefoneResidencialCell);
            row.appendChild(telefoneCelularCell);
            row.appendChild(emailCell);
            row.appendChild(ruaCell);
            row.appendChild(numeroCell);
            row.appendChild(bairroCell);
            row.appendChild(cidadeCell);
            row.appendChild(estadoCell);
            row.appendChild(editarCell);
            tableBody.appendChild(row);
            AppModule.loadCellEffects();
        });
        const linksDeOrdenacao = Array.from(document.querySelectorAll('.thead_dentist th a'));
        this.linkDeOrdenacao(linksDeOrdenacao, dentistData);
    }
    ;
    static linkDeOrdenacao(linksDeOrdenacao, dentistData) {
        linksDeOrdenacao.forEach((th) => {
            th.addEventListener('click', (event) => {
                event.preventDefault();
                const sortBy = th.id;
                const orderBy = Dentist.sortDentists(dentistData, sortBy);
                if (sortBy) {
                    Dentist.renderDentistList(orderBy);
                }
            });
        });
    }
    ;
    nomeCompletoValidation(nomeCompleto) {
        console.log('O nome completo passou pela validação de dentist');
    }
    ;
}
