const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('./connection.js');
const router=require("./API/Authentication.js");
const app = express();

app.use(bodyParser.json());
app.use('/api',router);

app.use(express.static(path.join(__dirname, 'staticFiles')));

const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
