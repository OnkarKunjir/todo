// validate input feilds using Joi
const Joi = require('@hapi/joi');

module.exports = (data)=>{
    const schema = Joi.object({
        email    : Joi.string().required().email(),
        password : Joi.string().required()
    });

    return schema.validate(data);
}