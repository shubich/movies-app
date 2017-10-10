import express from 'express';
import { serverPort } from '../etc/config.json';

// Initialization of express application
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// RESTful api handlers
// ...

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});