import { CadastroController } from "../../controller/cadastroController.js";
export class CadastroDentistaView {
    constructor(renderizadorId) {
        this.dentistaAPI = new CadastroController();
        this.elementDOM = document.querySelector(renderizadorId);
    }
    templateCadastroDentista() {
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
    eventSubmit() {
        const formSubmit = document.querySelector('#form_cadastro_dentista');
        if (!formSubmit) {
            console.error("Problema encontrado ao renderizar formulário.");
            return;
        }
        else {
            formSubmit.addEventListener('submit', (event) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
                event.preventDefault();
                const nomeCompleto = ((_a = formSubmit.querySelector('#nomeCompleto')) === null || _a === void 0 ? void 0 : _a.value) || '';
                const dataNascimento = ((_b = formSubmit.querySelector('#dataNascimento')) === null || _b === void 0 ? void 0 : _b.value) || '';
                const cpf = ((_c = formSubmit.querySelector('#cpf')) === null || _c === void 0 ? void 0 : _c.value) || '';
                const cro = ((_d = formSubmit.querySelector('#cro')) === null || _d === void 0 ? void 0 : _d.value) || '';
                const especialidade = ((_e = formSubmit.querySelector('#especialidade')) === null || _e === void 0 ? void 0 : _e.value) || '';
                const telefoneResidencial = ((_f = formSubmit.querySelector('#telefoneResidencial')) === null || _f === void 0 ? void 0 : _f.value) || '';
                const telefoneCelular = ((_g = formSubmit.querySelector('#telefoneCelular')) === null || _g === void 0 ? void 0 : _g.value) || '';
                const email = ((_h = formSubmit.querySelector('#email')) === null || _h === void 0 ? void 0 : _h.value) || '';
                const rua = ((_j = formSubmit.querySelector('#rua')) === null || _j === void 0 ? void 0 : _j.value) || '';
                const numero = (_k = formSubmit.querySelector('#numero')) === null || _k === void 0 ? void 0 : _k.value;
                const bairro = ((_l = formSubmit.querySelector('#bairro')) === null || _l === void 0 ? void 0 : _l.value) || '';
                const cidade = ((_m = formSubmit.querySelector('#cidade')) === null || _m === void 0 ? void 0 : _m.value) || '';
                const estado = ((_o = formSubmit.querySelector('#estado')) === null || _o === void 0 ? void 0 : _o.value) || '';
                try {
                    console.log('Nome completo: ' + nomeCompleto +
                        '\nData nascimento: ' + dataNascimento +
                        '\nCPF: ' + cpf +
                        '\nCRO: ' + cro +
                        '\nEspecialidade: ' + especialidade +
                        '\nTelefone Res: ' + telefoneResidencial +
                        '\nTelefone Cel: ' + telefoneCelular +
                        '\nE-mail: ' + email +
                        '\nRua: ' + rua +
                        '\nNúmero: ' + numero + '  (' + typeof numero + ')' +
                        '\nBairro: ' + bairro +
                        '\nCidade: ' + cidade +
                        '\nEstado: ' + estado);
                    this.dentistaAPI.cadastrarDentista(nomeCompleto, dataNascimento, cpf, cro, especialidade, telefoneResidencial, telefoneCelular, email, rua, numero, bairro, cidade, estado);
                }
                catch (error) {
                    console.log('Erro ao envidar JSON: ' + error.message);
                }
                this.limpaCampos();
                alert('Registro realizado com sucesso!');
                location.reload();
            });
        }
    }
    limpaCampos() {
        const nomeCompleto = document.querySelector('#nomeCompleto');
        const dataNascimento = document.querySelector('#dataNascimento');
        const cpf = document.querySelector('#cpf');
        const cro = document.querySelector('#cro');
        const especialidade = document.querySelector('#especialidade');
        const telefoneResidencial = document.querySelector('#telefoneResidencial');
        const telefoneCelular = document.querySelector('#telefoneCelular');
        const email = document.querySelector('#email');
        const rua = document.querySelector('#rua');
        const numero = document.querySelector('#numero');
        const bairro = document.querySelector('#bairro');
        const cidade = document.querySelector('#cidade');
        const estado = document.querySelector('#estado');
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
    formProcess(event) {
        event.preventDefault();
        console.log('formProcess - Submit acionado - metodo cadastrarPaciente()');
    }
    render() {
        this.elementDOM.innerHTML = this.templateCadastroDentista();
        this.eventSubmit();
        const formSubmit = document.querySelector('#form_cadastro_dentista');
        if (!formSubmit) {
            formSubmit.addEventListener('submit', this.formProcess.bind(this));
        }
    }
}
