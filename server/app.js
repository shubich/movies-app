import express from 'express';
import path from 'path';
import { serverPort } from '../etc/config.json';
import handleRender from './handleRender';

// Initialization of express application
const app = express();

app.use(express.static(path.join(__dirname, '../built/')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../built/index.html'));
// });

app.get('*', handleRender);

const server = app.listen(serverPort, () => {
  console.log(`Server is up and running on port ${serverPort}`);
});
