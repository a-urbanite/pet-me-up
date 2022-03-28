const express = require("express");
const mongoose = require('mongoose');
const profiles = require('./model')
const dotenv = require('dotenv')

dotenv.config();


const PORT = process.env.PORT || 3001;

const app = express();

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.5zevr.mongodb.net/graduation_project?retryWrites=true&w=majority`
mongoose.connect(uri);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//   });

// Endpoint to serve all pet profiles
app.get('/api/pets', (req, res) => {
  profiles.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
