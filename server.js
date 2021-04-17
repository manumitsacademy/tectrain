// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://praveen:praveen123@cluster0.elslk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var express = require('express')
var app = express();
var mongoose = require("mongoose")
app.use(express.static(__dirname+"/public"))
// const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://praveen:praveen123@tectrain.p7fuv.mongodb.net/vlrtech?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error!'));
var userroutes = require("./User/User.routes")
var technologyroutes = require("./Course/Technology.routes")
var assignmentroutes = require("./Course/Assignment.routes")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user",userroutes)
app.use("/technology",technologyroutes)
app.use("/assignment",assignmentroutes)
app.listen(process.env.PORT||3400,()=>{console.log("running on "+process.env.PORT||3400)})