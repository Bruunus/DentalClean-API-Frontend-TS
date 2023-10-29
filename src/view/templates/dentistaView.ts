import { ControllerRouteTS } from "../../controller/controllerTS.js";
import { AppModule } from "../../module/appModule.js";
import { Dentist } from "../../module/dentist.js";
import { EditDentistView } from "./editDentistView.js";

export class DentistaView {
    

    private static renderEditDentistView: EditDentistView;


    static listDentist(dentistData: any[]):void {
    
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
                ${dentistData.map((dentist: any) => {
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
        
        // Renderizando o template da lista de dentistas...
        ControllerRouteTS.loadScreenAllViewDentist(template);

        // selecionando todos os links de Editar...
        const linksDeOrdenacao = document.querySelectorAll('.thead_dentist th a');
        
        // ordenação da tabela de acordo com a coluna desejada...
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
        // console.log(linkEditarDentista)  {Debbug}

        linkEditarDentista.forEach((link) => {
            
            link.addEventListener('click', (event) => {

                // indentity element cliked
                const elementoClicado = event.target as HTMLElement;

                // pega a coluna em que foi clicada no link Editar
                const linha = elementoClicado.closest('.table_hover_dentist tr');


                // coletando os dados 
                if (linha) {
                    const idDentista = elementoClicado.getAttribute('data-id');
                    const nomeCompletoEditar = linha.querySelector('.nomeCompleto')?.textContent;
                    const dataNascimentoEditar = linha.querySelector('.dataNascimento')?.textContent;
                    const cpfEditar = linha.querySelector('.cpf')?.textContent;
                    const croEditar = linha.querySelector('.cro')?.textContent;
                    const especialidadeEditar = linha.querySelector('.especialidade')?.textContent;
                    const telefoneResidencialEditar = linha.querySelector('.telefoneResidencial')?.textContent;
                    const telefoneCelularEditar = linha.querySelector('.telefoneCelular')?.textContent;
                    const emailEditar = linha.querySelector('.email')?.textContent;
                    const ruaEditar = linha.querySelector('.rua')?.textContent;
                    const numeroEditar = linha.querySelector('.numero')?.textContent;
                    const bairroEditar = linha.querySelector('.bairro')?.textContent;
                    const cidadeEditar = linha.querySelector('.cidade')?.textContent;
                    const estadoEditar = linha.querySelector('.estado')?.textContent;

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
                    }
                     
                    const sendArray = [JSONUpdate];
                    this.renderEditDentistView = new EditDentistView(sendArray);

                }
        
            })
        })



    }

    





}