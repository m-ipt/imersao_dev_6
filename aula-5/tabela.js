var scout = {
    nome:'Scout',
    kills: 0,
    deaths: 0,
    assists: 0,
    pontos: 0
  };
  
  var soldier = {
    nome:'Soldier',
    kills: 0,
    deaths: 0,
    assists: 0,
    pontos: 0
  };
  
  var pyro = {
    nome:'Pyro',
    kills: 0,
    deaths: 0,
    assists: 0,
    pontos: 0
  };
  
  var listaDeJogadores = [scout, soldier, pyro];
  
  var elementoTabela = document.getElementById('tabelaClasses');
  
  function exibirNaTela() {
    var resultado = "";
    for (var i = 0; i < listaDeJogadores.length; i++) {
      resultado += `
    <tr>
            <td>${listaDeJogadores[i].nome}</td>
            <td>${listaDeJogadores[i].kills}</td>
            <td>${listaDeJogadores[i].deaths}</td>
            <td>${listaDeJogadores[i].assists}</td>
            <td>${listaDeJogadores[i].pontos}</td>
            <td><button onClick="adicionarKills(${i})">Kills</button></td>
            <td><button onClick="adicionarDeaths(${i})">Deaths</button></td>
            <td><button onClick="adicionarAssists(${i})">Assistências</button></td>
            <td><button onClick="zerarTudo(${i})">Recomeçar</button></td>
     </tr>
          
       `;
    }
    elementoTabela.innerHTML = resultado;
  };
  
  function adicionarKills(jogador) {
    listaDeJogadores[jogador].kills++;
    listaDeJogadores[jogador].pontos = listaDeJogadores[jogador].pontos + 3;
    exibirNaTela();
  };
  
  function adicionarDeaths(jogador) {
    listaDeJogadores[jogador].deaths++;
    exibirNaTela();
  };
  
  function adicionarAssists(jogador) {
    listaDeJogadores[jogador].assists++;
    listaDeJogadores[jogador].pontos++;
    exibirNaTela();
  };
  
  function zerarTudo(jogador) {
    listaDeJogadores[jogador].kills = 0;
    listaDeJogadores[jogador].deaths = 0;
    listaDeJogadores[jogador].assists = 0;
    listaDeJogadores[jogador].pontos = 0;
    exibirNaTela();
  }
  
  function criarJogador() {
    //verificar se player ja existe ou não
    var nomeNovaClasse = document.getElementById("personagem").value;
    listaDeJogadores.push({
      nome: nomeNovaClasse,
      kills: 0,
      deaths: 0,
      assists: 0,
      pontos: 0
    });
    document.getElementById("personagem").value = "";
    exibirNaTela();
  }
  
  exibirNaTela();