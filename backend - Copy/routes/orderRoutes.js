import express from 'express';
import { createOrder, getOrders, getOrder, updateOrderStatus } from '../controllers/orderController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

router.use(protect);
router.post('/', createOrder);
router.get('/', getOrders);
router.get('/:id', getOrder);
router.put('/:id/status', updateOrderStatus);

export default router;
