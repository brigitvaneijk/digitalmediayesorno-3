// Run by cd'ing to the folder of interest and typing "node save-answer.js" in Terminal
'use strict';

// Load all the stuff you need
const fs = require('fs');
const express = require('express')
const bodyParser = require('body-parser');

var app = express();
var path = require('path');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Make sure you can find the right folders
app.use(express.static(__dirname + '/style'));
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/fonts')); 
app.use(express.static(__dirname + '/img')); 

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Run a localhost on port 3000
app.listen(3000, listening);

function listening() {
	console.log( "listening");
}

// Do a thing on submitting the form
app.post("/handle-form-data", (req, res) => {
  var d = req.body;
  console.log(d);
  let data = JSON.stringify(d);
  let p = "data/" ;
  var date = new Date();

  fs.writeFileSync(p + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds()  +'.json', data, finished);

})

function finished(err) {
  console.log('success');
}

//       fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data){
//         if (err){
//             console.log(err);
//         } else {
//         obj = JSON.parse(data); //now it an object
//         obj.entry.push({question: question, answer:answer}); //add some data
//         json = JSON.stringify(obj); //convert it back to json
//         fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back
//   }});





// $(document).ready( function() {
//   submitData();
// })
//
//
// function submitData() {
//   $('.knop').click( function() {
//     let question = $('.inputquestion').val();
//     let answer = $('input[name=answer]').val();
//
//     console.log(question + ", " + answer);
//

//   })
// }
