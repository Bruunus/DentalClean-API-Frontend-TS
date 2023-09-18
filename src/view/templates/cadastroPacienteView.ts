import { CadastroController } from "../../controller/cadastroController.js";

export class CadastroPacienteView {

    private elementDOM: HTMLElement;
    private pacienteAPI = new CadastroController();
    
    
    public constructor(renderizadorId: string) {
        this.elementDOM = document.querySelector(renderizadorId);
    }
     

    private templatePaciente() :string {

        return `
        
            <h2>Formulário de Cadastro de Paciente</h2>
            <div style="border 0.5px solid lightgray">
            <form id="form_cadastro_paciente">
                <label for="nomeCompleto">Nome completo</label>
                <input type="text" name="nomeCompleto" id="nomeCompleto">
                <br>
                <label for="dataNascimento">Data de nascimento</label>
                <input type="date" name="dataNascimento" id="dataNascimento">
                <br>
                <label for="genero">Sexo</label>
                <select name="genero" id="genero">
                    <option value="empty"></option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outros">Outros</option>
                </select>
                <br>
                <label for="email">E-mail</label>
                <input type="text" name="email" id="email">
                <br>
                <label for="convenio">Convênio</label>
                <select name="convenio" id="convenio">
                    <option value="empty"></option>
                    <option value="amilDental">Amil Dental</option>
                    <option value="bradescoDental">Bradesco Dental</option>
                    <option value="dentalUni">Dental Uni</option>
                    <option value="odontoprev">Odontoprev</option>
                    <option value="sulamericaOdonto">SulAmérica Odonto</option>
                    <option value="unidemOdonto">Unimed Odonto</option>
                    <option value="portoSeguroOdontologico">Porto Seguro Odontológico</option>
                    <option value="dentalEstetica">Dental Estética</option>
                    <option value="interodonto">Interodonto</option>
                    <option value="prodent">Prodent</option>
                </select>
                <br>
                <label for="numCarteirinha">Número Carteirinha</label>
                <input type="text" name="numCarteirinha" maxlength="8" id="numCarteirinha">
                <br>
                <label for="rua">Rua</label>
                <input type="text" name="rua" id="rua">
                <br>
                <label for="numero">Número</label>
                <input type="text" name="numero" id="numero">
                <br>
                <label for="bairro">Bairro</label>
                <input type="text" name="bairro" id="bairro">
                <br>
                <label for="cidade">Cidade</label>
                <input type="text" name="cidade" id="cidade">
                <br>
                <label for="estado">Estado</label>
                <input type="text" name="estado" id="estado">
                <br><br>
                <button type="submit">Salvar</button>
            </form>
            </div>
        `;
    }


    private eventSubmit(): void {

        const formSubmit = document.querySelector('#form_cadastro_paciente');

        if (!formSubmit) {
            console.error("Problema encontrado ao renderizar formulário.");
            return;
        } else {

            formSubmit.addEventListener('submit', (event) => {
                event.preventDefault();

                const nomeCompleto = (formSubmit.querySelector('#nomeCompleto') as HTMLInputElement)?.value || '';
                const dataNascimento = (formSubmit.querySelector('#dataNascimento') as HTMLInputElement)?.value || '';

                // capturando o valor de dentro da tag options
                const selectElementGenero = formSubmit.querySelector('#genero') as HTMLSelectElement;
                const selectedIndexGenero = selectElementGenero.selectedIndex;
                const genero = selectedIndexGenero !== -1 ? selectElementGenero.options[selectedIndexGenero].text : '';
                                
                const email = (formSubmit.querySelector('#email') as HTMLInputElement)?.value || '';

                const selectElementConvenio = formSubmit.querySelector('#convenio') as HTMLSelectElement;
                const selectedIndexConvenio = selectElementConvenio.selectedIndex;
                const convenio = selectedIndexConvenio !== -1 ? selectElementConvenio.options[selectedIndexConvenio].text : '';

                const numeroCarteirinha = (formSubmit.querySelector('#numCarteirinha') as HTMLInputElement)?.value;
                const rua = (formSubmit.querySelector('#rua') as HTMLInputElement)?.value || '';
                const numero = (formSubmit.querySelector('#numero') as HTMLInputElement)?.value;
                const bairro = (formSubmit.querySelector('#bairro') as HTMLInputElement)?.value || '';
                const cidade = (formSubmit.querySelector('#cidade') as HTMLInputElement)?.value || '';
                const estado = (formSubmit.querySelector('#estado') as HTMLInputElement)?.value || '';
 

                console.log(
                    'Nome completo: ' + nomeCompleto +
                    '\nData nascimento: ' +dataNascimento  +
                    '\nGênero: ' + genero  +
                    '\nE-mail: ' + email  +
                    '\nConvênio: ' + convenio  +
                    '\nN Carteirinha: ' + numeroCarteirinha + '  (' +typeof numeroCarteirinha +')' +
                    '\nRua: ' + rua +
                    '\nNúmero: ' + numero  +'  (' +typeof numero +')' +
                    '\nBairro: ' + bairro +
                    '\nCidade: ' + cidade +
                    '\nEstado: ' + estado
                );


                try {
                    this.pacienteAPI.cadastrarPaciente(
                        nomeCompleto,
                        dataNascimento,
                        genero,
                        email,
                        convenio,
                        numeroCarteirinha,
                        rua,
                        numero,
                        bairro,
                        cidade,
                        estado
                    );

                    
                    this.limpaCampos();
                    alert('Registro realizado com sucesso!')
                    location.reload();
                     
                } catch (error) {
                     console.log('Erro ao envidar JSON: ' + error.message);
                }

                
            });

        }
    }
 

    private limpaCampos(): void {
        const nomeCompleto = document.querySelector('#nomeCompleto') as HTMLInputElement;
        const dataNascimento = document.querySelector('#dataNascimento') as HTMLInputElement
        const genero = document.querySelector('#genero') as HTMLInputElement;
        const email = document.querySelector('#email') as HTMLInputElement;
        const convenio = document.querySelector('#convenio') as HTMLInputElement;
        const numeroCarteirinha = document.querySelector('#numCarteirinha') as HTMLInputElement;
        const rua = document.querySelector('#rua') as HTMLInputElement;
        const numero = document.querySelector('#numero') as HTMLInputElement;
        const bairro = document.querySelector('#bairro') as HTMLInputElement;
        const cidade = document.querySelector('#cidade') as HTMLInputElement;
        const estado = document.querySelector('#estado') as HTMLInputElement;

        nomeCompleto.value = '';
        dataNascimento.value = '';
        genero.value = '';
        email.value = '';
        convenio.value = '';
        numeroCarteirinha.value = '';
        rua.value = '';
        numero.value = '';
        bairro.value = '';
        cidade.value = '';
        estado.value = '';
         
    }

    private formProcess(event: Event) {
        event.preventDefault();
        console.log('formProcess - Submit acionado - metodo cadastrarPaciente()')
    }


    render(): void {
        this.elementDOM.innerHTML = this.templatePaciente();
        this.eventSubmit();
        const formSubmit = document.querySelector('#form_cadastro_paciente');
        if(formSubmit) {
            formSubmit.addEventListener('submit', this.formProcess.bind(this));
        }
    }
}