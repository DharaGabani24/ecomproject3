const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')

const img_path = path.join('public/images/usersblogs')
const userblogSchema = new mongoose.Schema({
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
    },
    blog_feature:{
        type:Boolean
    }
},
{versionKey: false}
)
const userstorage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,path.join(__dirname.at,'../../',img_path));
    },
    filename : (req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname);
    }
})  
userblogSchema.statics.uploadedAvtar = multer({storage : userstorage}).single('blog_image')
userblogSchema.statics.uploadPath = img_path;
const UserBlog = new mongoose.model('User Blog',userblogSchema)

module.exports = UserBlog;