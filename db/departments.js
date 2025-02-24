const createDepartment = async () => {
  try {
await client.query(`
  INSERT INTO departments (name)
  VALUES ('${departmentName}')
  `);
  } catch(err) {
    
  }
};

module.exports = {
  createDepartment

}