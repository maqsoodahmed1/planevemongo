const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');



router.get('/venues', (req, res) => {
    res.render('venues/venues');
});


module.exports = router;