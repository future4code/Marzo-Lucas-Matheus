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
function retornaNPrimeirosPares(n) {
  const arr = [];
  for (let i = 0; n > arr.length; i += 2) {
    arr.push(i);
  }
  return arr;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC) {
    return "Equilátero";
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const novoArray = array.sort((a, b) => a - b);
  return [novoArray[novoArray.length - 2], novoArray[1]];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${
    filme.ano
  }, dirigido por ${filme.diretor} e estrelado por${filme.atores.map(
    (ator) => ` ${ator}`
  )}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  return {
    nome: "ANÔNIMO",
    idade: pessoa.idade,
    email: pessoa.email,
    endereco: pessoa.endereco,
  };
}

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
