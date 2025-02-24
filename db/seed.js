const client = require('.client.js');
const dropTables = async() => {
  try {
    await client.query(`DROP TABLE IF EXISTS departments;`);
  } catch (err) {
    console.error('Error dropping tables:', err);
  }
}

const createTables = async() => {
  try {
    await client.query(`
      CREATE TABLE departments (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE
      );
    `);
  } catch (error) {
    console.error('Error creating tables:', error);
  }
}

const createEmployeeTable = async() => {
  try {
    await client.query(`
      CREATE TABLE employee (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        department_id INT,
      );
    `);
  } catch (error) {
    console.error('Error creating tables:', error);
  }
}


const synncAndSeed = async() => {
  await client.connect();
  await dropTables();
  await createTables();
  await createEmployeeTable();
  await client.end();
}
