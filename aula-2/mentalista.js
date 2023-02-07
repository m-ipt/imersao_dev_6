var numeroSecreto = parseInt(Math.random() * 301);
var chances = 1;

while(chute != numeroSecreto) {
    var chute = prompt('Digite um número entre 0 e 300');

    //se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert('Acertou!')
        alert('Você acertou com ' + chances + ' tentativa(s).');
        break
    } else if (chute > numeroSecreto) {
        alert('Errou... o número secreto é menor')
        alert('Você já realizou ' + chances + ' tentativa(s).');
        chances++
        if (chances == 11) {
          break
        }
    } else if (chute < numeroSecreto) {
        alert('Errou... o número pensado é maior')
        alert('Você já realizou ' + chances + ' tentativa(s).');
        chances++
        if (chances == 11) {
          break
        }
    }
}

console.log('O número pensado foi ' + numeroSecreto + '.')
alert('O número pensado foi ' + numeroSecreto + '.')