export class DentistaView {
    static listDentist(dentistData) {
        return `

            <h3>Pacientes</h3>
            <table style='border: 1px solid gray;'>
            <thead>
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
                </tr>
            </thead>
            <tbody>

            ${dentistData.map((dentist) => {
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
                    </tr>
                `;
        }).join('')}


            </tbody>
            </table>
        `;
    }
}
