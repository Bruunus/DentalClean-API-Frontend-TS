import { DentistaController } from "./dentistaController.js";
import { CadastroDentistaView } from "../view/templates/cadastroDentistaView.js";
import { CadastroPacienteView } from "../view/templates/cadastroPacienteView.js";
import { AppModule } from "../module/appModule.js";
import { DentistaView } from "../view/templates/dentistaView.js";
export class ControllerRouteTS {
    constructor() {
        this.dentistaController = new DentistaController();
        this.cadastroDentistaView = new CadastroDentistaView(ControllerRouteTS.screenViewContainer);
        this.cadastroPacienteView = new CadastroPacienteView(ControllerRouteTS.screenViewContainer);
        this.listarDentista = new DentistaView(ControllerRouteTS.screenViewContainer);
    }
    redirectViewListarDentista() { this.dentistaController.loadListDentist(); }
    redirectScreenDentist() { this.cadastroDentistaView.render(); }
    redirectScreenPatient() { this.cadastroPacienteView.render(); }
    static loadScreenAllViewDentist(templateView) {
        ControllerRouteTS.redirect.innerHTML = templateView;
        AppModule.loadCellEffects();
    }
}
ControllerRouteTS.screenViewContainer = '#screenViewContainer';
ControllerRouteTS.redirect = document.querySelector('#screenViewContainer');
