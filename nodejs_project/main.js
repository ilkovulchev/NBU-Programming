// var fs = require("fs");
//
// var data = fs.readFileSync('input.txt');
//
// console.log(data.toString());
// console.log("Program Ended");

// var fs = require("fs");
//
// fs.readFile('input.txt', function (err, data) {
//    if (err) return console.error(err);
//    console.log(data.toString());
// });
//
// console.log("Program Ended");

var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8.
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");
