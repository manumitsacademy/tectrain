var express = require("express");
var router = express.Router();
var {User, Group} = require("./User.model")
// respond with "hello world" when a GET request is made to the homepage
router.get('/', function (req, res) {
       User.find({}, (err, user) => {        
        console.log(err)
        console.log(user)
        res.send(user)
        })
})
router.post('/', function (req, res) {
    console.log(req.body)
    var user = new User(req.body) ;
        user.save(function (err) {
        if (err) throw err;
        console.log('User saved!');
        res.send("OK")
        });
})
router.post('/addUsersToGroup', function (req, res) {
    console.log(req.body)
    var group = new Group(req.body) ;
        group.save(function (err) {
        if (err) throw err;
        console.log('Group saved!');
        res.send("OK")
        });
})
router.get('/usergroups', function (req, res) {
    Group.find({}, (err, group) => {        
     console.log(err)
     console.log(group)
     res.send(group)
     })
})
router.get("/userbymobile/:mobile",function (req, res) {
    User.find({mobile:req.params.mobile}, (err, user) => {        
     console.log(err)
     console.log(user)
     res.send(user)
     })
})
module.exports=router;