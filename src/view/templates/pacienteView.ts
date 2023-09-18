export class PacienteView {

    static listaPaciente(pacienteData: any[]) {

        return  `

            <h3>Pacientes</h3>
            <table style='border: 1px solid gray;'>
                
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

                ${pacienteData.map((patient: any) => {

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