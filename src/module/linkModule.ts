import { AppModule } from "./appModule.js";

export class LinkModule {

    private static appModule: AppModule;

    public constructor() {

        

        const STYLE_STYLE = 'css/styles.css';


        AppModule.addLinkStylesSheet(STYLE_STYLE);

    }



}