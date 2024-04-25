const express=require('express');

const{ CityController }=require('../../controllers');

const{ CityMiddleware }=require('../../middlewares');

const router=express.Router();




router.post('/',
CityMiddleware.validateCreateRequest, 
CityController.createCity);

router.delete('/:id',CityController.removeCity);

router.get('/',
CityController.getAllCity);

router.get('/:id',
CityController.getCity);





module.exports=router;
