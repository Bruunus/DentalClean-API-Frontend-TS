
import { DentistaController } from "../../../controller/dentista-controller/dentistaController.js";
import { Dentist } from "../../../module/module-dentist/dentist.js";
import { EditDentistView } from "./edit/editDentistView.js";

export class DentistaView {
    

    private static renderEditDentistView: EditDentistView;
    private static template: string;
    private static btnSeach: HTMLElement;
    private static nameDentistSeach: string;

    public constructor() {
        DentistaView.template;
        DentistaView.btnSeach;
        DentistaView.nameDentistSeach;
    }


    /**
     * Método que iniciar a lista já ordenando por nome. 
     * 
     * @param dentistData 
     */
    private static orderByName(dentistData: any[]) {

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


    /**
     * Método responsável por renderizar template dinâmico da lista de dentistas.
     * @param dentistData 
     * @param renderizadorId 
     */
    static render(dentistData: any[]):void {     

        
    
        this.orderByName(dentistData);

        this.template = `
        <head>
            <style>

            </style>
        </head>


        <div class="div_titulo_dentist_home">
            <h4 class="no-select">Dentistas</h4>
        </div>  


        <div class="row justify-content-end container-nav-bar-pesquisar-dentista">
            <nav class="col-12 navbar navbar-expand-lg nav-container-pesquisar" style="
                /* border: 1px solid tomato; {Debug} */
                padding: 0 !important;
            ">

                <form class="form-seach">
                    <div class="row d-flex justify-content-end">
                        <div class="col">
                           <input type="search" id="input-seach" class="form-control input-form-pesquisar" placeholder="Nome Dentista" aria-label="Search">
                        </div>

                        <div class="col">
                            <button id="btn-seach" class=" btn btn-outline-success btn-pesquisar" type="submit">Pesquisar</button>
                        </div>
                    </div>
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

                ${dentistData.map((dentist: any) => {

                   
                    
                    return `
                        <tr class="no-select tr_format_dentist" style="color: #354057"> 
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
                            <script>
                                console.log("${dentist.cpf}")
                            </script>
                        </tr>
                    `;
                }).join('')}
                </tbody>
            </table>
        </div>`;
        
        const elementDOM = document.querySelector('#container-child-right');
        elementDOM.innerHTML = this.template;
      
        const linksDeOrdenacao = Array.from(document.querySelectorAll('.thead_dentist th a')) as HTMLAnchorElement[];
        Dentist.linkDeOrdenacao(linksDeOrdenacao, dentistData);


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

        
        const form = document.querySelector('.container-nav-bar-pesquisar nav form') as HTMLFormElement;
        const input = document.getElementById('input-seach') as HTMLInputElement;
        const btnSeach = document.getElementById('btn-seach') as HTMLButtonElement;

        this.seachDentist(form, input, btnSeach);




    }



    /**
     * Método responsável por realizar a busca pelo pesquisa solicitada. 
     * @param btnSeach 
     */
    private static seachDentist(form: HTMLFormElement, input: HTMLInputElement, btn: HTMLButtonElement) {

        form.addEventListener('submit', (event) => {
            event.preventDefault();  
        
            const seachValue = input.value;

            const callAPI = new DentistaController();
            callAPI.accessSeachDentist(seachValue);
            
            input.value = '';
        
             
        });

    }



    


 

    





}