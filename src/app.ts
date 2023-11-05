import { ControllerRouteTS } from './controller/controllerTS.js';
import { PacienteController } from './controller/pacienteController.js';
import { AppModule } from './module/appModule.js';
import { EditDentistView } from './view/templates/editDentistView.js';



console.log('app.ts iniciado');


const appModule = new AppModule();
const pacienteController = new PacienteController();
const controllerRouteTS = new ControllerRouteTS();




 
const linkListaDentista = document.querySelector('#listaDentista');
const linkButtonCadastroDentista = document.querySelector('#btnCadDentista');
const linkButtonCadastroPaciente = document.querySelector('#btnCadPaciente');


/* Trecho para facilitar a construção do template Editar Dentista */
const btnEditarTemporario = document.querySelector('#editarTemp');

btnEditarTemporario.addEventListener('click', () => {

    const JSONUpdate = {
        id: 0,
        nomeCompleto: 'Bruno teste',
        dataNascimento: '2023-01-22',
        cpf: '351.489.788-44',
        cro: 3000,
        especialidade: 'Odontologia',
        telefoneResidencial: '(11) 2264-7865',
        telefoneCelular: '(11) 9 78459-4456',
        email: 'brunus@mail.com',
        rua: 'Da Benção',
        numero: 33,
        bairro: 'Cristo Vive',
        cidade: 'São Paulo',
        estado: 'SP'
    }
        
    const sendArray = [JSONUpdate];


    const obj = new EditDentistView(sendArray);
})




function routeCallListarDentistas() { controllerRouteTS.redirectViewListarDentista(); }
function routeCallDentistRegistration() { controllerRouteTS.redirectScreenDentist(); }
function routeCallPatientRegistration() { controllerRouteTS.redirectScreenPatient(); }




linkListaDentista.addEventListener('click', routeCallListarDentistas);
linkButtonCadastroDentista.addEventListener('click', routeCallDentistRegistration);
linkButtonCadastroPaciente.addEventListener('click', routeCallPatientRegistration);






// Load list patient
pacienteController.loadListPatient();

















