const mongoose = require('mongoose')
 
const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    images:{
        type:Array,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    technology:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    }
});


const projects = mongoose.model('projects' , projectSchema);
module.exports = projects;