const client = require('.client.js');
const { createDepartment } = require (`./departments.js`)

const dropTables = async() => {
  try {
    await client.query(`DROP TABLE IF EXISTS departments;`);
  } catch (err) {
    console.error('Error dropping tables:', err);
  }
}

const createDepartmentTables = async() => {
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

await createDepartment('housewares','1');
await createDepartment('clothing','2');
await createDepartment('accessories','3');

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

  await createEmployee('Jack','2');
  await createEmployee('Jill', '3');
  await createEmployee('Vincent', '1');

  
}


const synncAndSeed = async() => {
  await client.connect();
  await dropTables();
  await createTables();
  await createEmployeeTable();
  await client.end();
  await createDepartment();
}
