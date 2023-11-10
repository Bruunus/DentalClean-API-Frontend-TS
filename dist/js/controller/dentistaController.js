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
import { Dentist } from "../module/dentist.js";
export class DentistaController {
    loadListDentist() {
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
    seachDentistForName(value) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`http://localhost:8080/api/read/listar/dentista/seach?nome=${value}`);
                const dentistSeachJSON = yield response.json();
                return dentistSeachJSON;
            }
            catch (error) {
                alert('Nome não encontrado. É possível que não exista na lista de dentistas.');
            }
        });
    }
    accessListDentist() {
        this.loadListDentist()
            .then((dentistData) => {
            const templateView = DentistaView.render(dentistData);
            AppModule.loadCellEffects();
        });
    }
    accessSeachDentist(value) {
        this.seachDentistForName(value)
            .then((resultSeachData) => {
            const templatView = Dentist.renderDentistList(resultSeachData);
            AppModule.loadCellEffects();
        });
    }
    testeRender() {
        alert('test render is a Ok');
    }
}
