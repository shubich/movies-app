import express from 'express';
import path from 'path';
import { serverPort } from '../etc/config.json';
import handleRender from './handleRender';

// Initialization of express application
const app = express();

app.use(express.static(path.join(__dirname, '../built/')));

app.get('*', handleRender);

app.listen(serverPort, () => {
  console.log(`Server is up and running on port ${serverPort}`);
});
