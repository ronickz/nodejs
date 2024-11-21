const {request,response} = require('express')


const usuariosGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        msg:'Get api',
        query
    })
}

const usuariosPost = (req, res = response) => {

    const body = req.body;


    res.json({
        msg:'Post api',
        body
    })
}


const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg:'Put api',
        id:id
    })
}


const usuariosDelete = (req, res = response) => {
    res.json({
        msg:'Delete api'
    })
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}