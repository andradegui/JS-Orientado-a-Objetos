import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Guilherme", 51260754898);

const contaCorrenteGui = new ContaCorrente(cliente1, 1001);
contaCorrenteGui.depositar(500);
contaCorrenteGui.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

console.log(contaPoupanca);
console.log(contaCorrenteGui);