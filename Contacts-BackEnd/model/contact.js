var MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'local';


module.exports = function (callback) {
    MongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("error : ", err);
            callback(err, null);
        }
        const db = client.db(dbName);
        const collection = db.collection('contacts');
        collection.find({}).toArray(function (err, docs) {
            console.log("Found the following records");
            console.log(docs)
            callback(null, docs);
        });
    })
};


