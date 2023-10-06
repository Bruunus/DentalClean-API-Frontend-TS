import { AppModule } from "../../module/appModule.js";
export class DentistaView {
    static listDentist(dentistData) {
        AppModule.loadCellEffects();
        dentistData.sort((a, b) => {
            const especialidadeA = a.especialidade.toUpperCase();
            const especialidadeB = b.especialidade.toUpperCase();
            if (especialidadeA < especialidadeB) {
                return -1;
            }
            if (especialidadeA > especialidadeB) {
                return 1;
            }
            return 0;
        });
        return `
            <div style="background-color: aqua; text-align: center"><h4>Dentista</h4></div>

            <div class="div_container_tables" style="border: 1px solid blue">
                
                <table class="table_dentist table-hover">
                    <thead class="thead_dentist">
                        <tr class="no-select" style="">
                            <th><a href="#">Nome Completo</a></th>
                            <th>Data de Nasc.</th>
                            <th>CPF</th>
                            <th>CRO</th>
                            <th>Especialidade</th>
                            <th>Tel. Residencial</th>
                            <th>Tel. Celular</th>
                            <th>E-mail</th>
                            <th>Rua</th>
                            <th>Número</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${dentistData.map((dentist) => {
            return `
                            <tr class="no-select tr_format">
                                <td class="">${dentist.nomeCompleto}</td>
                                <td class="">${dentist.dataNascimento}</td>
                                <td class="">${dentist.cpf}</td>
                                <td class="">${dentist.cro}</td>
                                <td class="">${dentist.especialidade}</td>
                                <td class="">${dentist.telefoneResidencial}</td>
                                <td class="">${dentist.telefoneCelular}</td>
                                <td class="">${dentist.email}</td>
                                <td class="">${dentist.rua}</td>
                                <td class="">${dentist.numero}</td>
                                <td class="">${dentist.bairro}</td>
                                <td class="">${dentist.cidade}</td>
                                <td class="">${dentist.estado}</td>
                                <td class=""><a href="#">Editar</a></td>
                            </tr>
                        `;
        }).join('')}
                    </tbody>
                    </table>
        </div>



        `;
    }
}
