var express = require('express');
var app = express();
var mongoose = require('mongoose');
var http = require('http');
var bodyParser = require('body-parser');
var formidable = require('formidable');
var fs = require('fs');
var multer = require('multer');

require('dotenv').config()

// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./Files");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

var upload = multer({
    storage: Storage
}).array("fileUploader");



app.get("/", (req, res) => {
    // res.send("hello<br><b>hello</b>");
    res.sendFile(__dirname + "/step1/index.html");
});

app.post("/submitted", (req, res) => {
    console.log(req.body);
    // res.send("received");
    upload(req, res, function (err) {
        if (err) {
            return res.end("Something went wrong!");
        }
        return res.end("File uploaded sucessfully!.");
    });
    // res.send("hello<br><b>hello</b>");
    // res.sendFile(__dirname+"/step1/index.html");
});
app.get("/submitted", (req, res) => {
    // console.log(req.query);
    res.send("received get");


    // res.send("hello<br><b>hello</b>");
    // res.sendFile(__dirname+"/step1/index.html");
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;
const personSchema = new Schema({
    id: { type: String, required: true },
    phones: { type: String, required: true },
    email: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    role: { type: Number, required: true },
    username: { type: String, required: true },
    isActive: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
});

// var Person = mongoose.

app.listen(process.env.PORT || 3000);