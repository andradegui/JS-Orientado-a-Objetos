import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Guilherme", 51260754898);
const cliente2 = new Cliente("Julia", 51260754899);

const contaCorrenteGui = new ContaCorrente("001", cliente1);
const contaCorrenteJu = new ContaCorrente("0002", cliente2);

contaCorrenteGui.depositar(20);
contaCorrenteGui.transferir(5, contaCorrenteJu);

const contaPoupanca = new ContaPoupanca(50, cliente1, "001");
console.log(contaPoupanca);