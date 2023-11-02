const express = require('express')
const mongoose = require('mongoose')
const DiseaseModel = require('./models/diseases')

const App = express();

const cors = require('cors')

App.use(express.json()) 
App.use(cors());

mongoose.connect("mongodb+srv://dinesh:dinesh123@cluster0.neiokbm.mongodb.net/healthhub100?retryWrites=true&w=majority")


App.get('/',(req,res) =>{
  res.json("HuhaHuha");
})

App.get("/getDiseases", async (req, res) => {
    try {
      const diseases = await DiseaseModel.find({});
      res.json(diseases);
    } catch (err) {
      console.log(err);
      console.log('cant connect with MongoDB')
      res.status(500).send("Internal server error");
    }
  });
  


App.listen(3001,()=>{
  console.log("Server bhaga");
})