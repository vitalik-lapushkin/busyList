const express = require('express');
const router = express.Router();

const dbClient = require('../db/client');

router.get('/list', async (req, res, next) => {
  const result = await dbClient.execute((collection) => {
    return collection.find({}).toArray();
  });
  res.json(result);
});

router.post('/item/add', async (req, res, next) => {
  const { body } = req;
  const result = await dbClient.execute((collection) => {
    return collection.insertOne(body);
  });
  res.json(result);
});

router.post('/item/delete', async (req, res, next) => {
  const { _id } = req.body;
  const result = await dbClient.execute((collection) => {
    return collection.deleteOne({ _id });
  });
  res.json(result);
});

router.post('/item/update', async (req, res, next) => {
  const { body } = req;
  const { _id } = body;
  const result = await dbClient.execute((collection) => {
    return collection.updateOne({ _id }, { $set: body });
  });
  res.json(result);
});

module.exports = router;