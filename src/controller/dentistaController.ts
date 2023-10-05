import { AppModule } from "../module/appModule.js";
import { ControllerRouteTS } from "./controllerTS.js";
import { DentistaView } from "../view/templates/dentistaView.js";

export class DentistaController {

    

    /**
     * Essa classe precisa fazer um fatch para a api e armazenar os dados JSON
     * para posteriormente imprimir em um template string
     */

    public loadListDentist(): void {

        this.fetchDentistData()
            .then((dentistData) => {

                const templateView = DentistaView.listDentist(dentistData);
                ControllerRouteTS.loadScreenView(templateView);  // chamando o controller para redirecionar
                
            })
    }


    private async fetchDentistData() : Promise<any> {

        try {
            const response = await fetch('http://localhost:8080/api/read/dentistas');
            const dentistDataJSON = await response.json();
            return dentistDataJSON;
        } catch (error) {
            alert('Não foi possível carregar a lista de dentistas, o servidor está offline, tente mais tarde.')
            console.error('Servidor API dentista offline:', error);
            throw error;
        }
    }
}