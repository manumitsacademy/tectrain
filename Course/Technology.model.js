var mongoose = require("mongoose")
const TechnologySchema = new mongoose.Schema({    
    "shortname": String,
    "longname": String
});
const Technology = mongoose.model('Technology', TechnologySchema);
const GroupTechnologySchema = new mongoose.Schema({    
    "groupID": String,
    "technlogyID": String
});
const TechnologyGroup = mongoose.model('TechnologyGroup', GroupTechnologySchema);

module.exports = {Technology,TechnologyGroup};