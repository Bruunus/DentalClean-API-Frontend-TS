
import { ControllerRouteTS } from "../../controller/controllerRouterTS.js";
import { DentistaController } from "../../controller/dentistaController.js";
import { Dentist } from "../../module/dentist.js";

export  class EditDentistView {
 
    private template: string;

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

    private btnEditOptions: HTMLButtonElement | null;
    private btnUpdate: HTMLButtonElement | null;
    private btnDelete: HTMLButtonElement | null;

    private renderTemplate: DentistaController; 
    private controllerRouterTS: ControllerRouteTS;  
    

     


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


        this.template = `
        <head>
            <style>
              



            </style>
        </head>


        <div id="container-pai-editar-temp">
            
            <div class="div_titulo_edit_dentist">
                    <h4 class="no-select">Editar Dentista</h4>
            </div>
            <div id="container_editar" >
                <form  id="form_editar">
                   <div class="form-row">
                        <!-- col 1 -->
            
                        <div class="form-group col-md-6">
                            <label class="system-color-text" name="nomeCompletoEditado">Nome Completo</label>
                            <input type="text" class="form-control editar " id="nomeCompletoEditado" maxlength="20" disabled value="${this.nomeCompletoEditado}">
                        </div>
                        <div class="form-group col-md-3">
                            <label class="system-color-text" name="dataNascimentoEditar">Data nascimento</label>
                            <input type="date" class="form-control editar " id="dataNascimentoEditar" disabled value="${this.dataNascimentoEditado}">
                        </div>
                        <div class="form-group  col-md-3">
                            <label class="system-color-text" name="cpfEditar">CPF</label>
                            <input type="text" class="form-control editar" id="cpfEditar" disabled value="${this.cpfEditado}">
                        </div>
                        <!-- col 2 -->
                        <div class="form-group col-2">
                            <label class="system-color-text" name="cro">CRO</label>
                            <input type="number" class="form-control editar" id="croEditar" disabled  value="${this.croEditado}">
                        </div>
                        <div class="form-group col-2">
                            <label class="system-color-text" name="especialidadeEditar">Especialidade</label>
                           <!-- <input type="text" class="form-control editar" id="especialidadeEditar" disabled value="${this.especialidadeEditado}">
                            -->
                            <select id="especialidadeEditar" class="form-control editar" disabled >
                                <option value="" disabled selected>Selecione</option>
                                <option value="Cirurgia">Cirurgia</option>
                                <option value="Cirurgia Bucomaxilofacial">Cirurgia Bucomaxilofacial</option>
                                <option value="Dentística">Dentística</option>
                                <option value="Endodontia">Endodontia</option>
                                <option value="Odontopediatria">Odontopediatria</option>
                                <option value="Prótese Dentária">Prótese Dentária</option>
                                <option value="Periodontia">Periodontia</option>
                                <option value="Odontogeriatria">Odontogeriatria</option>
                                <option value="Estética">Estética</option>
                            </select>
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label class="system-color-text" name="telefoneResidencialEditar">Telefone Res.</label>
                            <input type="text" class="form-control editar" id="telefoneResidencialEditar" disabled value="${this.telefoneResidencialEditado}">
                        </div>
                        <div class="form-group col-md-4">
                            <label class="system-color-text" name="telefoneCelularEditar">Telefone Cel.</label>
                            <input type="text" class="form-control editar" id="telefoneCelularEditar" disabled value="${this.telefoneCelularEditado}">
                        </div>
                        <!-- col 3 -->
                        <div class="form-group col-md-12">
                            <label class="system-color-text" name="emailEditar">E-mail</label>
                            <input type="text" class="form-control editar" id="emailEditar" disabled maxlength="35" value="${this.emailEditado}">
                        </div>
                        <!-- col 4 -->
                        <div class="form-group col-md-5">
                            <label class="system-color-text" name="ruaEditar">Rua</label>
                            <input type="text" class="form-control editar" id="ruaEditar" disabled maxlength="32" value="${this.ruaEditado}">
                        </div>
                        <div class="form-group col-md-3">
                            <label class="system-color-text" name="numeroEditar">Número</label>
                            <input type="text" class="form-control editar" id="numeroEditar" disabled maxlength="5" value="${this.numeroEditado}">
                        </div>
                        <div class="form-group col-md-4">
                            <label class="system-color-text" name="bairroEditar">Bairro</label>
                            <input type="text" class="form-control editar" id="bairroEditar" disabled maxlength="20" value="${this.bairroEditado}">
                        </div>
                        <!-- col 5 -->
                        <div class="form-group col-md-9">
                            <label class="system-color-text" name="cidadeEditar">Cidade</label>
                            <input type="text" class="form-control editar" id="cidadeEditar" disabled maxlength="24" value="${this.cidadeEditado}">
                        </div>
                        <div class="form-group col-md-3">
                            <label class="system-color-text" name="estadoEditar">Estado</label>
                            <input type="text" class="form-control editar" id="estadoEditar" disabled maxlength="35" value="${this.estadoEditado}">
                        </div>
            
                    </div>
                <br>
                <br>
                
                <button type="button" class="btn btn-primary" id="btnUpdate">Editar</button>
                <button type="submit" class="btn btn-primary" id="btnSave" data-toggle="modal" disabled>Atualizar</button>
                <button type="button" class="btn btn-primary" id="btnDelete">Excluir</button>
                </form>
            </div>
        </div>
        `;
        
        this.controllerRouterTS = new ControllerRouteTS();
        this.controllerRouterTS.loadCallEditDentist(this.template);

        const validationNameAndCROJSON = {

            nome: this.nomeCompletoEditado,
            cro: this.croEditado


        } 



        
        
        

        this.btnEditOptions = document.querySelector('#btnUpdate');
        this.btnDelete = document.querySelector('#btnDelete');
        this.btnUpdate = document.querySelector('#btnSave');

        this.btnEditOptions.addEventListener('click',  this.editOptionsViwer );

        this.btnUpdate.addEventListener('click', () => { this.update(this.id, [validationNameAndCROJSON]) });



        this.btnDelete.addEventListener('click', () => { this.delete(this.id) })
        
        
    };


    public getTemplate(): string {
        return this.template;
    }
    
    

    /**
     * Método para editar as informações do dentista selecionado e editado.
     */
    private editOptionsViwer() : void {

        const camposEditar = document.querySelectorAll('form .editar');
            camposEditar.forEach(tags => {
                tags.removeAttribute('disabled');
            });
            const btnUpdate = document.querySelector('#btnSave');
            btnUpdate.removeAttribute('disabled');
    }


 

    /**
     * Método utlizado para atualizar um cadastro de dentista no banco dedados.
     * Utilizando a técnica de captura de dados de formulário, adicionados ao JSON 
     * e enviado para o servidor via API para tratamentos dos dados na base de dados.
     * 
     * @param id 
     * @returns 
     */
    private update(id:string, validation: any[]): void {


         
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


        const updateObjectDentist = {
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



        
        // validando os dados...
        let nomeOriginal: string;
        let croOriginal: string;

        // extraindo JSON...
        validation.forEach(objeto => {
            for (const chave in objeto) {
                if (objeto.hasOwnProperty(chave)) {
                    const valor = objeto[chave];
                    if(chave === 'nome') { nomeOriginal = valor; }
                    if(chave === 'cro') { croOriginal = valor }
                    console.log(`Chave: ${chave}, Valor: ${valor}`); //- {Debug}
                }
            }
        });

        const modal = new Dentist(); 

        // condição de validade 1
        if(nomeOriginal !== this.nomeCompletoEditado && croOriginal === this.croEditado) {

            
            modal.modalInformationUpdateDentist('MODAL_CHANGE_NAME', id, updateObjectDentist);
           
            
            } else if(croOriginal !== this.croEditado && nomeOriginal === this.nomeCompletoEditado){           
            
                modal.modalInformationUpdateDentist('MODAL_CHANGE_CRO',id, updateObjectDentist);
        
                } else if(nomeOriginal !== this.nomeCompletoEditado && croOriginal !== this.croEditado) {
                    
                    modal.modalInformationUpdateDentist('NEW_CRO_AND_NEW_NAME', id, updateObjectDentist);
                    } else if(croOriginal === this.croEditado && nomeOriginal === this.nomeCompletoEditado) {

                        modal.modalInformationUpdateDentist('NORMAL_MODE',id, updateObjectDentist);

                    }
        
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
                this.renderTemplate.accessListDentist(/* 'SCREEN_DENTIST' */);

            } else {
                throw new Error('Erro ao excluir os dados');
            }
        })
        .catch(error => {
            console.error(error);
        });
    }







}    