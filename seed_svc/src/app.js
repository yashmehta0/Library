var MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://mongo:27017/mydb';

MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    var dbo = client.db('mydb');
    dbo.createCollection('Books');
    dbo.collection('Books', function (err, collection) {
        var obj = [{ title: 'An Absolutely Remarkable Thing',
                author: 'Hank Green',published_date: 'September 25th, 2018' },
            { title: 'An Absolutely Forgettable Thing',
                author: 'Pank Lean',published_date: 'September 2nd, 2017' }];

        collection.insertMany(obj);
    });
    client.close();            
});