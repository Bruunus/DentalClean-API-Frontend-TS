export class e {
    constructor(nomeCompleto, dataNascimento, genero, email, convenio, numeroCarteirinha, rua, numero, bairro, cidade, estado) {
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
    get nomeCompleto() {
        return this._nomeCompleto;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    get genero() {
        return this._genero;
    }
    get email() {
        return this._email;
    }
    get convenio() {
        return this._convenio;
    }
    get numeroCarteirinha() {
        return this._numeroCarteirinha;
    }
    get rua() {
        return this._rua;
    }
    get numero() {
        return this._numero;
    }
    get bairro() {
        return this._bairro;
    }
    get cidade() {
        return this._cidade;
    }
    get estado() {
        return this._estado;
    }
}
