import { ControllerRouteTS } from "../../controller/controllerTS.js";
import { AppModule } from "../../module/appModule.js";
import { Dentist } from "../../module/dentist.js";
import { EditDentistView } from "./editDentistView.js";

export class DentistaView {
    

    private static renderEditDentistView: EditDentistView;
    private static template: string;
    private static elementDOM: HTMLElement;

    public constructor(renderizadorId?: string) {
        DentistaView.elementDOM = document.querySelector(renderizadorId);
        DentistaView.template;
    }


    static render(dentistData?: any[], renderizadorId?: string):void {
    

    
    

   /*  dentistData.sort((a, b) => {
        const nomeA = a.nomeCompleto.toUpperCase();
        const nomeB = b.nomeCompleto.toUpperCase();
        if (nomeA < nomeB) {
            return -1;
        }
        if (nomeA > nomeB) {
            return 1;
        }
        return 0;
    }); */




    console.log(dentistData)


    this.template = `
    <head>
    <style>

        .container-nav-bar-pesquisar {
            border-left: 1px solid #4092cf3b;
            border-right: 1px solid #4092cf3b;
        }

        .nav-container-pesquisar {
            padding: 7px 16px 2px 7px;
            background-color: #e0f5ff;
        }

        .input-form-pesquisar {
            height: 2rem;
            border-color: #c2d9f1;
        }

        .input-form-pesquisar:focus {
            outline: none;
            box-shadow: 0 0 0 .1rem #aed4f7;
            border-color: #accff1;
        }

        .form-pesquisar {
            margin-left: 54.566666rem;
        }

        .btn-pesquisar {
            /*
                Importante: A cor do botão e seus detalhes foi definida diretamente no framework, segue o caminho 
                dist/css/bootstrap_4_1_3/bootstrap.min.css -> Pesquise por 'btn-outline-success'
            */
            height: 2rem;
            padding-top: 4px; 
            
        }


        .btn-outline-success{
            color: #4092cf;  
            background-color:transparent;
            background-image:none;
            border-color: #439bd9;
        }
        .btn-outline-success:hover{
            color:#fff;
            background-color: #4092cf;
            border-color:#377eb1;
        }
        .btn-outline-success.focus,.btn-outline-success:focus{
            /* box-shadow:0 0 0 .2rem rgba(40,167,69,.5)  - Original Bootstrap*/
            /*Desabilitando focus do botão*/
            outline: none;
            box-shadow: none;
            border-color: #3274a3;
        }
        .btn-outline-success.disabled,.btn-outline-success:disabled{
            color:lightgray;
            border-color:lightgray;
            background-color:transparent;

        }
        .btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{
            color:#fff;
            background-color: #3c8ac2;
            border-color:#3274a3;
        }
        .btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{
            /* box-shadow:0 0 0 .2rem rgba(40,167,69,.5)  Original Bootstrap*/
            /*Desabilitando focus do botão*/
            outline: none;
            box-shadow: none;
            border-color: #3274a3;
        }




    </style>
    </head>

        <div class="div_titulo">
            <h4 class="no-select">Dentistas</h4>
        </div>


        <div class="container-nav-bar-pesquisar">

            <nav class="navbar navbar-expand-lg nav-container-pesquisar">

                <form class="form-inline my-2 my-lg-0 form-pesquisar" >
                    
                    <input class="form-control mr-sm-2 input-form-pesquisar" type="search" placeholder="Nome" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0 btn-pesquisar" type="button">Pesquisar</button>
                
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
                    //this.renderEditDentistView = new EditDentistView(sendArray);

                }
        
            })
        })



    }

    





}