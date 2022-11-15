import express from 'express';
import VideoController from '../controllers/videosController.js';

const router = express.Router()

router 
    .get('/videos',VideoController.listarVideos)
    .post('/videos',VideoController.upload)
    .get('/videos/search',VideoController.listarVideoPorTitulo)
    .get('/videos/categoria',VideoController.listarVideoPorCategoria)
    .get('/videos/:id',VideoController.listarVideoPorId)
    .put('/videos/:id',VideoController.atualizarVideo)
    .delete('/videos/:id',VideoController.deleteVideo)
    

export default router