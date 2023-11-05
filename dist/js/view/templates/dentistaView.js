import { DentistaController } from "../../controller/dentistaController.js";
import { Dentist } from "../../module/dentist.js";
import { EditDentistView } from "./editDentistView.js";
export class DentistaView {
    constructor(renderizadorId) {
        DentistaView.elementDOM = document.querySelector(renderizadorId);
        DentistaView.template;
        DentistaView.btnSeach;
        DentistaView.nameDentistSeach;
    }
    static orderByName(dentistData) {
        dentistData.sort((a, b) => {
            const nomeA = a.nomeCompleto.toUpperCase();
            const nomeB = b.nomeCompleto.toUpperCase();
            if (nomeA < nomeB) {
                return -1;
            }
            if (nomeA > nomeB) {
                return 1;
            }
            return 0;
        });
    }
    static render(dentistData, renderizadorId) {
        this.orderByName(dentistData);
        this.template = `
        <head>
        <style>
        </style>
        </head>

        <div class="div_titulo_dentist">
            <h4 class="no-select">Dentistas</h4>
        </div>


        <div class="container-nav-bar-pesquisar">

            <nav class="navbar navbar-expand-lg nav-container-pesquisar">

                <form id="form-submit" class="form-inline my-2 my-lg-0 form-pesquisar" >
                    
                    <input id="input-seach" class="form-control mr-sm-2 input-form-pesquisar" type="search" placeholder="Nome" aria-label="Search">
                    <button id="btn-seach" class="btn btn-outline-success my-2 my-sm-0 btn-pesquisar" type="submit">Pesquisar</button>
                
                </form>
                 
            </nav>

        </div>

        <div class="div_container_tables" style="background-color: #f7fcff;">
            
            <table class="table_dentist  table-hover " style="background-color: white">
                <thead class="thead_dentist">
                    <tr class="no-select">
                        <th><a href="#" id="nomeCompleto">Nome Completo</a></th>
                        <th><a href="#" id="dataNascimento">Data de Nasc.</a></th>
                        <th><a href="#" id="cpf">CPF</a></th>
                        <th><a href="#" id="cro">CRO</a></th>
                        <th><a href="#" id="especialidade">Especialidade</a></th>
                        <th class="color_font_th">Tel. Residencial</th>
                        <th class="color_font_th">Tel. Celular</th>
                        <th class="color_font_th">E-mail</th>
                        <th class="color_font_th">Rua</th>
                        <th class="color_font_th">Número</th>
                        <th class="color_font_th">Bairro</th>
                        <th><a href="#" id="cidade">Cidade</a></th>
                        <th><a href="#" id="estado">Estado</a></th>
                        <th class="color_font_th">Editar</th>
                    </tr>
                </thead>
                <tbody class="table_hover_dentist">
                ${dentistData.map((dentist) => {
            return `
                        <tr class="no-select tr_format" style="color: #354057"> 
                            <td class="nomeCompleto">${dentist.nomeCompleto}</td>
                            <td class="dataNascimento">${dentist.dataNascimento}</td>
                            <td class="cpf">${dentist.cpf}</td>
                            <td class="cro">${dentist.cro}</td>
                            <td class="especialidade">${dentist.especialidade}</td>
                            <td class="telefoneResidencial">${dentist.telefoneResidencial}</td>
                            <td class="telefoneCelular">${dentist.telefoneCelular}</td>
                            <td class="email">${dentist.email}</td>
                            <td class="rua">${dentist.rua}</td>
                            <td class="numero">${dentist.numero}</td>
                            <td class="bairro">${dentist.bairro}</td>
                            <td class="cidade">${dentist.cidade}</td>
                            <td class="estado">${dentist.estado}</td>
                            <td><a href="#" class="editarDentista" data-id="${dentist.id}">Editar</a></td>

                        </tr>
                    `;
        }).join('')}
                </tbody>
            </table>
        </div>`;
        this.elementDOM.innerHTML = this.template;
        const linksDeOrdenacao = Array.from(document.querySelectorAll('.thead_dentist th a'));
        Dentist.linkDeOrdenacao(linksDeOrdenacao, dentistData);
        const linkEditarDentista = document.querySelectorAll('.editarDentista');
        linkEditarDentista.forEach((link) => {
            link.addEventListener('click', (event) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
                const elementoClicado = event.target;
                const linha = elementoClicado.closest('.table_hover_dentist tr');
                if (linha) {
                    const idDentista = elementoClicado.getAttribute('data-id');
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
                        id: idDentista,
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
            });
        });
        const form = document.getElementById('form-submit');
        const input = document.getElementById('input-seach');
        const btnSeach = document.getElementById('btn-seach');
        this.seachDentist(form, input, btnSeach);
    }
    static seachDentist(form, input, btn) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const seachValue = input.value;
            const callAPI = new DentistaController();
            callAPI.accessSeachDentist(seachValue);
            input.value = '';
        });
    }
}
