/*
 * perform connection and load Models
 * */

import Sequelize from 'sequelize';
import User from '../app/models/User';
import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // Database connection
    this.connection = new Sequelize(databaseConfig);

    // Calls each model init method and pass the database connection
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
