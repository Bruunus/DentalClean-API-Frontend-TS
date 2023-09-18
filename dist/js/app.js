import { ControllerTS } from './module/controllerTS.js';
import { PacienteController } from './controller/pacienteController.js';
import { AppModule } from './module/appModule.js';
console.log('app.ts iniciado');
const appModule = new AppModule();
const pacienteController = new PacienteController();
const controller = new ControllerTS();
const ulMenuDashboard = document.querySelector('#menu');
const linkCadastroCliente = document.querySelector('#cadastroCliente');
const linkCadastroDentista = document.querySelector('#cadastroDentista');
const linkListaDentista = document.querySelector('#listaDentista');
const linkImg = document.querySelector('#link-img');
function eventHideShow() { appModule.eventHideShow(); }
function eventRedirectLinkImg() { appModule.redirectLinkImg(); }
function routeCallCadastroCliente() { controller.redirectViewCadastroPaciente(); }
function routeCallCadastroDentista() { controller.redirectViewCadastroDentista(); }
function routeCallListarDentistas() { controller.redirectViewListarDentista(); }
ulMenuDashboard.addEventListener('click', eventHideShow);
linkImg.addEventListener('click', eventRedirectLinkImg);
linkCadastroCliente.addEventListener('click', routeCallCadastroCliente);
linkCadastroDentista.addEventListener('click', routeCallCadastroDentista);
linkListaDentista.addEventListener('click', routeCallListarDentistas);
pacienteController.loadListPatient();
