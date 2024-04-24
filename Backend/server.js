
const express = require('express');
var cors = require('cors')
const app = express();
const port = 5177;

app.use(cors())

app.get("/", (req, res) => { 
res.send('Successful response');
});

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});