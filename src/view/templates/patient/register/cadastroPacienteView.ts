import { CadastroService } from "../../../../service/cadastroService.js";

export class CadastroPacienteView {

    private elementDOM: HTMLElement;
    private pacienteAPI = new CadastroService();
    
    
    public constructor(renderizadorId: string) {
        this.elementDOM = document.querySelector(renderizadorId);
    }
     

    private templatePaciente() :string {

        return `
        
            <div class="div_titulo_dentist div_titulo_patient_register">
                <h4 class="no-select">Cadastro Paciente</h4>
            </div>


            <div id="container-register-patient" style="border 0.5px solid lightgray">

                <form id="form_cadastro_paciente" class="row">

                    <div class="form-group col-md-6 col-sm-12 container-nome-completo">  
                        <label for="nomeCompleto">Nome completo</label>
                        <input type="text" name="nomeCompleto" id="nomeCompleto" class="form-control form-input required" maxlength="20">
                        <span class="spanMessage"></span>
                    </div>

                    <div class="form-group col-md-6 col-sm-12 container-data-nascimento"> 
                        <label for="dataNascimento" class="label-form">Data de nascimento</label>
                        <input type="date" name="dataNascimento" id="dataNascimento" class="form-control form-input required">
                        <span class="spanMessage"></span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-sexo"> 
                        <label for="sexo" class="label-form">Sexo</label>
                        <select id="sexo" class="form-control select-form required">
                            <option value="" disabled selected>Selecione</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outros">Outros</option>
                        </select>
                        <span class="spanMessage"></span>
                    </div>


                    <div class="form-group col-md-4 col-sm-12 container-email"> 
                        <label for="email" class="label-form">E-mail</label>
                        <input type="text" name="email" id="email" maxlength="35" class="form-control form-input required" maxlength="31">
                        <span class="spanMessage"></span>
                    </div>

 
                    <div class="form-group col-md-4 col-sm-12 container-convenio"> 
                        <label for="convenio" class="label-form">Convênio</label>
                        <select id="convenio" class="form-control select-form required">
                            <option value="" disabled selected>Selecione</option>
                            <option value="amilDental">Amil Dental</option>

                            <option value="bradescoDental">Bradesco Dental</option>
                            <option value="dentalUni">Dental Uni</option>
                            <option value="odontoprev">Odontoprev</option>
                            <option value="sulamericaOdonto">Unimed Odonto</option>
                            <option value="unidemOdonto">Prótese Dentária</option>
                            <option value="portoSeguroOdontologico">Porto Seguro Odontológico</option>
                            <option value="dentalEstetica">Dental Estética</option>
                            <option value="Estética">Estética</option>
                            <option value="interodonto">Interodonto</option>
                            <option value="prodent">Prodent</option>
                        </select>
                        <span class="spanMessage"></span>
                    </div>
                    
                     <div class="form-group col-md-4 col-sm-12 container-num-carteirinha"> 
                        <label for="numCarteirinha" class="label-form">Número Carteirinha</label>
                        <input type="text" name="numCarteirinha" id="numCarteirinha" class="form-control form-input required" maxlength="14">
                        <span class="spanMessage"></span>
                    </div>
                      
                    <div class="form-group col-md-6 col-sm-12 container-rua"> 
                        <label for="rua" class="label-form">Rua</label>
                        <input type="text" name="rua" id="rua" maxlength="20" class="form-control form-input required" maxlength="25">
                        <span class="spanMessage"></span>
                    </div>

                    <div class="form-group col-md-6 col-sm-12 container-numero"> 
                        <label for="numero" class="label-form">Número</label>
                        <input type="text" name="numero" id="numero" maxlength="6" class="form-control form-input required" >
                        <span class="spanMessage"></span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-bairro"> 
                        <label for="bairro" class="label-form">Bairro</label>
                        <input type="text" name="bairro" id="bairro" maxlength="24" class="form-control form-input required">
                        <span class="spanMessage"></span>
                    </div class="form-group col-md-4">

                    <div class="form-group col-md-4 col-sm-12 container-cidade"> 
                        <label for="cidade" class="label-form">Cidade</label>
                        <input type="text" name="cidade" id="cidade" maxlength="24" class="form-control form-input required">
                        <span class="spanMessage"></span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-estado"> 
                        <label for="estado" class="label-form">Estado</label>
                        <input type="text" name="estado" maxlength="2" id="estado" class="form-control form-input required">
                        <span class="spanMessage"></span>
                    </div>
                      
                    <div class="form-group col-12">
                        <div>
                            <button type="submit" id="btn-cadastro-dentista" class="btn btn-secondary">Salvar</button>
                        </div>
                    </div>
                    
                     
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