import { model, Schema, Document } from 'mongoose';

interface IOrder extends Document {
  first: string,
  last: string,
  company: string,
  country: string,
  street1: string,
  street2: string,
  state: string,
  zip: string,
  city: string,
  phone: string,
  email: string,
  status: number,
  description: string,

}
const OrderSchema: Schema = new Schema({
  first: {
    type: String,
    required: true,
  },
  last: {
    type: String,
    required: true,
  },
  company: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  street1: {
    type: String,
    required: true,
  },
  street2: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
    required: true,
  },
  mintAddress: {
    type: String,
    required: false,
  },
  size: {
    type: String,
    required: false,
  }
})

const Order = model<IOrder>('Order', OrderSchema);

export { Order, IOrder }