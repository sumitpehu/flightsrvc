const{AirplaneRepository}=require('../repositories');
const{StatusCodes}=require('http-status-codes');
const AppError=require('../utils/errors/app-error');


const airplaneRepsoitory=new AirplaneRepository();
async function createAirplane(data){
    try{
        const airplane=await airplaneRepsoitory.create(data );
        return airplane;
    }
    catch (error){
    
        if(error.name='SequelizeValidationError')
        {
            let explanation=[];
            error.errors.forEach((error) => {
                explanation.push(error.message);
            });

            console.log(explanation);
            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        }
        throw new AppError('cannot create an airplane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllAirplane(){
    try{
        const airplane=await airplaneRepsoitory.getAll( );
        return airplane;
    }
    catch (error){
        throw new AppError('cannot get all airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(data){
    try{
        const airplane=await airplaneRepsoitory.get(data);
        return airplane;
    }
    catch (error){
        if(error.statusCode==StatusCodes.NOT_FOUND)
        {
            throw new AppError('the airplane you requested is not present',error.statusCode);
        }
        throw new AppError('cannot get an airplane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function removeAirplane(data){

    
    try{
        const response=await airplaneRepsoitory.destroy(data);
        
        return response;
    }
    catch (error){
        if(error.statusCode==StatusCodes.NOT_FOUND)
        {
            throw new AppError('the airplane you want to delete is not present',error.statusCode);
        }
        throw new AppError('cannot get an airplane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
 createAirplane,
 getAllAirplane,
 getAirplane,
 removeAirplane
}
