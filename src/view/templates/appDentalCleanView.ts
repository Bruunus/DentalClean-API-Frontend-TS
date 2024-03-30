import { Menu } from "./menu/menu.js";

export class AppDentalCleanView {

    private static body: HTMLElement;
    private dentalCleanTemplate: string;
    private menu = new Menu();
    private static childRight: string;

    



    public constructor(body: HTMLElement) {

        
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