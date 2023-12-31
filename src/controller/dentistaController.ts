import { AppModule } from "../module/appModule.js";
import { DentistaView } from "../view/templates/dentist/dentistaView.js";
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
      
            const response = await fetch(`http://localhost:8080/api/read/listar/dentista/seach?nome=${value}`);

            if(response.ok) {
                const dentistSeachJSON = await response.json();
                return dentistSeachJSON;
            } else {
                alert('Nome não encontrado no sistema ou não existe.');
                this.accessListDentist();
                
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


    /**
     * Método responsável por realizar update definitivo no banco de dados.
     * @param id 
     * @param objectDataForUpdate 
     */
    private fetchAPIUpdate(id:string, objectDataForUpdate) {

        fetch(`http://localhost:8080/atualizar/cadastro/dentista/${id}`, {

            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
        },
            body: JSON.stringify(objectDataForUpdate),
        })
            .then((response) => {
                if(!response.ok) {
                    // console.log(objectDentist);  {Debbug}
                    throw new Error(`Erro ao atualizar os dados`);
                }
                if(!response.ok) {
                    return response.json();
                }
            })

            .then((data) => {
                console.log(`Dados atualizados com sucesso !`);
                console.log(data);   //{Debbug}
                const renderTemplate = new DentistaController();
                renderTemplate.accessListDentist();
            })
                .catch((error) => {
                    console.error(error);
                    //console.log(objectDentist);   {Debbug}
            });
        

    }

    public setFetAPIUpdate(id:string, objectDataForUpdate) {
        const idFet = id;
        const objFer = objectDataForUpdate;
        this.fetchAPIUpdate(idFet, objFer);
    }




    public testeRender(): void {
        alert('test render is a Ok')
    }


    



    











}