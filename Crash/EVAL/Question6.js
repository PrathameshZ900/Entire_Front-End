// Rearrange the fruits in  arr 


const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];

function rearrangeFruits(arr) {
  // Remove the last 4 elements using splice
  const removedFruits = arr.splice(-4);

  // Add them back to the front using unshift and spread operator
  arr.unshift(...removedFruits);

  return arr;
}

console.log(rearrangeFruits(fruits));
// Output: [ 'Peach', 'Kiwi', 'Strawberry', 'Watermelon', 'Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes' ]

