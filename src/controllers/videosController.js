import videos from "../models/Video.js";
import categorias from "../models/Categorias.js";

class VideoController {
    static listarVideos = (req,res)=>{
        videos.find()
        .populate('categoriaId')
        .exec((err,videos)=>{
            res.status(200).json(videos)
        })
    }
    static upload = async (req,res)=>{

        const video = new videos(req.body)
        if(!video.categoria){
            video.categoriaId = '6372e29f86aab0cacb87b404'
        }
            
            video.save((err)=>{
                if(err){
                    res.status(500).send({message:`${err.message} Erro ao cadastrar no Database`})
                }else{
                    res.status(201).send(video.toJSON())
                }
            })
        
    }
    static deleteVideo = (req,res) =>{
        const id = req.params.id

        videos.findByIdAndDelete(id,(err)=>{
            if(!err){
                res.status(200).send({message:"Video foi excluido com sucesso!"})
            } else {
                res.status(400).send({message:`${err.message}`})
            }
        })  
    }
    static listarVideoPorId = (req,res) => {
        const id = req.params.id

        videos.findById(id)
        .exec((err,videos)=>{
            if(err){
                res.status(400).send({message:`${err} id nao encontrado`})
            }else{
                res.status(200).send(videos)
            }
        })
    }
    static atualizarVideo = (req,res) => {
        const id = req.params.id

        videos.findByIdAndUpdate(id,{$set:req.body},(err)=>{
            if(!err){
                res.status(200).send({message:`Video atualizado com sucesso`})
            }else{
                res.status(500).send({message:`${err.message}`})
            }
        })
    }
    static listarVideoPorCategoria = (req,res) =>{
        const categoria = req.query.categoria

        videos.find({"categoriaId":categoria},{})
        .populate('categoriaId')
        .exec((err,videos)=>{
            if(err){
                res.status(400).send({message:`${err.message}`})
            }else{
                res.status(200).json(videos)
            }
        })
    }
    static listarVideoPorTitulo = (req,res) =>{
        const titulo = req.query.titulo
        videos.find({"titulo":titulo},{})
        .populate('categoriaId')
        .exec((err,videos)=>{
            if(err){
                res.status(400).send({message:`${err.message}`})
            }else{
                res.status(200).json(videos)
            }
        })
    }
}

export default VideoController