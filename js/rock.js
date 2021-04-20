// CÓDIGO APARTADO CANCIONES ROCK CON VUE.JS

// Almacenar información en LocalStorage
const miLocalStorage = window.localStorage;

// Variables
const URL_API_1 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20ROCK%201?&view=Grid%20view';
const URL_API_2 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20ROCK%202?&view=Grid%20view'
const URL_API_3 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20ROCK%203?&view=Grid%20view'
const URL_API_ADD_1 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20ROCK%201';
const URL_API_ADD_2 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20ROCK%202';
const URL_API_ADD_3 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20ROCK%203';
const AUTHORIZATION = 'Bearer keyC6SNxSpXpc852b';

// VUE COMENTAR Y VER COMENTARIOS
new Vue({
    el: '#rock',
    data: {
        // Abrir y cerrar modales
            // HIP-HOP-1
            showModalComentarRock1: false,
            showModalComentariosRock1: false,
            // Introducir nombre y posible apellido
            nombresRock1: [],
            apellidosRock1: [],
            nuevoNombreRock1: '',
            nuevoApellidoRock1: '',
            // Introducir comentarios en Ver Comentarios
            comentariosRock1: [],
            nuevoComentarioRock1: '',

            // HIP-HOP-2
            showModalComentarRock2: false,
            showModalComentariosRock2: false,
            // Introducir nombre y posible apellido
            nombresRock2: [],
            apellidosRock2: [],
            nuevoNombreRock2: '',
            nuevoApellidoRock2: '',
            // Introducir comentarios en Ver Comentarios
            comentariosRock2: [],
            nuevoComentarioRock2: '',

            // HIP-HOP-3
            showModalComentarRock3: false,
            showModalComentariosRock3: false,
            // Introducir nombre y posible apellido
            nombresRock3: [],
            apellidosRock3: [],
            nuevoNombreRock3: '',
            nuevoApellidoRock3: '',
            // Introducir comentarios en Ver Comentarios
            comentariosRock3: [],
            nuevoComentarioRock3: '',

        // Datos guardados en AIRTABLE
        infosRock1: [],
        infosRock2: [],
        infosRock3: [],

        // Validaciion
        botonPulsadoNuevo: false,
        },
    mounted: function () {
        this.cargarDeLocal();
        this.obtenerDatosRock1();
        this.obtenerDatosRock2();
        this.obtenerDatosRock3();
    },
    computed: {
        // Comprobación de que el nombre y el comentario no están vacíos
        validoNuevoNombreRock1: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoNombreRock1 !== ''
        },
        validoNuevoComentarioRock1: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoComentarioRock1 !== ''
        },
        validoNuevoNombreRock2: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoNombreRock2 !== ''
        },
        validoNuevoComentarioRock2: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoComentarioRock2 !== ''
        },
        validoNuevoNombreRock3: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoNombreRock3 !== ''
        },
        validoNuevoComentarioRock3: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoComentarioRock3 !== ''
        }
    },
    methods: {
        // AÑADIR COMENTARIOS
        anyadirComentarioRock1: function () {
            // ROCK 1
            // Anyadimos a nuestra lista de comentarios el contenido del input
            this.infosRock1.push({
                nombre: this.nuevoNombreRock1,
                apellido: this.nuevoApellidoRock1,
                comentario: this.nuevoComentarioRock1,
            });
            // Vaciamos el input para que se limpie el texto escrito
            this.nuevoNombreRock1 = '';
            this.nuevoApellidoRock1 = '';
            this.nuevoComentarioRock1 = '';
            // Guardar en local
            this.guardarEnLocal();
        },
        anyadirComentarioRock2: function () {
            // ROCK 2
            this.comentariosRock2.push({
                nombre: this.nuevoNombreRock2,
                apellido: this.nuevoApellidoRock2,
                comentario: this.nuevoComentarioRock2
            });
            this.nuevoNombreRock2 = '';
            this.nuevoApellidoRock2 = '';
            this.nuevoComentarioRock2 = '';
            // Guardar en Local
            this.guardarEnLocal();
        },
        anyadirComentarioRock3: function () {
            // ROCK 3
            this.comentariosRock3.push({
                nombre: this.nuevoNombreRock3,
                apellido: this.nuevoApellidoRock3,
                comentario: this.nuevoComentarioRock3
            });
            this.nuevoNombreRock3 = '';
            this.nuevoApellidoRock3 = '';
            this.nuevoComentarioRock3 = '';
            //Guardar en local
            this.guardarEnLocal();
        },
        // LOCAL STORAGE
        guardarEnLocal: function () {
            // ROCK 1
            miLocalStorage.setItem('aportaciones-rock-1', JSON.stringify(this.comentariosRock1));
            // ROCK 2
            miLocalStorage.setItem('aportaciones-rock-2', JSON.stringify(this.comentariosRock2));
            // ROCK 3
            miLocalStorage.setItem('aportaciones-rock-3', JSON.stringify(this.comentariosRock3));
        },
        cargarDeLocal: function () {
            if (miLocalStorage.getItem('aportaciones-rock-1') !== null) {
                // ROCK 1
                this.comentariosRock1 = JSON.parse(miLocalStorage.getItem('aportaciones-rock-1'));
            }
            if (miLocalStorage.getItem('aportaciones-rock-2') !== null) {
                // ROCK 2
                this.comentariosRock2 = JSON.parse(miLocalStorage.getItem('aportaciones-rock-2'));
            }
            if (miLocalStorage.getItem('aportaciones-rock-3') !== null) {
                // ROCK 3
                this.comentariosRock3 = JSON.parse(miLocalStorage.getItem('aportaciones-rock-3'));
            }
        },
        // VINCULAR CON AIRTABLE
        obtenerDatosRock1: function () {
            fetch(URL_API_1, {
                headers: {
                    'Authorization': AUTHORIZATION
                }
            })
                .then((response) => response.json())
                .then((json) => this.infosRock1 = json.records)
        },
        obtenerDatosRock2: function () {
            fetch(URL_API_2, {
                headers: {
                    'Authorization': AUTHORIZATION
                }
            })
                .then((response) => response.json())
                .then((json) => this.infosRock2 = json.records)
        },
        obtenerDatosRock3: function () {
            fetch(URL_API_3, {
                headers: {
                    'Authorization': AUTHORIZATION
                }
            })
                .then((response) => response.json())
                .then((json) => this.infosRock3 = json.records)
        },
        crearComentarioRock1: function () {
            fetch(URL_API_ADD_1, {
                headers: {
                    'Authorization': AUTHORIZATION,
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    "records": [
                        {
                            "fields": {
                                "Nombre": this.nuevoNombreRock1,
                                "Apellidos": this.nuevoApellidoRock1,
                                "Comentario": this.nuevoComentarioRock1
                            }
                        }
                    ]
                })
            })
                .then(() => this.obtenerDatosRock1())
                .then(() => this.anyadirComentarioRock1())
        },
        crearComentarioRock2: function () {
            fetch(URL_API_ADD_2, {
                headers: {
                    'Authorization': AUTHORIZATION,
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    "records": [
                        {
                            "fields": {
                                "Nombre": this.nuevoNombreRock2,
                                "Apellidos": this.nuevoApellidoRock2,
                                "Comentario": this.nuevoComentarioRock2
                            }
                        }
                    ]
                })
            })
                .then(() => this.obtenerDatosRock2())
                .then(() => this.anyadirComentarioRock2())
        },
        crearComentarioRock3: function () {
            fetch(URL_API_ADD_3, {
                headers: {
                    'Authorization': AUTHORIZATION,
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    "records": [
                        {
                            "fields": {
                                "Nombre": this.nuevoNombreRock3,
                                "Apellidos": this.nuevoApellidoRock3,
                                "Comentario": this.nuevoComentarioRock3
                            }
                        }
                    ]
                })
            })
                .then(() => this.obtenerDatosRock3())
                .then(() => this.anyadirComentarioRock3())
        },
        logicaCrearComentario: function () {
            // Creamos comentario si se cumplen los requisitos
            if (this.validoNuevoNombreRock1 && this.validoNuevoComentarioRock1) {
                this.crearComentarioRock1()
                if (this.validoNuevoNombreRock1 && this.validoNuevoComentarioRock1 && this.botonPulsadoNuevo) {
                    alert('Mensaje enviado con éxito');
                }
            }
            if (this.validoNuevoNombreRock2 && this.validoNuevoComentarioRock2) {
                this.crearComentarioRock2()
                if (this.validoNuevoNombreRock2 && this.validoNuevoComentarioRock2 && this.botonPulsadoNuevo) {
                    alert('Mensaje enviado con éxito');
                }
            }
            if (this.validoNuevoNombreRock3 && this.validoNuevoComentarioRock3) {
                this.crearComentarioRock3()
                if (this.validoNuevoNombreRock3 && this.validoNuevoComentarioRock3 && this.botonPulsadoNuevo) {
                    alert('Mensaje enviado con éxito');
                }
           }
            this.botonPulsadoNuevo = true
        }
    }
})