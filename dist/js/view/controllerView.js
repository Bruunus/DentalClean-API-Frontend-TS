import { CadastroPacienteView } from "./cadastroPacienteView.js";
export class ControllerTS {
    constructor() {
        this.cadastroPacienteView = new CadastroPacienteView('#screenView');
    }
    redirectViewCadastroPaciente() { this.cadastroPacienteView.render(); }
    redirectViewListarDentista() {
        alert('lista de dentista clicado');
    }
}
