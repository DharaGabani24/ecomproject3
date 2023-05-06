const express = require("express");
const blogController = require('../controllers/blogController');
const router = express.Router();

router.post("/create-blog", blogController.createBlog);

router.get("/view-blog", blogController.viewBlog );

router.get("/view-blog/:id", blogController.viewSingleBlog);

router.patch("/update-blog", blogController.updateBlogss );

router.delete("/delete-blog/:id", blogController.deleteBlog)

module.exports =  router;

/*
http://localhost:4006/blog/create-blog
http://localhost:4006/blog/view-blog
http://localhost:4006/blog/view-blog/:id
http://localhost:4006/blog/update-blog/:id
http://localhost:4006/blog/delete-blog/:id

*/