import { ListarPacienteController } from "../controller/listarPacienteController.js";
export class ListaPacientesView {
    constructor(renderizadorId) {
        this.listarPacienteController = new ListarPacienteController();
        this.elementDOM = document.querySelector(renderizadorId);
    }
    templateListaPaciente(model) {
        return `
        
        <div style='border: 1px solid gray; padding: 5px'>
            
        <thead>
            <tr>
                <th>Nome</th>
                <th>Dt. Nascimento</th>
                <th>Sexo</th>
                <th>E-mail</th>
                <th>Convênio</th>
                <th>Número Carteirinha</th>
                <th>Rua</th>
                <th>Número</th>
                <th>Bairro</th>
                <th>Cidade</th>
                <th>Estado</th>
            </tr>
        </thead>
        <tbody>
            ${model.listaPacientes().map(data => {
            return `                
                    <tr>
                        <td>${data.nomeCompleto}</td>
                        <td>${data.dataNascimento}</td>
                        <td>${data.genero}</td>
                        <td>${data.email}</td>
                        <td>${data.convenio}<td>
                        <td>${data.numeroCarteirinha}</td>
                        <td>${data.rua}</td>
                        <td>${data.numero}</td>
                        <td>${data.bairro}</td>
                        <td>${data.cidade}</td>
                        <td>${data.estado}</td>
                    </tr>

                `;
        })}
        </tbody>

        </div>
        
        `;
    }
    render() {
        this.elementDOM.innerHTML = this.templateListaPaciente(this.listarPacienteController);
    }
}
