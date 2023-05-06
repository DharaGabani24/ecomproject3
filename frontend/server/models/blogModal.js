const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')

const img_path = path.join('public/images/blog')
const blogSchema = new mongoose.Schema({
    blog_image:{
        type:String,
        required : true
    },
    blog_title:{
        type:String,
        required : true
    },
    blog_desc:{
        type:String,
        required : true
    },
    blog_writername:{
        type:String,
        required : true
    },
    blog_date:{
        type:String
    },
    blog_fulldesc:{
        type:String
    }
},
{versionKey: false}
)
const userstorage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,path.join(__dirname,'../../',img_path));
    },
    filename : (req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname);
    }
})  
blogSchema.statics.uploadedAvtar = multer({storage : userstorage}).single('blog_image')
blogSchema.statics.uploadPath = img_path;
const Blog = new mongoose.model('Blog',blogSchema)

module.exports = Blog;