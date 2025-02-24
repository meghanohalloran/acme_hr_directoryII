const { Client } = require('pg');
const client = new Client('postgress://localhost:5432/hr_directory');

module.exports = client;