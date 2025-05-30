// Database.js
import mysql from 'mysql2/promise'

class Database {
  constructor () {
    this.pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'shoestore'
    })
    this.isFirstConnection = true
  }

  async getConnection () {
    try {
      const connection = await this.pool.getConnection()

      if (this.isFirstConnection) {
        console.log('Conexión exitosa a la base de datos')
        this.isFirstConnection = false
      }

      return connection
    } catch (err) {
      console.error('Error al conectar a la base de datos:', err)
      throw err
    }
  }

  closePool () {
    this.pool.end()
  }
}

export default new Database()
