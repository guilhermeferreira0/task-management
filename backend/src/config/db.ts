import { Sequelize } from 'sequelize';
import 'dotenv/config';

class Connection {
  private readonly connection = new Sequelize('task', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
  });

  async testConnection() {
    try {
      await this.connection.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      // sequelize.close()
      console.error('Unable to connect to the database:', error);
    }
  }

  start() {
    return this.connection;
  }
}

export const sequelize = new Connection().start();
