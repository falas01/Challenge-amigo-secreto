// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear un array para almacenar los nombres
let listaAmigos = [];
//Implementa una función para agregar amigos
function agregarAmigo (){
    let input =document.getElementById("amigo");
    let nombre = input.value.trim();

    if(nombre === ""){
        alert("Por favor, ingrese un nombre valido.");
        return;
    }
    listaAmigos.push(nombre);
    actualizarLista();
    input.value = "";
}
//Implementa una función para actualizar la lista de amigos
function actualizarLista() {
    const listaElemntos = document.getElementById("listaAmigos");
    listaElemntos.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaAmigos[i];
        listaElemntos.appendChild(li);
    }
}
//Implementa una función para sortear los amigos
function sortearAmigo(){
    if(listaAmigos.length === 0){
        alert("La lista está vacía. Agregue nombres antes de sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSeleccionado = listaAmigos[indiceAleatorio];

    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSeleccionado}! 🎉`;
    resultadoElemento.appendChild(li);
}