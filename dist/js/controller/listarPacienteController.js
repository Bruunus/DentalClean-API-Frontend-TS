export class ListarPacienteController {
    constructor() {
        this.listaPaciente = [] || null;
    }
    testeDeExibicao(nomeCompleto, dataNascimento, genero, email, convenio, numeroCarteirinha, rua, numero, bairro, cidade, estado) {
        this._nomeCompleto = nomeCompleto;
        this._dataNascimento = dataNascimento;
        this._genero = genero;
        this._email = email;
        this._convenio = convenio;
        this._numeroCarteirinha = numeroCarteirinha;
        this._rua = rua;
        this._numero = numero;
        this._bairro = bairro;
        this._cidade = cidade;
        this._estado = estado;
    }
    loadDataAPI(url, metodo, corpo) {
    }
    listaPacientes() {
        return this.listaPaciente;
    }
    adiciona(listaPaciente) {
        this.listaPaciente.push(listaPaciente);
    }
    renderList() {
    }
    get nomeCompleto() {
        return this.nomeCompleto;
    }
    get dataNascimento() {
        return this.dataNascimento;
    }
    get genero() {
        return this.genero;
    }
    get email() {
        return this.email;
    }
    get convenio() {
        return this.convenio;
    }
    get numeroCarteirinha() {
        return this.numeroCarteirinha;
    }
    get rua() {
        return this.rua;
    }
    get numero() {
        return this.numero;
    }
    get bairro() {
        return this.bairro;
    }
    get cidade() {
        return this.cidade;
    }
    get estado() {
        return this.estado;
    }
}
