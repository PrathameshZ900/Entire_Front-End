// Merge two objects 

const obj1 = { name: "John", age: 30 };
const obj2 = { age: 40, city: "New York" };



function mergeObjects(obj1, obj2){

   let ans = {...obj1 , ...obj2};
   return ans;
}


const result = mergeObjects(obj1, obj2);
console.log(result);
// Output: { name: "John", age: 40, city: "New York" }

