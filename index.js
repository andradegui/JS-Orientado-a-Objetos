import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Guilherme", 51260754898);

const contaCorrenteGui = new ContaCorrente(cliente1, 1001);

contaCorrenteGui.depositar(20);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
console.log(contaPoupanca);
console.log(contaCorrenteGui);