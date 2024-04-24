
const{Logger}=require('../config');
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');
class CrudRepository{
    constructor(model)
    {
        this.model=model;
    }

    async create(data)
    {
        
            const response=await this.model.create(data);
            return response;
       
    }

    async destroy(data)
    {
            const response=await this.model.destroy({
                where:{
                    id:data
                }
            });

            if(!response)
            {
                throw new AppError('not able to find the resource',StatusCodes.NOT_FOUND);
            }
            
            return response;
       
    }

    async get(data)
    {
        
            const response=await this.model.findByPk(data);
            if(!response)
            {
                throw new AppError('not able to find the resource',StatusCodes.NOT_FOUND);
            }
            return response;
       
    }

    async getAll()
    {
        
            const response=await this.model.findAll();
            
            return response;
        
    }

    async update(id,data)
    {
        
            const response=await this.model.Update(data,{
                where:{
                    id:id
                }
            });
            
            return response;
       
    }
}

module.exports=CrudRepository