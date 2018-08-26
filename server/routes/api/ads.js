const express = require('express');
const router = express.Router();

// Ad Model
const { AdModel } = require('../../db/models/adModel');

// @route   GET api/ads
// @desc    Get All Ads
// @access  Public
router.get('/', (req, res) => {
    AdModel.find()
        .sort({ date: -1 })
        .then(ads => res.json(ads));
});

// @route   POST api/ads
// @desc    Creat A Post
// @access  Public
router.post('/', (req, res) => {
    const newAd = new AdModel({
        name : req.body.name,
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        address: req.body.address,
        city: req.body.city,
        email: req.body.email,
        phone: req.body.phone,
        
    });

    newAd.save().then((doc) => {
        res.json(doc);
        console.log('Save Data', doc);
    }, (e) => {
        console.log('Unable to Save data',e);
    });
});
module.exports = router;