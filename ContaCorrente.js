import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{

    static nContas = 0;    

    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.nContas += 1;
    }

    //sobreescrevendo o comportamentod de sacar
    sacar(valor) {   
        
        let taxa = 1.3;

        return this._sacar(valor, taxa);
    }

    
}
