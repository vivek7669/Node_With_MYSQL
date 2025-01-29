require("dotenv").config();
const express = require("express");
const db = require("./config/db");
const IndexRoute = require("./routers/index.route");
(async () => {
   try {
     db.authenticate();
     console.log("Database Is Authenticated Successfully.")
     db.sync();
     console.log("Database Is sync Successfully.")
   } catch (error) {
        console.log("error : ",error),
        process.exit(1);
   }
})()

const app = express();
const port = process.env.PORT || 3040;
app.use(express.json());
app.use(express.urlencoded({extended : true}))

// app.get("",(req,res)=>{ res.status(200).send({"message" : "Mysql Server is Arrived !"}) })
app.use("/",IndexRoute)

app.listen(port , ()=>{
    console.log(`Server Running On the port Number Is http://localhost:${port}.`)
})