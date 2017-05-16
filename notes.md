# app.js  

What is express?  
  It's a framework that builds a server: gives us middleware, and allows for req, res, and next...  

What is const app?  
 We are setting the express function equal to the variable app. We us app.whatever to invoke the express function  

What is listener?  
 This listens for requests coming in to the server. If you add err to the list (req, res, next...), then it becomes an error handler  

What is port?  
PORT is a property we set inside the environment variable. process.env is something generic to express.  

app.use('/artists', artists) - the /artists part is the prefix for the url

bodyParser is the thing that puts everything inside req.body 


# MVC   

client makes a request of the server  

the server hits the route folder  
then the controller folder is called  
then the models folder is called  

then we hit the db  

then we reverse back up the chain  


# artists.js    

router is part of express - FYI  

express.Router() doesn't break our app because we aren't creating a new instance of express. express().Router() will break it because this does create a new instance of express (ergo, another app is set up - bad)  

module.exports is a node thing, and it allows us to connect js files  

we are exporting the router object from this file  


# The Database  

This is where we store data (persist it)  

Knex, Sequalize, etc... are these things...
ORM - object relational mapper
query builder - builds queries for your database    


# Knexfile  

path is a native node module, which is why we don't have to install it separately  
this file is for us to use knex at the command line   


# Connection

process.env.NODE_ENV || 'development': if process.env.NODE_ENV is not defined it will default to development (HEROKU sets process.env...FYI)

# Models artist.js  
What type of thing is returned from getAll? --A promise
If you want to get data out of a promise, you have to call .then() on it!!!
