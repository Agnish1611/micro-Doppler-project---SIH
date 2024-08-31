const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const http = require('http')
const app = express();
const server = http.createServer(app)
const corsOption = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowHeader: ['Content-Type', 'Authorization']
};

app.use(cors(corsOption));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))

const setUpStartServer = () => {
    console.log("Server Started");
    server.listen(3000, () => {
        console.log("Server running at port 3000")
    })


}

setUpStartServer();