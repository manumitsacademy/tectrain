var mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({    
    "firstname": String,
    "lastname": String,
    "mobile":Number,
    "gender":String,
    "profilepicurl":{type:String,required:false},
    "password":String
});
const User = mongoose.model('User', UserSchema);
const GroupSchema = new mongoose.Schema({
    "usermobilenumbers":[Number],
    "title":String
})
const Group = mongoose.model("Group",GroupSchema);
module.exports = {User,Group};