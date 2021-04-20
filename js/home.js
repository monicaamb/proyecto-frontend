// CARTEL COOKIES CON JAVASCRIPT
let cookies = () => {

// Configuración
const urlsScriptsCookies = ['https://facebook.com'];


// Variables
const cartelCookies = document.querySelector('.cookies');
const aceptarCookies = document.querySelector('.cookies__aceptar');
const rechazarCookies = document.querySelector('.cookies__rechazar');
const nuevosScripts = document.querySelector('#nuevosScripts');


// Funciones
    // Ocultar cookies en HTML
    function ocultarCookie() {
        cartelCookies.remove();
    }

    // Cookies aceptadas
    function aceptar() {
        // Desaparecer cartel cookies
        ocultarCookie();
        // Guardar
        localStorage.setItem('cookie', true);
        ejecutarSiAcepta();
    }

    // Cookies rechazadas
    function rechazar() {
        // Desaparecer cartel cookies
        ocultarCookie();
        // Guardar
        localStorage.setItem('cookie', false);
    }

    function ejecutarSiAcepta() {
        urlsScriptsCookies.forEach((url) => {
            const nuevoScript = document.createElement('script');
            nuevoScript.setAttribute('src', url);
            nuevosScripts.appendChild(nuevoScript);
        });
    }

    // Lógica
    function iniciar() {
        // Comprobar si ya se ha marcado una opción previamente
        if (localStorage.getItem('cookie') !== null) {
            if(localStorage.getItem('cookie') === 'true') {
                // Aceptó
                aceptar();
            } else {
                // No aceptó
                rechazar();
            }
        }
    }

// Eventos
aceptarCookies.addEventListener('click',aceptar, false);
rechazarCookies.addEventListener('click',rechazar, false);

return {
    iniciar: iniciar
}
}
cookies().iniciar();