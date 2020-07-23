'use strict'

const User = require("../models/user");
var fs = require('fs');
var path = require('path');

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
      user.email = params.email;
      user.type = params.type;
      user.image = null;

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
        state: 'success',
        user
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

  uploadImage: async function(req, res){
    var userId = req.params.id;
    var fileName = "Imagen no subida...";

    if (req.files) {
      var filePath = req.files.image.path;
			var fileSplit = filePath.split('/');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('.');
			var fileExt = extSplit[1];
      
      if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				User.findByIdAndUpdate(userId, {image: fileName}, {new: true}, (err, userUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!userUpdated) return res.status(404).send({message: 'El usuario no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						user: userUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}
  },

  getImageFile: async function(req, res){
    var file = req.params.image;
    var path_file = './uploads/'+file;

    fs.exists(path_file, exists => {
      if (exists) {
        return res.sendFile(path.resolve(path_file));
      } else {
        return res.status(200).send({
          message: 'No existe la imagen...'
        })
      }
    })
  }

};

module.exports = controller;
