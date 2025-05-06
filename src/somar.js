// ## 8. Função de Soma com Erros **(1 ponto)**

// **Enunciado:**
// A função abaixo tenta somar dois números, mas está sem nenhuma validação. Encontre e corrija os problemas para que a função funcione corretamente. Considere que o **parâmetro b pode ser opcional** e que, se não for fornecido, **deve ser considerado como 0**. Além disso, **a função não deve retornar valores de tipos inesperados (como NaN ou undefined)**, e deve tratar casos em que os **parâmetros não são números**, retornando a mensagem "Parâmetro inválido".

function somar(a, b = 0) {
  const numA = Number(a);
  const numB = Number(b);

  if (
    a === null || b === null ||
    a === undefined || b === undefined ||
    isNaN(numA) || isNaN(numB)
  ) {
    return "Parâmetro inválido";
  }

  return numA + numB;
}

module.exports = { somar };

