const express = require('express');
const app = express();
const ejs = require('ejs')
const collection = require('./mongoose')

app.use(express.json());
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))
app.get('/', (req,res)=>{
    res.render("login");
})

app.get('/signup',(req,res)=>{
    res.render("signup")
})

app.post('/signup',async (req,res)=>{
    const data = {
        name: req.body.name,
        password: req.body.password
    }
    await collection.insertMany([data]);
    res.render("home")
})

app.post('/login', async (req,res)=>{
    try{
        const check=await collection.findOne({name:req.body.name})
        if(check.password===req.body.password){
            res.render("home")
        }
        else{
            res.send("Wrong Password")
        }
    }
    catch{
        res.send("Wrong details")
    }
})


app.listen(3000);