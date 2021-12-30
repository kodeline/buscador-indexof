const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const videojuegos = [
    { nombre: 'Dota 2', precio: 50},
    { nombre: 'Assassins Creed', precio: 20},    
    { nombre: 'Assassins Creed Valhalla', precio: 10},
    { nombre: 'Axie Infinity', precio: 30},
]

const filtrar = () => {

    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase();
    for(let producto of videojuegos){
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf (texto) !== -1){
            resultado.innerHTML += `
                <li>${producto.nombre} | Precio: ${producto.precio} USD </li>
            `
        }
    }

    if(resultado.innerHTML === ''){
        resultado.innerHTML += `
        <li>Videojuego no encontrado..</li>
        `
    }
};

boton.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);