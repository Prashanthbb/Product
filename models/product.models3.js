const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  email:{type:String,required:true,max:100},
  housenumber: {type:Number,required:true},
  building_name:{type:String,required:true,max:100},
  landmark:{type:String,required:true,max:100},
  city:{type:String,required:true,max:100},
  area:{type:String,required:true,max:100},
  state:{type:String,required:true,max:100}

});


// Export the model
module.exports = mongoose.model('Adress', ProductSchema);
