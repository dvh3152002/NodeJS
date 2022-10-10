import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine"
import initWebRouters from "./route/web"
import connectDB from "./config/connectDB"

require('dotenv').config();

let app=express();

//Cau hinh app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app);
initWebRouters(app);

connectDB();

//Neu port loi thi port=6969
let port=process.env.PORT || 6969;

app.listen(port,()=>{
    console.log("Backend Nodejs is running on the port: "+port)
})