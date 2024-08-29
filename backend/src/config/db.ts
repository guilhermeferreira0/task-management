import { Sequelize } from 'sequelize';
import 'dotenv/config';

if (!process.env.MYSQL_DATABASE) throw new Error('DOTENV Mysql database undefined');
if (!process.env.MYSQL_USERNAME) throw new Error('DOTENV Mysql username undefined');
if (!process.env.MYSQL_PASSWORD) throw new Error('DOTENV Mysql password undefined');
if (!process.env.MYSQL_HOST) throw new Error('DOTENV Mysql host undefined');

class Connection {
  private readonly connection = new Sequelize(
    process.env.MYSQL_DATABASE as string, 
    process.env.MYSQL_USERNAME as string, 
    process.env.MYSQL_PASSWORD as string, {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST as string,
  });

  start() {
    return this.connection;
  }
}

export const sequelize = new Connection().start();
