const mongoose = require('mongoose');
const guessSchema = mongoose.Schema({
    word : {type : String , require}
} ,{
    timestamps:true    ,
});

const guessModel = mongoose.model('guess',guessSchema);
module.exports = guessModel;