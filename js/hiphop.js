// CÓDIGO APARTADO CANCIONES HIP-HOP CON VUE.JS

// Almacenar información en LocalStorage
const miLocalStorage = window.localStorage;

// Variables
const URL_API_1 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20HIP%20HOP%201?&view=Grid%20view';
const URL_API_2 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20HIP%20HOP%202?&view=Grid%20view'
const URL_API_3 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20HIP%20HOP%203?&view=Grid%20view'
const URL_API_ADD_1 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20HIP%20HOP%201';
const URL_API_ADD_2 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20HIP%20HOP%202';
const URL_API_ADD_3 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20HIP%20HOP%203';
const AUTHORIZATION = 'Bearer keyC6SNxSpXpc852b';

// VUE COMENTAR Y VER COMENTARIOS
new Vue({
    el: '#hiphop',
    data: {
        //Abrir y cerrar modales
            //Rock-1
            showModalComentarHipHop1: false,
            showModalComentariosHipHop1: false,
            //Introducir nombre y posible apellido
            nombresHipHop1: [],
            apellidosHipHop1: [],
            nuevoNombreHipHop1: '',
            nuevoApellidoHipHop1: '',
            //Introducir comentarios en Ver Comentarios
            comentariosHipHop1: [],
            nuevoComentarioHipHop1: '',

            //Rock-2
            showModalComentarHipHop2: false,
            showModalComentariosHipHop2: false,
            //Introducir nombre y posible apellido
            nombresHipHop2: [],
            apellidosHipHop2: [],
            nuevoNombreHipHop2: '',
            nuevoApellidoHipHop2: '',
            //Introducir comentarios en Ver Comentarios
            comentariosHipHop2: [],
            nuevoComentarioHipHop2: '',

            //Rock-3
            showModalComentarHipHop3: false,
            showModalComentariosHipHop3: false,
            //Introducir nombre y posible apellido
            nombresHipHop3: [],
            apellidosHipHop3: [],
            nuevoNombreHipHop3: '',
            nuevoApellidoHipHop3: '',
            //Introducir comentarios en Ver Comentarios
            comentariosHipHop3: [],
            nuevoComentarioHipHop3: '',

        // Datos guardados en AIRTABLE
        infosHipHop1: [],
        infosHipHop2: [],
        infosHipHop3: [],

        // Validaciion
        botonPulsadoNuevo: false,
        },
    mounted: function () {
        this.cargarDeLocal();
        this.obtenerDatosHipHop1();
        this.obtenerDatosHipHop2();
        this.obtenerDatosHipHop3();
    },
    computed: {
        // Comprobación de que el nombre y el comentario no están vacíos
        validoNuevoNombreHipHop1: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoNombreHipHop1 !== ''
        },
        validoNuevoComentarioHipHop1: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoComentarioHipHop1 !== ''
        },
        validoNuevoNombreHipHop2: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoNombreHipHop2 !== ''
        },
        validoNuevoComentarioHipHop2: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoComentarioHipHop2 !== ''
        },
        validoNuevoNombreHipHop3: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoNombreHipHop3 !== ''
        },
        validoNuevoComentarioHipHop3: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoComentarioHipHop3 !== ''
        }
    },
    methods: {
        // AÑADIR COMENTARIOS
        anyadirComentarioHipHop1: function () {
            // HIP-HOP 1
            // Anyadimos a nuestra lista de comentarios el contenido del input
            this.infosHipHop1.push({
                nombre: this.nuevoNombreHipHop1,
                apellido: this.nuevoApellidoHipHop1,
                comentario: this.nuevoComentarioHipHop1,
            });
            // Vaciamos el input para que se limpie el texto escrito
            this.nuevoNombreHipHop1 = '';
            this.nuevoApellidoHipHop1 = '';
            this.nuevoComentarioHipHop1 = '';
            // Guardar en local
            this.guardarEnLocal();
        },
        anyadirComentarioHipHop2: function () {
            // HIP-HOP 2
            this.comentariosHipHop2.push({
                nombre: this.nuevoNombreHipHop2,
                apellido: this.nuevoApellidoHipHop2,
                comentario: this.nuevoComentarioHipHop2
            });
            this.nuevoNombreHipHop2 = '';
            this.nuevoApellidoHipHop2 = '';
            this.nuevoComentarioHipHop2 = '';
            // Guardar en local
            this.guardarEnLocal();
        },
        anyadirComentarioHipHop3: function () {
            // HIP-HOP 3
            this.comentariosHipHop3.push({
                nombre: this.nuevoNombreHipHop3,
                apellido: this.nuevoApellidoHipHop3,
                comentario: this.nuevoComentarioHipHop3
            });
            this.nuevoNombreHipHop3 = '';
            this.nuevoApellidoHipHop3 = '';
            this.nuevoComentarioHipHop3 = '';
            // Guardar en local
            this.guardarEnLocal();
        },
        // LOCAL STORAGE
        guardarEnLocal: function () {
            // HIP-HOP 1
            miLocalStorage.setItem('aportaciones-hip-hop-1', JSON.stringify(this.comentariosHipHop1));
            // HIP-HOP 2
            miLocalStorage.setItem('aportaciones-hip-hop-2', JSON.stringify(this.comentariosHipHop2));
            // HIP-HOP 3
            miLocalStorage.setItem('aportaciones-hip-hop-3', JSON.stringify(this.comentariosHipHop3));
        },
        cargarDeLocal: function () {
            if (miLocalStorage.getItem('aportaciones-hip-hop-1') !== null) {
                // HIP-HOP 1
                this.comentariosHipHop1 = JSON.parse(miLocalStorage.getItem('aportaciones-hip-hop-1'));
            }
            if (miLocalStorage.getItem('aportaciones-hip-hop-2') !== null) {
                // HIP-HOP 2
                this.comentariosHipHop2 = JSON.parse(miLocalStorage.getItem('aportaciones-hip-hop-2'));
            }
            if (miLocalStorage.getItem('aportaciones-hip-hop-3') !== null) {
                // HIP-HOP 3
                this.comentariosHipHop3 = JSON.parse(miLocalStorage.getItem('aportaciones-hip-hop-3'));
            }
        },
        // VINCULAR CON AIRTABLE
        obtenerDatosHipHop1: function () {
            fetch(URL_API_1, {
                headers: {
                    'Authorization': AUTHORIZATION
                }
            })
                .then((response) => response.json())
                .then((json) => this.infosHipHop1 = json.records)
        },
        obtenerDatosHipHop2: function () {
            fetch(URL_API_2, {
                headers: {
                    'Authorization': AUTHORIZATION
                }
            })
                .then((response) => response.json())
                .then((json) => this.infosHipHop2 = json.records)
        },
        obtenerDatosHipHop3: function () {
            fetch(URL_API_3, {
                headers: {
                    'Authorization': AUTHORIZATION
                }
            })
                .then((response) => response.json())
                .then((json) => this.infosHipHop3 = json.records)
        },
        crearComentarioHipHop1: function () {
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
                                "Nombre": this.nuevoNombreHipHop1,
                                "Apellidos": this.nuevoApellidoHipHop1,
                                "Comentario": this.nuevoComentarioHipHop1
                            }
                        }
                    ]
                })
            })
                .then(() => this.obtenerDatosHipHop1())
                .then(() => this.anyadirComentarioHipHop1())
        },
        crearComentarioHipHop2: function () {
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
                                "Nombre": this.nuevoNombreHipHop2,
                                "Apellidos": this.nuevoApellidoHipHop2,
                                "Comentario": this.nuevoComentarioHipHop2
                            }
                        }
                    ]
                })
            })
                .then(() => this.obtenerDatosHipHop2())
                .then(() => this.anyadirComentarioHipHop2())
        },
        crearComentarioHipHop3: function () {
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
                                "Nombre": this.nuevoNombreHipHop3,
                                "Apellidos": this.nuevoApellidoHipHop3,
                                "Comentario": this.nuevoComentarioHipHop3
                            }
                        }
                    ]
                })
            })
                .then(() => this.obtenerDatosHipHop3())
                .then(() => this.anyadirComentarioHipHop3())
        },
        logicaCrearComentario: function () {
            // Creamos comentario si se cumplen los requisitos
            if (this.validoNuevoNombreHipHop1 && this.validoNuevoComentarioHipHop1) {
                this.crearComentarioHipHop1()
                if (this.validoNuevoNombreHipHop1 && this.validoNuevoComentarioHipHop1 && this.botonPulsadoNuevo) {
                    alert('Mensaje enviado con éxito');
                }
            }
            if (this.validoNuevoNombreHipHop2 && this.validoNuevoComentarioHipHop2) {
                this.crearComentarioHipHop2()
                if (this.validoNuevoNombreHipHop2 && this.validoNuevoComentarioHipHop2 && this.botonPulsadoNuevo) {
                    alert('Mensaje enviado con éxito');
                }
            }
            if (this.validoNuevoNombreHipHop3 && this.validoNuevoComentarioHipHop3) {
                this.crearComentarioHipHop3()
                if (this.validoNuevoNombreHipHop3 && this.validoNuevoComentarioHipHop3 && this.botonPulsadoNuevo) {
                    alert('Mensaje enviado con éxito');
                }
            }
            this.botonPulsadoNuevo = true
        }
    }
})