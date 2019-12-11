const express = require('express');
const app = express();

const useCors = process.env.USE_CORS || false;

if (useCors) {
  const cors = require('cors');
app.use(cors());
}

app.use(express.static('./public'));
app.use(express.json());


const listRouter = require('./routes/list');
app.use('/', listRouter);

const port = process.env.PORT || '3000';
app.listen(port);