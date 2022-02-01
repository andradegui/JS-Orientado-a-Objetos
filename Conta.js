export class Conta{
    constructor(saldoInicial, cliente, agencia) {        
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

    sacar(valor) {        

        if (this._saldo >= valor) {
            this._saldo -= valor;

            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const vlSacado = this.sacar(valor);
        conta.depositar(vlSacado);
    }
}