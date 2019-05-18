const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
     Name: String,
     Surname: String,
     Age: Number,
     Date_of_Visit: Date,
     Time_of_Visit: String,
     Subject_of_Inquiry: String,
     assistantr: String,
})

module.exports = mongoose.model('Posts', PostSchema);