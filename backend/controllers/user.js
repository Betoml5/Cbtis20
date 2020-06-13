const User = require("../models/user");
const post = require("../models/post");

const controller = {
  test: async function (req, res) {
    await res.status(200).send({
      message: "Soy el metodo test",
    });
  },

  createUser: async function (req, res) {
    try {
      const user = new User();
      const params = req.body;
      user.userName = params.userName;
      user.password = params.password;
      user.singupDate = Date.now();
      user.email = params.email;
      user.type = params.type;

      user.save((err, userSaved) => {
        if (err) {
          return res
            .status(500)
            .send({ message: "Error al intentar registrar el usuario" });
        }

        if (!userSaved) {
          return res
            .status(404)
            .send({ message: "No se ha podido registrar el usuario" });
        }

        return res.status(200).send({ user: userSaved });
      });
    } catch (err) {
      res.status(500).send(err);
    }
  },

  login: async function (req, res) {
    try {
      const user = await User.findOne({
        userName: req.body.userName,
        password: req.body.password,
      }).exec();

      if (!user) {
        return response
          .status(400)
          .send({ message: "The username does not exist" });
      }

      res.send({ message: "The username and password are correct!" });
    } catch (err) {
      res
        .status(500)
        .send({ message: "El usuario o contraseña son incorrectos" });
    }
  },
};

module.exports = controller;
