// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://praveen:praveen123@cluster0.elslk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var express = require('express')
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var User = require("./User")
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
      res.send("Helloo")
})
app.post('/', function (req, res) {
    console.log(req.body)
    var user = new User(req.body) ;
        user.save(function (err) {
        if (err) throw err;
        console.log('User saved!');
        res.send("OK")
        });
})
app.listen(process.env.PORT,()=>{console.log("running on 3400")})