export class AppModule {
    constructor() {
        this.lICadastroCliente = document.querySelector('#cadastroCliente');
        this.lInkCadastroDentista = document.querySelector('#cadastroDentista');
    }
    static loadCellEffects() {
        const cells = document.querySelectorAll('.table_dentist tr');
        cells.forEach(function (cell) {
            cell.addEventListener('click', function () {
                cells.forEach(function (cell) {
                    cell.classList.remove('active-cell');
                });
                cell.classList.add('active-cell');
            });
        });
    }
}
