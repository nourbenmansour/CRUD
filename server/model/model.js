const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    description : {
        type: String,
        required: true,
        
    },
    Latitude: {
        type: String,
        required: true,
        
    },
    Longitude: {
        type: String,
        required: true,
        
    },
    Adress: {
        type: String,
        required: true,
        
    },
    sector : String,
    
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;