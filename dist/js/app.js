import { ControllerRouteTS } from './controller/controllerRouterTS.js';
import { PacienteController } from './controller/pacienteController.js';
import { AppModule } from './module/appModule.js';
import { Menu } from './view/templates/menu.js';
console.log('app.ts iniciado');
const menu = new Menu();
const appModule = new AppModule();
const pacienteController = new PacienteController();
const controllerRouteTS = new ControllerRouteTS();
ControllerRouteTS.loadAppDentalClean();
