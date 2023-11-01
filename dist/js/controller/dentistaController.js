var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AppModule } from "../module/appModule.js";
import { DentistaView } from "../view/templates/dentistaView.js";
export class DentistaController {
    loadListDentist() {
        this.fetchDentistData()
            .then((dentistData) => {
            const templateView = DentistaView.render(dentistData);
            AppModule.loadCellEffects();
        });
    }
    fetchDentistData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('http://localhost:8080/api/read/dentistas');
                const dentistDataJSON = yield response.json();
                return dentistDataJSON;
            }
            catch (error) {
                alert('Não foi possível carregar a lista de dentistas, o servidor está offline, tente mais tarde.');
                console.error('Servidor API dentista offline:', error);
                throw error;
            }
        });
    }
}
