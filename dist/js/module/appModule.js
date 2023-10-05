export class AppModule {
    constructor() {
        this.lICadastroCliente = document.querySelector('#cadastroCliente');
        this.lInkCadastroDentista = document.querySelector('#cadastroDentista');
    }
    eventHideShow() {
        if (this.lICadastroCliente.style.display === 'none' && this.lInkCadastroDentista.style.display === 'none') {
            this.lICadastroCliente.style.display = 'block';
            this.lInkCadastroDentista.style.display = 'block';
            this.lICadastroCliente.style.maxHeight = '0';
            this.lInkCadastroDentista.style.maxHeight = '0';
            this.lICadastroCliente.style.transition = 'max-height 0.5s ease-in-out';
            this.lInkCadastroDentista.style.transition = 'max-height 0.5s ease-in-out';
            setTimeout(() => {
                this.lICadastroCliente.style.display = 'block';
                this.lInkCadastroDentista.style.display = 'block';
                this.lICadastroCliente.style.maxHeight = 'none';
                this.lInkCadastroDentista.style.maxHeight = 'none';
            }, 10);
        }
        else {
            this.lICadastroCliente.style.maxHeight = '0';
            this.lInkCadastroDentista.style.maxHeight = '0';
            this.lICadastroCliente.style.transition = 'max-height 0.3s ease-in-out';
            this.lInkCadastroDentista.style.transition = 'max-height 0.3s ease-in-out';
            setTimeout(() => {
                this.lICadastroCliente.style.display = 'none';
                this.lInkCadastroDentista.style.display = 'none';
            }, 25);
        }
    }
}
