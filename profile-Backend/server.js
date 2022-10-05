const express =require("express");
const bodyParser=require("body-parser");
const cors=require("cors");

const app= express();

var corsOptions={
    origin:"http://localhost:8081"
};

app.use(cors(corsOptions));

//parse requestes of content-type -application/json
app.use(bodyParser.json());

//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//simple routes

app.get('/',(req,res)=>{});

//set port ,listen for requests
const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{});