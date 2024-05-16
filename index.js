const express = require("express");

const app = express();

const image = {
  name : "rendom image",
  url : "https://picsum.photos/200/300"
}

app.get("/get-img" , (req , res)=>{
  res.json(image);
})

app.listen(6060 , ()=> console.log("https://picsum.photos/200/300"));