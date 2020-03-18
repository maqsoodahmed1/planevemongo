const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const path = require('path');
const multer = require('multer')
const {upload} = require('../routes/upload')


router.get('/venues', (req, res) => {
    res.render('venues/venues');
});




  router.post('/upload', (req, res) => {
    upload(req, res, (err) => {
      if(err){
          console.log(err)
        res.render('index', {
          msg: err
        });
      } else {
        if(req.file == undefined){
            console.log('undef')
          res.render('index', {
            msg: 'Error: No File Selected!'
          });
        } else {
           console.log('error is undefined')
          res.render('index', {
            msg: 'File Uploaded!',
            file: `uploads/${req.file.filename}`
          });
          console.log(req.file.path)
        }
      }
    });
  });




module.exports = router;