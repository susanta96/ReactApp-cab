//immport
const express = require('express');
const bodyParser = require("body-parser");
// const routes = require("./routes/routes");
const cor = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./Schema/Schema');
// const db = require('./db');
//setting up express
const app = express();


//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//allow cross-origin requests
app.use(cor());

//call the routes
// app.use(routes);

//Call the Graphql
app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));