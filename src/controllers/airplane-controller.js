const { StatusCodes } = require('http-status-codes');
const {AirplaneService}=require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createAirplane(req,res){
    try{

          const airplane=await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity: req.body.capacity
          });
        SuccessResponse.data=airplane;
          return res
          .status(StatusCodes.CREATED)
          .json(SuccessResponse);
          
    }
    catch(error)
    {
    
      ErrorResponse.error=error; 
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json(ErrorResponse);

    }
}

async function getAllAirplane(req,res){
  try{

        const airplanes=await AirplaneService.getAllAirplane();
      SuccessResponse.data=airplanes;
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

async function getAirplane(req,res){
  try{

        const airplane=await AirplaneService.getAirplane(req.params.id);
      
      SuccessResponse.data=airplane;
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

async function removeAirplane(req,res){
  try{

        const response=await AirplaneService.removeAirplane(req.params.id);
      
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
    createAirplane,
    getAllAirplane,
    getAirplane,
    removeAirplane
}

