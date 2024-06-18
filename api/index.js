const express = require("express");
// import express from "express";
const allproducts = require("./assets/allproducts.json");

const app = express();

app.use(express.json());
app.use(express.static('public'))

app.get("/home", (req, res)=>{
    res.send("Hello Home!");
    res.end();    
});

app.post ('/about',(req,res)=>{
const {name} = req.body;
console.log(name);
  
res.send('hello post');
res.end();

});

app.get('/sum', (req,res)=>{

    const data = 2 + 2;

res.send(data.toString());
res.end();
});

app.post ('/sum1',(req,res)=>{
    const {num1,num2} = req.body;
    console.log(num1,num2);
    const r=num1+num2;

    res.send('hello sum = ' + r);
    res.end();
})

app.listen(5000, ()=>{
    console.log("App is running");
});

app.get('/products',(req,res)=>{
    res.json(allproducts);
    res.end();
});

app.get('/products/:id',(req,res)=>{
    const {id} = req.params;
    const product = allproducts.find((p)=>p.id == id);
    res.json(product);
    res.end();
});