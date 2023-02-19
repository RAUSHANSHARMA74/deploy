const socket = require("socket.io")
const express = require("express")
const http = require("http")
require("dotenv").config()
const app = express()
const server = http.createServer(app)




const io = socket(server)

io.on("connection", (socket)=>{
    console.log("client is online")
})



let port = process.env.port || 3000
server.listen(port, ()=>console.log(`server is running on port ${port}`))