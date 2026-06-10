import Order from '../models/Order.js';
import Restaurant from '../models/Restaurant.js';
import MenuItem from '../models/MenuItem.js';

export const createOrder = async (req, res) => {
  const { restaurantId, items, deliveryAddress, specialInstructions } = req.body;
  if (!restaurantId || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: 'restaurantId and items are required' });
  }

  const restaurant = await Restaurant.findById(restaurantId);
  if (!restaurant) {
    return res.status(404).json({ message: 'Restaurant not found' });
  }

  const orderItems = await Promise.all(items.map(async (item) => {
    const menuItem = await MenuItem.findById(item.menuItemId);
    if (!menuItem) {
      throw new Error(`Menu item not found: ${item.menuItemId}`);
    }
    return {
      menuItem: menuItem._id,
      quantity: item.quantity || 1,
      price: menuItem.price,
    };
  }));

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = parseFloat((subtotal * 0.08).toFixed(2));
  const total = parseFloat((subtotal + tax).toFixed(2));

  const order = await Order.create({
    customer: req.user._id,
    restaurant: restaurantId,
    items: orderItems,
    subtotal,
    tax,
    total,
    deliveryAddress,
    specialInstructions,
  });

  res.status(201).json(order);
};

export const getOrders = async (req, res) => {
  const query = {};

  if (req.user.role === 'owner' || req.user.role === 'manager') {
    const restaurant = await Restaurant.findOne({ owner: req.user._id });
    if (restaurant) {
      query.restaurant = restaurant._id;
    }
  } else {
    query.customer = req.user._id;
  }

  const orders = await Order.find(query)
    .populate('customer', 'name email')
    .populate('restaurant', 'name address')
    .populate('items.menuItem', 'name price image');

  res.json(orders);
};

export const getOrder = async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate('customer', 'name email')
    .populate('restaurant', 'name address')
    .populate('items.menuItem', 'name price image');

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  if (req.user.role === 'customer' && !order.customer._id.equals(req.user._id)) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  res.json(order);
};

export const updateOrderStatus = async (req, res) => {
  const order = await Order.findById(req.params.id).populate('restaurant');
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  if (!order.restaurant.owner.equals(req.user._id)) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  order.status = req.body.status || order.status;
  await order.save();
  res.json(order);
};
