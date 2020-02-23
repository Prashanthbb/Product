var express = require('express');
var bodyParser = require('body-parser');

const multer = require('multer');
// initialize our express app
var Product = require('./routes/product.routes');

var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 6000));
app.use(express.static(__dirname + '/views'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(Product);


const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/crud2';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));




let port = 5000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
// const MongoClient = require('mongodb').MongoClient;
// const assertabc = require('assert');
// var ObjectId = require('mongodb').ObjectID;
// // var config = require('./config.js');
// var request = require('request');
//
// const url = 'mongodb://localhost:27017';
//
// const DatabaseName = 'ride_details';
// exports.ride_create = function(req,res){
//   let insert_data = {
//     authorizationToken : "cuosIaNyN460FN26WV0YVhKW7GMOVd9wLIjhiooebKs=",
//     user_id : "11714",
//     circle_id : "24",
//     userDetails :req.body.userDetails ,
//     startAddress :req.body.startAddress ,
//     startLat :req.body.startLat,
//     startLon :req.body.startLon,
//     startCity :req.body.startCity,
//     endAddress :req.body.endAddress,
//     endLat  :req.body.endLat ,
//     endLon  :req.body.endLon ,
//     endCity  :req.body.endCity ,
//     startTime  :req.body.startTime ,
//     carType  :req.body.carType ,
//     packageDetails   :req.body.packageDetails  ,
//     rideType   :req.body.rideType  ,
//     rentalType   :req.body.rentalType  ,
//     returnRide    :req.body.returnRide   ,
//     rideComments    :req.body.rideComments   ,
//     statusCallBack   :req.body.statusCallBack
//   }
//   for (var each_key in insert_data) {
//     if (insert_data[each_key] === "undefined" || insert_data[each_key] === "" ) {
//       res.send({
//              "response": "data missing: "+ each_key,
//              "success": "false"
//             })
//       return true;
//     }
//   }
//   var Access_data = {
//       authorizationToken : "cuosIaNyN460FN26WV0YVhKW7GMOVd9wLIjhiooebKs=",
//       user_id : 11714,
//       circle_id : 24
//     }
//     console.log(insert_data);
//     request({
//       url: 'https://testapis.hopon.co.in/requests/submitnewride',
//       json: insert_data,
//       headers: {
//         'x-api-key': 'MIqXWCGGEfa3aHPQgYe0I3COYaxtl1I540YCPa4n',
//         'Content-Type' : 'application/json'
//       },
//       method: 'post'
//     },function(error, response, result) {
//       if (!error && response.statusCode == 200){
//            res.send(response);
//            return true;
//          }
//    })
//
// //   MongoClient.connect(url, function(err, client) {
// //     assertabc.equal(null, err);
// //     console.log("Connected successfully to server");
// //
// //     const db = client.db(DatabaseName);
// //     console.log("Here 1sdfdsfs");
// //     console.log(insert_data);
// //
// //     db.collection('booked_details').insert(insert_data, function(err,result_data){
// //       assertabc.equal(null, err);
// //       var insert_id = result_data.insertedIds ? result_data.insertedIds[0] : "";
// //       if(!insert_id){
// //         res.send({
// //                "response": "DB error : cannot insert data",
// //                "success": "false"
// //               })
// //         return true;
// //       }
// //       console.log("Here 1");
// //       console.log(insert_data);
// //       console.log("sdfcdsfsd");
// //       request({
// //         url: 'https://testapis.hopon.co.in/requests/submitnewride', //URL to hit
// //         json: insert_data,
// //         headers: {
// //           'x-api-key': 'MIqXWCGGEfa3aHPQgYe0I3COYaxtl1I540YCPa4n',
// //           'Content-Type' : 'application/json'
// //         },
// //         method: 'post'
// //       },function(error, response, result) {
// //         if (!error && response.statusCode == 200){
// //           // console.log(insert_id);
// //           // var where = {
// //           //   _id : ObjectId(insert_id)
// //           // }
// //              // update_data ["authorizationToken"] = response["authorizationToken"]
// //              // update_data ["circle_id"] = response ["circle_id"]
// //              // update_data ["user_id"] = response ["user_id"]
// //              res.send(response);
// //              return true;
// //
// //              db.collection('users').update(where, {$set: update_data}, function (err, update_result) {
// //
// //                if (err) console.log("some error"+err);
// //                if(update_result){
// //                    res.send({
// //                        "response": "Ride Booked Successfully",
// //                        "success": true,
// //                        "seekerIds": response["seekerIds"]
// //                      })
// //                    }
// //                     })
// //         console.log("Here 2")
// //         console.log(response);
// //         res.send("Gotcha");
// //       }
// //       else{
// //         res.send(error);
// //       }
// //       console.log(result);
// //       res.send({error,response,result})
// //     })
// //   })
// // })
// };
