const express = require("express");
const mongoose = require('mongoose');
const profiles = require('./model')
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')
let bodyParser = require('body-parser')
let jsonParser = bodyParser.json()
const axios = require('axios')

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use(cors())

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.5zevr.mongodb.net/graduation_project?retryWrites=true&w=majority`
mongoose.connect(uri);

  app.get('/api/pets', (req, res) => {
    profiles.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
  })

  const geocodeProfile = async ( profileObject ) => {
    const address = `${profileObject.street_number}, ${profileObject.zip}, ${profileObject.city}`
    const newCoords = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address: address,
            key: 'AIzaSyBGt7x-R0JK3B6wulskJbMLVZ4cAN4Yy4g'
            }
        })
        .then((res) => {
            const coords = res.data.results[0].geometry.location
            return coords
        })
        .catch((err) => {console.log(err)})

    profileObject.lat = newCoords.lat
    profileObject.lng = newCoords.lng

    return profileObject
  }

  const addPetToDB = data => {
    const newEntry = new profiles({
      ownerName: data.ownerName,
      ownerEmail: data.ownerEmail,
      name: data.name,
      age: data.age,
      street_number: data.street_number,
      zip: data.zip,
      city: data.city,
      gender: data.gender,
      description: data.description,
      type: data.type,
      breed: data.breed,
      image: data.image,
      lat: data.lat,
      lng: data.lng
    })

    console.log(newEntry)
    return newEntry;
  }

  app.post('/api/add-dog', jsonParser, async (req, res) => {
    const geocodedPofile = await geocodeProfile(req.body)
    console.log('GEOCODED PROFILE',geocodedPofile)
    addPetToDB(geocodedPofile)
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

  app.put('/api/pets/:id', jsonParser, async (req, res) => {
    console.log('UPDATE:', req.params.id)
    const id = req.params.id;
    const geocodedPofile = await geocodeProfile(req.body)
    profiles.findByIdAndUpdate(id, geocodedPofile,  function (err, docs) {
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

  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
  