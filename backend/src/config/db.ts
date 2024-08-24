import { Sequelize } from 'sequelize';
import 'dotenv/config';

class Connection {
  private readonly connection = new Sequelize('task', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
  });

  start() {
    return this.connection;
  }
}

export const sequelize = new Connection().start();
