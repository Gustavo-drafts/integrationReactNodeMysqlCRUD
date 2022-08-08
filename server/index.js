const express = require('express');
const app = express();
const cors = require('cors');


/** Conectando ao banco de dados */
const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user:"root",
  password:"",
  database:"crud",
});
/** --------------------------- */

app.use(cors());
app.use(express.json())

app.post('/register', (req, res) => {
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;

  let SQL = "INSERT INTO products ( name, cost, category ) VALUES (?,?,?)";

  db.query(SQL, [name, cost, category], (err, result) => {
    console.log(err);
  })
})


app.get('/getProducts', (req, res) => {
  let SQL = "SELECT * from crud.products";

  db.query(SQL, (err, result) => {
    if (err) console.log(err) 
     else res.send(result) 
  })
})


app.listen(3001, () => {console.log("Run!")})