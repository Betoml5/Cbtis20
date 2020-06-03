const Post = require('../models/post')

const controller = {
  test: function (req, res) {
    return res.status(200).send({
      message: "Soy el metodo test",
    });
  },

  savePost: function (req, res) {
    const post = new Post();

    const params = req.body;
    post.title = params.title;
    post.content = params.content;
    post.date = params.date;
    post.category = params.category;
    post.author = params.author;

    post.save((err, postStored) => {
      if (err)
        return res.status(500).send({ message: "Error al guardar el post" });

      if (!postStored)
        return res.status(404).send({ message: "No se ha podido guardar el post" });

      return res.status(200).send({ post: postStored });
    });
  },

  getPost: function (req, res) {
    const postId = req.params.postId;

    if (postId === null)
      return res.status(404).send({ message: "El post no existe" });

    Post.findById(postId, (err, post) => {
      if (err)
        return res.status(500).send({ message: "Error al devovler los datos" });

      return res.status(200).send({
        post,
      });
    });
  },

  getPosts: function (req, res) {
    Post.find({})
      .sort("-date")
      .exec((err, posts) => {
        if (err)
          return res
            .status(500)
            .send({ message: "Error al devolver los datos" });

        if (!posts)
          return res.status(404).send({ message: "No hay posts por mostrar" });

        return res.status(200).send({ posts });
      });
  }
};
module.exports = controller;
