// Your code here
const Employee = require('./employee');

const employee = new Employee("John Wick", "Dog Lover");

const sayNameEmployee = employee.sayName.bind(employee);
setTimeout(sayNameEmployee, 2000);

const sayOccupationEmployee = employee.sayOccupation.bind(employee);
setTimeout(sayOccupationEmployee, 3000);
