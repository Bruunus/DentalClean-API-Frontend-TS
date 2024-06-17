import { PacienteView } from '../../view/templates/patient/pacienteView.js';


export class PacienteController {
    /**
     * Essa classe precisa fazer um fatch para a api e armazenar os dados JSON
     * para posteriormente imprimir em um template string
     */

       public accessListPatient(): void {

        this.fetchPatientData()
            .then((pacienteData) => {

                const templateView = PacienteView.listaPaciente(pacienteData);
                     
         
        })
        .catch((error) => {

            console.error('Erro ao buscar e imprimir os dados do paciente:', error);
            alert('Não foi possível carregar a lista de pacientes, o servidor está offline, tente mais tarde.');
        }) 


    }
  
    private async fetchPatientData() : Promise<any> {

        try {

            const response = await fetch('http://localhost:8080/api/read/pacientes');

            if(!response.ok) {
                throw new Error('Erro ao buscar os dados do paciente - Verifique se o servidor está ativo');
            }

            const pacienteDataJSON = await response.json();
            return pacienteDataJSON;

        } catch(error) {

            console.error('Erro ao buscar os dados do paciente:', error);
            throw error;

        }

    }



}