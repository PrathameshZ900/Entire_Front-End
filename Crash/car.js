// Constructor function for Car
function Car(make, model, year, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
}

// Constructor function for Customer
function Customer(name, rentedCars = []) {
    this.name = name;
    this.rentedCars = rentedCars;
}

// Method for Customer to rent a car
Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented a ${car.make} ${car.model}.`);
    } else {
        console.log(`Sorry, the ${car.make} ${car.model} is already rented.`);
    }
};

// Constructor function for PremiumCustomer inheriting from Customer
function PremiumCustomer(name, discountRate, rentedCars = []) {
    Customer.call(this, name, rentedCars);
    this.discountRate = discountRate;
}

PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

// Function to calculate rental prices
function calculateRentalPrice(carType, days, isPremium = false) {
    const basePrice = 50;
    let price = basePrice * days;

    // Adjusting price based on car type
    switch (carType) {
        case 'SUV':
            price *= 1.5;
            break;
        case 'Sedan':
            price *= 1.2;
            break;
        // Add more car types as needed
    }

    if (isPremium) {
        price -= (price * 0.1); // Apply 10% discount
    }

    return price;
}

// Method for Customer to return a car
Customer.prototype.returnCar = function(car) {
    setTimeout(() => {
        car.isAvailable = true;
        const index = this.rentedCars.indexOf(car);
        if (index > -1) {
            this.rentedCars.splice(index, 1);
        }
        console.log(`${this.name} returned the ${car.make} ${car.model}.`);
    }, 2000); // Simulate delay
};

// Function to handle maintenance
function Maintenance(car, delay) {
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
}

// Demonstrate functionality
const car1 = new Car('Toyota', 'Corolla', 2020);
const car2 = new Car('Ford', 'Escape', 2021);
const premiumCar = new Car('Tesla', 'Model S', 2022);

const customer1 = new Customer('John Doe');
const premiumCustomer = new PremiumCustomer('Jane Smith', 0.1);

// Renting cars
customer1.rentCar(car1);
premiumCustomer.rentCar(premiumCar);

// Calculate rental prices
const priceForCustomer1 = calculateRentalPrice('Sedan', 3);
const priceForPremiumCustomer = calculateRentalPrice('SUV', 3, true);
console.log(`Total rental price for ${customer1.name}: $${priceForCustomer1}`);
console.log(`Total rental price for ${premiumCustomer.name}: $${priceForPremiumCustomer}`);

// Returning cars
customer1.returnCar(car1);
premiumCustomer.returnCar(premiumCar);

// Maintenance
Maintenance(car2, 5000); // 5 seconds maintenance delay
