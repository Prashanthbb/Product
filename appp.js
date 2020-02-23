var express = require('express');
var bodyParser = require('body-parser');
// var fs = require("fs");
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

// app.get("/test1",function(req,res){
//   var content = fs.readFileSync("dummy.json");
//   var content = JSON.parse(content);
//
//   console.log(content);
//   console.log("\n *EXIT* \n");
//   res.send(content[1])
// })



let port = 5000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
