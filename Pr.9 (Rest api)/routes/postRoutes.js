const express = require('express');

const routes = express.Router();

const { addPost, viewPost } = require('../controller/postController');
const { verifyToken } = require('../middleware/Auth');

// file upload
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
const upload = multer({ storage: storage }).single('image')


// routes
routes.post('/addpost',verifyToken,upload, addPost)
routes.get('/viewpost',verifyToken,viewPost)

module.exports = routes