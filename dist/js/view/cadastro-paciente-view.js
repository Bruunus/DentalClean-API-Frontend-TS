import { CadastroController } from "../controller/cadastroController.js";
export class CadastroPacienteView {
    constructor(renderizadorId) {
        this.pacienteAPI = new CadastroController();
        this.elementDOM = document.querySelector(renderizadorId);
    }
    templatePaciente() {
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
    eventSubmit() {
        const formSubmit = document.querySelector('#form_cadastro_paciente');
        if (!formSubmit) {
            console.error("Formulário não encontrado no DOM.");
            return;
        }
        else {
            formSubmit.addEventListener('submit', (event) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                event.preventDefault();
                const nomeCompleto = ((_a = formSubmit.querySelector('#nomeCompleto')) === null || _a === void 0 ? void 0 : _a.value) || '';
                const dataNascimento = ((_b = formSubmit.querySelector('#dataNascimento')) === null || _b === void 0 ? void 0 : _b.value) || '';
                const selectElementGenero = formSubmit.querySelector('#genero');
                const selectedIndexGenero = selectElementGenero.selectedIndex;
                const genero = selectedIndexGenero !== -1 ? selectElementGenero.options[selectedIndexGenero].text : '';
                const email = ((_c = formSubmit.querySelector('#email')) === null || _c === void 0 ? void 0 : _c.value) || '';
                const selectElementConvenio = formSubmit.querySelector('#convenio');
                const selectedIndexConvenio = selectElementConvenio.selectedIndex;
                const convenio = selectedIndexConvenio !== -1 ? selectElementConvenio.options[selectedIndexConvenio].text : '';
                const numeroCarteirinha = (_d = formSubmit.querySelector('#numCarteirinha')) === null || _d === void 0 ? void 0 : _d.value;
                const rua = ((_e = formSubmit.querySelector('#rua')) === null || _e === void 0 ? void 0 : _e.value) || '';
                const numero = (_f = formSubmit.querySelector('#numero')) === null || _f === void 0 ? void 0 : _f.value;
                const bairro = ((_g = formSubmit.querySelector('#bairro')) === null || _g === void 0 ? void 0 : _g.value) || '';
                const cidade = ((_h = formSubmit.querySelector('#cidade')) === null || _h === void 0 ? void 0 : _h.value) || '';
                const estado = ((_j = formSubmit.querySelector('#estado')) === null || _j === void 0 ? void 0 : _j.value) || '';
                console.log('Nome completo: ' + nomeCompleto +
                    '\nData nascimento: ' + dataNascimento +
                    '\nGênero: ' + genero +
                    '\nE-mail: ' + email +
                    '\nConvênio: ' + convenio +
                    '\nN Carteirinha: ' + numeroCarteirinha + '  (' + typeof numeroCarteirinha + ')' +
                    '\nRua: ' + rua +
                    '\nNúmero: ' + numero + '  (' + typeof numero + ')' +
                    '\nBairro: ' + bairro +
                    '\nCidade: ' + cidade +
                    '\nEstado: ' + estado);
                try {
                    this.pacienteAPI.cadastrarPaciente(nomeCompleto, dataNascimento, genero, email, convenio, numeroCarteirinha, rua, numero, bairro, cidade, estado);
                    this.limpaCampos();
                    alert('Registro realizado com sucesso!');
                    location.reload();
                }
                catch (error) {
                    console.log('Erro ao envidar JSON: ' + error.message);
                }
            });
        }
    }
    limpaCampos() {
        const nomeCompleto = document.querySelector('#nomeCompleto');
        const dataNascimento = document.querySelector('#dataNascimento');
        const genero = document.querySelector('#genero');
        const email = document.querySelector('#email');
        const convenio = document.querySelector('#convenio');
        const numeroCarteirinha = document.querySelector('#numCarteirinha');
        const rua = document.querySelector('#rua');
        const numero = document.querySelector('#numero');
        const bairro = document.querySelector('#bairro');
        const cidade = document.querySelector('#cidade');
        const estado = document.querySelector('#estado');
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
    formProcess(event) {
        event.preventDefault();
        console.log('formProcess - Submit acionado - metodo cadastrarPaciente()');
    }
    render() {
        this.elementDOM.innerHTML = this.templatePaciente();
        this.eventSubmit();
        const formSubmit = document.querySelector('#form_cadastro_paciente');
        if (formSubmit) {
            formSubmit.addEventListener('submit', this.formProcess.bind(this));
        }
    }
}
