export class AppModule {

    private lICadastroCliente: HTMLElement = document.querySelector('#cadastroCliente');
    private lInkCadastroDentista:HTMLElement = document.querySelector('#cadastroDentista');



        /**
         * Metodo que realiza a interação nsa tabelas para facilitar manipulação das
         * linhas da tabelas pelo usuário
         */
        public static loadCellEffects(): void {

            const cells = document.querySelectorAll('.table_dentist tr');

            cells.forEach(function(cell) {
                cell.addEventListener('click', function() {
                    // Remover a classe ativa de todas as células da tabela
                    cells.forEach(function(cell) {
                        cell.classList.remove('active-cell');
                    });

                    // Adicionar a classe ativa apenas à célula clicada
                    cell.classList.add('active-cell');
                    
                });
            });
            
        }







     
        

 
        
        


}