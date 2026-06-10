import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  items: [
    {
      menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
      quantity: { type: Number, required: true, min: 1 },
      price: { type: Number, required: true },
    }
  ],
  subtotal: { type: Number, required: true },
  tax: { type: Number, required: true },
  total: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'preparing', 'completed', 'cancelled'], default: 'pending' },
  deliveryAddress: { type: String },
  specialInstructions: { type: String },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;
