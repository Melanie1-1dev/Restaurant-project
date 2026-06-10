import MenuItem from '../models/MenuItem.js';
import Restaurant from '../models/Restaurant.js';

export const createMenuItem = async (req, res) => {
  const { restaurantId, name, description, category, price, image, status } = req.body;
  const restaurant = await Restaurant.findById(restaurantId);
  if (!restaurant) {
    return res.status(404).json({ message: 'Restaurant not found' });
  }

  if (!restaurant.owner.equals(req.user._id)) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const menuItem = await MenuItem.create({
    restaurant: restaurantId,
    name,
    description,
    category,
    price,
    image,
    status: status || 'ACTIVE',
  });

  res.status(201).json(menuItem);
};

export const updateMenuItem = async (req, res) => {
  const menuItem = await MenuItem.findById(req.params.id).populate('restaurant');
  if (!menuItem) {
    return res.status(404).json({ message: 'Menu item not found' });
  }
  if (!menuItem.restaurant.owner.equals(req.user._id)) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const updated = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteMenuItem = async (req, res) => {
  const menuItem = await MenuItem.findById(req.params.id).populate('restaurant');
  if (!menuItem) {
    return res.status(404).json({ message: 'Menu item not found' });
  }
  if (!menuItem.restaurant.owner.equals(req.user._id)) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  await menuItem.deleteOne();
  res.json({ message: 'Menu item deleted' });
};

export const getMenuItems = async (req, res) => {
  const { restaurantId, category } = req.query;
  const query = {};
  if (restaurantId) query.restaurant = restaurantId;
  if (category) query.category = category;

  const items = await MenuItem.find(query).sort({ createdAt: -1 });
  res.json(items);
};

export const getMenuItem = async (req, res) => {
  const menuItem = await MenuItem.findById(req.params.id);
  if (!menuItem) {
    return res.status(404).json({ message: 'Menu item not found' });
  }
  res.json(menuItem);
};
