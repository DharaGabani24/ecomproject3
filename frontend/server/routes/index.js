const express = require('express')
const router = express.Router();

router.use('/blog',require('./blogRoutes'))
router.use('/userblog',require('./userblogRoutes'))
router.use('/product',require('./productRoutes'))
router.use('/media',require('./mediaRoutes'))
router.use('/auth',require('./adminRoutes'))
router.use('/payout',require('./payRoutes'))

module.exports = router