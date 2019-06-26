var express = require('express');
var app = express();



var HumanResourceController=function (req, res) {
  console.log("CAlling rest api");
  var HumanResources=[
            {firstName:'Vivek',lastName:'Musale',age:24, },
            {firstName:'Nikhil',lastname:'Wabale',age:35, },
			{Working:'Management',},
			{Payrole:15000,},
			{About:'Rockwell Automation Inc.'},
      ];
  res.send(HumanResources);
};



app.get('/HumanResources',HumanResourceController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})