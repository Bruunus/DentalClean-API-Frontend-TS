
import { ControllerRouteTS } from "../../../../controller/controllerRouterTS.js";
import { DentistaController } from "../../../../controller/dentista-controller/dentistaController.js";
import { ModalController } from "../../../../controller/modal-controller/modalController.js";
import { MaskForm } from "../../../../module/maskForm.js";

import { WarningForms } from "../../../../module/validation/warningForms.js";

export  class EditDentistView {
 
    private template: string;

    private form: Element;
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

    private nomeCompletoInput: HTMLInputElement;
    private dataNascimentoInput: HTMLInputElement;
    private cpfInput: HTMLInputElement;
    private croInput: HTMLInputElement;
    private especialidadeInput: HTMLInputElement;
    private telefoneResidencialInput: HTMLInputElement;
    private telefoneCelularInput: HTMLInputElement;
    private emailInput: HTMLInputElement;
    private ruaInput: HTMLInputElement;
    private numeroInput: HTMLInputElement;
    private bairroInput: HTMLInputElement;
    private cidadeInput: HTMLInputElement;
    private estadoInput: HTMLInputElement;

    private nomeCompletoSpan: HTMLSpanElement;    
    private dataNascimentoSpan: HTMLSpanElement;
    private cpfSpan: HTMLSpanElement;
    private croSpan: HTMLSpanElement;
    private especialidadeSpan: HTMLSpanElement;
    private telefoneResidencialSpan: HTMLSpanElement;
    private telefoneCelularSpan: HTMLSpanElement;
    private emailSpan: HTMLSpanElement;
    private ruaSpan: HTMLSpanElement;
    private numeroSpan: HTMLSpanElement;
    private bairroSpan: HTMLSpanElement;
    private cidadeSpan: HTMLSpanElement;
    private estadoSpan: HTMLSpanElement;

    private btnEditOptions: HTMLButtonElement | null;
    private btnSave: HTMLButtonElement | null;
    private btnDelete: HTMLButtonElement | null;

    private renderTemplate: DentistaController; 
    private controllerRouterTS: ControllerRouteTS;  
    private modalController: ModalController;
    private maskForm: MaskForm;
    private warningForms: WarningForms;
    

     


    public constructor (objectDentist: any[]) {

        this.modalController = new ModalController();
        this.maskForm = new MaskForm();
        this.warningForms = new WarningForms();
        


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

        

        const formatoPadraoEUA = this.formatterDefaultEUA(this.dataNascimentoEditado);
        
        var especialidade = {

            vazio: '',
            cirurgia: 'Cirurgia',
            cirurgiaBucomaxilofacial: 'Cirurgia Bucomaxilofacial',
            ortodontia: 'Ortodontia',
            dentistica: 'Dentística',
            endodontia: 'Endodontia',
            odontopediatria: 'Odontopediatria',
            proteseDentária: 'Prótese Dentária',
            periodontia: 'Periodontia',
            odontogeriatria: 'Odontogeriatria',
            estetica: 'Estética'
      
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

                        <div class="form-group col-md-6 container-nome-completo">
                            <label class="system-color-text label-form" for="nomeCompletoEditado">Nome Completo</label>
                            <input type="text" class="form-control form-input editar " id="nomeCompletoEditado" maxlength="20" disabled value="${this.nomeCompletoEditado}">
                            <span class="spanMessage"></span>
                        </div>

                        <div class="form-group col-md-3 container-data-nascimento">
                            <label class="system-color-text label-form" for="dataNascimentoEditar">Data nascimento</label>
                            <input type="date" class="form-control form-input editar " id="dataNascimentoEditar" disabled value="${formatoPadraoEUA}">
                            <span class="spanMessage"></span>
                        </div>

                        <div class="form-group  col-md-3 container-cpf">
                            <label class="system-color-text label-form" for="cpfEditar">CPF</label>
                            <input type="text" class="form-control form-input editar" id="cpfEditar" disabled value="${this.cpfEditado}" maxlength="14">
                            <span class="spanMessage"></span>
                        </div>

                        <!-- col 2 -->
                        <div class="form-group col-12 col-sm-12 col-lg-6 container-cro">
                            <label class="system-color-text label-form" for="croEditar">CRO</label>
                            <input type="number" class="form-control form-input editar" id="croEditar" disabled  value="${this.croEditado}" maxlength="4">
                            <span class="spanMessage"></span>
                        </div>
                        
                        <div class="form-group col-12 col-sm-12 col-lg-6 container-especialidade">
                            <label class="system-color-text label-form" for="especialidadeEditar">Especialidade</label>
                            <select id="especialidadeEditar" class="form-control select-form editar" disabled >
                                <option value="" disabled selected>Selecione</option>
                                <option value="Ortodontia" ${this.especialidadeEditado === 'Ortodontia' ? 'selected' : ''}>Ortodontia</option>
                                <option value="Cirurgia" ${this.especialidadeEditado === 'Cirurgia' ? 'selected' : ''}>Cirurgia</option>
                                <option value="Cirurgia Bucomaxilofacial" 
                                    ${this.especialidadeEditado === 'Cirurgia Bucomaxilofacial' ? 'selected' : ''}>Cirurgia Bucomaxilofacial
                                </option>
                                <option value="Dentística" ${this.especialidadeEditado === 'Dentística' ? 'selected' : ''}>Dentística</option>
                                <option value="Endodontia" ${this.especialidadeEditado === 'Endodontia' ? 'selected' : ''}>Endodontia</option>
                                <option value="Odontopediatria" ${this.especialidadeEditado === 'Odontopediatria' ? 'selected' : ''}>Odontopediatria</option>
                                <option value="Prótese Dentária" ${this.especialidadeEditado === 'Prótese Dentária' ? 'selected' : ''}>Prótese Dentária</option>
                                <option value="Periodontia" ${this.especialidadeEditado === 'Periodontia' ? 'selected' : ''}>Periodontia</option>
                                <option value="Odontogeriatria" ${this.especialidadeEditado === 'Odontogeriatria' ? 'selected' : ''}>Odontogeriatria</option>
                                <option value="Estética"${this.especialidadeEditado === 'Estética' ? 'selected' : ''}>Estética</option>                                
                               
                            </select>
                            <span class="spanMessage"></span>
                        </div>
                        <div class="form-group col-md-6 container-telefone-residencial">
                            <label class="system-color-text label-form" for="telefoneResidencialEditar">Telefine Residencial</label>
                            <input type="text" class="form-control form-input editar" id="telefoneResidencialEditar" 
                                disabled value="${this.telefoneResidencialEditado}" maxlength="14">
                            <span class="spanMessage"></span>
                        </div>
                        <div class="form-group col-md-6 container-telefone-celular">
                            <label class="system-color-text label-form" for="telefoneCelularEditar">Telefone Celular</label>
                            <input type="text" class="form-control form-input editar" id="telefoneCelularEditar" 
                                disabled value="${this.telefoneCelularEditado}" maxlength="16">
                            <span class="spanMessage"></span>
                        </div>
                        <!-- col 3 -->
                        <div class="form-group col-md-12 container-email">
                            <label class="system-color-text label-form" for="emailEditar">E-mail</label>
                            <input type="text" class="form-control form-input editar" id="emailEditar" disabled maxlength="31" value="${this.emailEditado}">
                            <span class="spanMessage"></span>
                        </div>
                        <!-- col 4 -->
                        <div class="form-group col-md-5 container-rua">
                            <label class="system-color-text label-form" for="ruaEditar">Rua</label>
                            <input type="text" class="form-control form-input editar" id="ruaEditar" disabled maxlength="25" value="${this.ruaEditado}">
                            <span class="spanMessage"></span>
                        </div>
                        <div class="form-group col-md-3 container-numero">
                            <label class="system-color-text label-form" for="numeroEditar">Número</label>
                            <input type="text" class="form-control form-input editar" id="numeroEditar" disabled maxlength="6" value="${this.numeroEditado}">
                            <span class="spanMessage"></span>
                        </div>
                        <div class="form-group col-md-4 container-bairro">
                            <label class="system-color-text label-form" for="bairroEditar">Bairro</label>
                            <input type="text" class="form-control form-input editar" id="bairroEditar" disabled maxlength="24" value="${this.bairroEditado}">
                            <span class="spanMessage"></span>
                        </div>
                        <!-- col 5 -->
                        <div class="form-group col-md-9 container-cidade">
                            <label class="system-color-text label-form" for="cidadeEditar">Cidade</label>
                            <input type="text" class="form-control form-input editar" id="cidadeEditar" disabled maxlength="24" value="${this.cidadeEditado}">
                            <span class="spanMessage"></span>
                        </div>
                        <div class="form-group col-md-3 container-estado">
                            <label class="system-color-text label-form" for="estadoEditar">Estado</label>
                            <input type="text" class="form-control form-input editar" id="estadoEditar" disabled maxlength="2" value="${this.estadoEditado}">
                            <span class="spanMessage"></span>
                        </div>
            
                    </div>
                <br>
                
                <div id="container-father-div-editar">
                   
                    <button type="button" class="btn btn-secondary" id="btnUpdate">Editar</button>
                    <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#" id="btnSave" disabled>Atualizar</button>
                    <button type="button" class="btn btn-secondary" id="btnDelete">Excluir</button>
                    
                </div>

                </form>
            </div>
        </div>
        `;

        
        
        
        this.controllerRouterTS = new ControllerRouteTS();
        this.controllerRouterTS.loadCallEditDentist(this.template);




       






        // validations
        this.nomeCompletoInput = document.querySelector('#nomeCompletoEditado') as HTMLInputElement;
        this.dataNascimentoInput = document.querySelector('#dataNascimentoEditar') as HTMLInputElement;
        this.cpfInput = document.querySelector('#cpfEditar') as HTMLInputElement;
        this.croInput = document.querySelector('#croEditar') as HTMLInputElement;
        this.especialidadeInput = document.querySelector('#especialidadeEditar') as HTMLInputElement;
        this.telefoneResidencialInput = document.querySelector('#telefoneResidencialEditar') as HTMLInputElement;
        this.telefoneCelularInput = document.querySelector('#telefoneCelularEditar') as HTMLInputElement;
        this.emailInput = document.querySelector('#emailEditar') as HTMLInputElement;
        this.ruaInput = document.querySelector('#ruaEditar') as HTMLInputElement;
        this.numeroInput = document.querySelector('#numeroEditar') as HTMLInputElement;
        this.bairroInput = document.querySelector('#bairroEditar') as HTMLInputElement;
        this.cidadeInput = document.querySelector('#cidadeEditar') as HTMLInputElement;
        this.estadoInput = document.querySelector('#estadoEditar') as HTMLInputElement;

        this.nomeCompletoSpan = document.querySelector('.container-nome-completo span') as HTMLSpanElement;
        this.dataNascimentoSpan = document.querySelector('.container-data-nascimento span') as HTMLSpanElement;
        this.cpfSpan = document.querySelector('.container-cpf span') as HTMLSpanElement;
        this.croSpan = document.querySelector('.container-cro span') as HTMLSpanElement;
        this.especialidadeSpan = document.querySelector('.container-especialidade span') as HTMLSpanElement;
        this.telefoneResidencialSpan = document.querySelector('.container-telefone-residencial span') as HTMLSpanElement;
        this.telefoneCelularSpan = document.querySelector('.container-telefone-celular span') as HTMLSpanElement;
        this.emailSpan = document.querySelector('.container-email span') as HTMLSpanElement;
        this.ruaSpan = document.querySelector('.container-rua span') as HTMLSpanElement;
        this.numeroSpan = document.querySelector('.container-numero span') as HTMLSpanElement;
        this.bairroSpan = document.querySelector('.container-bairro span') as HTMLSpanElement;
        this.cidadeSpan = document.querySelector('.container-cidade span') as HTMLSpanElement;
        this.estadoSpan = document.querySelector('.container-estado span') as HTMLSpanElement;



        this.mask(
            this.nomeCompletoInput, this.croInput, this.bairroInput, this.cidadeInput, this.estadoInput, 
            this.ruaInput, this.numeroInput, this.telefoneResidencialInput, this.telefoneCelularInput,
            this.cpfInput
        );


        this.warning(
            this.nomeCompletoInput, this.dataNascimentoInput, this.cpfInput, this.croInput, this.especialidadeInput,
            this.telefoneResidencialInput, this.telefoneCelularInput, this.emailInput, this.ruaInput, this.numeroInput,
            this.bairroInput, this.cidadeInput, this.estadoInput
        );


        //this.validation();




        

        const validationNameAndCROJSON = {

            nome: this.nomeCompletoEditado,
            cro: this.croEditado


        } 
        
        this.form = document.querySelector('#container_editar form');
        this.btnEditOptions = document.querySelector('#btnUpdate');
        this.btnDelete = document.querySelector('#btnDelete');
        this.btnSave = document.querySelector('#btnSave');



        



        this.btnEditOptions.addEventListener('click',  this.editOptionsViwer );
        

        this.btnSave.addEventListener('click', () => {  this.update(this.form ,this.id, [validationNameAndCROJSON]) });


        this.btnDelete.addEventListener('click', () => { this.controllerRouterTS.deleteDentist(this.id) })
        
        
    };


    public getTemplate(): string {
        return this.template;
    }

    public getBtnSave(): HTMLButtonElement {
        return this.btnSave;
    }



    private mask(

        nomeInput: HTMLInputElement, croInput: HTMLInputElement, bairroInput: HTMLInputElement,
        cidadeInput: HTMLInputElement, estadoInput: HTMLInputElement, ruaInput: HTMLInputElement,
        numeroInput: HTMLInputElement, telefoneResidencialInput: HTMLInputElement,
        telefoneCelularInput: HTMLInputElement, cpfInput: HTMLInputElement

        ): void {
        
        const noNumbersAndCharacters = [nomeInput , bairroInput, cidadeInput, estadoInput] ;
        const upperCaseCharacters = [estadoInput];
        const characterLowerCase = [nomeInput, ruaInput, bairroInput, cidadeInput, estadoInput];
        const noWordsAndCharacters = [croInput, numeroInput, telefoneResidencialInput, telefoneCelularInput];

        this.maskForm.blockNumbersAnsCharacters(noNumbersAndCharacters);
        this.maskForm.upperCaseLongMask(upperCaseCharacters);
        this.maskForm.characterLowerCaseMask(characterLowerCase);
        this.maskForm.noWordsAndCharacters(noWordsAndCharacters); 

        this.maskForm.cpfMask(cpfInput);
        this.maskForm.telefoneResidencialMask(telefoneResidencialInput);
        this.maskForm.telefonecelularMask(telefoneCelularInput);

    }    


    private warning(

        nomeCompleto: HTMLInputElement, dataNascimento: HTMLInputElement, cpf: HTMLInputElement, cro: HTMLInputElement,
        especialidade: HTMLInputElement, telefoneResidencial: HTMLInputElement, telefoneCelular: HTMLInputElement,
        email: HTMLInputElement, rua: HTMLInputElement, numero: HTMLInputElement, bairro: HTMLInputElement,
        cidade: HTMLInputElement, estado: HTMLInputElement

        ): void {


        


        this.warningForms.warningNomeCompleto(nomeCompleto, this.nomeCompletoSpan);
        this.warningForms.warningDataDeNascimento(dataNascimento, this.dataNascimentoSpan);
        this.warningForms.warningCpf(cpf, this.cpfSpan);
        this.warningForms.warningCro(cro, this.croSpan);
        this.warningForms.warningEspecialidade(especialidade, this.especialidadeSpan);
        this.warningForms.warningTelefoneResidencial(telefoneResidencial, this.telefoneResidencialSpan);
        this.warningForms.warningTelefoneCelular(telefoneCelular, this.telefoneCelularSpan);
        this.warningForms.warningEmail(email, this.emailSpan);
        this.warningForms.warningRua(rua, this.ruaSpan);
        this.warningForms.warningNumero(numero, this.numeroSpan);
        this.warningForms.warningBairro(bairro, this.bairroSpan);
        this.warningForms.warningCidade(cidade, this.cidadeSpan);
        this.warningForms.warningEstado(estado, this.estadoSpan);

    }
    


    /**
     * Método para editar as informações do dentista selecionado.
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
    private update(formSubmit: Element, id:string, validation: any[]): void {

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



            console.log(
                'Pegando os valores:\n\n',
                this.nomeCompletoEditado, '\n',
                this.dataNascimentoEditado, '\n',
                this.cpfEditado, '\n',
                this.croEditado, '\n',
                this.especialidadeEditado, '\n',
                this.telefoneResidencialEditado, '\n',
                this.telefoneCelularEditado, '\n',
                this.emailEditado, '\n',
                this.ruaEditado, '\n',
                this.numeroEditado, '\n',
                this.bairroEditado, '\n',
                this.cidadeEditado, '\n',
                this.estadoEditado
            )


            const updateObjectDentist: any = {
                nomeCompleto: this.nomeCompletoEditado,   
                rua: this.ruaEditado,
                numero: this.numeroEditado,
                bairro: this.bairroEditado,
                cidade: this.cidadeEditado,
                estado: this.estadoEditado,
                email: this.emailEditado,
                dataNascimento: this.dataNascimentoEditado,
                telefoneResidencial: this.telefoneCelularEditado,
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
                        //console.log(`Chave: ${chave}, Valor: ${valor}`); //- {Debug}
                    }
                }
            });



               


    

            if(updateObjectDentist.nomeCompleto === nomeOriginal && updateObjectDentist.cro != croOriginal) {

                console.log('Entrado em condição - MODAL_CHANGE_CRO')
                this.modalController.modalInformationUpdateDentist('MODAL_CHANGE_CRO',id, updateObjectDentist)

            } else if (updateObjectDentist.nomeCompleto != nomeOriginal && updateObjectDentist.cro === croOriginal) {

                // criar api no backend para update específico de nomeOriginal...
                console.log('Entrado em condição - MODAL_CHANGE_NAME')
                this.modalController.modalInformationUpdateDentist('MODAL_CHANGE_NAME', id, updateObjectDentist);
            
            } else if(updateObjectDentist.nomeCompleto != nomeOriginal && updateObjectDentist.cro != croOriginal) {

                // criar api no backend para update específico de nomeOriginal e croOriginal...
                console.log('Entrado em condição - NEW_CRO_AND_NEW_NAME')
                this.modalController.modalInformationUpdateDentist('NEW_CRO_AND_NEW_NAME', id, updateObjectDentist);
            
            } else {

                // salvar os dados aqui caso não houver alteração...
                

                this.controllerRouterTS.updateDentist(id, updateObjectDentist);
                 
            }
        } 
    }



    /**
     * Este método recebe uma data formatada em padrão brasileiro dd/MM/aaaa
     * e realiza a volta retroativa original do sistema para ser renderizada no 
     * formulário de edição no campo de data de nascimento.
     * 
     * O padrão americano é o único aceito no campo type="date"
     * 
     * @param data 
     * @returns 
     */
    private formatterDefaultEUA(data: string): string {

        var partesData = data.split('/');
        var formatterDefaultEUA = partesData[2] + '-' + partesData[1] + '-' + partesData[0];

        console.log('Valor formatado ', formatterDefaultEUA)

        return formatterDefaultEUA;
    }




    









































}    