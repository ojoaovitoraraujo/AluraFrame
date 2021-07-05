class Negociacao{
    
    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    get data(){
        return new Date(this._data.getTime())
    }
    
    get quantidade(){
        return this._quantidade
    }
    
    get valor(){
        return this._valor
    }
    
    get volume(){
        return this._quantidade * this._valor;
    }
}

class Pessoa{
    
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    getNome(){
        return this._nome;
    }
    
    getSobrenome(){
        return this._sobrenome;
    }

    getNomeCompleto(){
        return this._nome + ' ' + this._sobrenome;
    }
}