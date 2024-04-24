const express=require('express');

const{ AirplaneController }=require('../../controllers');

const{ AirplaneMiddleware }=require('../../middlewares');

const router=express.Router();


console.log(AirplaneController.removeAirplane);

router.post('/',
AirplaneMiddleware.validateCreateRequest, 
AirplaneController.createAirplane);

router.delete('/:id',AirplaneController.removeAirplane);

router.get('/',
AirplaneController.getAllAirplane);

router.get('/:id',
AirplaneController.getAirplane);





module.exports=router;
