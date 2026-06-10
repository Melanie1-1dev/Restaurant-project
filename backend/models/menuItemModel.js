import db from '../config/db.js';

export const getMenuItems = async ({ restaurantId, category } = {}) => {
  const queryParts = [];
  const values = [];

  if (restaurantId) {
    queryParts.push('restaurant_id = ?');
    values.push(restaurantId);
  }
  if (category) {
    queryParts.push('category = ?');
    values.push(category);
  }

  const where = queryParts.length ? `WHERE ${queryParts.join(' AND ')}` : '';
  const [rows] = await db.execute(`SELECT * FROM menu_items ${where} ORDER BY created_at DESC`, values);
  return rows;
};

export const getMenuItemById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM menu_items WHERE id = ?', [id]);
  return rows[0];
};

export const createMenuItem = async ({ restaurantId, name, description, category, price, imageUrl, status }) => {
  const [result] = await db.execute(
    `INSERT INTO menu_items (restaurant_id, name, description, category, price, image_url, status)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [restaurantId, name, description, category, price, imageUrl, status]
  );
  return result.insertId;
};

export const updateMenuItem = async (id, data) => {
  const fields = [];
  const values = [];

  if (data.name !== undefined) {
    fields.push('name = ?');
    values.push(data.name);
  }
  if (data.description !== undefined) {
    fields.push('description = ?');
    values.push(data.description);
  }
  if (data.category !== undefined) {
    fields.push('category = ?');
    values.push(data.category);
  }
  if (data.price !== undefined) {
    fields.push('price = ?');
    values.push(data.price);
  }
  if (data.imageUrl !== undefined) {
    fields.push('image_url = ?');
    values.push(data.imageUrl);
  }
  if (data.status !== undefined) {
    fields.push('status = ?');
    values.push(data.status);
  }

  if (fields.length === 0) {
    return null;
  }

  values.push(id);
  const [result] = await db.execute(`UPDATE menu_items SET ${fields.join(', ')} WHERE id = ?`, values);
  return result.affectedRows;
};

export const deleteMenuItem = async (id) => {
  const [result] = await db.execute('DELETE FROM menu_items WHERE id = ?', [id]);
  return result.affectedRows;
};