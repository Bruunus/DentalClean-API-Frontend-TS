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
    redirectViewListarDentista() { this.dentistaController.accessListDentist(); }
    redirectScreenDentist() { this.cadastroDentistaView.render(); }
    redirectScreenPatient() { this.cadastroPacienteView.render(); }
    static loadScreenMenu(templateView) {
        ControllerRouteTS.redirectChildLeft.innerHTML = templateView;
    }
    static loadScreenAllViewDentist(templateView) {
        ControllerRouteTS.redirectChildRight.innerHTML = templateView;
        AppModule.loadCellEffects();
    }
}
ControllerRouteTS.screenViewContainerMenu = '#container-child-left';
ControllerRouteTS.screenViewContainer = '#container-child-right';
ControllerRouteTS.redirectChildLeft = document.querySelector('#container-child-left');
ControllerRouteTS.redirectChildRight = document.querySelector('#container-child-right');
