const express = require('express');
const request = require('request');
var cors = require('cors');


const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello express');
});

app.get('/listofapplicants', (req, res) => {
    const url = 'https://notka-81395.firebaseio.com/applicants.json';

    request(url, function (error, response, body) {
        res.send(JSON.parse(body));
    });

});

app.get('/infobox', (req, res) => {
    const url = 'https://notka-81395.firebaseio.com/dashboard/infobox.json';

    request(url, function (error, response, body) {
        res.send(JSON.parse(body));
    });
});

app.get('/topapplicants', (req, res) => {
    const url = 'https://notka-81395.firebaseio.com/dashboard/topApplicants.json';

    request(url, function (error, response, body) {
        res.send(JSON.parse(body));
    });
});

app.get('/notificationpanel', (req, res) => {
    // Coming soon
});



app.listen(3000, () => {
    console.log('server is up on port 3000');
});