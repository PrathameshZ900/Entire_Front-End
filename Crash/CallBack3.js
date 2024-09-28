// Function to simulate asynchronous user data retrieval
function getUserData(id, callback) {
    // Simulating a delay of 2 seconds using setTimeout
    setTimeout(() => {
      // Creating a dummy user object with the provided id
      const user = {
        id: id,
        name: "John Doe",
        email: "john.doe@example.com"
      };
      
      // Calling the callback function with the user object
      callback(user);
    }, 2000); // 2 seconds delay
  }
  
  // Function to display user data
  function displayUser(user) {
    console.log(`User ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
  }
  
  // Calling getUserData with an ID and displayUser as the callback
  getUserData(8, displayUser);
  