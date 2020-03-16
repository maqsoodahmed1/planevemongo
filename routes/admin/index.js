const express = require('express');
const router = express.Router();
// const { ensureAuthenticated } = require('../../helpers/auth');


router.get('/index', (req, res) => {

    res.render('admin/venues');
});

router.get('/sample', (req, res) => {
    res.render('admin/sample');
});
router.get('/enquiries', (req, res) => {
    res.render('admin/enquiries');
});
router.get('/referals', (req, res) => {
    res.render('admin/referals');
});


module.exports = router;