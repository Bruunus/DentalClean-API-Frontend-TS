import { CadastroController } from "../../controller/cadastroController.js";

export class CadastroDentistaView {

    private elementDOM: HTMLElement;
    private dentistaAPI = new CadastroController();

    /**
     * O Construtor precisa de um id em uma tag html para poder renderizar o formulário.
     */
    public constructor(renderizadorId: string) {
        this.elementDOM = document.querySelector(renderizadorId);
    }


    private templateCadastroDentista() :string { 

        return `
        
            <h2>Formulário de Cadastro de Dentista</h2>
            <div style="border 0.5px solid lightgray">
                <form id="form_cadastro_dentista"> 
                    <label for="nomeCompleto">Nome completo</label>
                    <input type="text" name="nomeCompleto" id="nomeCompleto">
                    <br>
                    <label for="dataNascimento">Data de nascimento</label>
                    <input type="date" name="dataNascimento" id="dataNascimento">
                    <br>
                    <label for="cpf">CPF</label>
                    <input type="text" name="cpf" id="cpf">
                    <br>
                    <label for="cro">CRO</label>
                    <input type="text" name="cro" id="cro">
                    <br>
                    <label for="especialidade">Especialidade</label>
                    <input type="text" name="especialidade" id="especialidade">
                    <br>
                    <label for="telefoneResidencial">Telefine Res.</label>
                    <input type="text" name="telefoneResidencial" id="telefoneResidencial">
                    <br>
                    <label for="telefoneCelular">Telefone Cel.</label>
                    <input type="text" name="telefoneCelular" id="telefoneCelular">
                    <br>
                    <label for="email">E-mail</label>
                    <input type="text" name="email" id="email">
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

        const formSubmit = document.querySelector('#form_cadastro_dentista');
        
        if(!formSubmit) {
            console.error("Problema encontrado ao renderizar formulário.");
            return;
        } else {
            formSubmit.addEventListener('submit', (event) => {
                event.preventDefault();

                const nomeCompleto = (formSubmit.querySelector('#nomeCompleto') as HTMLInputElement)?.value || '';
                const dataNascimento = (formSubmit.querySelector('#dataNascimento') as HTMLInputElement)?.value || '';
                const cpf = (formSubmit.querySelector('#cpf') as HTMLInputElement)?.value || '';
                const cro = (formSubmit.querySelector('#cro') as HTMLInputElement)?.value || '';
                const especialidade = (formSubmit.querySelector('#especialidade') as HTMLInputElement)?.value || '';
                const telefoneResidencial = (formSubmit.querySelector('#telefoneResidencial') as HTMLInputElement)?.value || '';
                const telefoneCelular = (formSubmit.querySelector('#telefoneCelular') as HTMLInputElement)?.value || '';
                const email = (formSubmit.querySelector('#email') as HTMLInputElement)?.value || '';
                const rua = (formSubmit.querySelector('#rua') as HTMLInputElement)?.value || '';
                const numero = (formSubmit.querySelector('#numero') as HTMLInputElement)?.value;
                const bairro = (formSubmit.querySelector('#bairro') as HTMLInputElement)?.value || '';
                const cidade = (formSubmit.querySelector('#cidade') as HTMLInputElement)?.value || '';
                const estado = (formSubmit.querySelector('#estado') as HTMLInputElement)?.value || '';

                try {
                    console.log(
                        'Nome completo: ' + nomeCompleto +
                        '\nData nascimento: ' +dataNascimento  +
                        '\nCPF: ' + cpf  +
                        '\nCRO: ' + cro  +
                        '\nEspecialidade: ' + especialidade  +
                        '\nTelefone Res: ' + telefoneResidencial  +
                        '\nTelefone Cel: ' + telefoneCelular  +
                        '\nE-mail: ' + email  +
                        '\nRua: ' + rua +
                        '\nNúmero: ' + numero  +'  (' +typeof numero +')' +
                        '\nBairro: ' + bairro +
                        '\nCidade: ' + cidade +
                        '\nEstado: ' + estado
                    );



                    // chamador da API backend aqui ! 
                    this.dentistaAPI.cadastrarDentista(                        
                        nomeCompleto,
                        dataNascimento,
                        cpf,
                        cro,
                        especialidade,
                        telefoneResidencial,
                        telefoneCelular,
                        email,
                        rua,
                        numero,
                        bairro,
                        cidade,
                        estado
                    );

                } catch (error) {
                    console.log('Erro ao envidar JSON: ' + error.message);
                }

                this.limpaCampos();
                alert('Registro realizado com sucesso!')
                location.reload();

            })
        }
    }



    private limpaCampos(): void {

        const nomeCompleto = document.querySelector('#nomeCompleto') as HTMLInputElement;
        const dataNascimento = document.querySelector('#dataNascimento') as HTMLInputElement;
        const cpf = document.querySelector('#cpf') as HTMLInputElement;
        const cro = document.querySelector('#cro') as HTMLInputElement;
        const especialidade = document.querySelector('#especialidade') as HTMLInputElement;
        const telefoneResidencial = document.querySelector('#telefoneResidencial') as HTMLInputElement;
        const telefoneCelular = document.querySelector('#telefoneCelular') as HTMLInputElement;
        const email = document.querySelector('#email') as HTMLInputElement;
        const rua = document.querySelector('#rua') as HTMLInputElement;
        const numero = document.querySelector('#numero') as HTMLInputElement;
        const bairro = document.querySelector('#bairro') as HTMLInputElement;
        const cidade = document.querySelector('#cidade') as HTMLInputElement;
        const estado = document.querySelector('#estado') as HTMLInputElement;


        nomeCompleto.value = '';
        dataNascimento.value = '';
        cpf.value = '';
        cro.value = '';
        especialidade.value = '';
        telefoneResidencial.value = '';
        telefoneCelular.value = '';
        email.value = '';
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

        this.elementDOM.innerHTML = this.templateCadastroDentista();
        this.eventSubmit();
        const formSubmit = document.querySelector('#form_cadastro_dentista');
        if(!formSubmit) {
            formSubmit.addEventListener('submit', this.formProcess.bind(this));
        }
    }




}