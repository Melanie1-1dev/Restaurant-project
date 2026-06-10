import express from 'express';
import { createRestaurant, updateRestaurant, getRestaurant, getMyRestaurant, listRestaurants } from '../controllers/restaurantController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

router.get('/', listRestaurants);
router.get('/me', protect, getMyRestaurant);
router.get('/:id', getRestaurant);
router.post('/', protect, createRestaurant);
router.put('/:id', protect, updateRestaurant);

export default router;
