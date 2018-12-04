process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";
const config = require('config');
const Joi = require('joi');
const dogs = require('./routes/dogs');
const person = require('./routes/person');
const status = require('./routes/dogstatus');
const tags = require('./routes/tags');
const dogtag = require('./routes/dogtag');
const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser')
const app = express();

console.log(`NODE_ENV: ${process.env.NODE_ENV} `);

//is configuration defined?
if (!config.get('env')) {
    console.error('FATAL ERROR: Enviorment is not defined.');
    process.exit(1);
}

//connect to database with set configuration
db.connect(config.get('env'))
    .then()
    .catch(err=>console.log('Error'));

app.use(bodyParser.json());


app.use('/api/dogs', dogs);
app.use('/api/person', person);
app.use('/api/status', status);
app.use('/api/tags', tags)
app.use('/api/dogtag', dogtag);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));