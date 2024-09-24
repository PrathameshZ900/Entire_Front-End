// Constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Method added to the prototype of Person
  Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  // Constructor function for Employee (inherits from Person)
  function Employee(name, age, jobTitle) {
    // Call the Person constructor with 'this' context to inherit name and age
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
  }
  
  // Inherit from Person by setting Employee's prototype to a new object created from Person's prototype
  Employee.prototype = Object.create(Person.prototype);
  
  // Ensure the constructor of Employee is properly set
  Employee.prototype.constructor = Employee;
  
  // Method added to the prototype of Employee
  Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  };
  
  // Demonstration
  
  // Creating an instance of Person
  const person1 = new Person("John", 30);
  person1.introduce(); // Output: Hi, my name is John and I am 30 years old.
  
  // Creating an instance of Employee
  const employee1 = new Employee("Jane", 28, "Software Engineer");
  employee1.introduce(); // Output: Hi, my name is Jane and I am 28 years old.
  employee1.work();      // Output: Jane is working as a Software Engineer.
  