import { Sequelize } from 'sequelize';
import 'dotenv/config';

class Connection {
  private readonly connection = new Sequelize('task', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
  });

  async start() {
    try {
      await this.connection.authenticate();
      console.log('Connection has been established successfully.');
      return this.connection;
    } catch (error) {
      // sequelize.close()
      console.error('Unable to connect to the database:', error);
    }
  }
}

export const connection = new Connection().start();
