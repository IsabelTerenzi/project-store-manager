const Joi = require('joi');

const saleSchema = Joi.object({
  productId: Joi.number()
    .required(),
  quantity: Joi.number()
    .required()
    .min(1),
});

module.exports = saleSchema;
