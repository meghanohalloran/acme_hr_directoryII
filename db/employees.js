const createEmployee = async () => {
  try {
await client.query(`
  INSERT INTO employee (name, department)
  VALUES ('${employeeName}')
  VALUES ('${employeeDepartment}')
  `);
  } catch(err) {
    
  }
};

module.exports = {
  createDepartment

}