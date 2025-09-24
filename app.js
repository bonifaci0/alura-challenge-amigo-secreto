let amigos = [] // Variable global que contiene la lista de amigos

const ingresarNombre = document.getElementById('amigo'); // Selecciona el input de ingreso de nombre
const botonAgregar = document.getElementById('button-add'); // Selecciona el botón "Añadir"
const listaAmigos = document.getElementById('listaAmigos'); // Selecciona la lista donde se mostrarán los amigos
const titulo = document.querySelector('.section-title'); // Selecciona el título principal

function agregarAmigo(){ 

    const nombreOriginal = ingresarNombre.value.trim();

    // Validamos que el campo no esté vacío
    if (nombreOriginal === '') {
        mostrarError('Por favor, escribe un nombre antes de añadir.');
        return;
    }

    // Convertimos el nuevo nombre a un formato estándar (todo minúsculas) para poder comparar
    const nombreNormalizado = nombreOriginal.toLowerCase();
    
    // Creamos una copia TEMPORAL del array de amigos, también en minúsculas
    const amigosNormalizados = amigos.map(amigo => amigo.toLowerCase());

    // Comparamos los datos normalizados 
    if (amigosNormalizados.includes(nombreNormalizado)) {
        mostrarError('Este nombre ya ha sido agregado a la lista.');
        ingresarNombre.value = '';
        return;
    }
    
    // Formateamos el nombre para que se vea bien en la lista 
    const nombreFormateado = nombreOriginal.charAt(0).toUpperCase() + nombreOriginal.slice(1).toLowerCase();
    
    restaurarTitulo();

    // Guardamos el nombre bien formateado, no el original
    amigos.push(nombreFormateado);
    ingresarNombre.value = '';
    actualizarLista();
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

function mostrarError(mensaje) {
    titulo.textContent = mensaje;
    titulo.style.color = 'red'; // Cambia el color del texto a rojo

    // El título se restaura después de 2 segundos
    setTimeout(() => {
        restaurarTitulo();
    }, 2000);
}

function restaurarTitulo() {
    titulo.textContent = 'Digite el nombre de sus amigos';
    titulo.style.color = ''; // Revierte el color
}

function actualizarLista(){
    listaAmigos.innerHTML = '';

    // Recorremos el array de amigos y creamos un elemento <li> por cada uno
    for (const amigo of amigos){
        const nuevoAmigoElemento = document.createElement('li');
        nuevoAmigoElemento.textContent = amigo;
        listaAmigos.appendChild(nuevoAmigoElemento);
    }
}