require("dotenv").config()
const mongoose = require("mongoose");
const pass = process.env.password
MONGO_STRING = `mongodb+srv://PRIVACYPOLICYGENERATOR:${pass}@cluster0.ygaozlh.mongodb.net/?retryWrites=true&w=majority`

const connectdb = async()=>{
    return await mongoose.connect(MONGO_STRING)
}

module.exports = connectdb;