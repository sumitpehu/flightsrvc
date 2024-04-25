const { StatusCodes }=require('http-status-codes');
const{ ErrorResponse }=require('../utils/common');
const AppError=require('../utils/errors/app-error');
function validateCreateRequest(req, res, next)
{
    if(!req.body.name)
    {

        ErrorResponse.message='something went while creating a city';
        ErrorResponse.error=new AppError(['something went wrong while creating a city'],StatusCodes.BAD_REQUEST);
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(ErrorResponse);

    }

    next();
}

module.exports = {
    validateCreateRequest
}