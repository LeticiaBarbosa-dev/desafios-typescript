// // Como podemos melhorar o esse código usando TS? 

type Pessoa = {
    nome: string,
    idade: number,
    profissao: string,
}

function criarPessoa(pessoa: Pessoa) {
    return `nome: ${pessoa.nome}, idade: ${pessoa.idade}, profissão: ${pessoa.profissao}.`;
}

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

const pessoa1 = criarPessoa({nome: "maria", idade: 29, profissao: "atriz"});
console.log(pessoa1);

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

const pessoa2 = criarPessoa({nome: "roberto", idade: 19, profissao: "Padeiro"});
console.log(pessoa2);


// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

const pessoa3 = criarPessoa({nome: "laura", idade: 32, profissao: "Atriz"});
console.log(pessoa3);

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

const pessoa4 = criarPessoa({nome: "carlos", idade: 19, profissao: "padeiro"});
console.log(pessoa4);