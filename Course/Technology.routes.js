var express = require("express");
const { Technology,TechnologyGroup } = require("./Technology.model");
var router = express.Router();
// respond with "hello world" when a GET request is made to the homepage
router.get('/', function (req, res) {
       Technology.find({}, (err, user) => {        
        console.log(err)
        console.log(user)
        res.send(user)
        })
})
router.post('/', function (req, res) {
    console.log(req.body)
    var technology = new Technology(req.body) ;
        technology.save(function (err) {
            if (err) throw err;
            console.log('Technology saved!');
            res.send("OK")
        });
})
router.post('/addTechnologyToGroup', function (req, res) {
    console.log(req.body)
    var technologyGroup = new TechnologyGroup(req.body);
        technologyGroup.save(function (err) {
            if (err) throw err;
            console.log('Group Added with Technology!');
            res.send("OK")
        });
})
router.get('/technologyGroups', function (req, res) {
    TechnologyGroup.find({}, (err, technologygroups) => {        
        console.log(err)
        console.log(technologygroups)
        res.send(technologygroups)
        })
})
module.exports=router;