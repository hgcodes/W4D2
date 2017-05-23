const settings = require("./settings");
require('dotenv').config();
const knex = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: 'knex,public'
});

const inputFirstName = process.argv[2];
const inputLastName = process.argv[3];
const inputBirthdate = process.argv[4];

// function padTwoDigitNumber(number) {
//   return number < 10 ? '0' + number.toString() : number;
// }

const input = knex('famous_people').insert({
  first_name: inputFirstName,
  last_name: inputLastName,
  birthdate: inputBirthdate
});

console.log(input.toString());

input.asCallback();
knex.destroy();


