const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createPool({
  host: 'localhost',
  password: 'Pato1998',
  database: 'lekaren-app',
});

app.get("/", (req, res) => {
    res.send("Hello, world!");
})

app.listen(3001, () => {
    console.log("Running on port 3001");
});
