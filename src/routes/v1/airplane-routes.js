const express=require('express');

const{ AirplaneController }=require('../../controllers');

const{ AirplaneMiddleware }=require('../../middlewares');

const router=express.Router();
console.log(AirplaneMiddleware);

router.post('/',
AirplaneMiddleware.validateCreateRequest, 
AirplaneController.createAirplane);

module.exports=router;