import { ControllerRouteTS } from "../../controller/controllerTS.js"; 
import { DentistaController } from "../../controller/dentistaController.js";

export  class EditDentistView {
 

    private id: string;
    private nomeCompletoEditado: string;
    private dataNascimentoEditado: string;
    private cpfEditado: string;
    private croEditado: string;
    private especialidadeEditado: string;
    private telefoneResidencialEditado: string;
    private telefoneCelularEditado: string;
    private emailEditado: string;
    private ruaEditado: string;
    private numeroEditado: string;
    private bairroEditado: string;
    private cidadeEditado: string;
    private estadoEditado: string;

    private btnEditOptions: HTMLElement | null;
    private btnUpdate: HTMLElement | null;
    private btnDelete: HTMLElement | null;

    private renderTemplate: DentistaController;   
    

     


    public constructor (objectDentist: any[]) {

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
        } else {
            // Lógica para lidar com a lista vazia, se necessário
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
                <input type="text" class="editar" id="croEditar" disabled value="${this.croEditado}">

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
        this.btnUpdate.addEventListener('click', () => { this.update(this.id) });
        this.btnDelete.addEventListener('click', () => { this.delete(this.id) })
        
        
    };
    

    /**
     * Método para editar as informações do dentista selecionado e editado.
     */
    private editOptionsViwer() : void {

        const camposEditar = document.querySelectorAll('form .editar');
            camposEditar.forEach(tags => {
                tags.removeAttribute('disabled');
            });
            
            this.btnUpdate.removeAttribute('disabled');
    }


 

    /**
     * Método utlizado para atualizar um cadastro de dentista no banco dedados.
     * Utilizando a técnica de captura de dados de formulário, adicionados ao JSON 
     * e enviado para o servidor via API para tratamentos dos dados na base de dados.
     * 
     * @param id 
     * @returns 
     */
    private update(id:string): void {
         
        const formSubmit = document.querySelector('#form_editar');

        if(!formSubmit) {
            console.error("Problema encontrado ao renderizar formulário.");
            return;
        } else {

        this.nomeCompletoEditado = (formSubmit.querySelector('#nomeCompletoEditado') as HTMLInputElement)?.value || '';
        this.dataNascimentoEditado = (formSubmit.querySelector('#dataNascimentoEditar') as HTMLInputElement)?.value || '';
        this.cpfEditado = (formSubmit.querySelector('#cpfEditar') as HTMLInputElement)?.value || '';
        this.croEditado = (formSubmit.querySelector('#croEditar') as HTMLInputElement)?.value || '';
        this.especialidadeEditado = (formSubmit.querySelector('#especialidadeEditar') as HTMLInputElement)?.value || '';
        this.telefoneResidencialEditado = (formSubmit.querySelector('#telefoneResidencialEditar') as HTMLInputElement)?.value || '';
        this.telefoneCelularEditado = (formSubmit.querySelector('#telefoneCelularEditar') as HTMLInputElement)?.value || '';
        this.emailEditado = (formSubmit.querySelector('#emailEditar') as HTMLInputElement)?.value || '';
        this.ruaEditado = (formSubmit.querySelector('#ruaEditar') as HTMLInputElement)?.value || '';
        this.numeroEditado = (formSubmit.querySelector('#numeroEditar') as HTMLInputElement)?.value || '';
        this.bairroEditado = (formSubmit.querySelector('#bairroEditar') as HTMLInputElement)?.value || '';
        this.cidadeEditado = (formSubmit.querySelector('#cidadeEditar') as HTMLInputElement)?.value || '';
        this.estadoEditado = (formSubmit.querySelector('#estadoEditar') as HTMLInputElement)?.value || '';
        

        const objectDentist= {
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
                'Content-Type':'application/json'
        },
            body: JSON.stringify(objectDentist),
        })
            .then((response) => {
                if(!response.ok) {
                    // console.log(objectDentist);  {Debbug}
                    throw new Error(`Erro ao atualizar os dados`);
                }
                if(!response.ok) {
                    return response.json();
                }
            })

            .then((data) => {
                console.log(`Dados atualizados com sucesso !`);
                //console.log(objectDentist);   {Debbug}
                this.renderTemplate = new DentistaController();
                this.renderTemplate.loadListDentist();
            })
                .catch((error) => {
                    console.error(error);
                    //console.log(objectDentist);   {Debbug}
            });
        }
    }



    /**
     * Método utilizado para excluir um cadastro de dentista no banco de dados.
     * Atrávés do id di cadastro capturado e mapeado é feito uma requisição para
     * exclusão segundo o mesmo.
     * 
     * @param id 
     */
    private delete(id: string): void {
        fetch(`http://localhost:8080/api/delete/dentista/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Dentista excluído com sucesso!');
                this.renderTemplate = new DentistaController();
                this.renderTemplate.loadListDentist();

            } else {
                throw new Error('Erro ao excluir os dados');
            }
        })
        .catch(error => {
            console.error(error);
        });
    }
}    