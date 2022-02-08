//create http server
const express =require('express');
const dotenv =require('dotenv');//specifie the path of config file and inform the server to use the variable of dotenv
const app=express();
const morgan=require('morgan');
//add body-parser module
const bodyparser=require("body-parser");
const path=require('path');
dotenv.config({path:'config.env'})//specifie the path eli mawjoud fil config


//store all details inside the env file
const PORT=process.env.PORT||8080

//log request
app.use(morgan('tiny'));
//kif ta3mil refresh yatla3'get/304 --1.6 ms:(type,response bil ms and path )

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set("view engine ","ejs")//ejs type mta3 view engine tnajim testa3mil html..
//app.set("view",path.resolve(__dirname,"views/ejs"))//the 2 argum specifie the folder name where we put all your ejs files  




//load assests
app.use('/css',express.static(path.resolve(__dirname,"/assets/css")));
//if you create style.css inside css folder and access to this fie :/css/style.css ma3neha matest7a9ech ta3mil /crud-app 5ater a7na 7atina app.use(/css)
//la meme chose pour img et js
app.use('/img',express.static(path.resolve(__dirname,"/assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"/assets/js")));

//load routers
app.use('/',require('./server/routes/router'))

//listen the server on port 3000
app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)});
//allez au terminal and execute start:nodemon server.js(package.json)with the command(npm start)