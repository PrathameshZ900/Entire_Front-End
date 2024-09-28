function filterArray(arr, callback) {
    // Create an empty array to store the filtered elements
    let filteredArr = [];
  
    // Iterate through the given array
    for (let i = 0; i < arr.length; i++) {
      // Apply the callback to each element
      if (callback(arr[i])) {
        // If the callback returns true, add the element to filteredArr
        filteredArr.push(arr[i]);
      }
    }
  
    // Print the original array
    console.log('Original Array:', arr);
  
    // Print the filtered array
    console.log('Filtered Array:', filteredArr);
  
    // Return the filtered array
    return filteredArr;
  }
  
  // Example callback function to check if a number is even
  function isEven(num) {
    return num % 2 === 0;
  }
  
  // Test case
  const numbers = [1, 2, 3, 4, 5, 6];
  const filteredNumbers = filterArray(numbers, isEven);
  
  // Output will be:
  // Original Array: [1, 2, 3, 4, 5, 6]
  // Filtered Array: [2, 4, 6]
  