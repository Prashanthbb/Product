// const Product = require('../models/product.models');
// const Product2 = require('../models/product.models2');
// const Product3 = require('../models/product.models3');

const MongoClient = require('mongodb').MongoClient;
const assertabc = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const DatabaseName = 'curd2';

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.product_create = function(req,res){
  console.log(req.body);
  let insert_data = {
    firstname:req.body.firstname,
    secondname:req.body.secondname,
    age:req.body.age,
    gender:req.body.gender,
    email: req.body.email,
    password:req.body.password
  }

  // created_date:new Date(),
  // updated_at:new Date()

  MongoClient.connect(url, function(err, client) {
    assertabc.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(DatabaseName);
    db.collection('users').insert(insert_data, function(err,result){
      assertabc.equal(null, err);
      client.close();
      console.log(result);

      res.send('User signup successfully from new')
    })
  });
};


exports.product_create1 = function(req,res){
  console.log(req.body);
  let product2 = ({
    email: req.body.email,
    write_post:req.body.write_post,
    date :new Date()

  })
  MongoClient.connect(url, function(err, client) {
    assertabc.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(DatabaseName);
    db.collection('status').insert(product2, function(err,result){
      assertabc.equal(null, err);
      client.close();
      // console.log(result);

      res.send('status created successfully from new')
    })
  });
};


exports.get_all_posts = function(req,res){
    var where={
      email: req.query.email
    };
  MongoClient.connect(url, function(err, client) {
    assertabc.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(DatabaseName);

    db.collection('status').find(where).toArray( function(err,results){
      assertabc.equal(null, err);
      client.close();
      // console.log(results);
      if(results.length > 0){
        console.log("===========================================================");
        // console.log(results);
        res.render(__dirname + "/../views/Table2.ejs",{results : results});
      }
    })
  });
};


exports.product_create2 = function(req,res){
  console.log(req.body);
  let product3 =({
    email: req.body.email,
    housenumber: req.body.housenumber,
    building_name:req.body.building_name,
    landmark:req.body.landmark,
    city:req.body.city,
    area:req.body.area,
    state:req.body.state

  })
      where={
        email:req.body.email
      };
    MongoClient.connect(url, function(err, client) {
      assertabc.equal(null, err);
      console.log("Connected successfully to server");

      const db = client.db(DatabaseName);
            db.collection('Adress').find(where).toArray( function(err,results){
              // assertabc.equal(null, err);
              // client.close();

              if(results.length<8){

              db.collection('Adress').insert(product3, function(err,results){
                assertabc.equal(null, err);
                client.close();
                res.send('Adress created successfully from new')
              })
            }
            else
            {
              res.send('limit exceed')
            }
            console.log(results.length);

        })
    });
};


exports.get_all_adresses = function(req,res){
  decoded_token = jwt.verify(req.body.token, 'my-secret-code');
  if(decoded_token == false){
    res.send({"message" : "authorization failed"})
  }
  console.log("came to address");
  var where={
    email: req.query.email
  };
  console.log("where");
  console.log(where);
  MongoClient.connect(url, function(err, client) {
    assertabc.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(DatabaseName);

    db.collection('Adress').find(where).toArray( function(err,results){
      assertabc.equal(null, err);
      client.close();
      // console.log(results);
      if(results.length > 0){
        console.log("===========================================================");
        // console.log(results);
        res.render(__dirname + "/../views/Table3.ejs",{results : results});
      }
    })
  });
};


exports.product_create3 = function(req,res){
  console.log(req.body);
  let product3 =({
    email:req.body.email,
    Name: req.body.Name,
    Details: req.body.Details,
    Have_a_question:req.body.Have_a_question
  })
  where={
        email:req.body.email
};
  MongoClient.connect(url, function(err, client) {
    assertabc.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(DatabaseName);
    db.collection('AddedItem').find(where).toArray( function(err,results){
      // assertabc.equal(null, err);
      // client.close();

      if(results.length<8){

        db.collection('AddedItem').insert(product3, function(err,results){
          assertabc.equal(null, err);
          client.close();
          res.send('Item created successfully from new')
        })
      }
      else
      {
        res.send('limit exceed')
      }
      console.log(results.length);

    })
  });
};

exports.get_all_Items = function(req,res){
  console.log("came to It");
  var where={
    email: req.query.email
  };
  console.log("where");
  console.log(where);
  MongoClient.connect(url, function(err, client) {
    assertabc.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(DatabaseName);

    db.collection('AddedItem').find(where).toArray( function(err,results){
      assertabc.equal(null, err);
      client.close();
      // console.log(results);
      if(results.length > 0){
        console.log("===========================================================");
        // console.log(results);
        res.render(__dirname + "/../views/Table4.ejs",{results : results});
      }
    })
  });
};



exports.user_details = function(req,res){
  var where = {
     email: req.body.email,
     password:req.body.password
    };
    console.log("===============================================================");
    console.log(where);


  MongoClient.connect(url, function(err, client) {
    assertabc.equal(null, err);
    console.log("login to the server  successfully new");
    const db = client.db(DatabaseName);

    db.collection('users').find(where).toArray( function(err,results){

      if (err) console.log("some error"+err);
      console.log(results);
      if(results.length > 0){
        console.log("===========================================================");
        console.log(results);
        var result_data = results[0];
        var token = jwt.sign({
          data: result_data
        }, 'my-secret-code', { expiresIn: 60 * 60 * 24});
        result_data["token"] = token;
        res.render(__dirname + "/../views/Dashboard1.ejs",{result : result_data});
      }
      else
      {
        res.send("password credentials wrong")
      }
    })
  });
};


exports.user_details2 = function(req,res){
  var where = {
    email: req.query.email
    // password:req.body.password
  };
  console.log("===============================================================");
  console.log(where);

  MongoClient.connect(url, function(err, client) {
    assertabc.equal(null, err);
    console.log("login to the server  successfully new");
    const db = client.db(DatabaseName);

    db.collection('users').find(where).toArray( function(err,results){

      if (err) console.log("some error"+err);
      console.log(results);
      if(results.length > 0){
        console.log("===========================================================");
        console.log(results);
        res.render(__dirname + "/../views/Dashboard2.ejs",{result : results[0]});
      }
      else
      {
        res.send("password credentials wrong")
      }
    })
  });
};


exports.user_details3 = function(req,res){
  var where = {
    email: req.query.email
    // password:req.body.password
  };
  console.log("===============================================================");
  console.log(where);

  MongoClient.connect(url, function(err, client) {
    assertabc.equal(null, err);
    console.log("login to the server  successfully new");
    const db = client.db(DatabaseName);

    db.collection('AddedItem').find(where).toArray( function(err,results){

      if (err) console.log("some error"+err);
      console.log(results);
      if(results.length > 0){
        console.log("===========================================================");
        console.log(results);
        res.render(__dirname + "/../views/Dashboard3.ejs",{result : results[0]});
      }
      else
      {
        res.send("password credentials wrong")
      }
    })
  });
};



exports.get_all_users = function(req,res){
  var where = {
     // email: req.body.email,
     // password:req.body.password
    };

  Product.find(where, function (err, results) {
          if (err) console.log("some error"+err);
          if(results.length > 0){
            console.log("===========================================================");
            console.log(results);
          res.render(__dirname + "/../views/Table.ejs",{results : results});

        //  res.send(results)
          }
      })
};

exports.product_update = function (req, res) {
  var where = {
    email:req.body.email
    };
    var update = {
      firstname:req.body.firstname,
      secondname:req.body.secondname,
      password:req.body.password,
      email:req.body.email,
      age:req.body.age,
      gender:req.body.gender
    }
    console.log("=============update===============");
    console.log(req.body);

    MongoClient.connect(url, function(err, client) {
      assertabc.equal(null, err);
      console.log("Connected successfully to server");

      const db = client.db(DatabaseName);

    db.collection('users').updateOne(where, {$set: update}, function (err, results) {
      if (err) console.log("some error"+err);
        // console.log(results);
        var where = {
           email: req.body.email
          };
          console.log("===============================================================");
          console.log(where);
          // res.send("updated successfully")
      db.collection('users').find(where).toArray( function (err, results) {
            if (err) console.log("some error"+err);
            console.log(results);
            if(results.length > 0){
              res.render(__dirname + "/../views/Dashboard1.ejs",{result : results[0]});
            }
            else{
            res.send("password credentials wrong")
            }
        })
    });
  })
};


exports.product_update1 = function (req, res) {
  var where = {
    email:req.body.email
    };
    var update = {
      Name:req.body.Name,
      Details:req.body.Details,
      Have_a_question:req.body.Have_a_question,
      email:req.body.email
    }
    console.log("=============update===============");
    console.log(req.body);

    MongoClient.connect(url, function(err, client) {
      assertabc.equal(null, err);
      console.log("Connected successfully to server");

      const db = client.db(DatabaseName);

    db.collection('AddedItem').updateOne(where, {$set: update}, function (err, results) {
      if (err) console.log("some error"+err);
        // console.log(results);
        var where = {
           email: req.body.email
          };
          console.log("===============================================================");
          console.log(where);

          // res.send("updated successfully")
      db.collection('AddedItem').find(where).toArray( function (err, results) {
            if (err) console.log("some error"+err);
            console.log(results);
            if(results.length > 0){
              res.render(__dirname + "/../views/Dashboard4.ejs",{result : results[0]});
            }
            else{
            res.send("password credentials wrong")
            }
        })
    });
  })
};



exports.product_delete = function (req, res) {
  var ObjectId = require('mongodb').ObjectID;
  var where = {
    _id:ObjectId(req.query.id)
    };

    MongoClient.connect(url, function(err, client) {
      assertabc.equal(null, err);
      console.log("Connected successfully to server");
      const db = client.db(DatabaseName);

    db.collection("Adress").deleteOne(where, function (err,result)  {
        if (err) return next(err);
        // res.send('Deleted successfully!');
        console.log("redirecting");
        res.redirect('/read_adresses?email='+req.query.email)

    })
  })
};


exports.product_delete1 = function (req, res) {
  var ObjectId = require('mongodb').ObjectID;
  var where = {
    _id:ObjectId(req.query.id)
    };

    MongoClient.connect(url, function(err, client) {
      assertabc.equal(null, err);
      console.log("Connected successfully to server");
      const db = client.db(DatabaseName);

    db.collection("AddedItem").deleteOne(where, function (err,result)  {
        if (err) return next(err);
        // res.send('Deleted successfully!');
        console.log("redirecting");
        res.redirect('/read_Items?email='+req.query.email)

    })
  })
};
