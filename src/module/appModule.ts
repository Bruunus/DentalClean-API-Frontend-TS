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
 







        
        

 






     
        

 
        
        


}