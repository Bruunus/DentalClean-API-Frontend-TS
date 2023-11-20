import { AppContents } from './appContents.js';
import { Menu } from "./menu.js";
export class AppDentalCleanView {
    constructor(body) {
        this.menu = new Menu();
        this.appContents = new AppContents();
        const childLeft = this.menu.getMenuRender();
        this.dentalCleanTemplate = `


            <div id="container-pai">
            
                <div id="container-child-left">
                    ${childLeft} 
                </div>

                <div id="container-child-right"></div>
            </div>


            `;
        body.innerHTML = this.dentalCleanTemplate;
    }
}
