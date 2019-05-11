
const express = require("express")

const app = express()

app.use(express.static("public"))
app.set('view engine', 'pug')

app.get("/", function(req, res){
	res.render(__dirname+ "/public/pug/index")
})

app.listen(8880, function(err){
	if(err){
	console.log("Error!")
	}
	console.log("Weather app running on port 8880")
})
