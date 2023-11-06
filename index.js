const express = require ("express");
const cors = require("cors");
const router = require("./routes/handler");
const connectDB = require("./db/connect");
const app = express();
const port = process.env.port || 2000;


// ======== Middlewares ========
app.use(cors({credentials:true, origin: "http://localhost:2000"}));
app.use(express.json())
app.use("/api/v1", router)


const start = async()=>{
    try {
        await connectDB();
        console.log("Success!!!");
        app.listen(port, ()=>{
            console.log(`Server started successfully on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()