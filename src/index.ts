import express from 'express'
  
const app = express()
  
app.listen(3000, () => console.log("Server is Successfully Running"))

app.get('/', (req, res)=>{
  res.status(200);
  res.send("Welcome to root URL of Server");
})