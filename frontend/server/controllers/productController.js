const Product = require("../models/product");

const fs = require('fs');
const path = require("path");

module.exports.createProduct = async (req, res) => {
    try {
        Product.uploadedAvtar(req, res, (err) => {
            if (req.file) {
                Product.create({
                    product_name: req.body.product_name,
                    product_price: req.body.product_price,
                    product_image: req.file.filename,
                    product_reviews: req.body.product_reviews,
                    product_discount: req.body.product_discount,
                    product_description: req.body.product_description
                }, (err, data) => {
                    // console.log(data);

                    if (!data) {
                        return res.send({ message: "Data Sucessfully" });
                    }

                })
                res.status(201).send({
                    sucess: true,
                    message: "Add Successfully",
                  });
            } else {
                Product.create({
                    product_name: req.body.product_name,
                    product_price: req.body.product_price,
                    product_reviews: req.body.product_reviews,
                    product_discount: req.body.product_discount,
                    product_description: req.body.product_description
                }, (err, data) => {
                    if (!data) {
                        return res.send({ message: "Data Sucessfully" });
                    }
                })
            }
        })
    } catch (err) {
        res.send(err);
        console.log(err);
    }
}
module.exports.viewProduct = async (req, res) => {
    try {
        const Productdata = await Product.find();
        res.send(Productdata)
    } catch (error) {
        res.send(error)
    }
}
module.exports.viewSingleProduct = async (req, res) => {
    console.log(req.body);
    try {

        const product = await Product.findById(req.params.id);
        res.send(product)
    } catch (error) {
        console.log(error);
    }
}

module.exports.updateProduct = async (req, res) => {
    console.log(req.body.productData);
    Product.uploadedAvtar(req, res, (err) => {
        if (req.file) {

            Product.findByIdAndUpdate(req.body.id, {
                product_name: req.body.product_name,
                product_price: req.body.product_price,
                product_reviews: req.body.product_reviews,
                product_discount: req.body.product_discount,
                product_image: req.file.filename,
                product_description: req.body.product_description
            }, (err, data) => {
                console.log(data);
                if (err) {
                    console.log(err);
                    return false;
                }
            })
        }
        else {
            Product.findByIdAndUpdate(req.body.id, {
                product_name: req.body.product_name,
                product_price: req.body.product_price,
                product_reviews: req.body.product_reviews,
                product_discount: req.body.product_discount,
                product_description: req.body.product_description
            }, (err, data) => {
                console.log(data);

                if (err) {
                    console.log(err);
                    return false;
                }
            })
        }

    })

}

module.exports.deleteProduct = async (req, res) => {
    try {
        
        const deleteproduct = await Product.findByIdAndDelete(req.params.id)
        fs.unlinkSync(path.join(__dirname, '/images/product' + deleteproduct))
        res.send(deleteproduct)
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}