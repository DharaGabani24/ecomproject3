const express = require('express')

const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router();
router.post('/register', authController.registerController)

router.post('/login',authController.loginController)

router.get('/get-users',authController.getUserController)

router.get('/get-single-users/:id',authController.getSingleUserController)

router.patch('/update-users/:id',authController.updateUserController)

router.post('/add-to-cart',authController.addToCart)    


router.get('/get-add-to-cart/:id',authController.getaddToCart)

router.post('/delete-cart',authController.deleteController)

router.post('/buy-product',authController.buyproduct)    

router.get('/get-buy-product/:id',authController.getbuyproduct)

router.post('/delete-buy',authController.deletebuyproduct)

router.get('/user-auth',authMiddleware.requireSignIn , (req,res) =>{
    res.status(200).send({ok:true})
})

router.get('/admin-auth', authMiddleware.requireSignIn  , authMiddleware.isAdmin
    , (req,res) =>{
        res.status(200).send({ok:true})
    }
)

module.exports = router;




// http://localhost:4006/auth/admin-auth