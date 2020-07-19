const User = require("../models/user");
const bcrypt = require("bcrypt");

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
      const user = await User.findOne({ userName: req.body.userName }).exec();
      if(!user) {
          return res.status(400).send({ 
            message: "The username does not exist",
            state: 'failed'
         });
      }
      user.comparePassword(req.body.password, (error, match) => {
          if(!match) {
              return res.status(400).send({ 
                message: "The password is invalid",
                status: 'failed'
               });
          }
      });
      res.send({ 
        message: "The username and password combination is correct!",
        state: 'success'
     });
  } catch (error) {
      response.status(500).send(error);
  }
        
  },

  getUser: async function (req, res) {
    try {
      const userId = req.params.id;

      if (userId == null)
        return res.status(404).send({ message: "El usuario no existe" });

      User.findById(userId, (err, user) => {
        if (err)
          return res
            .status(500)
            .send({ message: "Error al devovler los datos" });

        if (!user)
          return res.status(404).send({ message: "El usuario no existe" });

        return res.status(200).send({ user });
      });
    } catch (error) {
      res.status(500).send({ message: "Error al intentar buscar el usuario" });
    }
  },
};

module.exports = controller;
