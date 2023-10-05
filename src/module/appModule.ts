export class AppModule {

    private lICadastroCliente: HTMLElement = document.querySelector('#cadastroCliente');
    private lInkCadastroDentista:HTMLElement = document.querySelector('#cadastroDentista');


        public eventHideShow() : void {
            
            if(this.lICadastroCliente.style.display === 'none' && this.lInkCadastroDentista.style.display === 'none') {

                this.lICadastroCliente.style.display = 'block';
                this.lInkCadastroDentista.style.display = 'block'; 

                // animation
                this.lICadastroCliente.style.maxHeight = '0';
                this.lInkCadastroDentista.style.maxHeight = '0';

                this.lICadastroCliente.style.transition = 'max-height 0.5s ease-in-out';
                this.lInkCadastroDentista.style.transition = 'max-height 0.5s ease-in-out';

                setTimeout(() => {
                    this.lICadastroCliente.style.display = 'block';
                    this.lInkCadastroDentista.style.display = 'block';
              
                    // Remova a altura máxima para permitir a expansão suave
                    this.lICadastroCliente.style.maxHeight = 'none';
                    this.lInkCadastroDentista.style.maxHeight = 'none';
                  }, 10);
                
            } else  {

                // Defina a altura máxima de volta para 0 para ocultar os elementos
                this.lICadastroCliente.style.maxHeight = '0';
                this.lInkCadastroDentista.style.maxHeight = '0';

                // Defina a transição de altura para suave
                this.lICadastroCliente.style.transition = 'max-height 0.3s ease-in-out';
                this.lInkCadastroDentista.style.transition = 'max-height 0.3s ease-in-out';

                // Defina o display de volta para none após um pequeno atraso
                setTimeout(() => {
                    this.lICadastroCliente.style.display = 'none';
                    this.lInkCadastroDentista.style.display = 'none';
                }, 25); // Atraso deve corresponder à duração da transição
                
            } 
            
        }


     
        

 
        
        


}