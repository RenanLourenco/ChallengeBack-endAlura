import mongoose from "mongoose";
import 'mongoose-type-url'



const videoSchema = new mongoose.Schema(
    {
        id:{type:String},
        titulo:{type:String,required:true,maxLength:100},
        categoriaId:{type:mongoose.Schema.Types.ObjectId,ref:'categorias'},
        descricao:{type:String},
        url:{type:mongoose.SchemaTypes.Url,required:true}
    },
    {
        versionKey: false
    }
);


const videos = mongoose.model('videos',videoSchema)

export default videos