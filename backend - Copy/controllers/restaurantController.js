import Restaurant from '../models/Restaurant.js';
import User from '../models/User.js';

export const createRestaurant = async (req, res) => {
  const { name, description, cuisine, address, phone, image, openingTime, closingTime, status } = req.body;
  if (!name || !address || !phone) {
    return res.status(400).json({ message: 'Name, address, and phone are required' });
  }

  const restaurant = await Restaurant.create({
    owner: req.user._id,
    name,
    description,
    cuisine,
    address,
    phone,
    image,
    openingTime,
    closingTime,
    status: status || 'draft',
  });

  await User.findByIdAndUpdate(req.user._id, { restaurant: restaurant._id });

  res.status(201).json(restaurant);
};

export const updateRestaurant = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);
  if (!restaurant) {
    return res.status(404).json({ message: 'Restaurant not found' });
  }
  if (!restaurant.owner.equals(req.user._id)) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const updated = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const getRestaurant = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id).populate('owner', 'name email');
  if (!restaurant) {
    return res.status(404).json({ message: 'Restaurant not found' });
  }
  res.json(restaurant);
};

export const getMyRestaurant = async (req, res) => {
  const restaurant = await Restaurant.findOne({ owner: req.user._id });
  if (!restaurant) {
    return res.status(404).json({ message: 'Your restaurant profile was not found' });
  }
  res.json(restaurant);
};

export const listRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find().populate('owner', 'name email');
  res.json(restaurants);
};
