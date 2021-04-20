// CÓDIGO APARTADO NOTICIAS CON VUE.JS

// NOTICIA 1
const URL_API_ADD_1 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20NOTICIA%201';
const AUTHORIZATION = 'Bearer keyC6SNxSpXpc852b';

// VUE COMENTAR, VER COMENTARIOS Y PAGINADOR
new Vue({
    el: '#new-1',
    data: {
        // Paginador
        array: [],
        elementosPorPagina: 3, // Número de comentarios por página
        datosPaginados: [], // Comentarios
        paginaActual: 1, // Comienza por 1

        //Abrir y cerrar modales
            // Noticia- 1
            showModalComentarNoticia1: false,
            showModalComentariosNoticia1: false,
            // Introducir nombre y posible apellido
            nombresNoticia1: [],
            apellidosNoticia1: [],
            nuevoNombreNoticia1: '',
            nuevoApellidoNoticia1: '',
            // Introducir comentarios en Ver Comentarios
            comentariosNoticia1: [],
            nuevoComentarioNoticia1: '',

        // Datos guardados en AIRTABLE
        infosNoticia1: [],

        // Validación
        botonPulsadoNuevo: false,
    },
    mounted: function () {
        this.obtenerDatosNoticia1();
        this.contenidoPagina(1); // Pensaba que así se mostraría la primera página de comentarios al inicio
    },
    computed: {
        // Comprobación de que el nombre y el comentario no están vacíos
        validoNuevoNombre: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoNombreNoticia1 !== ''
        },
        validoNuevoComentario: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoComentarioNoticia1 !== ''
        }
    },
    methods: {
        // AÑADIR COMENTARIOS
        anyadirComentarioNoticia1: function () {
            // NOTICIA 1
            // Anyadimos a nuestra lista de comentarios el contenido del input
            this.infosNoticia1.push({
                nombre: this.nuevoNombreNoticia1,
                apellido: this.nuevoApellidoNoticia1,
                comentario: this.nuevoComentarioNoticia1,
            });
            // Vaciamos el input para que se limpie el texto escrito
            this.nuevoNombreNoticia1 = '';
            this.nuevoApellidoNoticia1 = '';
            this.nuevoComentarioNoticia1 = '';
        },
        // VINCULAR CON AIRTABLE
        obtenerDatosNoticia1: function () {
            fetch(`https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20NOTICIA%201?`, {
                    headers: {
                        'Authorization': AUTHORIZATION
                    }
                }
            )
                .then((response) => response.json())
                .then((json) => this.infosNoticia1 = json.records)
        },
        crearComentarioNoticia1: function () {
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
                                "Nombre": this.nuevoNombreNoticia1,
                                "Apellidos": this.nuevoApellidoNoticia1,
                                "Comentario": this.nuevoComentarioNoticia1
                            }
                        }
                    ]
                })
            })
                .then(() => this.obtenerDatosNoticia1())
                .then(() => this.anyadirComentarioNoticia1())
        },
        logicaCrearComentario: function () {
            // Creamos comentario si se cumplen los requisitos
            if (this.validoNuevoNombre && this.validoNuevoComentario) {
                this.crearComentarioNoticia1();
            }
            if (this.validoNuevoNombre && this.validoNuevoComentario && this.botonPulsadoNuevo) {
                alert('Mensaje enviado con éxito');
            }
            this.botonPulsadoNuevo = true
        },
        totalPaginas: function () {
            return Math.ceil(this.infosNoticia1.length / this.elementosPorPagina);
        },
        contenidoPagina: function(numeroPagina){ // Recibe el número de página y devuelve sus respectivos comentarios
            this.paginaActual = numeroPagina;
            let inicio = (numeroPagina * this.elementosPorPagina) - this.elementosPorPagina;
            let fin = (numeroPagina * this.elementosPorPagina);
            this.datosPaginados = this.infosNoticia1.slice(inicio,fin); // Rellenar datosPaginados
        },
        paginaAnterior: function () {
            if(this.paginaActual > 1) {
                this.paginaActual = this.paginaActual - 1;
            }
            this.contenidoPagina(this.paginaActual);
        },
        paginaSiguiente: function () {
            if(this.paginaActual < this.totalPaginas()) {
                this.paginaActual = this.paginaActual + 1;
            }
            this.contenidoPagina(this.paginaActual);
        }
    }
})


// ---------------------------------------------------------------------------------------------------

// NOTICIA 2
const URL_API_ADD_2 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20NOTICIA%202';

// VUE COMENTAR, VER COMENTARIOS Y PAGINADOR
new Vue({
    el: '#new-2',
    data: {
        // Paginador
        array: [],
        elementosPorPagina: 3, // Número de comentarios por página
        datosPaginados: [], // Comentarios
        paginaActual: 1,

        // Abrir y cerrar modal
            // Noticia-2
            showModalComentarNoticia2: false,
            showModalComentariosNoticia2: false,
            // Introducir nombre y posible apellido
            nombresNoticia2: [],
            apellidosNoticia2: [],
            nuevoNombreNoticia2: '',
            nuevoApellidoNoticia2: '',
            // Introducir comentarios en Ver Comentarios
            comentariosNoticia2: [],
            nuevoComentarioNoticia2: '',

        // Datos guardados en AIRTABLE
        infosNoticia2: [],

        // Validación
        botonPulsadoNuevo: false
    },
    mounted: function () {
        this.obtenerDatosNoticia2();
        this.contenidoPagina(1); // Pensaba que así se mostraría la primera página de comentarios al inicio
    },
    computed: {
        // Comprobación de que el nombre y el comentario no están vacíos
        validoNuevoNombre: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoNombreNoticia2 !== ''
        },
        validoNuevoComentario: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoComentarioNoticia2 !== ''
        }
    },
    methods: {
        // AÑADIR COMENTARIOS
        anyadirComentarioNoticia2: function () {
            // Noticia 2
            // Anyadimos a nuestra lista de comentarios el contenido del input
            this.infosNoticia2.push({
                nombre: this.nuevoNombreNoticia2,
                apellido: this.nuevoApellidoNoticia2,
                comentario: this.nuevoComentarioNoticia2,
            });
            // Vaciamos el input para que se limpie el texto escrito
            this.nuevoNombreNoticia2 = '';
            this.nuevoApellidoNoticia2 = '';
            this.nuevoComentarioNoticia2 = '';
        },
        // VINCULAR CON AIRTABLE
        obtenerDatosNoticia2: function () {
            fetch(`https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20NOTICIA%202?`, {
                    headers: {
                        'Authorization': AUTHORIZATION
                    }
                }
            )
                .then((response) => response.json())
                .then((json) => this.infosNoticia2 = json.records)
        },
        crearComentarioNoticia2: function () {
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
                                "Nombre": this.nuevoNombreNoticia2,
                                "Apellidos": this.nuevoApellidoNoticia2,
                                "Comentario": this.nuevoComentarioNoticia2
                            }
                        }
                    ]
                })
            })
                .then(() => this.obtenerDatosNoticia2())
                .then(() => this.anyadirComentarioNoticia2())
        },
        logicaCrearComentario: function () {
            // Creamos comentario si se cumplen los requisitos
            if (this.validoNuevoNombre && this.validoNuevoComentario) {
                this.crearComentarioNoticia2();
            }
            if (this.validoNuevoNombre && this.validoNuevoComentario && this.botonPulsadoNuevo) {
                alert('Mensaje enviado con éxito');
            }
            this.botonPulsadoNuevo = true
        },
        totalPaginas: function () {
            return Math.ceil(this.infosNoticia2.length / this.elementosPorPagina);
        },
        contenidoPagina: function (numeroPagina) { // Recibe el número de página y devuelve sus respectivos comentarios
            this.paginaActual = numeroPagina;
            let inicio = (numeroPagina * this.elementosPorPagina) - this.elementosPorPagina;
            let fin = (numeroPagina * this.elementosPorPagina);
            this.datosPaginados = this.infosNoticia2.slice(inicio,fin); // Rellenar datosPaginados
        },
        paginaAnterior: function () {
            if(this.paginaActual > 1) {
                this.paginaActual = this.paginaActual - 1;
            }
            this.contenidoPagina(this.paginaActual);
        },
        paginaSiguiente: function () {
            if(this.paginaActual < this.totalPaginas()) {
                this.paginaActual = this.paginaActual + 1;
            }
            this.contenidoPagina(this.paginaActual);
        }
    }
})


// ---------------------------------------------------------------------------------------------------

// NOTICIA 3
const URL_API_ADD_3 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20NOTICIA%203';

// VUE COMENTAR, VER COMENTARIOS Y PAGINADOR
new Vue({
    el: '#new-3',
    data: {
        // Paginador
        array: [],
        elementosPorPagina: 3, // Número de comentarios por página
        datosPaginados: [], // Comentarios
        paginaActual: 1,

        // Abrir y cerrar modal
            // Noticia-3
            showModalComentarNoticia3: false,
            showModalComentariosNoticia3: false,
            // Introducir nombre y posible apellido
            nombresNoticia3: [],
            apellidosNoticia3: [],
            nuevoNombreNoticia3: '',
            nuevoApellidoNoticia3: '',
            // Introducir comentarios en Ver Comentarios
            comentariosNoticia3: [],
            nuevoComentarioNoticia3: '',

        // Datos guardados en AIRTABLE
        infosNoticia3: [],

        // Validación
        botonPulsadoNuevo: false
    },
    mounted: function () {
        this.obtenerDatosNoticia3();
        this.contenidoPagina(1); // Pensaba que así se mostraría la primera página de comentarios al inicio
    },
    computed: {
        // Comprobación de que el nombre y el comentario no están vacíos
        validoNuevoNombre: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoNombreNoticia3 !== ''
        },
        validoNuevoComentario: function() {
            return this.botonPulsadoNuevo &&
                this.nuevoComentarioNoticia3 !== ''
        }
    },
    methods: {
        // AÑADIR COMENTARIOS
        anyadirComentarioNoticia3: function () {
            // Noticia 3
            // Anyadimos a nuestra lista de comentarios el contenido del input
            this.infosNoticia3.push({
                nombre: this.nuevoNombreNoticia3,
                apellido: this.nuevoApellidoNoticia3,
                comentario: this.nuevoComentarioNoticia3,
            });
            // Vaciamos el input para que se limpie el texto escrito
            this.nuevoNombreNoticia3 = '';
            this.nuevoApellidoNoticia3 = '';
            this.nuevoComentarioNoticia3 = '';
        },
        // VINCULAR CON AIRTABLE
        obtenerDatosNoticia3: function () {
            fetch(`https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20NOTICIA%203?`, {
                    headers: {
                        'Authorization': AUTHORIZATION
                    }
                }
            )
                .then((response) => response.json())
                .then((json) => this.infosNoticia3 = json.records)
        },
        crearComentarioNoticia3: function () {
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
                                "Nombre": this.nuevoNombreNoticia3,
                                "Apellidos": this.nuevoApellidoNoticia3,
                                "Comentario": this.nuevoComentarioNoticia3
                            }
                        }
                    ]
                })
            })
                .then(() => this.obtenerDatosNoticia3())
                .then(() => this.anyadirComentarioNoticia3())
        },
        logicaCrearComentario: function () {
            // Creamos comentario si se cumplen los requisitos
            if (this.validoNuevoNombre && this.validoNuevoComentario) {
                this.crearComentarioNoticia3();
            }
            if (this.validoNuevoNombre && this.validoNuevoComentario && this.botonPulsadoNuevo) {
                alert('Mensaje enviado con éxito');
            }
            this.botonPulsadoNuevo = true

        },
        totalPaginas: function () {
            return Math.ceil(this.infosNoticia3.length / this.elementosPorPagina);
        },
        contenidoPagina: function (numeroPagina) { // Recibe el número de página y devuelve sus respectivos comentarios
            this.paginaActual = numeroPagina;
            let inicio = (numeroPagina * this.elementosPorPagina) - this.elementosPorPagina;
            let fin = (numeroPagina * this.elementosPorPagina);
            this.datosPaginados = this.infosNoticia3.slice(inicio,fin); // Rellenar datosPaginados
        },
        paginaAnterior: function () {
            if(this.paginaActual > 1) {
                this.paginaActual = this.paginaActual - 1;
            }
            this.contenidoPagina(this.paginaActual);
        },
        paginaSiguiente: function () {
            if(this.paginaActual < this.totalPaginas()) {
                this.paginaActual = this.paginaActual + 1;
            }
            this.contenidoPagina(this.paginaActual);
        }
    }
})


// ---------------------------------------------------------------------------------------------------

// NOTICIA 4
const URL_API_ADD_4 = 'https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20NOTICIA%204';

// VUE COMENTAR, VER COMENTARIOS Y PAGINADOR
new Vue({
    el: '#new-4',
    data: {
        //Paginador
        array: [],
        elementosPorPagina: 3, // Número de comentarios por página
        datosPaginados: [], // Comentarios
        paginaActual: 1,

        //Abrir y cerrar modal
            //Noticia-4
            showModalComentarNoticia4: false,
            showModalComentariosNoticia4: false,
            //Introducir nombre y posible apellido
            nombresNoticia4: [],
            apellidosNoticia4: [],
            nuevoNombreNoticia4: '',
            nuevoApellidoNoticia4: '',
            //Introducir comentarios en Ver Comentarios
            comentariosNoticia4: [],
            nuevoComentarioNoticia4: '',

        // Datos guardados en AIRTABLE
        infosNoticia4: [],

        // Validación
        botonPulsadoNuevo: false
    },
    mounted: function () {
        this.obtenerDatosNoticia4();
        this.contenidoPagina(1); // Pensaba que así se mostraría la primera página de comentarios al inicio
    },
    computed: {
        // Comprobación de que el nombre y el comentario no están vacíos
        validoNuevoNombre: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoNombreNoticia4 !== ''
        },
        validoNuevoComentario: function () {
            return this.botonPulsadoNuevo &&
                this.nuevoComentarioNoticia4 !== ''
        }
    },
    methods: {
        //AÑADIR COMENTARIOS
        anyadirComentarioNoticia4: function () {
            //Noticia 4
            // Anyadimos a nuestra lista de comentarios el contenido del input
            this.infosNoticia4.push({
                nombre: this.nuevoNombreNoticia4,
                apellido: this.nuevoApellidoNoticia4,
                comentario: this.nuevoComentarioNoticia4,
            });
            // Vaciamos el input para que se limpie el texto escrito
            this.nuevoNombreNoticia4 = '';
            this.nuevoApellidoNoticia4 = '';
            this.nuevoComentarioNoticia4 = '';
        },
        //VINCULAR CON AIRTABLE
        obtenerDatosNoticia4: function () {
            fetch(`https://api.airtable.com/v0/appDuOb5FU9PIa1Q9/Comentarios%20NOTICIA%204?`, {
                    headers: {
                        'Authorization': AUTHORIZATION
                    }
                }
            )

                .then((response) => response.json())
                .then((json) => this.infosNoticia4 = json.records)
        },
        crearComentarioNoticia4: function () {
            fetch(URL_API_ADD_4, {
                headers: {
                    'Authorization': AUTHORIZATION,
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    "records": [
                        {
                            "fields": {
                                "Nombre": this.nuevoNombreNoticia4,
                                "Apellidos": this.nuevoApellidoNoticia4,
                                "Comentario": this.nuevoComentarioNoticia4
                            }
                        }
                    ]
                })
            })
                .then(() => this.obtenerDatosNoticia4())
                .then(() => this.anyadirComentarioNoticia4())
        },
        logicaCrearComentario: function () {
            // Creamos comentario si se cumplen los requisitos
            if (this.validoNuevoNombre && this.validoNuevoComentario) {
                this.crearComentarioNoticia4();
            }
            if (this.validoNuevoNombre && this.validoNuevoComentario && this.botonPulsadoNuevo) {
                alert('Mensaje enviado con éxito');
            }
            this.botonPulsadoNuevo = true

        },
        totalPaginas: function () {
            return Math.ceil(this.infosNoticia4.length / this.elementosPorPagina);
        },
        contenidoPagina: function(numeroPagina){ // Recibe el número de página y devuelve sus respectivos comentarios
            this.paginaActual = numeroPagina;
            let inicio = (numeroPagina * this.elementosPorPagina) - this.elementosPorPagina;
            let fin = (numeroPagina * this.elementosPorPagina);
            this.datosPaginados = this.infosNoticia4.slice(inicio,fin); // Rellenar datosPaginados
        },
        paginaAnterior: function () {
            if(this.paginaActual > 1) {
                this.paginaActual = this.paginaActual - 1;
            }
            this.contenidoPagina(this.paginaActual);
        },
        paginaSiguiente: function () {
            if(this.paginaActual < this.totalPaginas()) {
                this.paginaActual = this.paginaActual + 1;
            }
            this.contenidoPagina(this.paginaActual);
        }
    }
})