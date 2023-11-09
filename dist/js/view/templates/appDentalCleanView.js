import { AppContents } from './appContents.js';
import { Menu } from "./menu.js";
export class AppDentalCleanView {
    constructor(body) {
        this.menu = new Menu();
        this.appContents = new AppContents();
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
