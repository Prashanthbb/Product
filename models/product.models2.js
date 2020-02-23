const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({

    email:{type:String,required:true,max:100},
    write_post:{type:String,required:true,max:100},
    date: {type:Date}
});


// Export the model
module.exports = mongoose.model('posts', ProductSchema);
