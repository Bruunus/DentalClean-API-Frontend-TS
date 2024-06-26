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
import { DentistaView } from "../view/templates/dentist/dentistaView.js";
import { Dentist } from "../module/dentist.js";
import { MessagesForm } from "../module/messagesForm.js";
export class DentistaController {
    constructor() {
        this.messagesForm = new MessagesForm();
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
    setFetAPIUpdate(id, objectDataForUpdate) {
        const idFet = id;
        const objFer = objectDataForUpdate;
        this.fetchAPIUpdate(idFet, objFer);
    }
    setDeleteDentist(id) {
        this.delete(id);
    }
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
            const response = yield fetch(`http://localhost:8080/api/read/listar/dentista/seach?nome=${value}`);
            if (response.ok) {
                const dentistSeachJSON = yield response.json();
                return dentistSeachJSON;
            }
            else {
                alert('Nome não encontrado no sistema ou não existe.');
                this.accessListDentist();
            }
        });
    }
    fetchAPIUpdate(id, objectDataForUpdate) {
        fetch(`http://localhost:8080/atualizar/cadastro/dentista/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objectDataForUpdate),
        })
            .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro ao atualizar os dados`);
            }
            if (!response.ok) {
                return response.json();
            }
        })
            .then((data) => {
            this.messagesForm.alertSuccess('Dados atualizados com sucesso !');
        })
            .catch((error) => {
            console.error(error);
        });
    }
    delete(id) {
        fetch(`http://localhost:8080/api/delete/dentista/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
            if (response.ok) {
                this.messagesForm.alertSuccess('Dados excluídos com sucesso !');
            }
            else {
                throw new Error('Erro ao excluir os dados');
            }
        })
            .catch(error => {
            console.error(error);
        });
    }
}
