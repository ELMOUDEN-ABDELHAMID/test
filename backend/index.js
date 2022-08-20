const express = require("express");
const app = express();

const cors = require("cors");
//get the database
const db = require("./db");

//CORS
app.use(cors());
app.use(express.json());

//Start the server on port 5000
app.listen(5000, () => {
  console.log("[LISENING]: Start the server on port 5000...");
});

//get data from db
app.get("/", async (req,res)=>{
    try {
        const names = await db.query('SELECT * FROM test');
        res.json(names.rows);
    } catch (error) {
        console.error(error.message);
    }
})