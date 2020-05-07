

const express = require('express');
const PostController = require('../controllers/post')

const router = express.Router();

const multipart = require('connect-multiparty')
const multipartMiddleware = multipart({uploadDir: './uploads'})

    router.get('/home', PostController.test);
    router.post('/save-post', PostController.savePost)
    router.get('post/:id?', PostController.getPost)
    router.get('/posts', PostController.getPosts)



 module.exports = router;