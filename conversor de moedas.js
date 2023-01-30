//BEM-VINDO OU BEM-VINDA AO CÓDIGO//

var nome = prompt("Qual é o seu nome? ");
alert("Seja bem-vindo(a), " + nome);

var valor = prompt("Qual valor você quer converter para dólares, euros e pesos chilenos?")

var dolar = 5.32 * valor;
var euro = 0.18 * valor;
var peso = 157.79 * valor;

dolar = dolar.toFixed(2);
euro = euro.toFixed(2);
peso = peso.toFixed(2);

alert(nome + ", o valor em dólares é " + dolar + ", em euros é " + euro + " e em pesos chilenos é " + peso);

// Conversor de BITCOIN //

alert("Agora vamos também saber o valor em bitcoin!");
var bitcoin = 0.0000086 * valor;

alert("O valor é " + bitcoin)