const express = require("express");
const payController = require('../controllers/payController');
const router = express.Router();

router.post("/create-checkout-session", payController.payout);

module.exports =  router;
