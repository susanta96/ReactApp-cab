//immport
const express = require('express');
const bodyParser = require("body-parser");
const mysql = require('mysql');
const routes = require("./routes/routes");
const cor = require('cors');
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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cor());

//call the routes
app.use(routes);





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));