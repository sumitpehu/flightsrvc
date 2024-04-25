const{CityRepository}=require('../repositories');
const{StatusCodes}=require('http-status-codes');
const AppError=require('../utils/errors/app-error');


const cityRepsoitory=new CityRepository();
async function createCity(data){
    try{
        const city=await cityRepsoitory.create(data);
        return city;
    }
    catch (error){

        if(error.name =='SequelizeValidationError' || error.name =='SequelizeUniqueConstraintError')
        {
            let explanation=[];
            error.errors.forEach((error) => {
                explanation.push(error.message);
            });

            console.log(explanation);

            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        }
        throw new AppError('cannot create a city',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllCity(){
    try{
        const cities=await cityRepsoitory.getAll( );
        return cities;
    }
    catch (error){
        throw new AppError('cannot get all cities',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCity(data){
    try{
        const city=await cityRepsoitory.get(data);
        return city;
    }
    catch (error){
        if(error.statusCode==StatusCodes.NOT_FOUND)
        {
            throw new AppError('the city you requested is not present',error.statusCode);
        }
        throw new AppError('cannot get a city',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function removeCity(data){

    
    try{
        const response=await cityRepsoitory.destroy(data);
        
        return response;
    }
    catch (error){
        if(error.statusCode==StatusCodes.NOT_FOUND)
        {
            throw new AppError('the city you want to delete is not present',error.statusCode);
        }
        throw new AppError('cannot get a city',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
 createCity,
 getAllCity,
 getCity,
 removeCity
}
