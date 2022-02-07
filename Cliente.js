export class Cliente {    

    get cpf(){
        return this._cpf;
    }

    //constructor? =>  Construtores são onde são passados atributos de uma classe, sendo assim fica um
    //código mais limpo. EX: file: index.js, line 6
    // fica mais fácil de atribuir valores aos atributos de um cliente
    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;        
    }

    autenticar(){
        return true;
    }
}