import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Restaurant from '../models/Restaurant.js';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
};

export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email, and password are required' });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email is already registered' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword, role: role || 'customer' });
  if (!user) {
    return res.status(500).json({ message: 'Failed to create user' });
  }

  const token = generateToken(user._id);
  res.status(201).json({
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
    token,
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = generateToken(user._id);
  res.json({
    user: { id: user._id, name: user.name, email: user.email, role: user.role, restaurant: user.restaurant },
    token,
  });
};

export const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user._id).select('-password').populate('restaurant');
  res.json(user);
};

export const linkRestaurantToUser = async (userId, restaurantId) => {
  await User.findByIdAndUpdate(userId, { restaurant: restaurantId });
};
