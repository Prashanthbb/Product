const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    firstname: {type: String, required: true, max: 100},
    secondname:{type: String,required:true,max:100},
    email:{type:String,required:true,max:100},
    password:{type:String,required:true,max:100},
    gender:{type:String,required:true,max:100},
    age:{type:Number,required:true},
    name:{type:String},
    _id:{type:Number,required:true}
    // write_post:{type:String,required:true,max:100}
});


// Export the model
module.exports = mongoose.model('eee', ProductSchema);
