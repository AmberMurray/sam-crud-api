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