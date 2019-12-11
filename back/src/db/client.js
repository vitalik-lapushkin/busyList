const MongoClient = require('mongodb').MongoClient;

//const url = 'mongodb+srv://mongo:mongo@busylist-eifyi.mongodb.net/test?retryWrites=true&w=majority';
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || '27017';
const dbLogin = process.env.DB_LOGIN || 'mongo';
const dbPassword = process.env.DB_PASSWORD || 'mongo';
const url = `mongodb://${dbLogin}:${dbPassword}@${dbHost}:${dbPort}`;
const dbName = 'BusyList';
const dbCollectionName = 'items';

let collection;

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error(err);
  }
  const db = client.db(dbName);
  collection = db.collection(dbCollectionName);
});

module.exports = {
  execute: (callback) => {
    return callback(collection);
  },
};