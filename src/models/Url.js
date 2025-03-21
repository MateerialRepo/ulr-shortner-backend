const mongoose = require('mongoose');  
const shortid = require('shortid');  

const urlSchema = new mongoose.Schema({  
  fullUrl: { type: String, required: true },  
  shortUrl: { type: String, default: shortid.generate },  
  clicks: { type: Number, default: 0 }  
});  

module.exports = mongoose.model('Url', urlSchema);  
