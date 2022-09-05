const express = require("express");
const cors = require("cors");
 
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const usersRoute = require("./routes/users.route");
const viewCount = require("./controllers/middleware/viewCount");
 
const { errorHandler } = require("./controllers/middleware/errorHandler");
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

 
app.use("/user", usersRoute);
 

app.use(errorHandler);
app.get("/", (req, res) => {
  res.send("Welcome to ACC Assignment 1")
});

app.all("*", (req, res) => {
  res.send("No route found!");
});

app.listen(port, () => {
  console.log(`EasyMart listening on port ${port}`);
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
