let express = require('express');
let router = express.Router();
let contacts = require('../model/contacts');

router.get('/', function (req, res, next) {
    contacts.find({}, function (err, data) {
        if (err) throw err;
        res.json({data: data});
    });
});


router.post('/', function (req, res, next) {
    const contact = req.body;
    contacts.create(contact, function (err, data) {
        if (err) throw err;
        res.json(data);
    })
});

router.delete('/', function (req, res, next) {
    contacts.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    })
});

router.get('/:id', function (req, res, next) {
    let id = req.params.id;
    contacts.find({id: id}, function (err, data) {
        if (err) throw err;
        res.json({data: data});
    })

});
router.delete('/:id', function (req, res, next) {
    let id = req.params.id;
    contacts.remove({id: id}, function (err, data) {
        if (err) throw err;
        res.json({data: data});
    })

});

router.put('/:id', function (req, res, next) {
    let id = req.params.id;
    const contact = req.body;
    contacts.updateOne({id:id},contact,function (err, data) {
        if(err) throw err;
        res.json(data);
    })
});

module.exports = router;
