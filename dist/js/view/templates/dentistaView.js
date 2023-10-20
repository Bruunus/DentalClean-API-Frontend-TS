import { ControllerRouteTS } from "../../controller/controllerTS.js";
import { AppModule } from "../../module/appModule.js";
import { Dentist } from "../../module/dentist.js";
import { EditDentistView } from "./editDentistView.js";
export class DentistaView {
    static listDentist(dentistData) {
        AppModule.loadCellEffects();
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
        const template = `
    
        <div class="div_titulo"><h4 class="no-select">Dentistas</h4></div>

        <div class="div_container_tables" >
            
            <table class="table_dentist  table-hover ">
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
                        <tr class="no-select tr_format" > 
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
                            <td><a href="#" class="editarDentista">Editar</a></td>

                        </tr>
                    `;
        }).join('')}
                </tbody>
            </table>
        </div>`;
        ControllerRouteTS.loadScreenAllViewDentist(template);
        const linksDeOrdenacao = document.querySelectorAll('.thead_dentist th a');
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
        const linkEditarDentista = document.querySelectorAll('.editarDentista');
        console.log(linkEditarDentista);
        linkEditarDentista.forEach((link) => {
            link.addEventListener('click', (event) => {
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
                    EditDentistView.screenEditar(sendArray);
                }
            });
        });
    }
}
