// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const arrayPar = [];
  array.forEach((arr) => {
    if (arr % 2 === 0) {
      arrayPar.push(arr);
    }
  });
  return arrayPar;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const arrayParQuadrado = [];
  array.forEach((arr) => {
    if (arr % 2 === 0) {
      arrayParQuadrado.push(arr ** 2);
    }
  });
  return arrayParQuadrado;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return array.reduce((a, b) => Math.max(a, b));
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const maiorNumero = num1 > num2 ? num1 : num2;
  const menorNumero = num1 < num2 ? num1 : num2;
  const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0 ? true : false;
  const diferenca = maiorNumero - menorNumero;
  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca,
  };
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
