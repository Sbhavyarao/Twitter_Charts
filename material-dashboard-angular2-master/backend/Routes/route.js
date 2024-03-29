var express = require('express');
var router = express.Router();
var User = require('../models/User.js');

router.get('/', function (req, res, next) {
    User.find(function (err, users) {
        if (err) return next(err);
        res.json(users);
    });
});
router.get('/:id', function (req, res, next) {
    User.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
router.post('/', function (req, res, next) {
    User.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.put('/:id', function(req, res, next){
    User.findByIdAndUpdate(req.params.id, req.body, function (err,post){
        if (err) return next(err);
        res.json(post);
    })
})
router.delete('/:id', function(req, res, next){
    User.findByIdAndDelete(req.params.id, function (err,post){
        if (err) return next(err);
        res.json(post);
    })
})
module.exports = router;
