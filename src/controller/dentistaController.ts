import { AppModule } from "../module/appModule.js";
import { DentistaView } from "../view/templates/dentistaView.js";
import { Dentist } from "../module/dentist.js";

export class DentistaController {
 



    

    /**
     * Essa classe precisa fazer um fatch para a api e armazenar os dados JSON
     * para posteriormente imprimir em um template string
     */

    private async loadListDentist() : Promise<any> {

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


    private async  seachDentistForName(value: string) : Promise<any> {
        try {
            const response = await fetch(`http://localhost:8080/api/read/listar/dentista/seach?nome=${value}`);
            const dentistSeachJSON = await response.json();
            return dentistSeachJSON;
        } catch (error) {
            alert('Nome não encontrado. É possível que não exista na lista de dentistas.');
            console.error('Erro ao realizar a busca: ', error);
            throw error;
        }
    }



    public accessListDentist(): void {

        this.loadListDentist()
            .then((dentistData) => {
                const templateView = DentistaView.render(dentistData);
                AppModule.loadCellEffects(); /* Carregamento de efeitos de células */
                
            })
    }

    public accessSeachDentist(value: string): void {

        this.seachDentistForName(value)
            .then((resultSeachData) => {
                const templatView = Dentist.renderDentistList(resultSeachData);
                AppModule.loadCellEffects();
            })


    }

    public testeRender(): void {
        alert('test render is a Ok')
    }


    



    











}