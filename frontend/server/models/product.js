const mongoose = require("mongoose");
const multer = require('multer')
const path = require('path')

const img_path = path.join('public/images/product')

const productSchema = new mongoose.Schema({
    product_name:{
        type:String
    },
    product_price:{
        type:String
    },
    product_image:{
        type:String
    },
    product_reviews:{
        type:String
    },
    product_discount:{
        type:Number
    },
    product_description:{
        type:String
    },
})
const userstorage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,path.join(__dirname,'../../',img_path));
    },
    filename : (req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname);
    }
})  
productSchema.statics.uploadedAvtar = multer({storage : userstorage}).single('product_image')
productSchema.statics.uploadPath = img_path;

const Product = new mongoose.model('Product' , productSchema);

module.exports = Product;