
const bodyParser = require('body-parser');
const express = require('express');


const STATUS_USER_ERROR = 422;


const posts = [];

const server = express();
server.use(bodyParser.json());

const handleUserError = (msg, res) => {
  res.status(STATUS_USER_ERROR).json(msg);
};


server.get('/', (req, res) => {
});

// Get search results from server
server.get('/breeds/list/all', (req, res) => {

      });
    
    res.json(sorted);
}

module.exports = { breeds, server };