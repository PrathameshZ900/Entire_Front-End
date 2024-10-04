// Employee prototype
function Employee(name, position) {
    this.name = name;
    this.position = position;
}

Employee.prototype.getDetails = function () {
    return `Name: ${this.name}, Position: ${this.position}`;
};

// Manager prototype
function Manager(name, position, teamSize) {
    Employee.call(this, name, position);
    this.teamSize = teamSize;
}

// Inherit from Employee
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.getDetails = function () {
    return `${Employee.prototype.getDetails.call(this)}, Team Size: ${this.teamSize}`;
};

// Developer prototype
function Developer(name, position, programmingLanguage) {
    Employee.call(this, name, position);
    this.programmingLanguage = programmingLanguage;
}

// Inherit from Employee
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.getDetails = function () {
    return `${Employee.prototype.getDetails.call(this)}, Programming Language: ${this.programmingLanguage}`;
};

// Create instances
const manager = new Manager("Alice", "Manager", 5);
const developer = new Developer("Bob", "Developer", "JavaScript");

console.log(manager.getDetails());  // Output: Name: Alice, Position: Manager, Team Size: 5
console.log(developer.getDetails()); // Output: Name: Bob, Position: Developer, Programming Language: JavaScript


// User constructor
function User(name, role) {
    this.name = name;
    this.role = role;
}

User.prototype.getRole = function () {
    console.log(`Role: ${this.role}`);
};

// Admin constructor
function Admin(name, role) {
    User.call(this, name, role);
}

// Inherit from User
Admin.prototype = Object.create(User.prototype);
Admin.prototype.manageUsers = function () {
    console.log("Admin managing users");
};

// Create an instance of Admin
const admin = new Admin("Charlie", "Administrator");

admin.getRole();      // Output: Role: Administrator
admin.manageUsers();  // Output: Admin managing users


// Library prototype
function Library() {
    this.books = [];
}

Library.prototype.getBooks = function () {
    return this.books;
};

// PublicLibrary prototype
function PublicLibrary() {
    Library.call(this);
}

// Inherit from Library
PublicLibrary.prototype = Object.create(Library.prototype);
PublicLibrary.prototype.lendBook = function (book) {
    const index = this.books.indexOf(book);
    if (index > -1) {
        this.books.splice(index, 1);
        console.log(`Lending book: ${book}`);
    } else {
        console.log("Book not available");
    }
};

// UniversityLibrary prototype
function UniversityLibrary() {
    Library.call(this);
}

// Inherit from Library
UniversityLibrary.prototype = Object.create(Library.prototype);
UniversityLibrary.prototype.addResearchPapers = function (paper) {
    this.books.push(paper);
    console.log(`Added research paper: ${paper}`);
};

// Create instances
const publicLibrary = new PublicLibrary();
const universityLibrary = new UniversityLibrary();

publicLibrary.books = ["Harry Potter", "The Hobbit"];
universityLibrary.addResearchPapers("Research on AI");

console.log(publicLibrary.getBooks());       // Output: ["Harry Potter", "The Hobbit"]
publicLibrary.lendBook("Harry Potter");      // Output: Lending book: Harry Potter
console.log(publicLibrary.getBooks());       // Output: ["The Hobbit"]
console.log(universityLibrary.getBooks());   // Output: ["Research on AI"]


// Person object
const Person = {
    name: "Daniel",
    introduce: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Athlete object
const Athlete = Object.create(Person);
Athlete.sport = "Soccer";
Athlete.introduce = function () {
    console.log(`Hello, my name is ${this.name} and I play ${this.sport}`);
};
Athlete.playSport = function () {
    console.log(`Playing ${this.sport}`);
};

// Instantiate an Athlete
Athlete.name = "Michael";
Athlete.introduce(); // Output: Hello, my name is Michael and I play Soccer
Athlete.playSport();  // Output: Playing Soccer



// Appliance prototype
function Appliance() {}

Appliance.prototype.turnOn = function () {
    console.log("The appliance is now on");
};

// WashingMachine prototype
function WashingMachine() {
    Appliance.call(this);
}

// Inherit from Appliance
WashingMachine.prototype = Object.create(Appliance.prototype);
WashingMachine.prototype.startWashing = function () {
    console.log("The washing machine is now washing clothes");
};

// Create a WashingMachine instance
const washingMachine = new WashingMachine();

washingMachine.turnOn();        // Output: The appliance is now on
washingMachine.startWashing();  // Output: The washing machine is now washing clothes


