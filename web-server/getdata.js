const request = require('request')

const getdata = () => {
    const url = 'https://react-my-burger-e0388.firebaseio.com/orders.json';

    request({ url, json: true }, (error, { body }) => {
        console.log(body);
    })

    return null;
}

module.exports = getdata;