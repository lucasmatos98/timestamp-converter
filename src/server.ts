// server.js
// where your node app starts

// init project
import * as express from 'express';
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
import * as cors from 'cors';
import { AddressInfo } from 'net';
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint...
app.get('/api/hello', function (req, res) {
    res.json({ greeting: 'hello API' });
});


// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
    const { port } = listener.address() as AddressInfo;
    console.log('Your app is listening on port ' + port);
});
