//Eventos de la pagina contacto y validación del formulario

//Variables
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

//EventListeners

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//Evento del submit

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    //Validar formulario
    const {
        nombre,
        email,
        mensaje
    } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);

        return; //Corta de ejecucion del codigo
    }
    //Envio de formulario correctamente
    mostrarAlerta('El mensaje se ha enviado correctamente');


});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;

    console.log(datos);
}

//Muestra alerta en HTML
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('p')
    alerta.textContent = (mensaje);

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //Desaparezca despues de 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 4000);
}