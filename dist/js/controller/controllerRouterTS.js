import { CadastroDentistaView } from "../view/templates/dentist/register/cadastroDentistaView.js";
import { CadastroPacienteView } from "../view/templates/patient/register/cadastroPacienteView.js";
import { Menu } from "../view/templates/menu/menu.js";
import { AppDentalCleanView } from "../view/templates/appDentalCleanView.js";
import { DentistaController } from "./dentista-controller/dentistaController.js";
import { PacienteController } from "./paciente-controller/pacienteController.js";
import { AppModule } from "../module/appModule.js";
export class ControllerRouteTS {
    constructor() {
        this.containerFather = document.querySelector('#container-pai');
        ControllerRouteTS.initBody = document.querySelector('html body');
        this.dentistaController = new DentistaController();
    }
    static loadAppDentalClean() {
        new AppDentalCleanView(ControllerRouteTS.initBody);
        const menu = new Menu();
        menu.loadEvents();
        this.routerCallListPatient();
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
    routerCallScreenDentist() {
        const dentistController = new DentistaController();
        dentistController.accessListDentist();
    }
    loadListDentistOnly() {
        const dentistaController = new DentistaController();
        dentistaController.accessListDentist();
    }
    static routerCallListPatient() {
        const patientController = new PacienteController();
        patientController.accessListPatient();
    }
    loadCallEditDentist(template) {
        const renderTemplate = document.querySelector('#container-child-right');
        renderTemplate.innerHTML = template;
    }
    updateDentist(id, jsonObjectDentist) {
        this.dentistaController.setFetAPIUpdate(id, jsonObjectDentist);
    }
    deleteDentist(id) {
        this.dentistaController.setDeleteDentist(id);
    }
}
ControllerRouteTS.screenViewContainerMenu = '#container-child-left';
ControllerRouteTS.screenViewContainer = '#container-child-right';
ControllerRouteTS.redirectChildLeft = document.querySelector('#container-child-left');
ControllerRouteTS.redirectChildRight = document.querySelector('#container-child-right');
