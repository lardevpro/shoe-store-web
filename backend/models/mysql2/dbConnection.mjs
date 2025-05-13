// Database.js
import mysql from 'mysql2/promise';

class Database {
  constructor() {
    this.pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'shoestore',
    });
    this.isFirstConnection = true; // Variable de control para la primera conexión
  }

  async getConnection() {
    try {
      const connection = await this.pool.getConnection();
      
      // Solo hacer el log la primera vez que se conecta
      if (this.isFirstConnection) {
        console.log('Conexión exitosa a la base de datos');
        this.isFirstConnection = false;  // Cambiar a false para evitar futuros logs
      }
      
      return connection;
    } catch (err) {
      console.error('Error al conectar a la base de datos:', err);
      throw err;
    }
  }

  // Método para liberar el pool
  closePool() {
    this.pool.end();
  }
}

export default new Database();
