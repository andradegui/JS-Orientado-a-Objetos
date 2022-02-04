//Classe abstrata
export class Conta{

    constructor(saldoInicial, cliente, agencia) {        
        
        if(this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto tipo conta diretamente, pois essa é uma classe abstrata");
        }
        
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

        
    }

    //isso faz com que dê pra acessar uma propriedade privada
    set cliente(novoValor) {
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    // o _ significa que o atributo é privado
    _saldo = 0;

    get saldo(){
        return this._saldo;
    }

    //Metódo Abstrato
    sacar(valor) {        

        throw new Error("O método sacar da conta.js é abstrato");
    }

    _sacar(valor, taxa){       

        const vlSacado = taxa * valor;

        if (this._saldo >= vlSacado) {
            this._saldo -= vlSacado;

            return vlSacado;
        }

        return 0; //caso nao tiver saldo suficiente para ser sacado
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const vlSacado = this.sacar(valor);
        conta.depositar(vlSacado);
    }

    teste(){        
        console.log("teste na classe conta ");
    }
}