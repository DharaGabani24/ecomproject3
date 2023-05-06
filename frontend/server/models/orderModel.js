const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
    media_image:{
        type:String
    }
})

const model = mongoose.model('Order',orderSchema);
module.exports = model; 