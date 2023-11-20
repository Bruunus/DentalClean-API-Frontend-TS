import { ControllerRouteTS } from './controller/controllerRouterTS.js';
import { Responsiveness } from './module/responsiveness.js';
console.log('app.ts iniciado');
const controllerRouteTS = new ControllerRouteTS();
ControllerRouteTS.loadAppDentalClean();
const loadConfigurationResponsive = new Responsiveness();
