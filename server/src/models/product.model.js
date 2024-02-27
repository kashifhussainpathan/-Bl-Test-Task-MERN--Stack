// models/User.js
import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

const Products = model("Products", ProductSchema);

export default Products;
