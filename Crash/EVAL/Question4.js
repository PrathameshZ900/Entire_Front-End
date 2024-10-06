// Deep copy of a object 


const obj = {
    name: "John",
    address: {
      city: "New York",
      zip: 10001
    }
  };
  

//   console.log(obj)
//   const copy = deepCopy(obj);
//   console.log(copy);
//   // Output: { name: "John", address: { city: "New York", zip: 10001 } }
  
  

// Function to perform a deep copy
function DeepCopy(obj){
    return JSON.parse(JSON.stringify(obj));
  };


console.log(obj)
  
  const copy = DeepCopy(obj);
  console.log(copy);