const express=require('express');
const { postOrder, postSingleOrder } = require('../controllers/orderControllers');
const router=express.Router();
router.route('/order').post(postOrder);
module.exports=router;