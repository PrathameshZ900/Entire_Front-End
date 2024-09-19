class Car {
    constructor(name, accelerationPower, brakingPower, maxFuel) {
      this.name = name;
      this.accelerationPower = accelerationPower;
      this.brakingPower = brakingPower;
      this.speed = 0;
      this.fuelLevel = 0;
      this.maxFuel = maxFuel;
    }
  
    // Method to increase the speed of the car
    accelerate() {
      this.speed += this.accelerationPower;
      console.log(`Accelerating. Current speed: ${this.speed} m/s`);
    }
  
    // Method to decrease the speed of the car
    brake() {
      this.speed -= this.brakingPower;
      if (this.speed < 0) {
        this.speed = 0;
      }
      console.log(`Brakes applied. Current speed: ${this.speed} m/s`);
    }
  
    // Method to return the current speed of the car
    checkSpeed() {
      return this.speed;
    }
  
    // Method to refuel the car to maximum capacity
    refuel() {
      this.fuelLevel = this.maxFuel;
      console.log("Refueled to maximum capacity");
    }
  
    // Method to simulate a driving session
    drive(duration, accelerateInterval, brakeInterval) {
      let timeElapsed = 0;
      let intervals = Math.floor(duration / (accelerateInterval + brakeInterval));
      for (let i = 0; i < intervals; i++) {
        // Accelerate
        if (this.fuelLevel > 0) {
          this.accelerate();
          this.fuelLevel -= 1; // Simulate fuel consumption
        } else {
          console.log("Out of fuel");
          break;
        }
        
        // Log status
        console.log(`Time: ${timeElapsed}s, Speed: ${this.checkSpeed()} m/s, Fuel Level: ${this.fuelLevel}`);
  
        // Wait for accelerate interval
        timeElapsed += accelerateInterval;
  
        // Brake
        this.brake();
        console.log(`Time: ${timeElapsed}s, Speed: ${this.checkSpeed()} m/s, Fuel Level: ${this.fuelLevel}`);
        
        // Wait for brake interval
        timeElapsed += brakeInterval;
      }
    }
  }
  
  // Example usage:
  
  // Creating an instance of Car
  let myCar = new Car("Speedster", 5, 3, 10);
  
  // Refuel the car
  myCar.refuel();
  
  // Simulate a driving session: 20 seconds total, 5 seconds accelerating, 5 seconds braking
  myCar.drive(20, 5, 5);
  