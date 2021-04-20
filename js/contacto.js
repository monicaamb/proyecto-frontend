//FORMULARIO CONTACTO CON JAVASCRIPT

//Variables
const formularioContacto = document.querySelector ('#formulario-contacto');
const nombreContacto = document.querySelector('#nombre-contacto');
const apellidoContacto = document.querySelector('#apellido-contacto');
const comentarioContacto = document.querySelector('#comentario-contacto');
const condicionesContacto = document.querySelector('#condiciones-contacto');
const erroresContacto = document.querySelector ('#errores-contacto');
let mensajesErrores = [];

// Funciones
function validar(evento){
    // Evitar que se envie el formulario
    evento.preventDefault();
    // Vacia los mensajesErrores antes de rellenarlo nuevamente
    mensajesErrores = [];

    // VALIDACIONES
        // Nombre es obligatorio
        if (nombreContacto.value.trim().length === 0) {
            mensajesErrores = mensajesErrores.concat ('Debes ingresar tu nombre')
        }
        // Comentario es obligatorio
        if (comentarioContacto.value.trim().length === 0) {
            mensajesErrores = mensajesErrores.concat ('Debes ingresar un comentario')
        }
        // Checked es obligatorio
        if (!condicionesContacto.checked) {
            mensajesErrores = mensajesErrores.concat ('Debes aceptar las condiciones de uso y privacidad')
        }
        // Caracteres válidos para nombre
        if (!/^[a-zA-Z0-9]*$/.exec(nombreContacto.value.trim())) {      //15
            mensajesErrores = mensajesErrores.concat('Nombre no tiene carácteres válidos');
        }
        // Caracteres válidos para apellido
        if (!/^[a-zA-Z0-9]*$/.exec(apellidoContacto.value.trim())) {      //15
            mensajesErrores = mensajesErrores.concat('Apellidos no tiene carácteres válidos');
        }

        // Enviar o mostrar mensajes
        if (mensajesErrores.length === 0) {
            //Enviamos el formulario si no hay errores
            formularioContacto.submit();
        } else {
            erroresContacto.textContent = '';
            mensajesErrores.forEach(function (mensaje) {
                const miLi = document.createElement('li');
                miLi.textContent = mensaje;
                erroresContacto.appendChild(miLi);
            });
        }
    }

// Eventos
formularioContacto.addEventListener('submit', validar);