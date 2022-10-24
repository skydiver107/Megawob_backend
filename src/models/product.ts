import { model, Schema, Document } from 'mongoose';

interface IProduct extends Document {
  name: string,
  image: string,
  CMID: string,
  price: string,
  diaplayOrder: string,
  description: string,
}
const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  CMID: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  displayOrder: {
    type: String,
    required: true,
  },
  creatorAddress: {
    type: String,
    required: false,
  },
  sizes: {
    type: Array
  }
})

const Product = model<IProduct>('Product', ProductSchema);

export { Product, IProduct }