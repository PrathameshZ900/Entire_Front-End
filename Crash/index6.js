function iPhone3(ASIN, color, display, camera, bluetooth) {
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.bluetooth = bluetooth;
  }
  
  // Adding methods to iPhone3's prototype
  iPhone3.prototype.dial = function() {
    return "tring.. tring...";
  };
  
  iPhone3.prototype.sendMessage = function() {
    return "Sending message...";
  };
  
  iPhone3.prototype.cameraClick = function() {
    return "Camera clicked";
  };
  
  iPhone3.prototype.connectBluetooth = function() {
    return "Bluetooth connected successfully...";
  };
  
  // Creating the object using .call() method
  let i3 = {};
  iPhone3.call(i3, "B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");
  
  // Accessing properties
  console.log(i3.ASIN); // B09X67JBQV
  console.log(i3.color); // Gray
  console.log(i3.display); // 7.8
  console.log(i3.camera); // 2.0 MP
  console.log(i3.bluetooth); // Bluetooth 5.1
  
  // Accessing methods
  console.log(i3.dial ? i3.dial() : "Method not available"); // "tring.. tring..."
  console.log(i3.sendMessage ? i3.sendMessage() : "Method not available"); // "Sending message..."
  console.log(i3.cameraClick ? i3.cameraClick() : "Method not available"); // "Camera clicked"
  console.log(i3.connectBluetooth ? i3.connectBluetooth() : "Method not available"); // "Bluetooth connected successfully..."
  