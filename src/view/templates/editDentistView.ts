import { ControllerRouteTS } from "../../controller/controllerTS.js"; 

export class EditDentistView {


    

    static screenEditar(objectDentist: any[]): void {

        const template = `Templete Editar
        
        
        ${objectDentist.map((update: any) => {
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


        /**
         * Event for save datas in database API
         */
        optionSave.addEventListener('click', () => {

            // alterar formSubmit dessa
            const formSubmit = document.querySelector('#form_editar');

            if(!formSubmit) {
                console.error("Problema encontrado ao renderizar formulário. ");
                return;
            } else {

                const nomeCompletoEditado = (formSubmit.querySelector('#nomeCompletoEditar') as HTMLInputElement)?.value;
                const dataNascimentoEditado = (formSubmit.querySelector('#dataNascimentoEditar') as HTMLInputElement)?.value;
                const cpfEditado = (formSubmit.querySelector('#cpfEditar') as HTMLInputElement)?.value;
                const croEditado = (formSubmit.querySelector('#croEditar') as HTMLInputElement)?.value;
                const especialidadeEditado = (formSubmit.querySelector('#especialidadeEditar') as HTMLInputElement)?.value;
                const telefoneResidencialEditado = (formSubmit.querySelector('#telefoneResidencialEditar') as HTMLInputElement)?.value;
                const telefoneCelularEditado = (formSubmit.querySelector('#telefoneCelularEditar') as HTMLInputElement)?.value;
                const emailEditado = (formSubmit.querySelector('#emailEditar') as HTMLInputElement)?.value;
                const ruaEditado = (formSubmit.querySelector('#ruaEditar') as HTMLInputElement)?.value;
                const numeroEditado = (formSubmit.querySelector('#numeroEditar') as HTMLInputElement)?.value;
                const bairroEditado = (formSubmit.querySelector('#bairroEditar') as HTMLInputElement)?.value;
                const cidadeEditado = (formSubmit.querySelector('#cidadeEditar') as HTMLInputElement)?.value;
                const estadoEditado = (formSubmit.querySelector('#estadoEditar') as HTMLInputElement)?.value;


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
                }



                fetch(`http://localhost:8080/atualizar/cadastro/dentista?cro=${dentistaDataJSON.cro}`, {

                    method: 'PUT',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(dentistaDataJSON),
                })
                    .then((response) => {
                        if(!response.ok) {
                            throw new Error('Erro ao enviar os dados para o servidor.');
                        }
                        if(!response.ok) {
                            return response.json();
                        }
                    })

                    .then((data) => {
                        console.log('then do fetch acionado')
                        console.log('Resposta do servidor:', data);
                        console.log('Dados atualizados com sucesso !');
                        console.log(dentistaDataJSON);
                        
                    })

                    .catch((error) => {
                        console.error(error);
                    })

                

            }


            
            



            //location.reload();
        }) 





        /**
         * Evento para Excluir dados
         */
        optionDelete.addEventListener('click', () => {

            alert('Excluir em contrução...')
            location.reload();
        })



    }



    




}