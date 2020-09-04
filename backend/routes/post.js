l

const express = require('express');
const PostController = require('../controllers/post')
const UserController = require('../controllers/user')

const router = express.Router();

const multipart = require('connect-multiparty')
const multipartMiddleware = multipart({ uploadDir: './uploads' })

    router.get('/home', PostController.test);
    router.post('/save-post', PostController.savePost)
    router.get('/post/:id?', PostController.getPost)
    router.get('/posts', PostController.getPosts)

    //USERS
    router.post('/register', UserController.createUser);
    router.post('/login', UserController.login);
    router.get('/user/:id?', UserController.getUser);
    router.post('/upload-image/:id', multipartMiddleware, UserController.uploadImage)
    router.get('/get-image/:image', UserController.getImageFile);
    router.get('/getUsers', UserController.getUsers);


 module.exports = router;