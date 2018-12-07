process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";
const config = require('config');
const Joi = require('joi');
const dogs = require('./routes/dogs');
const person = require('./routes/person');
const status = require('./routes/dogstatus');
const tags = require('./routes/tags');
const dogtag = require('./routes/dogtag');
var news = require('./routes/news')
const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser')
const app = express();
var fs = require('fs');
var util = require('util');

//Connecting To port Number
if (typeof(PhusionPassenger) !== 'undefined') {
    PhusionPassenger.configure({ autoInstall: false });
}

/*          For console.log on Silk      */
var logFile = fs.createWriteStream('log.txt', { flags: 'a' });
// Or 'w' to truncate the file every time the process starts.
var logStdout = process.stdout;

console.log = function () {
    logFile.write(util.format.apply(null, arguments) + '\n');
    logStdout.write(util.format.apply(null, arguments) + '\n');
}
console.error = console.log;


//is configuration defined?
if (!config.get('env')) {
    console.error('FATAL ERROR: Enviorment is not defined.');
    process.exit(1);
}
app.get("/", (req, res)=>{
    res.send("Hello World!")
});

//connect to database with set configuration
async function connection() {
    try {
        await db.connect(config.get('env'));
    }
    catch(e){
        console.log(e.message);
    }
}


connection();

app.use(bodyParser.json());
app.use('/api/dogs', dogs);
app.use('/api/person', person);
app.use('/api/status', status);
app.use('/api/tags', tags)
app.use('/api/dogtag', dogtag);
app.use('/api/news', news);


//const port = process.env.PORT || 3000;
if (typeof(PhusionPassenger) !== 'undefined') {
    app.listen('passenger');
} else {
    app.listen(3000);
}