var express = require('express');
var router = express.Router();
var contacts = require('../model/contact');

router.get('/', function (req, res, next) {

    contacts(function (err, data) {
        if (err) {
            console.log(err);
            res.json({
                err: "Failed to fecth data"
            })
        } else {
            res.json({
                data: data
            })
        }

    });
});


module.exports = router;
