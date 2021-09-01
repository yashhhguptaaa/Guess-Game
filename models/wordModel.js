const mongoose = require('mongoose');
const wordSchema = mongoose.Schema({
    word : {type : String , require},
    image : {type : String , require},
} ,{
    timestamps:true    ,
});

const wordModel = mongoose.model('words',wordSchema);
module.exports = wordModel;