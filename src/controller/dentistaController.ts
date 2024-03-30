import { AppModule } from "../module/appModule.js";
import { DentistaView } from "../view/templates/dentist/dentistaView.js";
import { Dentist } from "../module/dentist.js";
import { MessagesForm } from "../module/messagesForm.js";

export class DentistaController {
 
    private messagesForm: MessagesForm;

    public constructor() {
        this.messagesForm = new MessagesForm();
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


    public setFetAPIUpdate(id:string, objectDataForUpdate: any[]) {
        const idFet = id;
        const objFer = objectDataForUpdate;
        this.fetchAPIUpdate(idFet, objFer);
    }

    public setDeleteDentist(id: string) {
        this.delete(id);
    }


 

    

    
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



    /**
     * Método responsável por realizar update definitivo no banco de dados.
     * @param id 
     * @param objectDataForUpdate 
     */
    private fetchAPIUpdate(id:string, objectDataForUpdate: any[]) {

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
                this.messagesForm.alertSuccess('Dados atualizados com sucesso !');
            })
                .catch((error) => {
                    console.error(error);
                    //console.log(objectDentist);   {Debbug}
            });
        

    }



    /**
     * Método utilizado para excluir um cadastro de dentista no banco de dados.
     * Atrávés do id di cadastro capturado e mapeado é feito uma requisição para
     * exclusão segundo o mesmo.
     * 
     * @param id 
     */
    private delete(id: string): void {

        fetch(`http://localhost:8080/api/delete/dentista/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                this.messagesForm.alertSuccess('Dados excluídos com sucesso !');
            } else {
                throw new Error('Erro ao excluir os dados');
            }
        })
        .catch(error => {
            console.error(error);
        });
    }





    











}