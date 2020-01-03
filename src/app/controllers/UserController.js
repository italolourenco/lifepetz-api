const User = require("@models/User");

//store() //Cadastrar usuario
class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);

      return res.json(user);
    } catch (err) {
      console.log(err);
    }
  }

  //Listagem de usuarios
  async index(req, res) {
    try {
      const users = await User.findAll({
        orderBy: [["group", "DESC"]]
      });

      return res.json(users);
    } catch (err) {
      console.log(err);
    }
  }

  //update() //Alterar usuario
  async update(req, res) {
    try {
      const { id, user_name, email } = await User.update(req.body, {
        where: { id: req.params.id },
        returning: true
      });
      return res.json({
        id,
        user_name,
        email
      });
    } catch (err) {
      console.log(err);
    }
  }

  //delete() //Remover usuario
  async delete(req, res) {
    try {
      await User.destroy({
        where: { id: req.params.id }
      });

      return true;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new UserController();
