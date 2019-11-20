const express = require('express');
const router = express.Router();

const dbClient = require('../db/client');

router.get('/list', async (req, res, next) => {
  const result = await dbClient.execute((collection) => {
    return collection.find({}).toArray();
  });
  res.json(result);
});

router.post('/add', (req, res, next) => {
  const body = req.body;
  const result = dbClient.execute((collection) => {
    return collection.insertOne(body);
  });
  res.json(result);
});

module.exports = router;