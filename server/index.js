const express = require("express");
const mongoose = require('mongoose');
const profiles = require('./model')
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')
let bodyParser = require('body-parser')
let jsonParser = bodyParser.json()


dotenv.config();


const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use(cors({origin:'http://localhost:3000', credentials: true,}))

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.5zevr.mongodb.net/graduation_project?retryWrites=true&w=majority`
mongoose.connect(uri);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

  app.get('/api/pets', (req, res) => {
    profiles.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
  })

  const addPetToDB = data => {
    const newEntry = new profiles({
      ownerName: data.ownerName,
      ownerEmail: data.ownerEmail,
      name: data.name,
      age: data.age,
      zip: data.zip,
      gender: data.gender,
      description: data.description,
      type: data.type,
      breed: data.breed,
      image: data.image,
    })
    return newEntry;
  }

  app.post('/api/add-dog', jsonParser, (req, res) => {
    console.log(req.body)
    addPetToDB(req.body)
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
  })

  app.delete('/api/pets/:id', (req, res) => {
    console.log(req.params.id)
    const id = req.params.id;
    profiles.findByIdAndDelete(id, function (err, docs) {
      console.log('test')
      if (err){
          console.log(err)
      }
      else{
          console.log("Deleted : ", docs);
      }
      res.sendStatus(204)
    });
  })

  app.put('/api/pets/:id', jsonParser, (req, res) => {
    console.log('UPDATE:', req.params.id)
    // console.log(req.body)
    const id = req.params.id;
    profiles.findByIdAndUpdate(id, req.body,  function (err, docs) {
      console.log('test')
      if (err){
        console.log(err)
      }
      else{
          console.log("Updated : ", docs);
      }
      res.sendStatus(204)
    })
  })

  app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
  