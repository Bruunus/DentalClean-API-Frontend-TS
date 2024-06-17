export class PacienteView { 
 

    private static template: string;

    // implementação do menu navbar -> https://getbootstrap.com/docs/4.0/components/navbar/?#forms

    static listaPaciente(pacienteData: any[]): void {

        this.template =  `  
      
        
        
        <div class="div_titulo_patient_home">
            <h4 class="no-select">Pacientes</h4>
        </div> 


        <div class="row justify-content-end container-nav-bar-pesquisar-paciente">
            <nav class="col-12 navbar navbar-expand-lg nav-container-pesquisar-paciente" style="
                /* border: 1px solid tomato; {Debug} */
                padding: 0 !important;
            ">

                <form class="form-seach-paciente">
                    <div class="row d-flex justify-content-end">
                        <div class="col">
                           <input type="search" id="input-seach" class="form-control input-form-pesquisar-paciente" placeholder="Nome Paciente" aria-label="Search">
                        </div>

                        <div class="col">
                            <button id="btn-seach" class=" btn btn-outline-success-paciente btn-pesquisar" type="submit">Pesquisar</button>
                        </div>
                    </div>
                </form>
            </nav>

        </div>


        <div class="div_container_tables_paciente" >

            <table class='table_paciente table-hover table-sm '>
                <thead class='thead_paciente'>
                    <tr class="no-select">
                        <th><a href="#" id="nomeCompleto">Nome Completo</a></th>
                        <th><a href="#" id="dataNascimento">Data de Nasc.</a></th>
                        <th class="color_font_th_paciente">Genero</th>
                        <th class="color_font_th_paciente">E-mail</th>
                        <th><a href="#" id="cpf">Convênio</a></th>
                        <th><a href="#" id="cpf">Carteirinha</a></th>
                        <th class="color_font_th_paciente">Rua</th>
                        <th class="color_font_th_paciente">Número</th>
                        <th class="color_font_th_paciente">Bairro</th>
                        <th class="color_font_th_paciente">Cidade</th>
                        <th class="color_font_th_paciente">Estado</th>
                        <th class="color_font_th_paciente">Editar</th>
                    </tr>
                </thead>
                <tbody>

                    ${pacienteData.map((patient: any) => {

                        return `
                        
                            <tr class="no-select tr_format" style="color: #354057">
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
        </div>    
                
        `;


        const elementDOM = document.querySelector('#container-child-right');
        elementDOM.innerHTML = this.template;
    
    
    
    
    }
                    
                    


    

}