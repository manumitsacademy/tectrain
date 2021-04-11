var mongoose = require("mongoose")
// const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://praveen:praveen123@tectrain.p7fuv.mongodb.net/vlrtech?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error!'));
const UserSchema = new mongoose.Schema({    
    "firstname": String,
    "lastname": String,
    "mobile":Number,
    "gender":String,
    "profilepicurl":{type:String,required:false},
    "password":String
    });
const User = mongoose.model('User', UserSchema);
module.exports = User;