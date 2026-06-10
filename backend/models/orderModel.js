import db from '../config/db.js';

export const createOrder = async ({ customerId, restaurantId, subtotal, tax, total, deliveryAddress, specialInstructions }) => {
  const [result] = await db.execute(
    `INSERT INTO orders (customer_id, restaurant_id, subtotal, tax, total, delivery_address, special_instructions)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [customerId, restaurantId, subtotal, tax, total, deliveryAddress, specialInstructions]
  );
  return result.insertId;
};

export const getOrders = async ({ customerId, restaurantId } = {}) => {
  const queryParts = [];
  const values = [];

  if (customerId) {
    queryParts.push('customer_id = ?');
    values.push(customerId);
  }
  if (restaurantId) {
    queryParts.push('restaurant_id = ?');
    values.push(restaurantId);
  }

  const where = queryParts.length ? `WHERE ${queryParts.join(' AND ')}` : '';
  const [rows] = await db.execute(`SELECT * FROM orders ${where} ORDER BY created_at DESC`, values);
  return rows;
};

export const getOrderById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM orders WHERE id = ?', [id]);
  return rows[0];
};

export const updateOrderStatus = async (id, status) => {
  const [result] = await db.execute('UPDATE orders SET status = ? WHERE id = ?', [status, id]);
  return result.affectedRows;
};