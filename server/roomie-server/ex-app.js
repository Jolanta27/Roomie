const path = require('path');
const express = require('express');
const debug = require("debug")("server");

const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        method: "GET"
        })
    );

app.use(express.static(path.resolve(__dirname, '../roomie/build')));

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});
//All other GET requests not handled before will return React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../roomie/build', 'index.html'));
});

app.listen(PORT, () => {
    debug(`Server listening on ${PORT}`);
});