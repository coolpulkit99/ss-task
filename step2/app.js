
var fs = require('fs');
var parse = require('csv-parse');
var express = require('express');
var app = express();
var mongoose = require('mongoose');

var inputFile = 'userDetails.csv';
console.log("Processing file");
require('dotenv').config()
var htmlTable="<table>";


var parser = parse({ delimiter: ',' }, function (err, data) {
    data.forEach(function (line,index) {
        var country = {
            id: line[0],
            phones: line[1],
            email: line[2],
            firstname: line[3],
            lastname: line[4],
            role: line[5],
            username: line[6],
            isActive: line[7],
            createdAt: line[8],
            updatedAt: line[9],
        };
        var tempvar="";
        for(let i=0;i<10;i++){
            
            tempvar+="<td>"+line[i]+"</td>"
        }
        {
            htmlTable+="<tr>"+tempvar+"</tr>"
        }

        // console.log(JSON.stringify(country));
    });
});

fs.createReadStream(inputFile).pipe(parser);

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
app.get("/",(req,res)=>{
    console.log(htmlTable);
    res.send(htmlTable+"</table>");
});

app.listen(process.env.PORT || 3000);