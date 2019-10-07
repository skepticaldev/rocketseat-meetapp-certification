/*
 * perform connection and load Models
 * */

import Sequelize from 'sequelize';
import User from '../app/models/User';
import File from '../app/models/File';

import databaseConfig from '../config/database';

const models = [User, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // Database connection
    this.connection = new Sequelize(databaseConfig);

    // Calls each model init method and pass the database connection
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
