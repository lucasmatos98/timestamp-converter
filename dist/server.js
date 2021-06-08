"use strict";
// server.js
// where your node app starts
Object.defineProperty(exports, "__esModule", { value: true });
// init project
const express = require("express");
const app = express();
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/api', (req, res) => {
    const date = new Date(Date.now());
    const data = {
        unix: date.getTime(),
        utc: date.toUTCString(),
    };
    res.json(data);
});
app.get('/api/:dateString', (req, res) => {
    const { dateString } = req.params;
    let data;
    let date;
    // checks if input can be converted to number
    if (!isNaN(dateString)) {
        date = new Date(parseInt(dateString, 10));
        data = {
            unix: date.getTime(),
            utc: date.toUTCString(),
        };
        return res.json(data);
    }
    ;
    date = new Date(dateString);
    // checks if input is a valid Date
    if (isNaN(date.getTime())) {
        data = {
            error: 'Invalid Date',
        };
        return res.json(data);
    }
    // if none of the above happens just send
    data = {
        unix: date.getTime(),
        utc: date.toUTCString(),
    };
    res.json(data);
});
// listen for requests :)
const listener = app.listen(3000, function () {
    const { port } = listener.address();
    console.log('Your app is listening on port ' + port);
});
//# sourceMappingURL=server.js.map