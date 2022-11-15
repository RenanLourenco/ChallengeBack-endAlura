import express from 'express';
import CategoriaController from '../controllers/categoriasController.js';

const router = express.Router()

router 
.get('/categorias',CategoriaController.listarCategorias)
.get('/categorias/:id',CategoriaController.listarCategoriaPorId)
.get('/categorias/:id/videos',CategoriaController.searchVideosCategoria)
    .post('/categorias',CategoriaController.createCategoria)
    .put('/categorias/:id',CategoriaController.atualizarCategoria)
    .delete('/categorias/:id',CategoriaController.deleteCategoria)
    
export default router