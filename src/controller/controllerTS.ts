import { DentistaController } from "./dentistaController.js";
import { CadastroDentistaView } from "../view/templates/cadastroDentistaView.js";
import { CadastroPacienteView } from "../view/templates/cadastroPacienteView.js";
import { AppModule } from "../module/appModule.js";
import { DentistaView } from "../view/templates/dentistaView.js";

export class ControllerRouteTS {

    /**
     * Controller TS responsável para renderizar os templates que são invocados conforme o usuário clicar em app.ts
     */
    public static screenViewContainer: string = '#screenViewContainer'; 
    public static redirect:HTMLElement = document.querySelector('#screenViewContainer');
    
     
    private dentistaController = new DentistaController();
    private cadastroDentistaView = new CadastroDentistaView(ControllerRouteTS.screenViewContainer);
    private cadastroPacienteView = new CadastroPacienteView(ControllerRouteTS.screenViewContainer);
    private listarDentista = new DentistaView(ControllerRouteTS.screenViewContainer);
    
    
  
    public redirectViewListarDentista(): void { this.dentistaController.loadListDentist(); }


    public redirectScreenDentist(): void { this.cadastroDentistaView.render(); }
    public redirectScreenPatient(): void { this.cadastroPacienteView.render(); }
    
    



    

    /**
     * Controller do template da lista de dentistas
     * @param templateView
     * 
     */
    public static loadScreenAllViewDentist(templateView: string): void {
         
        ControllerRouteTS.redirect.innerHTML = templateView;  
        AppModule.loadCellEffects();
        
    }




 



    
    
    

}