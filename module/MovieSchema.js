const mongoose=require("mongoose")
const Movie= new mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
    Released:{
        type:Date,
        required:true
        
    },
    Genre:{
        type:String,
        required:true
    },
    imdbRating:{
        type:Number,
        required:true
    },
    Country:{
        type:String,
        required:true
    },
    Poster:{
        type:String,

    }


})
module.exports = mongoose.model("Movie", Movie);