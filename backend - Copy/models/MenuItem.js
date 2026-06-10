import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  price: { type: Number, required: true },
  image: { type: String },
  status: { type: String, enum: ['ACTIVE', 'HIDDEN', 'OUT OF STOCK'], default: 'ACTIVE' },
}, { timestamps: true });

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
export default MenuItem;
