  
var express = require('express');
var path = require('path');
var htmlRoutes = require('./routes/htmlRoute');
var apiRoutes = require('./routes/apiRoute');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:' + PORT);
});