const express = require('express');
const router = express.Router();
var multer  = require('multer');


// Ad Model
const { AdModel } = require('../../db/models/adModel');

// ** Code for Upload Image from Form **//
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
    //   cb(null, 'client/build/static/media/');
      cb(null, 'client/public/upload/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
      }
  });

  const upload = multer({ storage });


// @route   GET api/ads
// @desc    Get All Ads
// @access  Public
router.get('/category/:category', (req, res) => {
    console.log(req.params.category);
   
    AdModel.find({category:req.params.category})
        .sort({ date: -1 })
        .then(ads => res.json(ads));
});

// @route   POST api/ads
// @desc    Creat A Post
// @access  Public
router.post('/',upload.single("file"), (req, res) => {
    let file = req.file.filename;

    console.log(file)
    
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
        file : file
        
    });

    newAd.save().then((doc) => {
        res.json(doc);
        console.log('Save Data', doc);
    }, (e) => {
        console.log('Unable to Save data',e);
    });
});
module.exports = router;