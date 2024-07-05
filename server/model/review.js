const mongoose = require('mongoose')

const ReviewSchema  = new mongoose.Schema({
    id:{
        required:true,
        type:String
    } ,
    displayPic:{
        type:String,
        default:"",
    },
    name:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    rate:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    time:{
        type:Date,
        default:Date.now()
    }

});

module.exports = mongoose.model('Reviews' , ReviewSchema);