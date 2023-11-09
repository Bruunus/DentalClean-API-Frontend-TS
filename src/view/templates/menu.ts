import { ControllerRouteTS } from "../../controller/controllerRouterTS.js";
import { DentistaController } from "../../controller/dentistaController.js";
import { AppContents } from "./appContents.js";
import { EditDentistView } from "./editDentistView.js";


export class Menu {

    private template: string;
    private  btnListaDentista: HTMLButtonElement;
    private  btnEditarTemp: HTMLButtonElement;
    private  subBtnRegisterDentist: HTMLButtonElement;
    private  subBtnRegisterPatient: HTMLButtonElement;
    private renderizador: HTMLElement;

    private controllerRouterTS: ControllerRouteTS = new ControllerRouteTS();

    

    public constructor() {


    this.template = `

    <div id="container-child-left" class="col-ajuste-nav">
        
        <a href="http://localhost:3000" class="  img-link">
            <img src="img/logo-dental-clean-menu.PNG" alt="DentalClean" class=" img-logo">
        </a>

        <div class="btn-group-vertical container-botoes-menu">
                    
            <button type="button" id="listaDentista" class="btn botoes-menu hvr-sweep-to-right" >Destistas</button>
                    
                        
            <button type="button" 
                    id="editarTemp" 
                    class="btn botoes-menu hvr-sweep-to-right" 
                    style="color: rgb(156, 78, 65);">Editar temp</button>

            

            <div class="btn-group" role="group">
                <button id="btnGroupDrop1" 
                    type="button" 
                    class="btn dropdown-toggle botoes-menu hvr-sweep-to-right"  
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false">
                    Cadastro
                </button>

                <div class="dropdown-menu container-sub-menu-buttons-a" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item botoes-menu sub-menu-buttons-a hvr-sweep-to-right op-dentist"
                        id="btnCadDentista"  
                        href="#">
                        Dentista
                    </a>

                    <a class="dropdown-item botoes-menu sub-menu-buttons-a hvr-sweep-to-right op-patient"
                        id="btnCadPaciente"
                        href="#">
                        Paciente
                    </a>
                </div>

            </div>
                        
        </div>


    </div>
        

        `;


        

    }




    /**
     * Metodo responsável por carregar os eventos do componente menu.
     */
    public loadEvents(): void {

        this.btnListaDentista = document.querySelector('#listaDentista');
        this.btnEditarTemp = document.querySelector('#editarTemp');
        this.subBtnRegisterDentist = document.querySelector('#btnCadDentista');
        this.subBtnRegisterPatient = document.querySelector('#btnCadPaciente');

        this.btnListaDentista.addEventListener('click', this.controllerRouterTS.routerCallListDentist);
        this.btnEditarTemp.addEventListener('click', this.editTempUpdateDentist);
        this.subBtnRegisterDentist.addEventListener('click', this.controllerRouterTS.redirectScreenRegisterDentist);
        this.subBtnRegisterPatient.addEventListener('click', this.controllerRouterTS.redirectScreenRegisterPatient);


    }



    
     

    private  editTempUpdateDentist() { 


        const JSONUpdate = {
            id: 100,
            nomeCompleto: 'Bruno Fernandes',
            dataNascimento: '1988-05-22',
            cpf: '352.498.789-45',
            cro: '5564',
            especialidade: 'Bucomaxilo',
            telefoneResidencial: '(11) 2289-4655',
            telefoneCelular: '(11) 9 7845-5641',
            email: 'brunus@mail.com',
            rua: 'Das Flores',
            numero: 418,
            bairro: 'São Miguel',
            cidade: 'São Paulo',
            estado: 'SP'
        }

        

     


        const sendArray = [JSONUpdate];
        const renderEditDentistView = new EditDentistView(sendArray);

         
    }












 

    /**
     * 
     * @returns carregamento do template Menu
     */
    public getMenuRender(): string {

      return this.template;

    }




}