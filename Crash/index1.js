function convertToNumber(str) {
    const num = Number(str);
    
    if (isNaN(num)) {
        console.log("Conversion failed: Input is not a valid number.");
        return NaN;
    } else {
        return num;
    }
}

// Example usage
console.log(convertToNumber("42"));   // Outputs: 42
console.log(convertToNumber("abc"));  // Outputs: Conversion failed: Input is not a valid number. NaN


function convertToString(num) {
    // Convert the number to a string
    const str = String(num);
    
    // Return the converted string
    return str;
}

// Example usage
console.log(convertToString(123));  // Outputs: "123"
console.log(convertToString(45.67));  // Outputs: "45.67"
console.log(convertToString(true));  // Outputs: "true"
console.log(convertToString(null));  // Outputs: "null"


function convertAndCompare(a, b) {
    // Convert both inputs to numbers
    a = Number(a);
    b = Number(b);

    // Compare the converted numbers
    if (a === b) {
        console.log(a, "is exactly similar to", b);
    } else {
        console.log(a, "is not the same as", b);
    }
}

// Example usage
convertAndCompare("10", 10);       // Outputs: 10 is exactly similar to 10
convertAndCompare("42", "42");     // Outputs: 42 is exactly similar to 42
convertAndCompare("3.14", 3.14);   // Outputs: 3.14 is exactly similar to 3.14
convertAndCompare("5", "five");    // Outputs: 5 is not the same as NaN
convertAndCompare(true, 1);        // Outputs: 1 is exactly similar to 1
convertAndCompare(null, 0);        // Outputs: 0 is exactly similar to 0


function checkCoercion(a, b) {
    // Check if both loose and strict equality hold true
    if (a == b && a === b) {
        console.log("Both checks are valid");
    } else {
        console.log("One or both checks are invalid");
    }
}

// Example usage
checkCoercion(5, 5);        // Outputs: Both checks are valid
checkCoercion("5", 5);      // Outputs: One or both checks are invalid
checkCoercion(true, 1);     // Outputs: One or both checks are invalid
checkCoercion(0, false);    // Outputs: One or both checks are invalid
checkCoercion(null, undefined); // Outputs: One or both checks are invalid


function checkArithmeticCoercion(a, b) {
    // Convert both a and b to numbers
    let sum = a + b;
    let product = a * b;
    let difference = a - b;
    let quotient = a / b;

    console.log("Sum (a + b):", sum);
    console.log("Product (a * b):", product);
    console.log("Difference (a - b):", difference);
    console.log("Quotient (a / b):", quotient);
}

// Example usage
checkArithmeticCoercion("5", 5);          // Coerces "5" to 5
checkArithmeticCoercion(true, 2);         // Coerces true to 1
checkArithmeticCoercion(false, 10);       // Coerces false to 0
checkArithmeticCoercion(null, 4);         // Coerces null to 0
checkArithmeticCoercion(undefined, 3);    // Coerces undefined to NaN
checkArithmeticCoercion("abc", 3);        // Coerces "abc" to NaN


function checkImplicitCoercion(value) {
    if (value) {
        console.log(value, "is truthy");
    } else {
        console.log(value, "is falsy");
    }
}

// Example usage
checkImplicitCoercion("");            // Outputs: "" is falsy
// checkImplicitCoercion("hello");       // Outputs: hello is truthy
checkImplicitCoercion(0);             // Outputs: 0 is falsy
checkImplicitCoercion(42);            // Outputs: 42 is truthy
checkImplicitCoercion(null);          // Outputs: null is falsy
checkImplicitCoercion(undefined);     // Outputs: undefined is falsy
checkImplicitCoercion(NaN);           // Outputs: NaN is falsy
checkImplicitCoercion([]);            // Outputs: [] is truthy (empty array)
checkImplicitCoercion({});            // Outputs: {} is truthy (empty object)
checkImplicitCoercion(true);          // Outputs: true is truthy
checkImplicitCoercion(false);         // Outputs: false is falsy


function identifyType(value) {
    const type = typeof value; // Determine the type of the value
    console.log(`The type of ${value} is: ${type}`);
}

// Example usage
identifyType(42);                // Outputs: The type of 42 is: number
identifyType("Hello");           // Outputs: The type of Hello is: string
identifyType(true);              // Outputs: The type of true is: boolean
identifyType({});                // Outputs: The type of [object Object] is: object
identifyType([]);                // Outputs: The type of is: object
identifyType(null);              // Outputs: The type of null is: object
identifyType(undefined);         // Outputs: The type of undefined is: undefined
identifyType(function() {});     // Outputs: The type of function () {} is: function
identifyType(Symbol('sym'));     // Outputs: The type of Symbol(sym) is: symbol



function areArraysOrObjectsSame(value1, value2) {
    // Helper function to compare arrays
    function arraysAreEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    // Helper function to compare objects
    function objectsAreEqual(obj1, obj2) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) return false;

        for (let key of keys1) {
            if (obj1[key] !== obj2[key]) return false;
        }
        return true;
    }

    if (Array.isArray(value1) && Array.isArray(value2)) {
        if (arraysAreEqual(value1, value2)) {
            console.log("Both values are arrays and have the same inner values.");
        } else {
            console.log("Both values are arrays but have different inner values.");
        }
    } else if (typeof value1 === "object" && value1 !== null &&
               typeof value2 === "object" && value2 !== null) {
        if (objectsAreEqual(value1, value2)) {
            console.log("Both values are objects and have the same inner values.");
        } else {
            console.log("Both values are objects but have different inner values.");
        }
    } else {
        console.log("The values are not both arrays or both objects.");
    }
}

// Example usage
areArraysOrObjectsSame([1, 2, 3], [1, 2, 3]);       // Outputs: Both values are arrays and have the same inner values.
areArraysOrObjectsSame([1, 2, 3], [1, 2, 4]);       // Outputs: Both values are arrays but have different inner values.
areArraysOrObjectsSame({ a: 1, b: 2 }, { a: 1, b: 2 }); // Outputs: Both values are objects and have the same inner values.
areArraysOrObjectsSame({ a: 1, b: 2 }, { a: 1, b: 3 }); // Outputs: Both values are objects but have different inner values.
areArraysOrObjectsSame([1, 2], { a: 1, b: 2 });     // Outputs: The values are not both arrays or both objects.



function identifyComplexType(value) {
    if (Array.isArray(value)) {
        console.log("The value is an array.");
        for (let i = 0; i < value.length; i++) {
            console.log(`Element ${i} is of type: ${typeof value[i]}`);
        }
    } else if (typeof value === "object" && value !== null) {
        console.log("The value is an object.");
        for (const [key, val] of Object.entries(value)) {
            console.log(`Property ${key} is of type: ${typeof val}`);
        }
    } else {
        console.log("The value is not an array or object.");
        console.log(`The value is of type: ${typeof value}`);
    }
}

// Example usage
identifyComplexType([1, "string", true]);   // Outputs: The value is an array. Followed by element types.
identifyComplexType({ a: 1, b: "text", c: true }); // Outputs: The value is an object. Followed by property types.
identifyComplexType(42);                    // Outputs: The value is not an array or object. Followed by type.
identifyComplexType("Hello");               // Outputs: The value is not an array or object. Followed by type.



function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// Call the function to print numbers
printNumbers();


function printArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Example usage
const array = [10, 20, 30, 40, 50];
printArrayElements(array);


function printArrayElements(arr) {
    for (const element of arr) {
        console.log(element);
    }
}

// Example usage
const array2 = [10, 20, 30, 40, 50];
printArrayElements(array2);


function printArrayElements(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

// Example usage
const array3 = [10, 20, 30, 40, 50];
printArrayElements(array3);


function printMultiplicationTable(size) {
    for (let row = 1; row <= size; row++) {
        let rowOutput = "";
        for (let col = 1; col <= size; col++) {
            rowOutput += (row * col).toString().padStart(4, ' '); // Multiplication and padding for alignment
        }
        console.log(rowOutput);
    }
}

// Example usage
printMultiplicationTable(10); // Prints a 10x10 multiplication table


function printDayOfWeek(n) {
    switch (n) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number");
            break;
    }
}

// Example usage
const n = 3; // You can change this value to test different days
printDayOfWeek(n);



function classifyAnimal(animal) {
    switch (animal.toLowerCase()) { // Convert input to lowercase to handle case insensitivity
        case 'dog':
        case 'cat':
        case 'elephant':
            console.log(animal + " is a mammal.");
            break;
        case 'snake':
        case 'lizard':
        case 'turtle':
            console.log(animal + " is a reptile.");
            break;
        case 'eagle':
        case 'parrot':
        case 'sparrow':
            console.log(animal + " is a bird.");
            break;
        case 'shark':
        case 'salmon':
        case 'trout':
            console.log(animal + " is a fish.");
            break;
        default:
            console.log("Unknown animal type.");
            break;
    }
}

// Example usage
classifyAnimal('Dog');    // Output: Dog is a mammal.
classifyAnimal('snake');  // Output: snake is a reptile.
classifyAnimal('Eagle');  // Output: Eagle is a bird.
classifyAnimal('Shark');  // Output: Shark is a fish.
classifyAnimal('Koala');  // Output: Koala is an unknown animal type.




function printNumbers() {
    let i = 1; // Initialize the counter to 1
    while (i <= 5) { // Continue looping as long as i is less than or equal to 5
        console.log(i); // Print the current value of i
        i++; // Increment the counter
    }
}

// Example usage
printNumbers(); // Prints numbers from 1 to 5


function countdown(n) {
    while (n >= 0) { // Continue looping as long as n is greater than or equal to 0
        console.log(n); // Print the current value of n
        n--; // Decrement n by 1
    }
}

// Example usage
countdown(5); // Counts down from 5 to 0


function findFirstEvenNumber(arr) {
    let index = 0; // Initialize index to start at the beginning of the array
    while (index < arr.length) { // Continue looping while index is within the array bounds
        if (arr[index] % 2 === 0) { // Check if the current element is even
            return arr[index]; // Return the first even number found
        }
        index++; // Move to the next element
    }
    return "No even number found"; // Return this if no even number is found in the array
}

// Example usage
const numbers = [3, 7, 5, 8, 12];
console.log(findFirstEvenNumber(numbers)); // Output: 8

const allOddNumbers = [1, 3, 5, 7];
console.log(findFirstEvenNumber(allOddNumbers)); // Output: No even number found


function countFromOneToFive() {
    let i = 1; // Start from 1
    do {
        console.log(i); // Print the current value of i
        i++; // Increment i by 1
    } while (i <= 5); // Continue looping while i is less than or equal to 5
}

// Example usage
countFromOneToFive(); // Prints numbers from 1 to 5


function countdown(n) {
    do {
        console.log(n); // Print the current value of n
        n--; // Decrement n by 1
    } while (n >= 0); // Continue looping while n is greater than or equal to 0
}

// Example usage
countdown(5); // Counts down from 5 to 0


function findFirstEvenNumber(arr) {
    let index = 0; // Initialize index to start at the beginning of the array
    do {
        if (arr[index] % 2 === 0) { // Check if the current element is even
            return arr[index]; // Return the first even number found
        }
        index++; // Move to the next element
    } while (index < arr.length); // Continue looping while index is within the array bounds
    return "No even number found"; // Return this if no even number is found in the array
}

// Example usage
const numbers = [3, 7, 5, 8, 12];
console.log(findFirstEvenNumber(numbers)); // Output: 8

const allOddNumbers = [1, 3, 5, 7];
console.log(findFirstEvenNumber(allOddNumbers)); // Output: No even number found
