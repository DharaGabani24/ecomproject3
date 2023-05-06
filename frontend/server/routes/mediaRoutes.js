const express = require("express");
const mediaController = require("../controllers/mediaController");
const router = express.Router();

router.post("/create-media", mediaController.createmedia);

router.get("/view-media", mediaController.viewmedia );

router.get("/view-media/:id", mediaController.singlemedia);

router.patch("/update-media", mediaController.updatemedia);

router.delete("/delete-media/:id", mediaController.deletemedia)

module.exports = router;


/*

http://localhost:4006/media/create-media
http://localhost:4006/media/view-media
http://localhost:4006/media/view-media/:id
http://localhost:4006/media/update-media/:id
http://localhost:4006/media/delete-media/:id



*/