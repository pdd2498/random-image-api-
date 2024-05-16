const express = require("express");

const app = express();


const next = (data)=>{
  console.log(data);
  const image = {
  name : "rendom image and joke",
  url : "https://picsum.photos/200/300",
  setup: data.setup,
  punchline: data.punchline
}

app.get("/get-img" , (req , res)=>{
  res.json(image);
})}

fetch('https://official-joke-api.appspot.com/jokes/random')
  .then(response => response.json())
  .then(data => next(data));



app.listen(6060 , ()=> console.log("https://picsum.photos/200/300"));