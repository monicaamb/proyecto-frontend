// CÓDIGO APARTADO CANCIONES POP-ROCK CON VUE.JS

// Almacenar información en LocalStorage
const miLocalStorage = window.localStorage;

// Variables
const URL_API_1 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20POP%20ROCK%201?&view=Grid%20view';
const URL_API_2 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20POP%20ROCK%202?&view=Grid%20view'
const URL_API_3 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20POP%20ROCK%203?&view=Grid%20view'
const URL_API_ADD_1 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20POP%20ROCK%201';
const URL_API_ADD_2 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20POP%20ROCK%202';
const URL_API_ADD_3 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20POP%20ROCK%203';
const AUTHORIZATION = 'Bearer keyC6SNxSpXpc852b';

// VUE COMENTAR Y VER COMENTARIOS
new Vue({
    el: '#poprock',
    data: {
        // Abrir y cerrar modales
            // POP-ROCK-1
            showModalComentarPopRock1: false,
            showModalComentariosPopRock1: false,
            // Introducir nombre y posible apellido
            nombresPopRock1: [],
            apellidosPopRock1: [],
            nuevoNombrePopRock1: '',
            nuevoApellidoPopRock1: '',
            // Introducir comentarios en Ver Comentarios
            comentariosPopRock1: [],
            nuevoComentarioPopRock1: '',

            // POP-ROCK-2
            showModalComentarPopRock2: false,
            showModalComentariosPopRock2: false,
            // Introducir nombre y posible apellido
            nombresPopRock2: [],
            apellidosPopRock2: [],
            nuevoNombrePopRock2: '',
            nuevoApellidoPopRock2: '',
            // Introducir comentarios en Ver Comentarios
            comentariosPopRock2: [],
            nuevoComentarioPopRock2: '',

            // POP-ROCK-3
            showModalComentarPopRock3: false,
            showModalComentariosPopRock3: false,
            // Introducir nombre y posible apellido
            nombresPopRock3: [],
            apellidosPopRock3: [],
            nuevoNombrePopRock3: '',
            nuevoApellidoPopRock3: '',
            // Introducir comentarios en Ver Comentarios
            comentariosPopRock3: [],
            nuevoComentarioPopRock3: '',

        // Datos guardados en AIRTABLE
        infosPopRock1: [],
        infosPopRock2: [],
        infosPopRock3: [],

        // Validaciion
        botonPulsadoNuevo: false,
        },
    mounted: function () {
        this.cargarDeLocal();
        this.obtenerDatosPopRock1();
        this.obtenerDatosPopRock2();
        this.obtenerDatosPopRock3();
    },
    computed: {
        // Comprobación de que el nombre y el comentario no están vacíos
        validoNuevoNombrePopRock1: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoNombrePopRock1 !== ''
        },
        validoNuevoComentarioPopRock1: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoComentarioPopRock1 !== ''
        },
        validoNuevoNombrePopRock2: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoNombrePopRock2 !== ''
        },
        validoNuevoComentarioPopRock2: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoComentarioPopRock2 !== ''
        },
        validoNuevoNombrePopRock3: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoNombrePopRock3 !== ''
        },
        validoNuevoComentarioPopRock3: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoComentarioPopRock3 !== ''
        }
    },
    methods: {
        // AÑADIR COMENTARIOS
        anyadirComentarioPopRock1: function () {
            // POP-ROCK 1
            // Anyadimos a nuestra lista de comentarios el contenido del input
            this.infosPopRock1.push({
                nombre: this.nuevoNombrePopRock1,
                apellido: this.nuevoApellidoPopRock1,
                comentario: this.nuevoComentarioPopRock1,
            });
            // Vaciamos el input para que se limpie el texto escrito
            this.nuevoNombrePopRock1 = '';
            this.nuevoApellidoPopRock1 = '';
            this.nuevoComentarioPopRock1 = '';
            // Guardar en local
            this.guardarEnLocal();
        },
        anyadirComentarioPopRock2: function () {
            // POP-ROCK 2
            this.comentariosPopRock2.push({
                nombre: this.nuevoNombrePopRock2,
                apellido: this.nuevoApellidoPopRock2,
                comentario: this.nuevoComentarioPopRock2
            });
            this.nuevoNombrePopRock2 = '';
            this.nuevoApellidoPopRock2 = '';
            this.nuevoComentarioPopRock2 = '';
            // Guardar en local
            this.guardarEnLocal();
        },
        anyadirComentarioPopRock3: function () {
            // POP-ROCK 3
            this.comentariosPopRock3.push({
                nombre: this.nuevoNombrePopRock3,
                apellido: this.nuevoApellidoPopRock3,
                comentario: this.nuevoComentarioPopRock3
            });
            this.nuevoNombrePopRock3 = '';
            this.nuevoApellidoPopRock3 = '';
            this.nuevoComentarioPopRock3 = '';
            // Guardar en local
            this.guardarEnLocal();
        },
        // LOCAL STORAGE
        guardarEnLocal: function () {
            //ROCK 1
            miLocalStorage.setItem('aportaciones-pop-rock-1', JSON.stringify(this.comentariosPopRock1));
            //ROCK 2
            miLocalStorage.setItem('aportaciones-pop-rock-2', JSON.stringify(this.comentariosPopRock2));
            //ROCK 3
            miLocalStorage.setItem('aportaciones-pop-rock-3', JSON.stringify(this.comentariosPopRock3));
        },
        cargarDeLocal: function () {
            if (miLocalStorage.getItem('aportaciones-pop-rock-1') !== null) {
                // ROCK 1
                this.comentariosPopRock1 = JSON.parse(miLocalStorage.getItem('aportaciones-pop-rock-1'));
            }
            if (miLocalStorage.getItem('aportaciones-pop-rock-2') !== null) {
                // ROCK 2
                this.comentariosPopRock2 = JSON.parse(miLocalStorage.getItem('aportaciones-pop-rock-2'));
            }
            if (miLocalStorage.getItem('aportaciones-pop-rock-3') !== null) {
                // ROCK 3
                this.comentariosPopRock3 = JSON.parse(miLocalStorage.getItem('aportaciones-pop-rock-3'));
            }
        },
        // VINCULAR CON AIRTABLE
        obtenerDatosPopRock1: function () {
            fetch(URL_API_1, {
                headers: {
                    'Authorization': AUTHORIZATION
                }
            })
                .then((response) => response.json())
                .then((json) => this.infosPopRock1 = json.records)
        },
        obtenerDatosPopRock2: function () {
            fetch(URL_API_2, {
                headers: {
                    'Authorization': AUTHORIZATION
                }
            })
                .then((response) => response.json())
                .then((json) => this.infosPopRock2 = json.records)
        },
        obtenerDatosPopRock3: function () {
            fetch(URL_API_3, {
                headers: {
                    'Authorization': AUTHORIZATION
                }
            })
                .then((response) => response.json())
                .then((json) => this.infosPopRock3 = json.records)
        },
        crearComentarioPopRock1: function () {
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
                                "Nombre": this.nuevoNombrePopRock1,
                                "Apellidos": this.nuevoApellidoPopRock1,
                                "Comentario": this.nuevoComentarioPopRock1
                            }
                        }
                    ]
                })
            })
                .then(() => this.obtenerDatosPopRock1())
                .then(() => this.anyadirComentarioPopRock1())
        },
        crearComentarioPopRock2: function () {
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
                                "Nombre": this.nuevoNombrePopRock2,
                                "Apellidos": this.nuevoApellidoPopRock2,
                                "Comentario": this.nuevoComentarioPopRock2
                            }
                        }
                    ]
                })
            })
                .then(() => this.obtenerDatosPopRock2())
                .then(() => this.anyadirComentarioPopRock2())
        },
        crearComentarioPopRock3: function () {
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
                                "Nombre": this.nuevoNombrePopRock3,
                                "Apellidos": this.nuevoApellidoPopRock3,
                                "Comentario": this.nuevoComentarioPopRock3
                            }
                        }
                    ]
                })
            })
                .then(() => this.obtenerDatosPopRock3())
                .then(() => this.anyadirComentarioPopRock3())
        },
        logicaCrearComentario: function () {
            // Creamos comentario si se cumplen los requisitos
            if (this.validoNuevoNombrePopRock1 && this.validoNuevoComentarioPopRock1) {
                this.crearComentarioPopRock1()
                if (this.validoNuevoNombrePopRock1 && this.validoNuevoComentarioPopRock1 && this.botonPulsadoNuevo) {
                    alert('Mensaje enviado con éxito');
                }
            }
            if (this.validoNuevoNombrePopRock2 && this.validoNuevoComentarioPopRock2) {
                this.crearComentarioPopRock2()
                if (this.validoNuevoNombrePopRock2 && this.validoNuevoComentarioPopRock2 && this.botonPulsadoNuevo) {
                    alert('Mensaje enviado con éxito');
                }
            }
            if (this.validoNuevoNombrePopRock3 && this.validoNuevoComentarioPopRock3) {
                this.crearComentarioPopRock3()
                if (this.validoNuevoNombrePopRock3 && this.validoNuevoComentarioPopRock3 && this.botonPulsadoNuevo) {
                    alert('Mensaje enviado con éxito');
                }
            }
            this.botonPulsadoNuevo = true
        }
    }
})