const MongoClient = require('mongodb').MongoClient;

//const url = 'mongodb+srv://mongo:mongo@busylist-eifyi.mongodb.net/test?retryWrites=true&w=majority';
const url = 'mongodb://mongo:mongo@localhost:27017';
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