// Basic String Interpolation

function greet(name, age) {
    console.log(`Hi! I am ${name}. I am ${age} years old.`);
}

// Example usage
greet("Prathamesh", 22);

// Function to write a multi-line string
function genrateString() {
    const text = `
        This is the first line.
        This is the second line.
        This is the third line.
        And this is the fourth line.
    `;
    console.log(text);
}

// Example usage
genrateString()


// Function to calculate and display the sum of a and b
function sum(a, b) {
    const result = a + b;
    console.log(`The sum of ${a} and ${b} is ${result}.`);
}

// Example usage
sum(5, 3);


// Function to format a value into currency
function formatCurrency(value) {
    return `$${value.toFixed(2)}`;
}

// Example usage
console.log(formatCurrency(400));    // Output: $400.00
console.log(formatCurrency(1234.5)); // Output: $1234.50


// condinational templateslitral

function formateMessage(name,status){
    if(status){
        console.log(`Wellcome !!! ${name}, Your status is : Active. `)
    }else{
        console.log(`Sorry ${name}, Your status is : Inactive. `)
    }
}


// Arrow Function

// function add(a, b) {
//     return a + b;
//   }
  
let add = (a, b) => a + b;

// double return 

let double = (n) => n*2;


// Function to greet with implicit return
const greet = name => `Hello, ${name}!`;

// Example usage
console.log(greet("Prathamesh")); // Output: Hello, Prathamesh!



// Function to filter even numbers from an array
const filterEvenNumbers = arr => arr.filter(num => num % 2 === 0);

// Example usage
const numbers = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6]


// Using an Arrow Function


function Person(name) {
    this.name = name;

    // Arrow function
    this.printName = () => {
        console.log(this.name);
    };
}

const person2 = new Person('Bob');
person2.printName(); // Output: Bob


// Explanation
// Regular Function:

// this.name: Inside the printName method, this refers to the instance of Person (i.e., person1 or person2). It correctly accesses the name property of the instance.
// this Binding: The this context is dynamically determined based on how the function is invoked. In this case, this is bound to the instance of the Person object.
// Arrow Function:

// this.name: Inside the printName arrow function, this still refers to the instance of Person because arrow functions capture this from their enclosing lexical context, which is the Person constructor in this case.
// this Binding: Arrow functions do not have their own this context; they inherit this from the surrounding code where the arrow function is defined. In this case, it behaves similarly to the regular function example, as this is lexically bound to the instance of Person.
// In general, when using this inside methods of classes or objects, regular functions are preferred for methods because they have their own this context. Arrow functions are more suited for situations where you need to retain the this context from the surrounding scope, such as inside callbacks or when you want to avoid the pitfalls of this binding in event handlers.



// Function to create a person object with shorthand property syntax and an arrow function
const createPerson = (name, age) => ({
    name, // shorthand for name: name
    age,  // shorthand for age: age
    introduce: () => {
        // Arrow function does not bind its own 'this', so 'this' will not refer to the object.
        console.log(`Hi! I am ${name}. I am ${age} years old.`);
    }
});

// Example usage
const person = createPerson('Alice', 30);
person.introduce(); // Output: Hi! I am Alice. I am 30 years old.


// Function to create an object with a computed property name
const createObject = (key, value) => ({
    [key]: value
});

// Example usage
const obj = createObject('dynamicKey', 42);
console.log(obj); // Output: { dynamicKey: 42 }


// Function to merge two objects using the spread operator
const mergeObjects = (obj1, obj2) => ({
    ...obj1,
    ...obj2
});

// Example usage
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = mergeObjects(obj1, obj2);
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }




// Function to update the name of a person in the object
const updateName = (personObj, newName) => ({
    ...personObj,
    name: newName
});

// Example usage
const person1 = {
    name: 'Alice',
    age: 30,
    occupation: 'Engineer'
};

const updatedPerson = updateName(person1, 'Bob');
console.log(updatedPerson);
// Output: { name: 'Bob', age: 30, occupation: 'Engineer' }



// Function to greet with a default name
function Greet1(name = "Guest") {
    console.log(`Hello! I am ${name}.`);
}

// Example usage
Greet1();          // Output: Hello! I am Guest.
Greet1("Alice");   // Output: Hello! I am Alice.



// Function to calculate the total amount with a default tax value
function calculateTotal(price, tax = 0.5) {
    const total = price + (price * tax);
    return total;
}

// Example usage
console.log(calculateTotal(100));        // Output: 150 (price of 100 + 50% tax)
console.log(calculateTotal(100, 0.2));   // Output: 120 (price of 100 + 20% tax)



// Function to describe a person with a default age
function DescribePerson(name, age = 25) {
    console.log(`Name: ${name}, Age: ${age}`);
}

// Example usage
DescribePerson('Alice');        // Output: Name: Alice, Age: 25 (default age)
DescribePerson('Bob', 30);     // Output: Name: Bob, Age: 30 (provided age)
DescribePerson('Charlie', undefined); // Output: Name: Charlie, Age: 25 (default age due to undefined)


// Function to calculate the price after discount
function discountPrice(price, discount = price * 0.01) {
    const discountedPrice = price - discount;
    console.log(`Original Price: $${price.toFixed(2)}`);
    console.log(`Discount: $${discount.toFixed(2)}`);
    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
}

// Example usage
discountPrice(100);            // Output: Original Price: $100.00, Discount: $1.00, Discounted Price: $99.00
discountPrice(100, 10);        // Output: Original Price: $100.00, Discount: $10.00, Discounted Price: $90.00
discountPrice(100, undefined); // Output: Original Price: $100.00, Discount: $1.00, Discounted Price: $99.00 (default discount)


// Function to create a user with a default role
function createUser(username, role = 'user') {
    console.log(`Username: ${username}`);
    console.log(`Role: ${role}`);
}

// Example usage
createUser('Alice');           // Output: Username: Alice, Role: user (default role)
createUser('Bob', 'admin');    // Output: Username: Bob, Role: admin (overridden role)
createUser('Charlie', undefined); // Output: Username: Charlie, Role: user (default role due to undefined)




// In JavaScript, the let, var, and const keywords have different scoping rules, which can affect how variables are accessed and modified within various code blocks. Here’s a comparison of their scopes:

// var
// Scope: var is function-scoped. This means that a var variable is accessible throughout the function in which it is declared, regardless of block boundaries (like loops or conditionals). If declared outside any function, it becomes a global variable.
// Hoisting: var declarations are hoisted to the top of their containing function or global scope. This means the variable is available throughout the function or global scope, but it is initialized as undefined until the actual declaration is encountered.

function testVar() {
    console.log(a); // Output: undefined (due to hoisting)
    var a = 1;
    if (true) {
        var a = 2; // Same variable, redefined within the block
        console.log(a); // Output: 2
    }
    console.log(a); // Output: 2 (var is function-scoped)
}

testVar();


// let
// Scope: let is block-scoped. This means that a let variable is only accessible within the block (denoted by {}) in which it is declared. It is not accessible outside of that block.
// Hoisting: let declarations are also hoisted, but not initialized. They remain in a "temporal dead zone" from the start of the block until the declaration is encountered. Accessing the variable before the declaration results in a ReferenceError.

function testLet() {
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = 1;
    if (true) {
        let a = 2; // Different variable, block-scoped
        console.log(a); // Output: 2
    }
    console.log(a); // Output: 1 (different variable, outer block scope)
}

testLet();


// const
// Scope: const is block-scoped, similar to let. Variables declared with const are only accessible within the block in which they are declared.
// Hoisting: const declarations are hoisted, but like let, they are not initialized. Accessing the variable before the declaration results in a ReferenceError.
// Reassignment: const variables cannot be reassigned after their initial value is set. However, if the const variable holds an object or array, its contents (e.g., properties or elements) can be modified.

function testConst() {
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    const a = 1;
    if (true) {
        const a = 2; // Different variable, block-scoped
        console.log(a); // Output: 2
    }
    console.log(a); // Output: 1 (different variable, outer block scope)
    
    // Reassigning a const variable will result in an error
    // a = 3; // TypeError: Assignment to constant variable
}

testConst();


// Create a constant array
const myArray = [1, 2, 3, 4, 5];

// Modifying the contents of the array
myArray.push(6);         // Adds 6 to the end of the array
myArray[0] = 10;         // Changes the first element to 10

console.log(myArray);   // Output: [10, 2, 3, 4, 5, 6]

// Attempting to reassign the array will result in an error
// myArray = [7, 8, 9]; // TypeError: Assignment to constant variable

function demonstrateTDZ() {
    try {
      console.log(x); // ReferenceError: Cannot access 'x' before initialization (Temporal Dead Zone)
      let x = 5;
    } catch (e) {
      console.error(e);
    }
  
    // Using var
    console.log(y); // Outputs: undefined (due to hoisting, no TDZ for var)
    var y = 10;
  }
  
  demonstrateTDZ();

  


  function testRedeclaration() {
    var a = 10;
    console.log(a); // Outputs: 10
  
    var a = 20; // Re-declaration allowed with var
    console.log(a); // Outputs: 20
  }
  
  testRedeclaration();

  

  function loopWithLetandVar() {
    console.log("Loop with var:");
    for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 100); // Outputs 3, 3, 3 due to var hoisting
    }
  
    console.log("Loop with let:");
    for (let j = 0; j < 3; j++) {
      setTimeout(() => console.log(j), 100); // Outputs 0, 1, 2 due to block scope
    }
  }
  
  loopWithLetandVar();

  



  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Outputs: 15
  

  function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  const array = [1, 2, 3, 4, 5];
  console.log(sum(...array)); // Outputs: 15

  
  function sumProperty(objects, property) {
    return objects.reduce((total, obj) => total + (obj[property] || 0), 0);
  }
  
  const objectsArray = [
    { value: 10 },
    { value: 20 },
    { value: 30 },
    { value: 40 }
  ];
  
  console.log(sumProperty(objectsArray, 'value')); // Outputs: 100

  
  function extractFirstAndRest(arr) {
    const [first, ...rest] = arr;
    return { first, rest };
  }
  
  const array22 = [1, 2, 3, 4, 5];
  const result = extractFirstAndRest(array22);
  
  console.log(result); // Outputs: { first: 1, rest: [2, 3, 4, 5] }

  

  function calculateTotal(...args) {
    return args.reduce((total, num) => total + num, 0);
  }
  
  console.log(calculateTotal(1, 2, 3, 4, 5)); // Outputs: 15

  
  function swap(a, b) {
    return [b, a];
  }
  
  const [x, y] = [1, 2];
  const [newX, newY] = swap(x, y);
  
  console.log(newX); // Outputs: 2
  console.log(newY); // Outputs: 1

  
  const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
  };
  
  const { name, age, city } = person;
  
  console.log(name); // Outputs: Alice
  console.log(age);  // Outputs: 30
  console.log(city); // Outputs: New York

  const person = {
    name: 'Alice',
    address: {
      city: 'New York',
      zip: '10001'
    }
  };
  
  const { name, address: { city, zip } } = person;
  
//   console.log(name); // Outputs: Alice
//   console.log(city); // Outputs: New York
//   console.log(zip);  // Outputs: 10001

  


