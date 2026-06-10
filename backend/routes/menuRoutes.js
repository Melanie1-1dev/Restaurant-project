import express from 'express';
import { getMenuItems, getMenuItem, createMenuItem, updateMenuItem, deleteMenuItem } from '../controllers/menuController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

router.get('/', getMenuItems);
router.get('/:id', getMenuItem);
router.post('/', protect, createMenuItem);
router.put('/:id', protect, updateMenuItem);
router.delete('/:id', protect, deleteMenuItem);

export default router;
