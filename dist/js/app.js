import { ControllerRouteTS } from './controller/controllerTS.js';
import { PacienteController } from './controller/pacienteController.js';
import { AppModule } from './module/appModule.js';
console.log('app.ts iniciado');
const appModule = new AppModule();
const pacienteController = new PacienteController();
const controllerRouteTS = new ControllerRouteTS();
const linkListaDentista = document.querySelector('#listaDentista');
const linkRegistrationOptionsViewer = document.querySelector('#opcoesDeCadastro');
function routeCallListarDentistas() { controllerRouteTS.redirectViewListarDentista(); }
function routeCallDisplayOptions() { controllerRouteTS.redirectScreenViewOptions(); }
linkListaDentista.addEventListener('click', routeCallListarDentistas);
linkRegistrationOptionsViewer.addEventListener('click', routeCallDisplayOptions);
pacienteController.loadListPatient();
