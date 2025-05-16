import { v4 as uuidv4 } from 'uuid'; // para generar UUIDs en Node.js
import Database from './dbConnection.mjs';
import { ProductModel } from '../local-file-system-js/local-file-system';

export class ProductModel {
  
  // ✅ MODIFICADO!!!!  reemplazado el método getAll con lógica de filtrado por category y gender!!! 
  static async getAll({ category, gender }) {
    const client = await Database.getConnection();
    try {
      let query = 'SELECT * FROM products';
      const params = [];

      if (category) {
        query += ' WHERE JSON_CONTAINS(category, ?)';
        params.push(`"${category}"`);
      }

      if (gender && category === 'shoes') {
        query += params.length > 0 ? ' AND' : ' WHERE';
        query += ' JSON_CONTAINS(gender, ?)';
        params.push(`"${gender}"`);
      }

      const [rows] = await client.execute(query, params);
      return rows;
    } finally {
      client.release();
    }
  }
  static async getById({ id }) {
    const client = await Database.getConnection();

    try {
      const [rows] = await client.execute(
        'SELECT * FROM shoes WHERE id = ?;',[id]
      );

      if (rows.length === 0) return null;
      return rows;
    } finally {
      client.release();
    }
  }

  static async create({ input }) {
    const { product_name, brand, price, size, image, category } = input;
    const client = await Database.getConnection();
    const uuid = uuidv4(); // genera UUID con Node.js
    try {
      await client.execute(
        `INSERT INTO shoes (id, product_name, brand, price, size, image, category) 
         VALUES(?, ?, ?, ?, ?, ?, ?)`,
        [uuid, product_name, brand, price, size, image, category]
      );

      const [result] = await client.execute(
        'SELECT * FROM shoes WHERE id = ?;',[uuid]
      );

      return result;
    } finally {
      client.release();
    }
  }

  static async delete({ id }) {
    const client = await Database.getConnection();
    try {
      // Verificar si la película existe antes de eliminarla
      const [result] = await client.execute('SELECT id FROM shoes WHERE id = ?;', [id]);
      if (result.length === 0) {
        return { message: `Zapato con id ${id} no encontrado.` };
      }

      await client.execute('DELETE FROM shoes WHERE id = ?;', [id]);
      return { message: `Zapato con id ${id} eliminado.` };
    } finally {
      client.release();
    }
  }

  static async update({ id, input }) {
  const { product_name, brand, price, size, image, category } = input;
  const client = await Database.getConnection();

    try {
      // Verificar si el zapato existe
      const [rows] = await client.execute('SELECT id FROM shoes WHERE id = ?', [id]);

      if (rows.length === 0) {
        return { message: `Zapato con id ${id} no encontrado.` };
      }

      // Actualizar los campos
      await client.execute(
        `UPDATE shoes SET 
          product_name = ?, 
          brand = ?, 
          price = ?, 
          size = ?, 
          image = ?, 
          category = ? 
        WHERE id = ?`,
        [product_name, brand, price, size, image, category, id]
      );

     
      const [updated] = await client.execute('SELECT * FROM shoes WHERE id = ?', [id]);

      return updated[0]; 
    } finally {
      client.release(); 
    }
  }
}
