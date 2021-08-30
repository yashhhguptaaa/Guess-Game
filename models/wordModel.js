const mongoose = require('mongoose');
const wordSchema = mongoose.Schema({
    word : {type : String , require},
    hints: []
} ,{
    timestamps:true    ,
});

const wordModel = mongoose.model('words',wordSchema);
module.exports = wordModel;