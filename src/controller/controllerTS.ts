import { DentistaController } from "./dentistaController.js";
import { CadastroDentistaView } from "../view/templates/cadastroDentistaView.js";
import { CadastroPacienteView } from "../view/templates/cadastroPacienteView.js"
import { DentistaView } from "../view/templates/dentistaView.js";
import { RegistrationOptionsViewer } from "../view/templates/registrationOptionsViewer.js";
import { AppModule } from "../module/appModule.js";

export class ControllerRouteTS {

    /**
     * Controller TS responsável para renderizar os templates que são invocados conforme o usuário clicar em app.ts
     */
    private loadTemplate: any;
    private static screenViewContainer: string = '#screenViewContainer'; 
    private static redirect:HTMLElement = document.querySelector('#screenViewContainer');

    
     
    private dentistaController = new DentistaController();
     
    
  
    public redirectViewListarDentista(): void { this.dentistaController.loadListDentist(); }
    


    /**
     * 
     * Controller renderizador do template de opções de cadastro
     */
    public redirectScreenViewOptions(): void {
        
        const loadScreenViewOptions = RegistrationOptionsViewer.renderOptionsViwer();
        ControllerRouteTS.redirect.innerHTML = loadScreenViewOptions;
        const screenViewContainer = document.querySelector('#screenViewContainer');

        const linkButtonCadastroPaciente = document.querySelector('#btnCadPaciente');
        const linkButtonCadastroDentista = document.querySelector('#btnCadDentista');

        function loadTemplatePaciente() { 
            const cadastroPacienteView = new CadastroDentistaView(ControllerRouteTS.screenViewContainer);
            this.loadTemplate = cadastroPacienteView.render();
            this.screenViewContainer.innerHTML = this.loadTemplate;
         }


        function loadTemplateDentista() { 
            const cadastroDentistaView = new CadastroDentistaView(ControllerRouteTS.screenViewContainer); 
            this.loadTemplate = cadastroDentistaView.render();
            this.screenViewContainer.innerHTML = this.loadTemplate;
        }

        linkButtonCadastroPaciente.addEventListener('click', loadTemplatePaciente);
        linkButtonCadastroDentista.addEventListener('click', loadTemplateDentista);

    }


    
    /**
     * Controller renderizador do template da lista de dentistas
     * @param templateView
     * 
     */
    public static loadScreenView(templateView: string): void {
         
        ControllerRouteTS.redirect.innerHTML = templateView;

    }

 



    
    
    

}