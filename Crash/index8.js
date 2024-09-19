// Factory function to create an animal object
function animal(noOfLegs, vegetarian) {
    return {
      noOfLegs: noOfLegs,
      vegetarian: vegetarian,
      
      // Method to return "eating..."
      eat() {
        return "eating...";
      },
      
      // Method to return a greeting with the number of legs
      greet() {
        return `Hi, I have ${this.noOfLegs} legs.`;
      }
    };
  }
  
  // Creating an animal instance using the factory function
  let a1 = animal(4, true);
  
  // Accessing methods
  console.log(a1.eat());   // "eating..."
  console.log(a1.greet()); // "Hi, I have 4 legs."

  

  // Constructor function for AnimalCF
function AnimalCF(noOfLegs, vegetarian) {
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
  
    // Method to return "eating..."
    this.eat = function() {
      return "eating...";
    };
  
    // Method to return a greeting with the number of legs
    this.greet = function() {
      return `Hi, I have ${this.noOfLegs} legs.`;
    };
  }
  
  // Creating an instance of AnimalCF using the 'new' keyword
  let animalCF = new AnimalCF(4, true);
  
  // Accessing methods
  console.log(animalCF.eat());   // "eating..."
  console.log(animalCF.greet()); // "Hi, I have 4 legs."

  
  // ES6 class definition for AnimalCF
class AnimalCF {
    constructor(noOfLegs, vegetarian) {
      this.noOfLegs = noOfLegs;
      this.vegetarian = vegetarian;
    }
  
    // Method to return "eating..."
    eat() {
      return "eating...";
    }
  
    // Method to return a greeting with the number of legs
    greet() {
      return `Hi, I have ${this.noOfLegs} legs.`;
    }
  }
  
  // Creating an instance of AnimalCF using the 'new' keyword
  let animalCF = new AnimalCF(4, true);
  
  // Accessing methods
  console.log(animalCF.eat());   // "eating..."
  console.log(animalCF.greet()); // "Hi, I have 4 legs."
  