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
        console.log('hbfb');
        if(error.name='SequelizeValidationError')
        {
            console.log('hbfb');
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

module.exports={
 createAirplane
}
