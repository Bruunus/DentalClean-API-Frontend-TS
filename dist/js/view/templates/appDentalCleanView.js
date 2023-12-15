import { Menu } from "./menu/menu.js";
export class AppDentalCleanView {
    constructor(body) {
        this.menu = new Menu();
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
