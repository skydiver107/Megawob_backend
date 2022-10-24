import { model, Schema, Document } from 'mongoose';

interface IAdmin extends Document {
  fullName: string,
  username: string,
  password: string,
  avatar: string,
  email: string,
  role: string,
  ability: any
}

const AdminSchema: Schema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false,
  },
  ability: {
    type: Array,
    required: false,
  }
})

const Admin = model<IAdmin>('Admin', AdminSchema);

export { Admin, IAdmin }