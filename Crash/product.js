// Base constructor function for Product
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  // Method to display product details
  Product.prototype.displayInfo = function() {
    console.log(`Product Name: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`);
  };
  
  // Method to update quantity
  Product.prototype.updateQuantity = function(amount) {
    this.quantity += amount;
    console.log(`Updated Quantity of ${this.name}: ${this.quantity}`);
  };
  
  // Constructor function for Electronics
  function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity); // Call Product constructor
    this.brand = brand;
    this.model = model;
  }
  
  // Inherit from Product
  Electronics.prototype = Object.create(Product.prototype);
  Electronics.prototype.constructor = Electronics;
  
  // Method to power on
  Electronics.prototype.powerOn = function() {
    console.log(`Powering on ${this.brand} ${this.model}.`);
  };
  
  // Method to power off
  Electronics.prototype.powerOff = function() {
    console.log(`Powering off ${this.brand} ${this.model}.`);
  };
  
  // Constructor function for Clothing
  function Clothing(name, price, quantity, size, fabric) {
    Product.call(this, name, price, quantity); // Call Product constructor
    this.size = size;
    this.fabric = fabric;
  }
  
  // Inherit from Product
  Clothing.prototype = Object.create(Product.prototype);
  Clothing.prototype.constructor = Clothing;
  
  // Method to display clothing details
  Clothing.prototype.displayClothingDetails = function() {
    console.log(`Clothing Size: ${this.size}, Fabric: ${this.fabric}`);
  };
  
  // Constructor function for Books
  function Books(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity); // Call Product constructor
    this.author = author;
    this.genre = genre;
  }
  
  // Inherit from Product
  Books.prototype = Object.create(Product.prototype);
  Books.prototype.constructor = Books;
  
  // Method to display book details
  Books.prototype.displayBookDetails = function() {
    console.log(`Author: ${this.author}, Genre: ${this.genre}`);
  };
  
  // Demonstration
  
  // Creating an instance of Electronics
  const laptop = new Electronics("Laptop", 999.99, 10, "BrandA", "ModelX");
  laptop.displayInfo();             // Output: Product Name: Laptop, Price: $999.99, Quantity: 10
  laptop.powerOn();                 // Output: Powering on BrandA ModelX.
  laptop.updateQuantity(5);         // Output: Updated Quantity of Laptop: 15
  laptop.powerOff();                // Output: Powering off BrandA ModelX.
  
  // Creating an instance of Clothing
  const tShirt = new Clothing("T-Shirt", 19.99, 50, "M", "Cotton");
  tShirt.displayInfo();             // Output: Product Name: T-Shirt, Price: $19.99, Quantity: 50
  tShirt.displayClothingDetails();  // Output: Clothing Size: M, Fabric: Cotton
  tShirt.updateQuantity(-5);        // Output: Updated Quantity of T-Shirt: 45
  
  // Creating an instance of Books
  const book = new Books("JavaScript Basics", 29.99, 100, "Author A", "Programming");
  book.displayInfo();               // Output: Product Name: JavaScript Basics, Price: $29.99, Quantity: 100
  book.displayBookDetails();        // Output: Author: Author A, Genre: Programming
  book.updateQuantity(-10);         // Output: Updated Quantity of JavaScript Basics: 90
  