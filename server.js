//immport
const express = require('express');
const bodyParser = require("body-parser");
const mysql = require('mysql');
// const http = require('http');
// var path = require('path');
const routes = require("./routes/routes");

//setting up express
const app = express();

//setting up db connection
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'reactapp-cab'
});
 
connection.connect();
 
global.db = connection;



// Middlewares for Static files
// app.use("/client/assets", express.static("assets"));


//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//call the routes
app.use(routes);





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));