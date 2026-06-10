import db from '../config/db.js';

export const createOrderItems = async (orderId, items) => {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  const values = items.flatMap((item) => [orderId, item.menuItemId, item.quantity, item.price]);
  const placeholders = items.map(() => '(?, ?, ?, ?)').join(', ');

  const [result] = await db.execute(
    `INSERT INTO order_items (order_id, menu_item_id, quantity, price) VALUES ${placeholders}`,
    values
  );
  return result.insertId;
};

export const getOrderItemsByOrderId = async (orderId) => {
  const [rows] = await db.execute('SELECT * FROM order_items WHERE order_id = ?', [orderId]);
  return rows;
};

export const deleteOrderItemsByOrderId = async (orderId) => {
  const [result] = await db.execute('DELETE FROM order_items WHERE order_id = ?', [orderId]);
  return result.affectedRows;
};