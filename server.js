// app require express
var express = require("express");
var app = express();

// Templating
var ejs = require("ejs");
app.set("view engine", "ejs");

// body parser
var bodyParser = require("body-parser");
// tell app which method to use when parsing
app.use(bodyParser.urlencoded({extended: false}));

// method override
var methodOverride = require("method-override");
// tell app which override method to use
app.use(methodOverride("_method"));

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("knicks_feed.db");

// if user goes "/" redirect to /posts
app.get("/", function(req, res){
	res.redirect("/posts");
});

// show all posts
app.get("/posts", function(req, res){
	// get post from knicks_feed.db and send it to index.ejs
	db.all("SELECT * FROM micro_posts", function(err, data){
		if(err){
			console.log(err);
		}
		else{
			var posts = data;
			//console.log(posts);
		}
		// get the author's information
		db.all("SELECT * FROM micro_posts INNER JOIN authors ON micro_posts.author_id = author_id", function(err, data){
			if(err){
				console.log(err);
			}
			else{
				var authors = data;
				//console.log(authors);
			}
		// get a snippet of the micro_post
		db.all("SELECT * FROM snippets INNER JOIN micro_posts ON micro_posts.snippet_id = snippet_id", function(err, data){
			if(err){
				console.log(err);
			}
			else{
				var snippets = data;
				//console.log(snippets);
			}

		res.render("index.ejs", {posts: posts, authors: authors, snippets: snippets});
			});	
		
		});
	});
});

// serve up a form to create a new micro_post
app.get("/posts/new", function(req, res){
	res.render("new.ejs");

});

// Create new post insert into database and render new post on "/posts"
app.post("/posts", function(req, res){
	console.log(req.body.title, " ", req.body.body, "", req.body.author); 

			//Get info from req.body to update Knicks_feed.db
	db.run("INSERT INTO authors(name) VALUES (?)", req.body.author, function(err){
		if(err){
			console.log(err);
		}

	  db.get("SELECT id FROM AUTHORS WHERE name =?", req.body.author, function(err, data){
   		if(err){
   			console.log(err);
   		}
   		else{
   			var author_id = data.id;
   			console.log(author_id);
   		}

   			   	db.run("INSERT INTO micro_posts(title, body, author_id) VALUES (?, ?, ?)", req.body.title, req.body.body, author_id, function(err){
   			   		if(err){
   			   			console.log(err);
   			   		}
   			   		console.log(author_id);

   	res.redirect("/posts");
   });
});

});
});

// Show individual micro posts
app.get("/post/:id", function(req, res){
	db.get("SELECT * FROM micro_posts WHERE id = ?", req.param.id, function(err, data){
		console.log(data);
	});
})



app.listen("3000");
console.log("Listening on port 3000");


