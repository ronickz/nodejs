const express = require('express')


class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT

        // Middlewares

        this.middlewares();

        // Rutas
        this.routes()
    }

    middlewares(){
        //Directorio publico
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.get('/api',(req,res)=>{
            res.status(403).json({
                ok:true,
                msg: 'Get API'
            })
        })

        this.app.put('/api',(req,res)=>{
            res.status(403).json({
                ok:true,
                msg: 'Get API'
            })
        })

        this.app.post('/api',(req,res)=>{
            res.status(403).json({
                ok:true,
                msg: 'Get API'
            })
        })
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log(`El servidor corriendo en puerto: ${this.port}`)
        })
    }

}

module.exports = Server
