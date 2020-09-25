const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
//put in address - connection url
//we can connect by refering to name using name    
    host: 'redis-server',
    //add default port
    port: 6379
});
client.set('visits', 0);


app.get('/', (req, res) => {
    //process.exit(0);
    client.get('visits', (err, visits) => {
        res.send('Number of visits: ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081')
});
