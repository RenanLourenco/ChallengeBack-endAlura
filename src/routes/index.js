import express from 'express';
import videos from './videosRoutes.js'
import categorias from './categoriasRoutes.js'


const routes = (app) =>{
    app.route('/').get((req,res)=>{
        res.status(200).send({titulo:"hello world"})
    })

    app.use(
        express.json(),
        videos,
        categorias
    )
}

export default routes