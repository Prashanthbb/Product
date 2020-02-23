const express = require('express');
const router = express.Router();
var path = require('path');

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controllers = require('../controllers/product.controllers');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controllers.test);
router.get('/signup', function(req,res){
  res.render(__dirname + "/../views/fbsignup.ejs");
});
router.get('/login', function(req,res){
  res.render(__dirname + "/../views/fblogin.ejs");
});

router.get('/Status_create', function(req,res){
  res.render(__dirname + "/../views/status.ejs",{result:req.query});
});

router.get('/Adress_create', function(req,res){
  res.render(__dirname + "/../views/Locator.ejs",{result:req.query});
});

router.get('/Item_create', function(req,res){
  res.render(__dirname + "/../views/Items.ejs",{result:req.query});
});



router.get('/edit-profile',product_controllers.user_details2);
router.get('/edit-item',product_controllers.user_details3);
router.post('/Status_create', product_controllers.product_create1);
router.post('/Adress_create', product_controllers.product_create2);
router.post('/Item_create', product_controllers.product_create3);



router.post('/signup', product_controllers.product_create);
router.post('/login', product_controllers.user_details);
router.post('/update', product_controllers.product_update);
router.post('/update1', product_controllers.product_update1);
router.get('/delete', product_controllers.product_delete);
router.get('/delete1', product_controllers.product_delete1);

router.get('/read_all',product_controllers.get_all_users);
router.get('/read_posts',product_controllers.get_all_posts);
router.get('/read_adresses',product_controllers.get_all_adresses);
router.get('/read_Items',product_controllers.get_all_Items);


module.exports = router;
