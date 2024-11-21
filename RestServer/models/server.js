const express = require('express')
const cors = require('cors')
const routerUsuario = require('../routes/usuarios')


class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariospath = '/api/usuarios'



        // Middlewares

        this.middlewares();

        // Rutas
        this.routes()
    }

    middlewares(){

        //Corse

        this.app.use(cors())

        //Lectura y parseo

        this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static('public'))
    }

    routes(){

        this.app.use(this.usuariospath,routerUsuario)

    }

    listen(){
        this.app.listen(this.port,() => {
            console.log(`El servidor corriendo en puerto: ${this.port}`)
        })
    }

}

module.exports = Server
