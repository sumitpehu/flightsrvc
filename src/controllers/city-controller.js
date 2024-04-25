const { StatusCodes } = require('http-status-codes');
const {CityService}=require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createCity(req,res){
    try{

          const city=await CityService.createCity({
            name:req.body.name
          });

          console.log(city);
        SuccessResponse.data=city;
          return res
          .status(StatusCodes.CREATED)
          .json(SuccessResponse);
          
    }
    catch(error)
    {
    
      ErrorResponse.error=error; 
        return res
          .status(error.statusCode)
          .json(ErrorResponse);

    }
}

async function getAllCity(req,res){
  try{

        const cities=await CityService.getAllCity();
      SuccessResponse.data=cities;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);
        
  }
  catch(error)
  {
  
    ErrorResponse.error=error; 
      return res
        .status(error.statusCode)
        .json(ErrorResponse);

  }
}

async function getCity(req,res){
  try{

        const city=await CityService.getCity(req.params.id);
      
      SuccessResponse.data=city;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);
        
  }
  catch(error)
  {
  
    ErrorResponse.error=error; 
      return res
        .status(error.statusCode)
        .json(ErrorResponse);

  }
}

async function removeCity(req,res){
  try{

        const response=await CityService.removeCity(req.params.id);
      
      SuccessResponse.data=response;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);
        
  }
  catch(error)
  {
  
    ErrorResponse.error=error; 
      return res
        .status(error.statusCode)
        .json(ErrorResponse);

  }
}

module.exports={
    createCity,
    getAllCity,
    getCity,
    removeCity
}

