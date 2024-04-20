/*
  Solicite 2 numeros, faça a soma deles e apresente o resultado final ao usuário

  Boas práticas na escrita de variáveis

  - Em inglês
  - Sem espaços ou acentuações especiais no nome
  - Não pode iniciar com número
  - camelCase

  - ponto e virgula servem para finalizar uma expressão de código - e é facultativo

  [] Tipo de dado: Number
  [] Typeof
  [] Operador matemático
  [] Manipulação de dados
    [] type conversion (type casting)
    [] Number() (função construtora para mudar de string para número)
    [] String() (função construtora para converter um dado em uma string)
  [] Ordem de precedência dos operadores 
  [] group operator

*/

alert('Iremos somar 2 números');

let number1 = Number(prompt("Digite o primeiro número:"));
let number2 = Number(prompt("Digite o segundo número:"));
let soma = number1 + number2;

alert(`O resultado da soma entre ${number1} + ${number2} = ${soma}`);
