const Url = require('../models/Url');  

exports.shortenUrl = async (req, res) => {  
  const { fullUrl } = req.body;  

  const url = new Url({ fullUrl });  
  await url.save();  

  res.status(201).json(url);  
};  

exports.redirectUrl = async (req, res) => {  
  const { shortUrl } = req.params;  

  const url = await Url.findOne({ shortUrl });  
  if (!url) return res.status(404).send('URL not found');  

  url.clicks++;  
  await url.save();  

  res.redirect(url.fullUrl);  
};  
