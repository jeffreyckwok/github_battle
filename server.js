var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'githubbattle-app', 'dist')));

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost/github_battle');

var UserSchema = mongoose.Schema({
  username: String,
  score: Number,
  imagePath: String
})

mongoose.model('User', UserSchema);

var User = mongoose.model('User');

app.post('/api/players', function(req,res){
	User.findOne({username: req.body.username}, function(err, foundUser){
		if(foundUser){
			console.log('found a user:', foundUser);
			foundUser.score = req.body.score;
			foundUser.imagePath = req.body.imagePath;
			foundUser.save(function(err, updatedUser){
				if(err){
					console.log('something went wrong updating your user');
					res.json(err);
				}else{
					console.log('user updated!');
					res.json(updatedUser);
				}
			})
		}else{
			console.log('user not found, creating new user');
			var user = new User(req.body);
			user.save(function(err, createdUser){
				if(err){
					console.log('Something went wrong making your user.')
					res.json(err);
				}else{
					console.log('user created!');
					res.json(createdUser);
				}
			})
		}
	})
})
app.get('/api/players', function(req,res){
	User.find({}).sort([['score', 'descending']]).exec(function(err, users){
		if(err){
			console.log("something went wrong getting all users");
			res.json(err);
		}else{
			console.log("found all users");
			res.json(users);
		}
	})
})




app.listen(8000, function(){
	console.log("on localhost:8000");
})
