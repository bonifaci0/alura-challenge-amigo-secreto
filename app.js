// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [] // Variable global que contiene la lista de amigos

const ingresarNombre = document.getElementById('amigo');
const botonAgregar = document.getElementById('button-add');
const listaAmigos = document.getElementById('listaAmigos');

function agregarAmigo(){ 
    const nombre = ingresarNombre.value.trim(); // Eliminar espacios en blanco al inicio y al final
        
        if (nombre === '') {
            alert('Por favor ingresa un nombre válido.');
            return;
        }

        if(amigos.includes(nombre)){
            alert('Este nombre ya fue ingresado. Por favor ingresa un nombre diferente.');
            ingresarNombre.value = '';
            return;
        }
        
    amigos.push(nombre);
    console.log(amigos);
    ingresarNombre.value = '';
    actualizarLista();
}

function actualizarLista(){
    listaAmigos.innerHTML = '';

    for (const amigo of amigos){
        const nuevoAmigoElemento = document.createElement('li');
        nuevoAmigoElemento.textContent = amigo;
        listaAmigos.appendChild(nuevoAmigoElemento);
    }
}

function sortearAmigo(){
    if (amigos.length < 2) {
        alert('Debe ingresar al menos dos amigos para poder sortear');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length)
    
    const amigoSecreto = amigos[indiceAleatorio];
    
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.textContent = `El amigo secreto es: ${amigoSecreto}. Disfruten su regalo :-)!`;
}