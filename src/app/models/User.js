const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        user_name: Sequelize.STRING,
        email: Sequelize.STRING
      },
      {
        sequelize
      }
    );
  }
}

module.exports = User;
