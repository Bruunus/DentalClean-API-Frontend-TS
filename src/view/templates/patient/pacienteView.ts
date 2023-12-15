import { AppModule } from "../../../module/appModule.js";

export class PacienteView { 
 

    private static template: string;

    // implementação do menu navbar -> https://getbootstrap.com/docs/4.0/components/navbar/?#forms

    static listaPaciente(pacienteData: any[]): void {

        this.template =  `      

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


        const elementDOM = document.querySelector('#container-child-right');
        elementDOM.innerHTML = this.template;
    
    
    
    
    }
                    
                    


    

}