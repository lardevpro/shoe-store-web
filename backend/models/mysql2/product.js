import { v4 as uuidv4 } from 'uuid' // para generar UUIDs en Node.js
import Database from './dbConnection.mjs'

export class ProductModel {
  static async getAll ({ genre }) {
    const client = await Database.connect()
    try {
      const result = await client.query(
        'SELECT * FROM products;'
      )
      return result.rows
    } finally {
      client.release()
    }
  }

  static async getById ({ id }) {
    const client = await Database.getConnection()
    try {
      const [rows] = await client.execute(
        'SELECT * FROM products WHERE id = ?;', [id]
      )

      if (rows.length === 0) return null
      return rows
    } finally {
      client.release()
    }
  }

  static async create ({ input }) {
    const { productName, brand, price, size, image, category } = input
    const client = await Database.getConnection()
    const uuid = uuidv4() // genera UUID con Node.js

    try {
      await client.execute(
        `INSERT INTO products (id, productName, brand, price, size, image, category) 
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [uuid, productName, brand, price, size, image, category]
      )

      const [result] = await client.execute(
        'SELECT * FROM products WHERE id = ?;', [uuid]
      )

      return result
    } finally {
      client.release()
    }
  }

  static async delete ({ id }) {
    const client = await Database.getConnection()
    try {
      // Verificar si el producto existe antes de eliminarlo
      const [result] = await client.execute('SELECT id FROM products WHERE id = ?;', [id])
      if (result.length === 0) {
        return { message: `Producto con id ${id} no encontrado.` }
      }

      await client.execute('DELETE FROM products WHERE id = ?;', [id])
      return { message: `Producto con id ${id} eliminado.` }
    } finally {
      client.release()
    }
  }

  static async update ({ id, input }) {
    const { productName, brand, price, size, image, category } = input
    const client = await Database.getConnection()

    try {
      // Verificar si el producto existe
      const [rows] = await client.execute('SELECT id FROM products WHERE id = ?', [id])

      if (rows.length === 0) {
        return { message: `Producto con id ${id} no encontrado.` }
      }

      // Actualizar los campos
      await client.execute(
        `UPDATE products SET 
          productName = ?, 
          brand = ?, 
          price = ?, 
          size = ?, 
          image = ?, 
          category = ? 
        WHERE id = ?`,
        [productName, brand, price, size, image, category, id]
      )

      const [updated] = await client.execute('SELECT * FROM products WHERE id = ?', [id])

      return updated[0]
    } finally {
      client.release()
    }
  }
}
