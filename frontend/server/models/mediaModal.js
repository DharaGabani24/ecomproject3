const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')

const img_path = path.join('public/images/media')


const mediaSchema = new mongoose.Schema({
    media_image:{
        type:String
    }
})
const userstorage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,path.join(__dirname,'../../',img_path));
    },
    filename : (req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname);
    }
})  
mediaSchema.statics.uploadedAvtar = multer({storage : userstorage}).single('media_image')
mediaSchema.statics.uploadPath = img_path;

const model = mongoose.model('Media',mediaSchema);
module.exports = model;
