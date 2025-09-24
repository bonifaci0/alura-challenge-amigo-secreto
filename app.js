// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [] // Variable global que contiene la lista de amigos

const ingresarNombre = document.getElementById('amigo');
const botonAgregar = document.getElementById('button-add');
const listaAmigos = document.getElementById('listaAmigos');

function agregarAmigo(){ 
    const nombre = ingresarNombre.value;
    amigos.push(nombre);
    console.log(amigos);
    ingresarNombre.value = '';
    actualizarLista();
}

function actualizarLista(){
    listaAmigos.textContext = amigos.join(', ');
}

function sortearAmigo(){
    
}