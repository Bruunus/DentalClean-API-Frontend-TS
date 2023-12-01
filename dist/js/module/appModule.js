export class AppModule {
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
    static compareSelectEspecialidade(especialidade) {
        const especialidadeEditar = document.querySelector('#especialidadeEditar');
    }
    static addLinkStylesSheet(href) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'css/styles.css';
    }
}
