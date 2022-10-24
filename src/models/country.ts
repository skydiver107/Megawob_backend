import { model, Schema, Document } from 'mongoose';

interface ICountry extends Document {
  country: string,
  states: [],
  description: string,
}
const CountrySchema: Schema = new Schema({
  country: {
    type: String,
    required: true,
  },
  states: {
    type: Array,
  },
  description: {
    type: String,
  }
})

const Country = model<ICountry>('Country', CountrySchema);

export { Country, ICountry }