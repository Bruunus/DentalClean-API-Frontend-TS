
import { ControllerRouteTS } from "../../controller/controllerRouterTS.js";
import { EditDentistView } from "../../view/templates/dentist/edit/editDentistView.js";
import { AppModule } from "../appModule.js";

export class Dentist {


    private static renderEditDentistView: EditDentistView;
    private MODAL_CHANGE_NAME: HTMLElement;

    private controllerRouterTs: ControllerRouteTS = new ControllerRouteTS();


    // Lógica para ordenar dentistas por critério (nome completo, CPF, etc.)
    /**
     * 
     * Método estático que recebe um objeto JSON direcionada da api backend e 
     * uma string para identificação de qual coluna da tabela será ordenada.
     * 
     * O método indentifica a coluna e realiza a ordenação com base em 
     * ordenação lexicográfica.
     * 
     * @param dentistData 
     * @param sortBy 
     * @returns 
     */
    static sortDentists(dentistData: any[], sortBy: string): any[] {

        
        
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
                dentistData.sort((a,b) => a.cro - b.cro);
                break;
            
            case 'especialidade':
                dentistData.sort((a,b) => a.especialidade.localeCompare(b.especialidade));
                break;

            case 'cidade':
                dentistData.sort((a,b) => a.cidade.localeCompare(b.cidade));
                break;

            case 'estado':
                dentistData.sort((a,b) => a.estado.localeCompare(b.estado));
        }
        return dentistData;
    }






    /**
     * Método dependente do método sortDentists(). Sua função é renderizar uma nova tabela 
     * ordenada pelo critério declarado em sortDentist(). 
     * 
     * Internamento o método mapeia o elemento pai responsável pelas tr na estrutura html.
     * Após o método de ordenação sortDentists() o método renderDentistList vai limpar todas as
     * tr antigas, em seguida através do método forEach ele forma uma nova linha adicionando as
     * classes respectivas, as tds com seus dados respectivos e adiciona elas dentro da respectiva
     * linha e por final a linha é renderizada na tabela.
     * 
     * 
     */
    static renderDentistList(dentistData: any[]): void {
        const tableBody = document.querySelector('.table_hover_dentist');
        
        tableBody.innerHTML = '';

        // Realizo um foreach para cada linha da tabela
        dentistData.forEach((dentist: any) => {

            const row = document.createElement('tr');
            row.classList.add('no-select', 'tr_format_dentist');

            // Crie as células para cada propriedade do dentista e adicione ao tr
            const nomeCompletoCell = document.createElement('td');
            nomeCompletoCell.classList.add('nomeCompleto');

            const dataNascCell = document.createElement('td');
            dataNascCell.classList.add('dataNascimento');

            const cpfCell = document.createElement('td');
            cpfCell.classList.add('cpf')

            const croCell = document.createElement('td');
            croCell.classList.add('cro')

            const especialidadeCell = document.createElement('td');
            especialidadeCell.classList.add('especialidade');

            const telefoneResidencialCell = document.createElement('td');
            telefoneResidencialCell.classList.add('telefoneResidencial')

            const telefoneCelularCell = document.createElement('td');
            telefoneCelularCell.classList.add('telefoneCelular')

            const emailCell = document.createElement('td');
            emailCell.classList.add('email')

            const ruaCell = document.createElement('td');
            ruaCell.classList.add('rua')

            const numeroCell = document.createElement('td');
            numeroCell.classList.add('numero')

            const bairroCell = document.createElement('td');
            bairroCell.classList.add('bairro')

            const cidadeCell = document.createElement('td');
            cidadeCell.classList.add('cidade')

            const estadoCell = document.createElement('td');
            estadoCell.classList.add('estado')


            const editarCell = document.createElement('td');
            const linkEditar = document.createElement('a');
            linkEditar.href = '#'


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

            // criando o link editar...
            linkEditar.textContent = 'Editar';
            linkEditar.classList.add('editar');

            linkEditar.addEventListener('click', (event) => { 
                
                // pegar os dados do link clicado
                const elementoClicado = event.target as HTMLElement;
                const linha = elementoClicado.closest('.table_hover_dentist tr');
                

                if (linha) {
               
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


                    // criar um JSON dele

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
                    }

                    const sendArray = [JSONUpdate];
                    this.renderEditDentistView = new EditDentistView(sendArray);
                };


                
                // Enviar para o template de editar

                 


              });
            editarCell.appendChild(linkEditar);


            // Adicione cada célula à linha
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


        const linksDeOrdenacao = Array.from(document.querySelectorAll('.thead_dentist th a')) as HTMLAnchorElement[];
        this.linkDeOrdenacao(linksDeOrdenacao, dentistData);




        



    };




    /**
     * Método tem a finalidade de adicionar ouvintes de evento aos links de ordenação da tabela. 
     * Quando um desses links é clicado, o evento de clique é acionado.
     * @param linksDeOrdenacao 
     * @param dentistData 
     */
    public static linkDeOrdenacao(linksDeOrdenacao: HTMLAnchorElement[], dentistData: any[]) {
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
    };



    
    



    public nomeCompletoValidation(nomeCompleto: HTMLInputElement): void {

        console.log('O nome completo passou pela validação de dentist')



    };


    


    


}