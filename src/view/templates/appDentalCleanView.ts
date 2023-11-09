import { AppContents } from './appContents.js';

import { Menu } from "./menu.js";

export class AppDentalCleanView {

    private static body: HTMLElement;
    private dentalCleanTemplate: string;
    private menu = new Menu();
    private static childRight: string;
    private appContents = new AppContents();

    



    public constructor(body: HTMLElement) {

        
        const childLeft = this.menu.getMenuRender();   
         

        this.dentalCleanTemplate = `


            <div id="container-pai">
                <div id="container-child-left" class="col-ajuste-nav">
                    ${childLeft} 
                </div>

                <div id="container-child-right" class="col-ajuste-section"></div>
            </div>


            `;


        body.innerHTML = this.dentalCleanTemplate;


    }





}