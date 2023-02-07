var listaFilmes = ['https://upload.wikimedia.org/wikipedia/pt/d/dd/Turbo_%28filme%29_poster.jpg', 'https://br.web.img3.acsta.net/medias/nmedia/18/78/30/52/19784883.jpg', 'https://m.media-amazon.com/images/M/MV5BYjg0OTY5N2UtZDljZS00NDc2LWI1MDAtMDdmN2Q3OTNkMjA1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg', 'https://m.media-amazon.com/images/M/MV5BMjEwNTM2NDE0Nl5BMl5BanBnXkFtZTgwMzMzNTc4MDI@._V1_.jpg', 'https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg', 'https://upload.wikimedia.org/wikipedia/en/a/a1/Resident_evil_ver4.jpg'];

var duna = 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/220px-Dune_%282021_film%29.jpg';

var alien = 'https://www.themoviedb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg';

var nomesFilmes = ['turbo', 'futurama', 'emily in paris', 'kedi', 'matrix', 'resident evil', 'duna', 'alien']

listaFilmes.push(duna, alien);

/* for(var i=0; i < listaFilmes.length; i++) { 
  document.write('<img src=' + listaFilmes[i] + '>'); 
} */

var divzona = document.querySelector('.container_todosFilmes')

function mostraFilmes() {
  var i = 0;
  divzona.innerHTML=''
  while (i < listaFilmes.length) {
    divzona.innerHTML+=('<div>' + '<img src=' + listaFilmes[i] + ">" + '<p>' + nomesFilmes[i] + '</p>' + '</div>')
    i++;
  } 
}

mostraFilmes();

function novosFilmes() {
  var novo = document.querySelector('#filmes').value;
  var titulo = document.querySelector('#nome').value;
  let filme = prompt("Digite o filme ou programa buscado: ").toLowerCase();
  if (novo.endsWith('jpg') == false){
    alert('Apenas aceitamos .jpg')
    }
  else if (nomesFilmes.includes(filme)){
    alert("O filme/programa existe no site! :)")
  } else {
    alert("O filme/programa não existe no site. :(")
    listaFilmes.push(novo);
    nomesFilmes.push(titulo);
    mostraFilmes()
  }
}

function remove() {
  var toRemove = document.getElementById("toRemove").value;

  if (toRemove == "") {
    alert("Não foi possível adicionar o título. Tente novamente.");
  } else {
    for (var i = 0; i < nomesFilmes.length; i++) {
      if (nomesFilmes[i] == toRemove.toLowerCase()) {
        nomesFilmes.splice(i, 1);
        listaFilmes.splice(i, 1);
        break;
      }
    }

    mostraFilmes();
  }
}