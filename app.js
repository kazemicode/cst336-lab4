
const express = require('express'); // import Express lib 
const app = express(); // reference provides access to Express methods -- name of function matches name of const above

app.engine('html', require('ejs').renderFile);
app.use(express.static("public")); // specify the external src folder

/* Creates the root route, which sends response when root folder of website is requested */
app.get("/", function(request, response){
//   response.send("it works!"); // sent from server to browser -- impractical for a lot of HTML code
  response.render("index.html"); // renders an HTML page. NOTE: In Node, all html files must be placed in /views
});

// var planetList = ["earth.html", "jupiter.html", "mars.html", "mercury.html", 
//                  "neptune.html", "saturn.html", "uranus.html","venus.html"];

app.get("/earth.html", function(request, response){
//   response.send("it works!"); // sent from server to browser -- impractical for a lot of HTML code
  response.render("earth.html"); // renders an HTML page. NOTE: In Node, all html files must be placed in /views
});

app.get("/mercury.html", function(request, response){
//   response.send("it works!"); // sent from server to browser -- impractical for a lot of HTML code
  response.render("mercury.html"); // renders an HTML page. NOTE: In Node, all html files must be placed in /views
});

app.get("/mars.html", function(request, response){
//   response.send("it works!"); // sent from server to browser -- impractical for a lot of HTML code
  response.render("mars.html"); // renders an HTML page. NOTE: In Node, all html files must be placed in /views
});

app.get("/jupiter.html", function(request, response){
//   response.send("it works!"); // sent from server to browser -- impractical for a lot of HTML code
  response.render("jupiter.html"); // renders an HTML page. NOTE: In Node, all html files must be placed in /views
});


app.get("/neptune.html", function(request, response){
//   response.send("it works!"); // sent from server to browser -- impractical for a lot of HTML code
  response.render("neptune.html"); // renders an HTML page. NOTE: In Node, all html files must be placed in /views
});

app.get("/saturn.html", function(request, response){
//   response.send("it works!"); // sent from server to browser -- impractical for a lot of HTML code
  response.render("saturn.html"); // renders an HTML page. NOTE: In Node, all html files must be placed in /views
});

app.get("/uranus.html", function(request, response){
//   response.send("it works!"); // sent from server to browser -- impractical for a lot of HTML code
  response.render("uranus.html"); // renders an HTML page. NOTE: In Node, all html files must be placed in /views
});

app.get("/venus.html", function(request, response){
//   response.send("it works!"); // sent from server to browser -- impractical for a lot of HTML code
  response.render("venus.html"); // renders an HTML page. NOTE: In Node, all html files must be placed in /views
});



 /* Server listener with callback function that displays a message to signal Express is listening for requests */
//configuration for codeanywhere
// app.listen("8081", "0.0.0.0", function(){
//   console.log("Express Server is Running. . . ")
// });

// // configuration for Heroku
app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Express Server is Running. . . ")
});



