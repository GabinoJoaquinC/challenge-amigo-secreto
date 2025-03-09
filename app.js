// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigoSecreto = []; //Se declara arreglo para guardar lista de amigos

//Funcion para agregar nombre de amigo al arreglo
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    //Verificar que no se introdujo un campo vacio
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

//Funcion para desplegar lista de amigos en pantalla
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

// Funcion para elegir a un amigo de la lista en forma aleatoria
function sortearAmigo() {
    let indice = Math.floor(Math.random()*listaAmigoSecreto.length);
    
    //Verificar que el arreglo no este vacio
    if (listaAmigoSecreto != "") {
        let lista = document.getElementById('resultado');
        let elemento = document.createElement('li');

        lista.innerHTML = '';
        elemento.textContent = "Tu amigo secreto es: " + listaAmigoSecreto[indice];
        lista.appendChild(elemento);
        //Vaciar la lista de amigos para que solo se despliegue el amigo sorteado
        lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
    } else {
        alert("No has agregado amigos a la lista");
    }
}