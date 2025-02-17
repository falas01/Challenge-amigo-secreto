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
