const express = require("express");
const userblogController = require('../controllers/userblogController');
const router = express.Router();

router.post("/create-user-blog", userblogController.createBlog);

router.get("/view-user-blog", userblogController.viewBlog );

router.get("/view-user-blog/:id", userblogController.viewSingleBlog);

router.patch("/update-user-blog/:id", userblogController.updateBlog );

router.delete("/delete-user-blog/:id", userblogController.deleteBlog)

module.exports =  router;

/*
http://localhost:4006/blog/create-blog
http://localhost:4006/blog/view-blog
http://localhost:4006/blog/view-blog/:id
http://localhost:4006/blog/update-blog/:id
http://localhost:4006/blog/delete-blog/:id

*/