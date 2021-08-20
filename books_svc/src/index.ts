import express from 'express';
import {Schema} from 'mongoose';
import { ObjectID, ObjectId } from 'bson';

const mongoose =  require('mongoose');
const app = express();
const url = 'mongodb://mongo:27017/mydb';
const port = 8080;

mongoose.connect(url,({useNewUrlParser:true}));

var mySchema = new Schema({
	_id: ObjectId,
	title: String,
	author: String,
	published_date: String
});

var Books = mongoose.model('Books', mySchema, 'Books');

app.get('/api/v1/book/:id', (req, res) => {
	
	Books.find({},function(err:any,books:any){
		if(err) throw err;
		res.json(books);
	})
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
