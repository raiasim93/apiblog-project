// importing modules again
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

// assiginig a different port
const app = express();
const port = 3000;
const API_URL = "http:/localhost:4000/"

// using middleware here
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


// hitting the home route
app.listen(port, ()=>{
  console.log(`Server running at port: ${port}`);
});