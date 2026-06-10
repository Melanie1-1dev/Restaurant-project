import db from '../config/db.js';

export const findRestaurantById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM restaurants WHERE id = ?', [id]);
  return rows[0];
};

export const findRestaurantByOwnerId = async (ownerId) => {
  const [rows] = await db.execute('SELECT * FROM restaurants WHERE owner_id = ?', [ownerId]);
  return rows[0];
};

export const listRestaurants = async () => {
  const [rows] = await db.execute('SELECT * FROM restaurants ORDER BY created_at DESC');
  return rows;
};

export const createRestaurant = async ({ ownerId, name, description, cuisine, address, phone, imageUrl, openingTime, closingTime, status }) => {
  const [result] = await db.execute(
    `INSERT INTO restaurants (owner_id, name, description, cuisine, address, phone, image_url, opening_time, closing_time, status)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [ownerId, name, description, cuisine, address, phone, imageUrl, openingTime, closingTime, status]
  );
  return result.insertId;
};

export const updateRestaurant = async (id, data) => {
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
  if (data.cuisine !== undefined) {
    fields.push('cuisine = ?');
    values.push(data.cuisine);
  }
  if (data.address !== undefined) {
    fields.push('address = ?');
    values.push(data.address);
  }
  if (data.phone !== undefined) {
    fields.push('phone = ?');
    values.push(data.phone);
  }
  if (data.imageUrl !== undefined) {
    fields.push('image_url = ?');
    values.push(data.imageUrl);
  }
  if (data.openingTime !== undefined) {
    fields.push('opening_time = ?');
    values.push(data.openingTime);
  }
  if (data.closingTime !== undefined) {
    fields.push('closing_time = ?');
    values.push(data.closingTime);
  }
  if (data.status !== undefined) {
    fields.push('status = ?');
    values.push(data.status);
  }

  if (fields.length === 0) {
    return null;
  }

  values.push(id);
  const [result] = await db.execute(`UPDATE restaurants SET ${fields.join(', ')} WHERE id = ?`, values);
  return result.affectedRows;
};