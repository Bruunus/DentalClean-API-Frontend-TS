import { DentistaController } from "../controller/dentistaController.js";
import { CadastroDentistaView } from "../view/templates/cadastroDentistaView.js";
import { CadastroPacienteView } from "../view/templates/cadastroPacienteView.js"

export class ControllerTS {

    /**
     * Controller TS responsável para renderizar os templates que são invocados conforme o usuário clicar em app.ts
     */

    private static screenView: string = '#screenView'; 

    private cadastroPacienteView = new CadastroPacienteView(ControllerTS.screenView);
    private cadastroDentistaView = new CadastroDentistaView(ControllerTS.screenView);    
    private dentistaController = new DentistaController();
    

    public redirectViewCadastroPaciente(): void { this.cadastroPacienteView.render(); }

    public redirectViewCadastroDentista(): void { this.cadastroDentistaView.render(); }
  
    public redirectViewListarDentista(): void { this.dentistaController.loadListDentist(); }

}