const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.post("/create-product", productController.createProduct);

router.get("/view-product", productController.viewProduct );

router.get("/view-single-product/:id", productController.viewSingleProduct);

router.patch("/update-product", productController.updateProduct);

router.delete("/delete-product/:id", productController.deleteProduct)

module.exports = router;


/*

http://localhost:4006/product/create-product
http://localhost:4006/product/view-product
http://localhost:4006/product/view-product/:id
http://localhost:4006/product/update-product/:id
http://localhost:4006/product/delete-product/:id


*/