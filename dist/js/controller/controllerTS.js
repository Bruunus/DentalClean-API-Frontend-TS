import { DentistaController } from "./dentistaController.js";
import { CadastroDentistaView } from "../view/templates/cadastroDentistaView.js";
import { RegistrationOptionsViewer } from "../view/templates/registrationOptionsViewer.js";
import { AppModule } from "../module/appModule.js";
export class ControllerRouteTS {
    constructor() {
        this.dentistaController = new DentistaController();
    }
    redirectViewListarDentista() { this.dentistaController.loadListDentist(); }
    redirectScreenViewOptions() {
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
    static loadScreenAllViewDentist(templateView) {
        ControllerRouteTS.redirect.innerHTML = templateView;
        AppModule.loadCellEffects();
    }
}
ControllerRouteTS.screenViewContainer = '#screenViewContainer';
ControllerRouteTS.redirect = document.querySelector('#screenViewContainer');
