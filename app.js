// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigoSecreto = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo == "") {
        alert("Por favor, inserte un nombre");
    } else {
        listaAmigoSecreto.push(nombreAmigo);
        limpiarcaja();
        actualizarLista(listaAmigoSecreto,'listaAmigos');
    }
    console.log(listaAmigoSecreto);
}

function limpiarcaja() {
    document.querySelector('#amigo').value = '';
}

function actualizarLista(amigos,identificador) {
    
    let lista = document.getElementById(identificador);
    lista.innerHTML = '';
    let i = 0;
  
    for ( i = 0; i < amigos.length; i++) {
      let elemento = document.createElement('li');
      elemento.textContent = amigos[i];
      lista.appendChild(elemento);
    }
  }

function sortearAmigo() {
    let indice = Math.floor(Math.random()*listaAmigoSecreto.length)+1;
    
    if (listaAmigoSecreto != "") {
        let lista = document.getElementById('resultado');
        lista.innerHTML = '';
        let elemento = document.createElement('li');
        elemento.textContent = listaAmigoSecreto[indice];
        lista.appendChild(elemento);
    } else {
        alert("No has agregado amigos a la lista");
    }
}