import { ControllerRouteTS } from './controller/controllerTS.js';
import { PacienteController } from './controller/pacienteController.js';
import { AppModule } from './module/appModule.js';
console.log('app.ts iniciado');
const appModule = new AppModule();
const pacienteController = new PacienteController();
const controllerRouteTS = new ControllerRouteTS();
const linkListaDentista = document.querySelector('#listaDentista');
const linkButtonCadastroDentista = document.querySelector('#btnCadDentista');
const linkButtonCadastroPaciente = document.querySelector('#btnCadPaciente');
function routeCallListarDentistas() { controllerRouteTS.redirectViewListarDentista(); }
function routeCallDentistRegistration() { controllerRouteTS.redirectScreenDentist(); }
function routeCallPatientRegistration() { controllerRouteTS.redirectScreenPatient(); }
linkListaDentista.addEventListener('click', routeCallListarDentistas);
linkButtonCadastroDentista.addEventListener('click', routeCallDentistRegistration);
linkButtonCadastroPaciente.addEventListener('click', routeCallPatientRegistration);
pacienteController.loadListPatient();
