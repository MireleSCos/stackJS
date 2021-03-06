const Sequelize = require('sequelize');

const User = require('../app/model/User');
const File = require('../app/model/File');

const databaseConfig = require('../config/database');

const models = [User, File];

class Database {
    constructor(){
        this.init();
    }
    init(){
        this.connection = new Sequelize(databaseConfig);
        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}


module.exports = new Database();