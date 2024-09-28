function calculate(num1, num2) {
    // Function that performs the operation based on the callback
    function operation(num1, num2, callback) {
      return callback(num1, num2);
    }
  
    // Define callback for addition
    const addition = (a, b) => a + b;
    
    // Define callback for multiplication
    const multiplication = (a, b) => a * b;
  
    // Perform the operations and log the results
    console.log("Addition:", operation(num1, num2, addition));
    console.log("Multiplication:", operation(num1, num2, multiplication));
  }
  
  // Example usage:
  calculate(5, 3);
  