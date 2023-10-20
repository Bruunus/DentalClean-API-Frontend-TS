var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ControllerRouteTS } from './controllerTS.js';
import { PacienteView } from '../view/templates/pacienteView.js';
export class PacienteController {
    loadListPatient() {
        this.fetchPatientData()
            .then((pacienteData) => {
            const templateView = PacienteView.listaPaciente(pacienteData);
            ControllerRouteTS.loadScreenAllViewDentist(templateView);
        })
            .catch((error) => {
            console.error('Erro ao buscar e imprimir os dados do paciente:', error);
            alert('Não foi possível carregar a lista de pacientes, o servidor está offline, tente mais tarde.');
        });
    }
    fetchPatientData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('http://localhost:8080/api/read/pacientes');
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados do paciente - Verifique se o servidor está ativo');
                }
                const pacienteDataJSON = yield response.json();
                return pacienteDataJSON;
            }
            catch (error) {
                console.error('Erro ao buscar os dados do paciente:', error);
                throw error;
            }
        });
    }
}
