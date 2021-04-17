var express = require("express");
const { Assignment } = require("./Assignment.model");
var multer  = require('multer')
var store = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/uploads")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+".jpg")
    }
})
var upload = multer({ storage: store });
var router = express.Router();
// respond with "hello world" when a GET request is made to the homepage
router.get('/', function (req, res) {
    Assignment.find({}, (err, user) => {        
        console.log(err)
        console.log(user)
        res.send(user)
    })
})
router.post('/',upload.array("assignmentImages"), function (req, res) {
    console.log(req.body)
    
    console.log(req.files);
    console.log(req.body);
    var assignmentImgUrls = req.files.map((f)=>{
        return "uploads/"+f.filename;
    })
    var assignmentDetails = {...req.body,assignmentImgUrls}
    
    var newAssignment = new Assignment(assignmentDetails);
    Assignment.insertMany(newAssignment).then(data=>{
        res.json(data)
    })    
})
module.exports=router;