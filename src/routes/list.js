const express = require('express');
const router = express.Router();

const dbClient = require('../db/client');

const dbCollectionName = 'items';

router.get('/list', (req, res, next) => {
  const result = null;
  dbClient.execute(async (db) => {
    const collection = db.collection(dbCollectionName);
    result = await collection.find({}).toArray;
  });
  res.json(result);
});

router.get('/add', (req, res, next) => {
  const result = null;
  dbClient.execute(async (db) => {
    const collection = db.collection(dbCollectionName);
    result = await collection.insertOne({a:1});
  });
  res.json(result);
});

router.post('/add', (req, res, next) => {
  const body = req.body;
  const result = null;
  dbClient.execute(async (db) => {
    const collection = db.collection(dbCollectionName);
    result = await collection.insertOne(body);
  });
  res.json(result);
});

module.exports = router;