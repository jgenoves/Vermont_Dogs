const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json([
        {author: "Jordan Genovese", date: "12/1/18", title: "Vermont Dogs is being created!",
        content: "We are currently working on bringing you a robust website for the Vermont Dog Shelter!"},

        {author: "Billy Risigo", date: "12/2/18", title: "Welcome to Vermont Dogs",
            content: "The official page for the Vermont dog shelter!"}
    ]);
});

module.exports = router;