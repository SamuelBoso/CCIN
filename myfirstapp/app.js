'use strict';

const express = require('express');
const { lookup } = require('geoip-lite');
const router = express.Router();

const app = express();
var os = require('os');


router.get('/info', (req,res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const data = {hostname:os.hostname(), platform:os.platform(),ip:ip} //JSON Object 
  res.send(JSON.stringify(data)) //write JSON object to console
  });
  
  app.use('/', router);
  app.listen(8080);
