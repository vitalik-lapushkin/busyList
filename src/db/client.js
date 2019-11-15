const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://mongo:mongo@busylist-eifyi.mongodb.net/test?retryWrites=true&w=majority';
const dbName = 'BusyList';

module.exports = {
    execute: (callback) => {
        MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
            if (err) {
                console.error(err);
            }
            if (err) {
                console.log(err);
            }
            const db = client.db(dbName);
            callback(db);
        });
    },
};