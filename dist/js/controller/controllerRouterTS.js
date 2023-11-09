import { CadastroDentistaView } from "../view/templates/cadastroDentistaView.js";
import { CadastroPacienteView } from "../view/templates/cadastroPacienteView.js";
import { AppModule } from "../module/appModule.js";
import { Menu } from "../view/templates/menu.js";
import { AppDentalCleanView } from "../view/templates/appDentalCleanView.js";
import { DentistaController } from "./dentistaController.js";
import { PacienteController } from "./pacienteController.js";
export class ControllerRouteTS {
    constructor() {
        ControllerRouteTS.initBody = document.querySelector('html body');
    }
    static loadScreenViewPatient(templateView) {
        ControllerRouteTS.redirectChildRight.innerHTML = templateView;
        AppModule.loadCellEffects();
    }
    redirectScreenRegisterDentist() {
        this.cadastroDentistaView = new CadastroDentistaView(ControllerRouteTS.screenViewContainer);
        this.cadastroDentistaView.render();
    }
    redirectScreenRegisterPatient() {
        this.cadastroPacienteView = new CadastroPacienteView(ControllerRouteTS.screenViewContainer);
        this.cadastroPacienteView.render();
    }
    static loadAppDentalClean() {
        new AppDentalCleanView(ControllerRouteTS.initBody);
        const menu = new Menu();
        menu.loadEvents();
        this.routerCallListPatient();
    }
    routerCallListDentist() {
        const dentistController = new DentistaController();
        dentistController.accessListDentist();
    }
    static routerCallListPatient() {
        const patientController = new PacienteController();
        patientController.accessListPatient();
    }
    loadCallEditDentist(template) {
        const renderTemplate = document.querySelector('#container-child-right');
        renderTemplate.innerHTML = template;
    }
}
ControllerRouteTS.screenViewContainerMenu = '#container-child-left';
ControllerRouteTS.screenViewContainer = '#container-child-right';
ControllerRouteTS.redirectChildLeft = document.querySelector('#container-child-left');
ControllerRouteTS.redirectChildRight = document.querySelector('#container-child-right');
