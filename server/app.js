import express from 'express';
import { serverPort } from '../etc/config.json';
import path from 'path';

// Initialization of express application
const app = express();

app.use(express.static(path.join(__dirname, '../built/')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../built/index.html'));
})

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});