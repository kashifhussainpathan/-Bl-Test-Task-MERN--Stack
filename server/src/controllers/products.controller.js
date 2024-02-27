import Products from "../models/product.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Products.find();

  return res
    .status(201)
    .json(new ApiResponse(200, products, "Products fetched Successfully."));
});

export { getProducts };
