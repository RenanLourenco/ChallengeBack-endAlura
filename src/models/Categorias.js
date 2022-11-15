import mongoose from "mongoose";
import 'mongoose-type-url'


const categoriaSchema = new mongoose.Schema(
    {
        id:{type:String},
        titulo:{type:String,maxLength:100},
        cor:{type:String,required:true}
    },
    {
        versionKey: false
    }
)

const categorias = mongoose.model('categorias',categoriaSchema)

export default categorias