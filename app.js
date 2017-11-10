const { server, get } = require('./server.js');


const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('https://dog.ceo/api', { useMongoClient: true });
server.listen(3000);