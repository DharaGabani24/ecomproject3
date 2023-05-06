const express = require("express");
var bodyParser = require('body-parser');
const connentDB = require('./db/connect')

var cors = require('cors')
const dotenv = require('dotenv')

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config();
connentDB();

app.use('/', require('./routes/index'))
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
})