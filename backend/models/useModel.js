import db from '../config/db.js';

export const findUserByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

export const createUser = async ({ name, email, passwordHash, role, restaurantId }) => {
  const [result] = await db.execute(
    `INSERT INTO users (name, email, password_hash, role, restaurant_id)
     VALUES (?, ?, ?, ?, ?)`,
    [name, email, passwordHash, role, restaurantId]
  );
  return result.insertId;
};