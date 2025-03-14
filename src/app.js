const express = require('express');  
const mongoose = require('mongoose');  
const cors = require('cors');  
const urlRoutes = require('./routes/urlRoutes');  
require('dotenv').config();  

const app = express();  

app.use(express.json());  
app.use(cors());  

mongoose.connect(process.env.MONGO_URI, {  
  useNewUrlParser: true,  
  useUnifiedTopology: true  
}).then(() => console.log('MongoDB connected'))  
  .catch(err => console.log(err));  

app.use('/api/url', urlRoutes);  

module.exports = app;  
