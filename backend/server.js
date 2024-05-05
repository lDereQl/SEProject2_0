const express = require('express')
const dotenv = require('dotenv');
const app = express()
const port = 5003


dotenv.config(); 

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.ebv.PORT || port, () => console.log(`Example app listening on port ${process.ebv.PORT}!`))