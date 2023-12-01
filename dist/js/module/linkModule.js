import { AppModule } from "./appModule.js";
export class LinkModule {
    constructor() {
        const STYLE_STYLE = 'css/styles.css';
        AppModule.addLinkStylesSheet(STYLE_STYLE);
    }
}
