import { Sequelize } from 'sequelize';
import config from '../config';

const { database } = config;

export default new Sequelize(
  database.schema,
  database.username,
  database.password,
  database.sequelizeOptions,
);
