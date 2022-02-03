import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Guilherme", 51260754898);

const contaCorrenteGui = new ContaCorrente(cliente1, 1001);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

                        //aqui é onde passo o atributo do construtor        
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(200);
contaSalario.sacar(10);

console.log(contaSalario);

