//Declaración de constantes a utilizar para la logica
const header = document.querySelector('#header');
const contenedor = document.querySelector('#contenedor');
const carrito = document.querySelector('#carrito');
const body = document.querySelector('body');
const listaServicios = document.querySelector('#contenedor');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
const pasarPag = document.querySelector('#otra-pag');
const total_compra = document.querySelector('#total');
let articulosCarrito = [];
//Efecto de cambio de header
window.addEventListener("scroll", function(){
    if(contenedor.getBoundingClientRect().top<10){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
});
// Listeners
cargarEventListeners();
function cargarEventListeners() {
    // Dispara cuando se presiona "Agregar Carrito"
    listaServicios.addEventListener('click', agregarServicio);
    // Cuando se elimina un Servicio del carrito
    carrito.addEventListener('click', eliminarServicio);
    // Al Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    //Pasar Pagina
    pasarPag.addEventListener('click', otraPagina);
    //Muestra el total a pagar
    total_compra.addEventListener ('click', suma);
}
// Funciones
//Constante de botones Detalles
const  bt1 = document.querySelector ('#bt1'), bt2 = document.querySelector ('#bt2'), 
bt3 = document.querySelector ('#bt3'), bt4 = document.querySelector ('#bt4'), 
bt5 = document.querySelector ('#bt5'), bt6 = document.querySelector ('#bt6'),
bt7 = document.querySelector ('#bt7'), bt8 = document.querySelector ('#bt8'), 
bt9 = document.querySelector ('#bt9'), bt10 = document.querySelector ('#bt10'), 
bt11 = document.querySelector ('#bt11'), bt12 = document.querySelector ('#bt12'),
bt13 = document.querySelector ('#bt13'), bt14 = document.querySelector ('#bt14'),
bt15 = document.querySelector ('#bt15'), bt16 = document.querySelector ('#bt16'), 
bt17 = document.querySelector ('#bt17'), bt18 = document.querySelector ('#bt18'),
bt19 = document.querySelector ('#bt19'), bt20 = document.querySelector ('#bt20'),
bt21 = document.querySelector ('#bt21');
//Paso a vista de página Detalles de cada respectivo servicio
document.addEventListener('click', e => {
    if (e.target === bt1) {
        window.location.href = 'catalogo/destiny2_trials.html';
    } else if (e.target === bt2) {
        window.location.href = 'catalogo/destiny2_estandarte.html';
    } else if (e.target === bt3) {
        window.location.href = 'catalogo/destiny2_oryx.html';
    } else if (e.target === bt4) {
        window.location.href = 'catalogo/destiny2_discipulo.html';
    } else if (e.target === bt5) {
        window.location.href = 'catalogo/destiny2_camaracristal.html';
    } else if (e.target === bt6) {
        window.location.href = 'catalogo/destiny2_cripta.html';
    } else if (e.target === bt7) {
        window.location.href = 'catalogo/destiny2_jardin.html';
    } else if (e.target === bt8) {
        window.location.href = 'catalogo/destiny2_ultimodeseo.html';
    } else if (e.target === bt9) {
        window.location.href = 'catalogo/destiny2_dualidad.html';
    } else if (e.target === bt10) {
        window.location.href = 'catalogo/destiny2_garras.html';
    } else if (e.target === bt11) {
        window.location.href = 'catalogo/destiny2_profecia.html';
    } else if (e.target === bt12) {
        window.location.href = 'catalogo/destiny2_foso.html';
    } else if (e.target === bt13) {
        window.location.href = 'catalogo/destiny2_trono.html';
    } else if (e.target === bt14) {
        window.location.href = 'catalogo/destiny2_temporadas.html';
    } else if (e.target === bt15) {
        window.location.href = 'catalogo/apex_rankeds_normal.html';
    } else if (e.target === bt16) {
        window.location.href = 'catalogo/apex_rankeds_arenas.html';
    } else if (e.target === bt17) {
        window.location.href = 'catalogo/gears5_escalada.html';
    } else if (e.target === bt18) {
        window.location.href = 'catalogo/gears5_ejecucion.html';
    } else if (e.target === bt19) {
        window.location.href = 'catalogo/gears5_control.html';
    } else if (e.target === bt20) {
        window.location.href = 'catalogo/gears5_horda.html';
    } else if (e.target === bt21) {
        window.location.href = 'catalogo/gears5_escape.html';
    }
})
// Función que añade el servicio al carrito
function agregarServicio(e) {
    e.preventDefault();
    // Delegation para agregar-carrito
    if(e.target.classList.contains('agregar-carrito')) {
    const servicio = e.target.parentElement.parentElement;
    // Enviamos el Servicio seleccionado para tomar sus datos
    leerDatosServicio(servicio);
    }
}
// Lee los datos del curso
function leerDatosServicio(servicio) {
    const infoServicio = {
        titulo: servicio.querySelector('p').textContent,
        precio: servicio.querySelector('.span').textContent,
        id: servicio.querySelector('a').getAttribute('data-id'), 
        cantidad: 1,
    }
    if (articulosCarrito.some(servicio => servicio.id === infoServicio.id)) {
        const servicios = articulosCarrito.map (servicio => {
            if (servicio.id === infoServicio.id ) {
                servicio.cantidad++;
                return servicio;
            } else {
                return servicio;
            }
        })
        articulosCarrito = [...servicios];
        }  else {
        articulosCarrito = [...articulosCarrito, infoServicio];
        }
    carritoHTML();
}
// Muestra el servicio seleccionado en el Carrito
function carritoHTML() {
    vaciarCarrito();
    articulosCarrito.forEach(servicio => {
        const row = document.createElement('tr');
        row.innerHTML =
        `
        <td>${servicio.titulo}</td>
        <td>${servicio.precio}</td>
        <td>${servicio.cantidad}</td>
        <td>
            <a href="#" class="borrar-servicio" data-id="${servicio.id}">X</a>
        </td>
        `;
        contenedorCarrito.appendChild(row);
    });
}
// Elimina el servicio del carrito en el DOM
function eliminarServicio(e) {
    e.preventDefault();
    if(e.target.classList.contains('borrar-servicio')) {
        e.target.parentElement.parentElement.remove();
        const servicioId = e.target.getAttribute ('data-id')
        // Eliminar del arreglo del carrito
        articulosCarrito = articulosCarrito.filter (servicio => servicio.id !== servicioId);
        carritoHTML();
    }
}
// Elimina los servicios del carrito en el DOM
function vaciarCarrito() {
    // forma rapida (recomendada)
    while(contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
//funcion que realiza la suma
function suma () {
    const iva = 1.08; 
    const nPrecio = Object.values(articulosCarrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio * iva, 0)
    document.querySelector("#resultado").innerHTML= nPrecio;
}
//Pasar a otra página con despues de cierto intervalo de tiempo 
function otraPagina() {
    setTimeout(function (){
        window.location.href = 'pago.html';
    }, 1000);
}