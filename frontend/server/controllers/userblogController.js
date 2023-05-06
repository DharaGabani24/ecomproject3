const Blog = require('../models/userblog')


module.exports.createBlog   = async(req,res)  => {
    try {
         Blog.uploadedAvtar(req, res, (err) => {
            if (req.file) {
                Blog.create({
                    blog_title: req.body.blog_title,
                    blog_writername: req.body.blog_writername,
                    blog_date: req.body.blog_date,
                    blog_image: req.file.filename,
                    blog_desc: req.body.blog_desc,
                    blog_fulldesc: req.body.blog_fulldesc,
                }, (err, data) => {

                    if (!data) {
                        return res.send({ message: "Data Sucessfully" });
                    }

                })
                res.status(201).send({
                    sucess: true,
                    message: "Add Successfully",
                  });
            }

        })

    } catch (err) {
        res.send(err)
        console.log(err);
    }
}
module.exports.viewBlog   = async(req,res)  => {
    try {
        
        const bloglist = await Blog.find()
        res.status(200).send(bloglist)

    } catch (err) {
        res.send(err)
        console.log(err);
    }
}
module.exports.viewSingleBlog   = async(req,res)  => {
    try {
        
        const bloglist = await Blog.findById(req.params.id)
        res.status(200).send(bloglist)

    } catch (err) {
        res.send(err)
        console.log(err);
    }
}
module.exports.updateBlog  = async(req,res) => {
    try {
        const updateblog = await Blog.findByIdAndUpdate(req.params.id,req.body ,{
            new:true
        });
        res.send(updateblog)
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}
module.exports.deleteBlog  = async (req,res) => {
    try {
        const deleteblog = await Blog.findByIdAndDelete(req.params.id)
        res.send(deleteblog)
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}