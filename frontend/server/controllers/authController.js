const Users = require('../models/userModal')
const Product = require('../models/product')
const Razorpay = require('razorpay');
const JWT = require('jsonwebtoken')

const razorpay = new Razorpay({
  key_id: '<your_key_id>',
  key_secret: '<your_key_secret>'
});

module.exports.registerController = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body

    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone  is Required" });
    }
    const exisitingUser = await Users.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        sucess: false,
        message: "Email is Already Register",
      });
    }
    const user = await new Users({
      name,
      email,
      phone,
      password,
    }).save();

    res.status(201).send({
      sucess: true,
      message: "User Register Successfully",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      sucess: false,
      message: "Error in Registeration",
      err
    })
  }
}

module.exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body


    if (!email || !password) {
      return res.status(404).send({
        sucess: false,
        message: "Invalid Email or Password",
      });
    }
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).send({
        sucess: false,
        message: "Email Is Not Registerd",
      });
    }
    if (password !== user.password) {
      return res.status(200).send({
        sucess: false,
        message: "Invalid Password",
      });
    }

    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    // console.log(user.cart)
    res.status(200).send({
      sucess: true,
      message: "Login Successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        cart : user.cart
      },
      token,
      userId: user._id,
      cartId: user.cart
    });

  } catch (err) {
    console.log(err);
    res.status(500).send({
      sucess: false,
      message: "Error in Login",
      err
    })
  }
}

module.exports.getUserController = async (req, res) => {
  try {

    const getUser = await Users.find()
    res.status(200).send(getUser)

  } catch (err) {
    console.log(err);
    res.status(500).send({
      sucess: false,
      message: "Error Get-Users",
      err
    })
  }
}
module.exports.getSingleUserController = async (req, res) => {
  try {

    const getUserss = await Users.findById(req.params.id)
    res.status(200).send(getUserss)

  } catch (err) {
    console.log(err);
    res.status(500).send({
      sucess: false,
      message: "Error Get-Single-Users",
      err
    })
  }
}
module.exports.updateUserController = async (req, res) => {
  try {
    const updateuser = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.send(updateuser)
  } catch (err) {
    console.log(err);
    res.send(err)
  }
}

module.exports.addToCart = (req, res) => {
  
  const user_id = req.body.Newdata.user_id
  const card_id = req.body.Newdata.Data
  const olddata = req.body.Newdata.OldData

  if(card_id == "")
  {
    console.log("Cart Not Found");
  }
  else
  {
    Users.findByIdAndUpdate(user_id,{
      cart : card_id
    },(err,data)=>{
        if(!data)
        {
          console.log("User Not Found");
        }
        return res.json({data : data})
    })
  }
}
module.exports.getaddToCart = async (req, res) => {
  try {
    const getcart = await Users.findById(req.params.id);

    let data = getcart.cart;
    // console.log(data)    
    let cart_data = [];
    for(let i in data)
    {
      const getproduct = await Product.findById(data[i]);
      cart_data.push(getproduct)  
    }
    res.send({cart_data : cart_data})
  } catch (err) {
    console.log(err);
  }
}

module.exports.deleteController = async (req,res) =>{

  const {id ,user_id} = req.body.objData

  try {
    Users.findById(user_id,(err,data)=>{
      if(err)
      {
        console.log(err);
        return false
      }
      let array = data.cart;
      let new_cart_data = array.filter(item => item !== id);
      Users.findByIdAndUpdate(user_id,{
        cart : new_cart_data
      },(err,deletecartdata)=>{
        if(err)
        {
          console.log(err);
          return false;
        }
      })
    })
    } catch (err) {
    console.log(err);
  }
}

module.exports.buyproduct = (req,res) =>{
  const { array , user_id } = req.body.Buydata
  if(array == "")
  {
    console.log("Buy Product Not Found");
  }
  else
  {
    Users.findById(user_id,(err,data)=>{
      if(err)
      {
        console.log(err);
      }
      let cart = data.BuyNow;
      array.map(item => {
        cart.push(item);
      })
      Users.findByIdAndUpdate(user_id,{
        BuyNow : cart
      },(err,data)=>{
        if(!data)
        {
          console.log("User Not Found");
        }
        return res.json({data : data})
      })
           
    })
  }
}

module.exports.getbuyproduct = async (req,res) =>{
  try {
    const get_buy_product = await Users.findById(req.params.id);

    let data = get_buy_product.BuyNow;
    let buy_data = [];
    for(let i in data)
    {
      const getbuyproducts = await Product.findById(data[i]);
      buy_data.push(getbuyproducts)  
    }
    res.send({buy_data : buy_data})
  } catch (err) {
    console.log(err);
  }
}

module.exports.deletebuyproduct = (req,res) =>{

  const {id ,user_id} = req.body.objBuydata

  try {
    Users.findById(user_id,(err,data)=>{
      if(err)
      {
        console.log(err);
        return false
      }
      let array = data.BuyNow;
      let new_prodduct_data = array.filter(item => item !== id);
      Users.findByIdAndUpdate(user_id,{
        BuyNow : new_prodduct_data
      },(err,deletecartdata)=>{
        if(err)
        {
          console.log(err);
          return false;
        }
      })
    })
    } catch (err) {
    console.log(err);
  }
}