var mongoose = require("mongoose")

const AssignmentSchema = new mongoose.Schema({    
    "title": String,
    "technology": String,
    "sequenceNumber":Number,
    "assignmentImgUrls":[String]
});
const Assignment = mongoose.model('Assignment', AssignmentSchema);

module.exports = {Assignment};