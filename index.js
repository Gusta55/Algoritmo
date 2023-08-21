/*
const bool1 = true //bool1 true
const bool2 = false //bool2 false
const bool3 = !bool2 //bool3 porque tem um not na frente true

let resultado = bool1 && bool2// comparando se bool1 e bool2 são true
console.log("a. ", resultado)//printa false porque bool2 é false

resultado = bool1 && bool2 && bool3 //comparando as três variaveis se são true
console.log("b. ", resultado) //vai printar false porque bool2 é false

resultado = !resultado && (bool1 || bool2) // vai comparar se uma ou outra é true 
console.log("c. ", resultado)// vai printar true porque bool1 é true

console.log("d. ", typeof resultado) //vai printar o tipo da variavel, tipo booleana

//Exercicio 2

let primeiroNumero = prompt("Digite um numero!")//Pede para o usuario retornar alguma coisa
let segundoNumero = prompt("Digite outro numero!")//Pede para o usuario retornar alguma coisa

const soma = primeiroNumero + segundoNumero //vai concatenar as duas variaveis porque prompt retorna no tipo string

console.log(soma)//vai aparecer primeiroNumero e segundoNumero um no lado do outro
//Exercicio 3
const soma = Number(primeiroNumero) + Number(segundoNumero) //converter as variaveis para Number()
*/

//Exercicio 4
/*
const suaIdade = prompt("Digite sua idade: ");
const idadeDoAmigo = prompt("Digite a idade do seu amigo: ");
const diferencaDeIdade = suaIdade - idadeDoAmigo;
console.log("Sua idade é maior que do seu amigo? ", suaIdade > idadeDoAmigo);
console.log("A Diferença de idade é de ", diferencaDeIdade);
*/

/*
//Exercicio 5
const par = prompt("Digite um número par");
const restoDaDivisão = par % 2;
console.log("O resto de ", par, " por 2 é ", restoDaDivisão)
//Se o usuario colocar um numero par printa o valor 0
//Se o usuario colocar um numero impar printa o valor 1
*/

/*
//Exercicio 6

const idade = prompt("Qual sua idade? ");
const idadeEmMeses = idade * 12;
const idadeEmDias = idadeEmMeses * 30;
const idadeEmHoras = idadeEmDias * 24;
console.log("Sua idade é ", idade, "em anos");
console.log("Sua idade é ", idadeEmMeses, "em meses");
console.log("Sua idade é ", idadeEmDias, "em dias");
console.log("Sua idade é ", idadeEmHoras, "em horas");
*/
/*
//Exercicio 7
const numero1 = prompt("Digite um umero: ");
const numero2 = prompt("Digite outro numero: ");
const num1DivNum2 = numero1 % numero2;
const num2DivNum1 = numero2 % numero1;
console.log("O primeiro numero é maior que segundo? ", numero1 > numero2);
console.log("O primeiro numero é igual ao segundo? ", numero1 == numero2);
console.log("O primeiro numero é divisível pelo segundo? ", num1DivNum2 == 0)
console.log("O segundo numero é divisível pelo primeiro? ", num2DivNum1 == 0);
*/
//Conversor de temperatura

/*
const kelvin = prompt("Digite a temperatura em Kelvin: Se for em outro formato digite 0");
const fahrenheit = prompt("Digite a temperatura em fahrenheit: se for emoutro formato digite 0");
const graus_celsius = prompt("Digite a temperatura em Celsius: se for em outro formato digite 0.");

const kelvin_convertido = (fahrenheit - 32)*(5/9) + 273.15;
const fahrenheit_convertido = graus_celsius*(9/5) + 32;

console.log("Temperatura em Kelvin: ", kelvin_convertido);
console.log("Temperatura em Celsius: ", graus_celsius);
console.log("Temperatura em Fahrenheit ", fahrenheit_convertido)
*/

/*
//Quilowatt-hora
const usuario = prompt("Insira quantos quilowatts foi consumido");
const quilowatt_hora = 0.05;
const valorParaPagar = usuario * quilowatt_hora;
const valorComDesconto = valorParaPagar - (valorParaPagar * 15 / 100);
console.log("O valor ficou ", valorParaPagar);
console.log("Valor com 15% de desconto ", valorComDesconto)
*/

//Conversor de medidas

const libra = 1;
const lbParaKg = libra / 0.454; //lb para kg
console.log("A conversão de lb para kg é:", lbParaKg);//resultado de 20lb para 44.052863
const onça = 10.5;
const ozParaKg = onça / 35.274; //oz para kg
console.log("A conversão de oz para kg é: ", ozParaKg);//resultado de 10.5 oz para 0.2976696
const milha = 100;
const miParaM = milha * 1609;//milha para metro
console.log("a conversão de milhas para metros é: ", miParaM);//resultado de 100mi para 160900
const ft = 50;
const ftParaM = ft / 3.281;//pés para metro
console.log("A conversão de pés para metros é: ", ftParaM);//resultado de 50ft para 15.239256
const gal = 103.56;
const galParaL = gal * 3.785;//galões para litro
console.log("A conversão de galões para litro é: ", galParaL);//resultado de 103.56gal para 391.9746
const xicara = prompt("Digite quantas xicaras: ");
const xicParaLitro = xicara * 0.24;//xicara para litros
console.log("A convesão de xicaras para litros é: ", xicParaLitro);//resultado de 450xic para 108


