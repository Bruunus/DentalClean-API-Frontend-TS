export class AppContents {

    private tela1: string;
    private tela2: string;

    public constructor() {

        this.tela1 = `<div style="background-color: lightpink; font-size: 1vw; height: 100%;">
            [List dentist]
        </div>`;

        this.tela2 = `[tela 2]`;





    }



    public listDentist(): void {
        
         
    }




    // o template apenas
    public getActualCallScreen(actualTemplate?: string): string {

        actualTemplate = actualTemplate;


        return actualTemplate;
    }



    /* public getTela1(): string {
        return this.getActualCallScreen(this.tela1);
    } */

    public getTela2(): string {
        return this.tela2;
    }

    




 



}