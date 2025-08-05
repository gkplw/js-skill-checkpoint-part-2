const alphaTech = [
    { name: 'Alice', age: 23, department: 'Engineering' },
    { name: 'Bob', age: 19, department: 'Design' }
  ];
  
  const betaSoft = [
    { name: 'Charlie', age: 28, department: 'Engineering' },
    { name: 'David', age: 17, department: 'Support' }
  ];
  
  const gammaDev = [
    { name: 'Eve', age: 25, department: 'Marketing' },
    { name: 'Faythe', age: 18, department: 'Engineering' },
    { name: 'Grace', age: 20, department: 'Engineering' }
  ];
  
    // const allEmployees = alphaTech.map((employee) => {return {name: employee.name, age: employee.age, department: employee.department, company: "alphaTech"}})

  const allEmployees = alphaTech.map((employee) => {
    return {
      name: employee.name, 
      age: employee.age, 
      department: employee.department, 
      company: "alphaTech"
    }})
  .concat(betaSoft.map((employee) => {
    return {
      name: employee.name, 
      age: employee.age, 
      department: employee.department, 
      company: "betaSoft"
    }})
  ,gammaDev.map((employee) => {
    return {
      name: employee.name, 
      age: employee.age, 
      department: employee.department, 
      company: "gammaDev"
    }})
  );

  const result = allEmployees.filter((employee) => {
  return employee.department === 'Engineering' && employee.age >= 20;
}).map((employee) => {
  return {
    name: employee.name,
    company: employee.company
  };
});

console.log(result);
// // [
//     { name: 'Alice', company: 'alphaTech' },
//     { name: 'Charlie', company: 'betaSoft' },
//     { name: 'Grace', company: 'gammaDev' }
// ]
  

