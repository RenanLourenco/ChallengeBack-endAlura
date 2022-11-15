import categorias from '../models/Categorias.js'
import videos from '../models/Video.js'
import express from 'express'

class CategoriaController {
    static listarCategorias = (req,res)=>{
        categorias.find()
        .exec((err,categorias)=>{
            if(err){
                res.status(400).send({message:'Erro ao listar categorias'})
            }else{
                res.status(200).json(categorias)
            }
        })
    }
    static listarCategoriaPorId = (req,res) => {
        let id = req.params.id
        categorias.findById(id)
        .exec((err,categorias)=>{
            if(err){
                res.status(400).send({message:`${err.message} id não encontrado`})
            }else{
                res.status(200).json(categorias)
            }
        })
    }
    static createCategoria = (req,res) => {
        const categoria = new categorias(req.body)
        if(!categoria.titulo){
            categoria.titulo = 'livre' 
        }
        try {
            categoria.save((err)=>{
                if(err){
                    res.status(500).send({message:`${err.message} Erro ao cadastrar no Database`})
                }else{
                    res.status(201).send(categoria.toJSON())
                }
            })
        } catch (error) {
            res.status(500).send({message:'ERRO AO CADASTRAR NO DATABASE'})
        }
    }
    static atualizarCategoria = (req,res) => {
        const id = req.params.id

        categorias.findByIdAndUpdate(id,{$set:req.body},(err)=>{
            if(!err){
                res.status(200).send({message:`Categoria atualizada com sucesso`})
            }else{
                res.status(500).send({message:`${err.message}`})
            }
        })
    }
    static deleteCategoria = (req,res) =>{
        const id = req.params.id

        categorias.findByIdAndDelete(id,(err)=>{
            if(!err){
                res.status(200).send({message:"Categoria excluida com sucesso!"})
            } else {
                res.status(400).send({message:`${err.message}`})
            }
        })  
    }
    static searchVideosCategoria = (req,res) =>{
        const categoria = req.params.id
            videos.find({"categoriaId": categoria})
            .populate('categoriaId')
            .exec((err,videos)=>{
                if(err){
                    res.status(400).send({message:error})
                }else{
                    res.status(200).json(videos)
                }
            })

    }

}

export default CategoriaController