'use strict';

const express = require('express');
const faker = require('faker');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(morgan('dev'));

app.get('/:name', (request, response) => {
  let firstName = request.params.name;
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  response.jsonp({
    firstName,
    lastName: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
  });
});

app.get('/search/:name', (request, response) => {
  let query = request.params.name;
  const firstName = query.charAt(0).toUpperCase() + query.slice(1);
  const data = new Array(25);
  for (let i = 0; i < data.length; i++) {
    data[i] = {
      firstName,
      lastName: faker.name.lastName(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
    }
  }
  response.send(data);
})


app.listen(PORT, () => {
  console.log('Person generator up on port ::: ' + PORT);
});