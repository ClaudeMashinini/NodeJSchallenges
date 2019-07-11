const express = require("express");
const app = express();
const parser = require("body-parser");

//importing the respective routes
const viewAllRoute = require("./routes/viewAll");
const viewByIdRoute = require("./routes/viewById");
const updateRoute = require("./routes/update");
const deleteAllRoute = require("./routes/deleteAll");
const deleteByIdRoute = require("./routes/deleteById");
const addNewRoute = require("./routes/addOne");

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

//using the routes through express to fulfill the requests
app.use(viewAllRoute);
app.use(viewByIdRoute);
app.use(updateRoute);
app.use(deleteAllRoute);
app.use(deleteByIdRoute);
app.use(addNewRoute);

app.listen(8888, () => {
  console.log("Server running");
});
