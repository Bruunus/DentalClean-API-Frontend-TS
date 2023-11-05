export class PacienteView {
    static listaPaciente(pacienteData) {
        return `

            
           

            <table class='table table-sm'>
                <thead>
                    <tr>
                        <th>Nome Completo</th>
                        <th>Data de Nasc.</th>
                        <th>Genero</th>
                        <th>E-mail</th>
                        <th>Convenio</th>
                        <th>Carteirinha</th>
                        <th>Rua</th>
                
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>

                    ${pacienteData.map((patient) => {
            return `
                        
                            <tr>
                                <td>${patient.nomeCompleto}</td>
                                <td>${patient.dataNascimento}</td>
                                <td>${patient.genero}</td>
                                <td>${patient.email}</td>
                                <td>${patient.convenio}</td>
                                <td>${patient.numeroCarteirinha}</td>
                                <td>${patient.rua}</td>
                                <td>${patient.numero}</td>
                                <td>${patient.bairro}</td>
                                <td>${patient.cidade}</td>
                                <td>${patient.estado}</td>
                                <td><a href="#">Editar</a></td>
                            </tr>

                        
                        `;
        }).join('')}

            </tbody>
            </table>
                
                
        `;
    }
}
