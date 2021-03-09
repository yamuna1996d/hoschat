const express = require('express');
const app = express();
const Register=require("./schemas/UserSchema");
const path = require('path');
const {json} = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://dbuser123:dbuser123@cluster0.zcpbv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("database connection successful");
})
.catch((err) => {
    console.log("database connection error " + err);
})

const server = app.listen(port, () => console.log("Server listening on port " + port));

app.set('view engine', 'hbs')// general config


app.use(express.urlencoded({ extended: false }));

console.log(path.join(__dirname,"../patient_phase/public"));
const stat= path.join(__dirname,"../patient_phase/public");
const template= path.join(__dirname,"../patient_phase/views");
app.set('views',template);
app.use(express.static(stat));
app.use(express.json());

app.get("/",(req,res)=>{
res.render("index");
});
app.get("/register",(req,res)=>{
    res.render("patient-register");
});
app.post("/register",async (req,res) => {
    try{
        const pass = req.body.password;
        const cpass = req.body.conpassword;
        if(pass == cpass){
            const reg = new Register({
                 fullName : req.body.fullName,
                 email : req.body.email,
                 mobile : req.body.mobile,
                 location : req.body.location,
                 password : pass,
                 conpassword : cpass,
            });
            const registed =await reg.save();
            res.status(201).render("index");
        }
        else{
            res.send("Check Passwords!..");
        }
    }
    catch(err){
        res.status(400).send(err);
    }
});

app.get("/login",(req,res)=>{
    res.render("index");
});
app.get("/chat",(req,res)=>{
    res.render("chat");
});
app.post("/login",async (req,res)=>{
    try {
        const emails = req.body.email;
        const pass = req.body.password;
        const useremail = await Register.findOne({email:emails});
        if (useremail.password == pass ) {
            res.status(201).render("Doctor-list");
        } else {
            res.send("Invalid Login Credentials");
        }
    } catch (error) {
        res.status(400).send("Invalid Email or Password");
    }
});