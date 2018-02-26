var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;

app.get("/", function(req, res){
    res.send("landing page!");
});    
    
app.get("/happy", function(req, res){
   res.send(":)");
});
    
app.listen(port, function(){
    console.log("API is running on PORT:" + port);
});