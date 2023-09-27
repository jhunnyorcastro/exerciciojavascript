function calcularMDC (numero1, numero2) {

  var resto;

   while (resto != 0) {
     

      resto = numero1 % numero2;

      numero1 = numero2;

      numero2 = resto;

  } 

  return numero1;

}
var resultado = calcularMDC(50,10);

console.log("O Mdc dos números acima é: " + resultado);