import { ControllerRouteTS } from './controller/controllerRouterTS.js';
import { PacienteController } from './controller/pacienteController.js';
import { AppModule } from './module/appModule.js';
import { Responsiveness } from './module/responsiveness.js';
import { Menu } from './view/templates/menu.js';



console.log('app.ts iniciado');

const controllerRouteTS = new ControllerRouteTS();


ControllerRouteTS.loadAppDentalClean();
const loadConfigurationResponsive = new Responsiveness();

 














