export class AppModule {


    


        /**
         * Metodo que realiza a interação nsa tabelas para facilitar manipulação das
         * linhas da tabelas pelo usuário.
         * 
         * Quando o evento escutar o clique do mouse sob uma linha da tabela o background será
         * imediatamente acionado e permanecerá até que outro clique em outra linha seja clicado,
         * quando isso acontece a última linha é desabilitada para poder selecionar a nova linha.
         */
        public static loadCellEffects(): void {
            const cells = document.querySelectorAll('.table_dentist tr');

    
            cells.forEach(function(cell) {

                cell.addEventListener('click', function() {                    
                    cells.forEach(function(cell) {
                        cell.classList.remove('active-cell');
                    });    
                    cell.classList.add('active-cell');
                });
            });

        }



        /**
         * Método para tratar de carregar o valor respectivo do banco de dados 
         * dentro do select do template Editar Dentista 
         * 
         * @param especialidade 
         */
        public static compareSelectEspecialidade(especialidade: string) {

            const especialidadeEditar = document.querySelector('#especialidadeEditar');

            // Iterando pelas opções do select
           /*  for(let i = 0; i < especialidade.options.length; i++) {

                const option = especialidadeEditar.options[i];
            } */

        }
 


         
 
        /* Talvez implate */
        public static addLinkStylesSheet(href?: string) : void {
            
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'css/styles.css';
            /* document.head.appendChild(link); */


        }

        

      



        
        

 






     
        

 
        
        


}