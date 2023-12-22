import { CadastroController } from "../../../../controller/cadastroController.js";
import { ValidationAndMask } from "../../../../module/validationAndMask.js";

export class CadastroDentistaView {

    private elementDOM: HTMLElement;
    

    private nomeValidation: HTMLInputElement;

    /**
     * O Construtor precisa de um id em uma tag html para poder renderizar o formulário.
     */
    public constructor(renderizadorId: string) {
        this.elementDOM = document.querySelector(renderizadorId);

    }


    private templateCadastroDentista(): string { 

        return `           

            <div class="div_titulo_dentist div_titulo_dentist_register">
                <h4 class="no-select">Cadastro Dentista</h4>
            </div>


            <div id="container-register-dentist">

                <form id="form_cadastro_dentista" class="row"> 
                    <!-- col 1 -->

                    <div class="form-group col-md-6 col-sm-12 container-nome-completo">                        
                        <label for="nomeCompleto" class="label-form">Nome completo (ou abreviado)</label>
                        <input type="text" name="nomeCompleto" id="nomeCompleto" class="form-control form-input required" maxlength="20">                        
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-md-6 col-sm-12 container-data-nascimento"> 
                        <label for="dataNascimento" class="label-form">Data de nascimento</label>
                        <input type="date" name="dataNascimento" id="dataNascimento" class="form-control form-input required">
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>
                    
                    <div class="form-group col-md-4 col-sm-12 container-cpf"> 
                        <label for="cpf" class="label-form">CPF</label>
                        <input type="text" autocomplete="off" name="cpf" id="cpf" class="form-control form-input cpfInputFormDentist required" maxlength="14">
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>
                    
                    <div class="form-group col-md-4 col-sm-12 container-cro">
                        <label for="cro" class="label-form">CRO</label>
                        <input type="text" name="cro" id="cro" class="form-control form-input required" maxlength="4">
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-especialidade"> 
                        <label for="especialidade" class="label-form">Especialidade</label>
                        <select id="especialidade" class="form-control select-form required">
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
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-tel-res"> 
                        <label for="telefoneResidencial" class="label-form">Telefine Residencial</label>
                        <input type="text" name="telefoneResidencial" id="telefoneResidencial" class="form-control form-input required" maxlength="14">
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-tel-cel"> 
                        <label for="telefoneCelular" class="label-form">Telefone Celular</label>
                        <input type="text" name="telefoneCelular" id="telefoneCelular" class="form-control form-input required" maxlength="16">
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-email"> 
                        <label for="email" class="label-form">E-mail</label>
                        <input type="text" name="email" id="email" maxlength="35" class="form-control form-input required" maxlength="31">
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-md-6 col-sm-12 container-rua"> 
                        <label for="rua" class="label-form">Rua</label>
                        <input type="text" name="rua" id="rua" maxlength="20" class="form-control form-input required" maxlength="25">
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-md-6 col-sm-12 container-numero"> 
                        <label for="numero" class="label-form">Número</label>
                        <input type="text" name="numero" id="numero" maxlength="6" class="form-control form-input required" >
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-bairro"> 
                        <label for="bairro" class="label-form">Bairro</label>
                        <input type="text" name="bairro" id="bairro" maxlength="24" class="form-control form-input required">
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div class="form-group col-md-4">

                    <div class="form-group col-md-4 col-sm-12 container-cidade"> 
                        <label for="cidade" class="label-form">Cidade</label>
                        <input type="text" name="cidade" id="cidade" maxlength="24" class="form-control form-input required">
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-md-4 col-sm-12 container-estado"> 
                        <label for="estado" class="label-form">Estado</label>
                        <input type="text" name="estado" maxlength="2" id="estado" class="form-control form-input required">
                        <span class="spanMessage">O campo não pode estar vazio</span>
                    </div>

                    <div class="form-group col-12">
                        <div>
                            <button type="submit" class="btn btn-secondary">Salvar</button>
                        </div>
                    </div>

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


              
                    /* console.log(
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
                    );     */
                    
                    
                    /* VALIDATION PROCISAR AQUI ANTES DE ENVIAR A API */
                    

                    const nomeCompletoValid = document.querySelector('#nomeCompleto') as HTMLInputElement;
                    const dataNascimentoValid = document.querySelector('#dataNascimento') as HTMLInputElement;
                    const cpfValid = document.querySelector('#cpf') as HTMLInputElement;
                    const telefoneResidencialValid = document.querySelector('#telefoneResidencial') as HTMLInputElement; 
                    const telefoneCelularValid = document.querySelector('#telefoneCelular') as HTMLInputElement;
                    const croValid = document.querySelector('#cro') as HTMLInputElement;
                    const especialidadeValid = document.querySelector('#especialidade') as HTMLInputElement;
                    const emailValid = document.querySelector('#email') as HTMLInputElement;        
                    const numeroValid = document.querySelector('#numero') as HTMLInputElement;
                    const ruaValid = document.querySelector('#rua') as HTMLInputElement;
                    const bairroValid = document.querySelector('#bairro') as HTMLInputElement;
                    const cidadeValid = document.querySelector('#cidade') as HTMLInputElement;
                    const estadoValid = document.querySelector('#estado') as HTMLInputElement;




                    const validation = new ValidationAndMask();

                        validation.validationRulerForm(                        
                            nomeCompletoValid,
                            dataNascimentoValid,
                            cpfValid,
                            croValid,
                            especialidadeValid,
                            telefoneResidencialValid,
                            telefoneCelularValid,
                            emailValid,
                            ruaValid,
                            numeroValid,
                            bairroValid,
                            cidadeValid,
                            estadoValid
                        );
                    
                   


                        



                    
                    // chamador da API backend aqui ! _20_/_12_/_2023_ 
                    /* 
                    ); */



                     

              
                
                /* alert('Registro realizado com sucesso!') */
                //location.reload();

            })
        }
    }







    private maskAndValidation(): void {

        const mask = new ValidationAndMask();

        const nomeCompletoMask = document.querySelector('#nomeCompleto') as HTMLInputElement;
        const dataNascimentoMask = document.querySelector('#dataNascimento') as HTMLInputElement;
        const cpfMask = document.querySelector('#cpf') as HTMLInputElement;
        const telefoneResidencialMask = document.querySelector('#telefoneResidencial') as HTMLInputElement; 
        const telefonecelularMask = document.querySelector('#telefoneCelular') as HTMLInputElement;
        const croMask = document.querySelector('#cro') as HTMLInputElement;
        const especialidadeMask = document.querySelector('#especialidade') as HTMLInputElement;
        const emailMask = document.querySelector('#email') as HTMLInputElement;        
        const numeroMask = document.querySelector('#numero') as HTMLInputElement;
        const ruaMask = document.querySelector('#rua') as HTMLInputElement;
        const bairroMask = document.querySelector('#bairro') as HTMLInputElement;
        const cidadeMask = document.querySelector('#cidade') as HTMLInputElement;
        const estadoMask = document.querySelector('#estado') as HTMLInputElement;


        /* Nome completo */
        mask.bloquearNumerosECaracteres(nomeCompletoMask);
        mask.characterLowerCase(nomeCompletoMask);

        mask.cpfMask(cpfMask);

        mask.bloquearLetrasECaracteres(croMask);
        mask.bloquearLetrasECaracteres(numeroMask);

        mask.telefoneResidencialMask(telefoneResidencialMask);
        mask.bloquearLetrasECaracteres(telefoneResidencialMask);

        mask.telefonecelularMask(telefonecelularMask);
        mask.bloquearLetrasECaracteres(telefonecelularMask);

        
        mask.bloquearNumerosECaracteres(ruaMask);
        mask.bloquearNumerosECaracteres(bairroMask);
        mask.bloquearNumerosECaracteres(cidadeMask);

        mask.bloquearNumerosECaracteres(estadoMask);
        mask.upperCaseLong(estadoMask);

        

   
    }



    private formProcess(event: Event) {
        event.preventDefault();
        //console.log('formProcess - Submit acionado - metodo cadastrarPaciente()')
    }


    render(): void {

        this.elementDOM.innerHTML = this.templateCadastroDentista();
        this.maskAndValidation();
        this.eventSubmit();
        const formSubmit = document.querySelector('#form_cadastro_dentista');
        if(!formSubmit) {
            formSubmit.addEventListener('submit', this.formProcess.bind(this));
        }
    }




}