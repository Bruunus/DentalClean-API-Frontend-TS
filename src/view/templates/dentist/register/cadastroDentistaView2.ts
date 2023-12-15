import { ControllerRouteTS } from './../../../../controller/controllerRouterTS';
import { CadastroController } from "../../../../controller/cadastroController.js";

export class CadastroDentistaView2 {

    private template: string;
    private elementDOM: HTMLElement;
    private dentistaAPI = new CadastroController();
    private controllerRouterTS: ControllerRouteTS; 

    private nomeValidation: HTMLInputElement;

    /**
     * O Construtor precisa de um id em uma tag html para poder renderizar o formulário.
     */
    public constructor() {  
        
        this.template = `


        <div class="div_titulo_dentist div_titulo_dentist_register">
                <h4 class="no-select">Cadastro Dentista (Teste)</h4>
            </div>


            <div id="container-register-dentist">

                <form id="form_cadastro_dentista" class="row"> 
                    <!-- col 1 -->

                    <div class="form-group col-md-6 col-sm-12">                        
                        <label for="nomeCompleto" class="label-form">Nome completo</label>
                        <input type="text" name="nomeCompleto" id="nomeCompleto" class="form-control form-input" maxlength="20">                        
                    </div>

                    <div class="form-group col-md-6 col-sm-12"> 
                        <label for="dataNascimento" class="label-form">Data de nascimento</label>
                        <input type="date" name="dataNascimento" id="dataNascimento" class="form-control form-input">
                    </div>
                    
                    <div class="form-group col-md-4 col-sm-12"> 
                        <label for="cpf" class="label-form">CPF</label>
                        <input type="text" autocomplete="off" name="cpf" id="cpf" class="form-control form-input cpfInputFormDentist" maxlength="14">
                    </div>
                    
                    <div class="form-group col-md-4 col-sm-12">
                        <label for="cro" class="label-form">CRO</label>
                        <input type="number" name="cro" id="cro" class="form-control form-input" maxlength="4">
                    </div>

                    <div class="form-group col-md-4 col-sm-12"> 
                        <label for="especialidade" class="label-form">Especialidade</label>
                        <select id="especialidade" class="form-control select-form">
                            <option value="" disabled selected>Selecione</option>
                            <option value="Cirurgia">Cirurgia</option>
                            <option value="Cirurgia Bucomaxilofacial">Cirurgia Bucomaxilofacial</option>
                            <option value="Dentística">Dentística</option>
                            <option value="Endodontia">Endodontia</option>
                            <option value="Odontopediatria">Odontopediatria</option>
                            <option value="Prótese Dentária">Prótese Dentária</option>
                            <option value="Periodontia">Periodontia</option>
                            <option value="Odontogeriatria">Odontogeriatria</option>
                            <option value="Estética">Estética</option>
                        </select>
                    </div>

                    <div class="form-group col-md-4 col-sm-12"> 
                        <label for="telefoneResidencial" class="label-form">Telefine Residencial</label>
                        <input type="text" name="telefoneResidencial" id="telefoneResidencial" class="form-control form-input" maxlength="14">
                    </div>

                    <div class="form-group col-md-4 col-sm-12"> 
                        <label for="telefoneCelular" class="label-form">Telefone Celular</label>
                        <input type="text" name="telefoneCelular" id="telefoneCelular" class="form-control form-input" maxlength="15">
                    </div>

                    <div class="form-group col-md-4 col-sm-12"> 
                        <label for="email" class="label-form">E-mail</label>
                        <input type="text" name="email" id="email" maxlength="35" class="form-control form-input" maxlength="31">
                    </div>

                    <div class="form-group col-md-6 col-sm-12"> 
                        <label for="rua" class="label-form">Rua</label>
                        <input type="text" name="rua" id="rua" maxlength="32" class="form-control form-input" maxlength="25">
                    </div>

                    <div class="form-group col-md-6 col-sm-12"> 
                        <label for="numero" class="label-form">Número</label>
                        <input type="number" name="numero" id="numero" maxlength="5" class="form-control form-input" >
                    </div>

                    <div class="form-group col-md-4 col-sm-12"> 
                        <label for="bairro" class="label-form">Bairro</label>
                        <input type="text" name="bairro" id="bairro" maxlength="20" class="form-control form-input">
                    </div class="form-group col-md-4">

                    <div class="form-group col-md-4 col-sm-12"> 
                        <label for="cidade" class="label-form">Cidade</label>
                        <input type="text" name="cidade" id="cidade" maxlength="24" class="form-control form-input">
                    </div>

                    <div class="form-group col-md-4 col-sm-12"> 
                        <label for="estado" class="label-form">Estado</label>
                        <input type="text" name="estado" maxlength="2" id="estado" class="form-control form-input">
                    </div>

                    <div class="form-group col-12">
                        <div>
                            <button type="submit" class="btn btn-secondary">Salvar</button>
                        </div>
                    </div>

                </form>     
            </div>



        
        `;

        /* this.controllerRouterTS = new ControllerRouteTS();
        this.controllerRouterTS.redirectScreenRegisterDentist(this.template); */
        








    }

    public getTemplate(): void {



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
                /* const especialidade = (formSubmit.querySelector('#especialidade') as HTMLInputElement)?.value || ''; */
                
                const especialidadeSelect = document.querySelector('#especialidade') as HTMLSelectElement;
                const especialidade = especialidadeSelect?.value;
                
                const telefoneResidencial = (formSubmit.querySelector('#telefoneResidencial') as HTMLInputElement)?.value || '';
                const telefoneCelular = (formSubmit.querySelector('#telefoneCelular') as HTMLInputElement)?.value || '';
                const email = (formSubmit.querySelector('#email') as HTMLInputElement)?.value || '';
                const rua = (formSubmit.querySelector('#rua') as HTMLInputElement)?.value || '';
                const numero = (formSubmit.querySelector('#numero') as HTMLInputElement)?.value;
                const bairro = (formSubmit.querySelector('#bairro') as HTMLInputElement)?.value || '';
                const cidade = (formSubmit.querySelector('#cidade') as HTMLInputElement)?.value || '';
                const estado = (formSubmit.querySelector('#estado') as HTMLInputElement)?.value || '';




                /* Validação CPF */
                const cpfvalidation = formSubmit.querySelector('#cpf') as HTMLInputElement;
                
                

                

                //this.validation(cpfvalidation);


                /* cpfvalidation.addEventListener('keypress', () => {
        
                    let input = cpfvalidation.value.length;
                    
                    console.log('Entrado em addEventListener')
                    console.log(input)
        
                
                }) */







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
                //location.reload();

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



    private validation(cpfvalidation: HTMLInputElement): void {

        /* console.log('Teste', cpfvalidation) */

        //const cpfvalidation = document.querySelector('#cpf') as HTMLInputElement;

        cpfvalidation.addEventListener('keypress', () => {
        
            let input = cpfvalidation.value.length;

            console.log(input)

        
        })

    }
    



    private formProcess(event: Event) {
        event.preventDefault();
        //console.log('formProcess - Submit acionado - metodo cadastrarPaciente()')
    }


    render(): void {

        //this.elementDOM.innerHTML = this.templateCadastroDentista();
        this.eventSubmit();
        const formSubmit = document.querySelector('#form_cadastro_dentista');
        if(!formSubmit) {
            formSubmit.addEventListener('submit', this.formProcess.bind(this));
        }
    }




}