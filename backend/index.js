const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const router = require('./routes/router')

const app = express()

/* let obj = {
    Client: "Alice",
    City: "London",
    Interests: ["football", "hiking", "gym"]
  }; */



const db = mysql.createPool({
    host:'localhost',
    user: 'root',
    password:'password',
    database:'FormDB',
})
//app.use(bodyParser.json())
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))


/* app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO FormDB.Forms (questions) VALUES (?)";
    db.query(sqlInsert, [objConverted],(err, result) =>{
        res.send("hello");
    });
    //res.send("hello rahul")
}) */

app.get('/api/get/:id', (req, res)=> {
    const id = req.params.id; // Get the 'id' parameter from the URL
    const sqlSelect = "SELECT questions FROM Forms WHERE id = ?";
    db.query(sqlSelect,[id], (err, result) => {
        result= JSON.stringify(result)
        //console.log("Query Result:" + result);
        res.send(result);
    })
})

app.post('/api/insert', (req, res) => {
    let obj = req.body.formData;
    let objConverted = JSON.stringify(obj, null, 2);
    console.log("look below");
    console.log(obj);
    const sqlInsert = "INSERT INTO Forms (questions) VALUES (?)";
    /* db.query(sqlInsert, [objConverted], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            res.status(500).send("Error inserting data" + err.message);
        } else {
            console.log("Data inserted successfully");
            res.send("Data inserted successfully");
        }
    }); */
    db.query(sqlInsert, [objConverted], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            console.log("Error 1 occur");
            res.status(500).send("Error inserting data" + err.message);
        } else {
            // Retrieve the ID of the last inserted row
            db.query("SELECT MAX(id) AS returnedID FROM Forms", (err, result) => {
                if (err) {
                    console.error("Error retrieving last inserted ID:", err);
                    res.status(500).send("Error retrieving last inserted ID" + err.message);
                } else {
                    //const lastInsertId = rows[0].id;
                    //console.log("Last inserted ID:", result);
                    //console.log("Last inserted ID:", result[0].returnedID);
                    //res.send("Send this link to share the form: http://localhost:3000/response/" + result[0].returnedID);
                    const lastInsertId = result[0].returnedID;
                    const shareLink = "http://localhost:3000/response/" + lastInsertId;
                    console.log("In the backend:" + shareLink);
                    res.send({ "link": shareLink });
                }
            });
        }
    });
})
app.listen(3001, () => {
    console.log("running on port 3001");
})