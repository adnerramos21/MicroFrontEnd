const express = require('express');
const request = require('request');
var cors = require('cors');


const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello express');
});

app.get('/test', (req, res) => {

    const url = 'https://notka-81395.firebaseio.com/applicants.json';

    request(url, function (error, response, body) {
        // console.log(JSON.parse(body));
        // console.log({
        //     name: 'Tester',
        //     age: 30
        // });

        res.send(JSON.parse(body));
    });

});


app.get('/dashboard', (req, res) => {

    const url = 'https://notka-81395.firebaseio.com/dashboard.json';

    request(url, function (error, response, body) {
        res.send(JSON.parse(body));
    });

});

app.listen(3000, () => {
    console.log('server is up on port 3000');
});