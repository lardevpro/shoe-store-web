import { v4 as uuidv4 } from 'uuid'; // para generar UUIDs en Node.js
import connect from './dbConnection.mjs';

export class ShoeModel {
  static async getAll({ brand }) {
    const client = await connect();
    try {
      const result = await client.query(
        'SELECT id, name, brand, price, size, image, category,stock FROM shoes;'
      );
      return result.rows;
    } finally {
      client.release();
    }
  }

  static async getById({ id }) {
    const client = await connect();
    try {
      const result = await client.query(
        'SELECT id, name, brand, price, size, image, category, stock FROM shoes WHERE id = $1;',
        [id]
      );
      if (result.rows.length === 0) return null;
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  static async create({ input }) {
    const { name, brand, price, size, image, category } = input;
    const client = await connect();
    const uuid = uuidv4(); // genera UUID con Node.js
    try {
      await client.query(
        `INSERT INTO shoes (id, name, brand, price, size, image, category) 
         VALUES($1, $2, $3, $4, $5, $6, $7)`,
        [uuid, name, brand, price, size, image, category]
      );

      const result = await client.query(
        'SELECT id, name, brand, price, size, image, category FROM shoes WHERE id = $1;',
        [uuid]
      );

      return result.rows[0];
    } finally {
      client.release();
    }
  }

  static async delete({ id }) {
    const client = await connect();
    try {
      // Verificar si la película existe antes de eliminarla
      const result = await client.query('SELECT id FROM shoes WHERE id = $1;', [id]);
      if (result.rows.length === 0) {
        return { message: `Zapato con id ${id} no encontrado.` };
      }

      await client.query('DELETE FROM shoes WHERE id = $1;', [id]);
      return { message: `Zapato con id ${id} eliminado.` };
    } finally {
      client.release();
    }
  }

  static async update({ id, input }) {
    const { name, brand, price, size, image, category } = input;
    const client = await connect();
    try {
      // Verificar si la película existe antes de actualizarla
      const result = await client.query('SELECT id FROM shoes WHERE id = $1;', [id]);
      if (result.rows.length === 0) {
        return { message: `Zapato con id ${id} no encontrado.` };
      }

      await client.query(
        `UPDATE shoes SET 
          name = $1,
          brand = $2,
          price = $3,
          size = $4,
          image = $5,
          category = $6
         WHERE id = $7`,
        [name, brand, price, size, image, category, id]
      );

      const updatedResult = await client.query(
        'SELECT id, name, brand, price, size, image, category FROM shoes WHERE id = $1;',
        [id]
      );

      return updatedResult.rows[0];
    } finally {
      client.release();
    }
  }
}
