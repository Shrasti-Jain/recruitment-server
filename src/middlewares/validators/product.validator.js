import Joi from 'joi'
import { AppError } from "../../utils/errors.js";

const createProductSchema=Joi.object({
     productName: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Product name is required",
      "any.required": "Product name is required",
    }),

  productDescription: Joi.string()
    .trim()
    .allow(""),

  productPrice: Joi.number()
    .min(0)
    .required()
    .messages({
      "number.base": "Product price must be a number",
      "number.min": "Product price cannot be negative",
      "any.required": "Product price is required",
    }),

  productCategory: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Product category is required",
      "any.required": "Product category is required",
    }),

  productUrl: Joi.string()
    .trim()
    .uri()
    .messages({
      "string.uri": "Product URL must be a valid URL",
      "any.required": "Product URL is required",
    }),
})

const updateProductSchema = Joi.object({
    productPrice: Joi.number()
        .min(0)
        .messages({
            "number.base": "Product price must be a number",
            "number.min": "Product price cannot be negative"
        }),

    productDescription: Joi.string()
        .trim()
    }).min(1).messages({
    "object.min": "At least one field is required for update"
});

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return next(
      new AppError(error.details.map((d) => d.message).join(", "), 400)
    );
  }
  next();
};

export const createProductValidator=validate(createProductSchema)
export const updateProductValidator=validate(updateProductSchema)