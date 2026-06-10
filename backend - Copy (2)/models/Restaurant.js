import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: { type: String },
  cuisine: { type: String },
  address: { type: String },
  phone: { type: String },
  image: { type: String },
  openingTime: { type: String },
  closingTime: { type: String },
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
}, { timestamps: true });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;
