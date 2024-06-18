import { CadastroDentistaView } from "../view/templates/dentist/register/cadastroDentistaView.js";
import { CadastroPacienteView } from "../view/templates/patient/register/cadastroPacienteView.js";
import { Menu } from "../view/templates/menu/menu.js";
import { AppDentalCleanView } from "../view/templates/appDentalCleanView.js";
import { DentistaController } from "./dentista-controller/dentistaController.js";
import { PacienteController } from "./paciente-controller/pacienteController.js";
import { AppModule } from "../module/appModule.js";

export class ControllerRouteTS {

    /**
    * Controller TS responsável para renderizar os templates que são invocados conforme o usuário clicar em app.ts
    */     
   public containerFather: HTMLElement = document.querySelector('#container-pai');
   public static screenViewContainerMenu: string = '#container-child-left';
   public static screenViewContainer: string = '#container-child-right'; 
   public static redirectChildLeft:HTMLElement = document.querySelector('#container-child-left');
   public static redirectChildRight:HTMLElement = document.querySelector('#container-child-right');
   private static initBody: HTMLElement;

   private cadastroDentistaView: CadastroDentistaView;
   private cadastroPacienteView: CadastroPacienteView;

   private dentistaController: DentistaController;
    
    


   public constructor() {

        ControllerRouteTS.initBody = document.querySelector('html body') as HTMLElement;

        this.dentistaController = new DentistaController();

         
   }


    


   /**
    * Controller principal responsável pelo carregamento do aplicativo.
    * @param body 
    */
   public static loadAppDentalClean(): void  { 

        new AppDentalCleanView(ControllerRouteTS.initBody);

        const menu = new Menu();
        
        menu.loadEvents();
        this.routerCallListPatient();
       

    }


    




   /**
    * Controller do template da lista de pacientes
    * @param templateView
    * 
    */
   public static loadScreenViewPatient(templateView: string): void {
        
       ControllerRouteTS.redirectChildRight.innerHTML = templateView; 
       AppModule.loadCellEffects();
       
   }

   public loadScreenViewPatient(templateView: string): void {
        
    ControllerRouteTS.redirectChildRight.innerHTML = templateView; 
    AppModule.loadCellEffects();
    
}





   /**
    * Controlador para redirecionar formulário de cadastro de dentista
    */
   public redirectScreenRegisterDentist(): void { 

    
        this.cadastroDentistaView = new CadastroDentistaView(ControllerRouteTS.screenViewContainer);
        this.cadastroDentistaView.render();

      
        
        
        

    }





    /**
    * Controlador para redirecionar formulário de cadastro de paciente
    */
    public redirectScreenRegisterPatient(): void { 
        this.cadastroPacienteView = new CadastroPacienteView(ControllerRouteTS.screenViewContainer);
        this.cadastroPacienteView.render(); 
    }
    


   


   




    /**
     * Controller responsável por carregar a tela de dentistas.
     */
    public routerCallScreenDentist(): void {

        const dentistController = new DentistaController();
        dentistController.accessListDentist(/* 'SCREEN_DENTIST' */);

    }

    /**
     * Controller responsável por apenas renderizar a tabela crua da API
     */
    public loadListDentistOnly(): void {
        const dentistaController = new DentistaController();
        dentistaController.accessListDentist(/* 'LIST_DENTIIST_ONLY' */);

    }


    /**
     * Controller responsável por carregar a lista de paciente.
     */
    public static routerCallListPatient(): void {

        const patientController = new PacienteController();
        patientController.accessListPatient();
    }

    public routerCallListPatient(): void {

        const patientController = new PacienteController();
        patientController.accessListPatient();
    }



    /**
     * Controllador responsável por carregar formulário para editar um Dentista
     * @param template 
     */
    public loadCallEditDentist(template: string): void {

        const renderTemplate = document.querySelector('#container-child-right');
        renderTemplate.innerHTML = template;

    }



    public updateDentist(id: string, jsonObjectDentist: any[]) : void {
        //const updateInDataBase = new DentistaController();
        this.dentistaController.setFetAPIUpdate(id, jsonObjectDentist);
    }

    public deleteDentist(id: string) : void {
        this.dentistaController.setDeleteDentist(id);
    }


 


}



