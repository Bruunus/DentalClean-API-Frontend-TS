import { ControllerRouteTS } from "../../controller/controllerTS.js"; 

export class EditDentistView {

    private formSubmit: HTMLFormElement | null;


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
    


    public constructor () {
        this.formSubmit = document.querySelector('#form_editar');
        this.croEditado = (this.formSubmit.querySelector('#croEditar') as HTMLInputElement)?.value || '';

        this.nomeCompletoEditado = (this.formSubmit.querySelector('#nomeCompletoEditar') as HTMLInputElement)?.value || '';
        this.ruaEditado = (this.formSubmit.querySelector('#ruaEditar') as HTMLInputElement)?.value;
        this.numeroEditado = (this.formSubmit.querySelector('#numeroEditar') as HTMLInputElement)?.value;
        this.bairroEditado = (this.formSubmit.querySelector('#bairroEditar') as HTMLInputElement)?.value;
        this.cidadeEditado = (this.formSubmit.querySelector('#cidadeEditar') as HTMLInputElement)?.value;
        this.estadoEditado = (this.formSubmit.querySelector('#estadoEditar') as HTMLInputElement)?.value;
        this.emailEditado = (this.formSubmit.querySelector('#emailEditar') as HTMLInputElement)?.value;
        this.dataNascimentoEditado = (this.formSubmit.querySelector('#dataNascimentoEditar') as HTMLInputElement)?.value;
        this.telefoneResidencialEditado = (this.formSubmit.querySelector('#telefoneResidencialEditar') as HTMLInputElement)?.value;
        this.telefoneCelularEditado = (this.formSubmit.querySelector('#telefoneCelularEditar') as HTMLInputElement)?.value;
        this.especialidadeEditado = (this.formSubmit.querySelector('#especialidadeEditar') as HTMLInputElement)?.value;
        this.cpfEditado = (this.formSubmit.querySelector('#cpfEditar') as HTMLInputElement)?.value;

        
    };
    

    static screenEditar(objectDentist: any[]): void {

        const template = `Templete Editar
        
        
        ${objectDentist.map((update: any) => {
            return `

            <form action="" id="form_editar">
                <label name="croEditar">CRO</label>
                <input type="text" id="croEditar" disabled value="${update.cro}">

                <label name="nomeCompletoEditar">Nome Completo</label>
                <input type="text" class="editar" id="nomeCompletoEditar" disabled value="${update.nomeCompleto}">

                <label name="especialidadeEditar">Especialidade</label>
                <input type="text" class="editar" id="especialidadeEditar" disabled value="${update.especialidade}">

                <label name="dataNascimentoEditar">Data nascimento</label>
                <input type="date" class="editar" id="dataNascimentoEditar" disabled value="${update.dataNascimento}">

                <label name="cpfEditar">CPF</label>
                <input type="text" class="editar" id="cpfEditar" disabled value="${update.cpf}">

                <label name="telefoneResidencialEditar">Telefone Res.</label>
                <input type="text" class="editar" id="telefoneResidencialEditar" disabled value="${update.telefoneResidencial}">

                <label name="telefoneCelularEditar">Telefone Cel.</label>
                <input type="text" class="editar" id="telefoneCelularEditar" disabled value="${update.telefoneCelular}">

                <label name="emailEditar">E-mail</label>
                <input type="text" class="editar" id="emailEditar" disabled value="${update.email}">

                <label name="ruaEditar">Rua</label>
                <input type="text" class="editar" id="ruaEditar" disabled value="${update.rua}">

                <label name="numeroEditar">Número</label>
                <input type="text" class="editar" id="numeroEditar" disabled value="${update.numero}">

                <label name="bairroEditar">Bairro</label>
                <input type="text" class="editar" id="bairroEditar" disabled value="${update.bairro}">

                <label name="cidadeEditar">Cidade</label>
                <input type="text" class="editar" id="cidadeEditar" disabled value="${update.cidade}">

                <label name="estadoEditar">Estado</label>
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

        // template renderer
        ControllerRouteTS.loadScreenAllViewDentist(template);

        // events
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



        
        /**
         * Event for save data in database API
         * code 1 = update
         */
        optionSave.addEventListener('click', () => {

            const cro = new EditDentistView();
            EditDentistView.update();
        }) 





        /**
         * Event to Excluse data...
         * code 2 = delete
         */
        optionDelete.addEventListener('click', () => {

            const cro = new EditDentistView();

            EditDentistView.delete();
           

           
        })



    }


 

    private static update(): void {

        const editDentistView = new EditDentistView();

        const dentistaDataJSON = {
                nomeCompleto: editDentistView.nomeCompletoEditado,
                rua: editDentistView.ruaEditado,
                numero: editDentistView.numeroEditado,
                bairro: editDentistView.bairroEditado,
                cidade: editDentistView.cidadeEditado,
                estado: editDentistView.estadoEditado,
                email: editDentistView.emailEditado,
                dataNascimento: editDentistView.dataNascimentoEditado,
                telefoneResidencial: editDentistView.telefoneResidencialEditado,
                telefoneCelular: editDentistView.telefoneCelularEditado,
                especialidade: editDentistView.especialidadeEditado,
                cro: editDentistView.croEditado,
                cpf: editDentistView.cpfEditado
            };

        fetch(`http://localhost:8080/atualizar/cadastro/dentista?cro=${dentistaDataJSON.cro}`, {

            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(dentistaDataJSON),
        })
            .then((response) => {
                if(!response.ok) {
                    throw new Error(`Erro ao atualizar os dados`);
                }
                if(!response.ok) {
                    return response.json();
                }
            })

            .then((data) => {
                console.log(`Dados atualizados com sucesso !`);
                console.log(dentistaDataJSON);
            })
                .catch((error) => {
                    console.error(error);
            });
                

        //location.reload();
        
    }



    private static delete(): void {

        const deleteDentistView = new EditDentistView();  
        const cro =  deleteDentistView.croEditado;
        console.log(cro)

        fetch(`http://localhost:8080/api/delete/dentista?cro=${cro}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao excluir os dados');
            }
            return response.json();
        })
        .then(data => {
            console.log('Dados excluídos com sucesso!');
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });

    }



}