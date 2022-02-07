import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Guilherme", 10000, 51260754898);
diretor.cadastrarSenha("321");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "321");

const gerente = new Gerente("Bruno", 1000, 51260754899);
gerente.cadastrarSenha("123");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");

const cliente = new Cliente("Julia", 51260754888, "789");
const clienteLogado = SistemaAutenticacao.login(cliente, "789");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteLogado);



