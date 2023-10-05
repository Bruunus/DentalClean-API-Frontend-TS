export class DentistaView {

    static listDentist(dentistData: any[]) {

        return `
        
            <div class="div_container_tables">
                    <table class="table_dentist">
                    <thead class="thead_dentist">
                        <tr>
                            <th>Nome Completo</th>
                            <th>Data de Nasc.</th>
                            <th>CPF</th>
                            <th>CRO</th>
                            <th>Especialidade</th>
                            <th>Tel. Residencial</th>
                            <th>Tel. Celular</th>
                            <th>E-mail</th>
                            <th>Rua</th>
                            <th>Numero</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${dentistData.map((dentist: any) => {
                        return `
                            <tr>
                                <td>${dentist.nomeCompleto}</td>
                                <td>${dentist.dataNascimento}</td>
                                <td>${dentist.cpf}</td>
                                <td>${dentist.cro}</td>
                                <td>${dentist.especialidade}</td>
                                <td>${dentist.telefoneResidencial}</td>
                                <td>${dentist.telefoneCelular}</td>
                                <td>${dentist.email}</td>
                                <td>${dentist.rua}</td>
                                <td>${dentist.numero}</td>
                                <td>${dentist.bairro}</td>
                                <td>${dentist.cidade}</td>
                                <td>${dentist.estado}</td>
                                <td><a href="#">Editar</a></td>
                            </tr>
                        `;
                    }).join('')}
                    </tbody>
                    </table>
        </div>



        `;

    }

}