import { DentistaController } from "../controller/dentistaController.js";
import { CadastroDentistaView } from "../view/templates/cadastroDentistaView.js";
import { CadastroPacienteView } from "../view/templates/cadastroPacienteView.js";
export class ControllerTS {
    constructor() {
        this.cadastroPacienteView = new CadastroPacienteView(ControllerTS.screenView);
        this.cadastroDentistaView = new CadastroDentistaView(ControllerTS.screenView);
        this.dentistaController = new DentistaController();
    }
    redirectViewCadastroPaciente() { this.cadastroPacienteView.render(); }
    redirectViewCadastroDentista() { this.cadastroDentistaView.render(); }
    redirectViewListarDentista() { this.dentistaController.loadListDentist(); }
}
ControllerTS.screenView = '#screenView';
