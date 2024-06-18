import { ControllerRouteTS } from "../../../controller/controllerRouterTS.js";
export class Menu {
    constructor() {
        this.controllerRouterTS = new ControllerRouteTS();
        this.template = `

    <div id="container-child-left" class="col-ajuste-nav">
        
      
        <a href="http://localhost:3000" id="photo-normal" class="img-link ">
            <img src="img/logo-dental-clean-menu.PNG" alt="DentalClean" class=" img-logo no-select-img">
        </a>

        <a href="http://localhost:3000" id="photo-notebook" class="img-link" style="display: none;">
            <img src="img/logo-dental-clean-menu-notebook.PNG" alt="DentalClean" class="img-logo no-select-img">
        </a>

        <a href="http://localhost:3000" id="photo-tablet" class="img-link" style="display: none;">
            <img src="img/logo-dental-clean-menu-tablet.PNG" alt="DentalClean" class="img-logo no-select-img">
        </a>







     
        <div class="btn-group-vertical container-botoes-menu">

            <button
                    
                type="button"
                id="listaPaciente"
                class="btn botoes-menu hvr-sweep-to-right ">

                    Pacientes
                    
            </button>



            <button
                
                type="button"
                id="listaDentista"
                class="btn botoes-menu hvr-sweep-to-right ">

                    Destistas
                    
            </button>
    
        
         
            <!--  
            <button type="button" 
                    id="editarTemp" 
                    class="btn botoes-menu hvr-sweep-to-right" 
                    style="color: rgb(156, 78, 65);">Editar temp</button>
            
            --> 


            <div class="btn-group container-sub-menus" role="group">
                <button id="btnGroupDrop1" 
                    type="button" 
                    class="btn btn-sub-container-cadastro dropdown-toggle botoes-menu hvr-sweep-to-right "  
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
                        href="#" >
                        Paciente
                    </a>
                </div>

            </div>
                        
        </div>


    </div>


   
        

        `;
    }
    loadEvents() {
        this.btnListaPaciente = document.querySelector('#listaPaciente');
        this.btnListaDentista = document.querySelector('#listaDentista');
        this.subBtnRegisterDentist = document.querySelector('#btnCadDentista');
        this.subBtnRegisterPatient = document.querySelector('#btnCadPaciente');
        this.linkSprint = document.querySelector('#container-sprint span');
        this.btnListaPaciente.addEventListener('click', this.controllerRouterTS.routerCallListPatient);
        this.btnListaDentista.addEventListener('click', this.controllerRouterTS.routerCallScreenDentist);
        this.subBtnRegisterDentist.addEventListener('click', this.controllerRouterTS.redirectScreenRegisterDentist);
        this.subBtnRegisterPatient.addEventListener('click', this.controllerRouterTS.redirectScreenRegisterPatient);
    }
    getMenuRender() {
        return this.template;
    }
}
