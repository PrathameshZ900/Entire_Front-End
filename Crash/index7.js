// ES6 Class definition for Iphone4
class Iphone4 {
    constructor(ASIN, color, display, camera, bluetooth, casingColor, lensSize, cameraQuality, bluetoothVersion) {
      this.ASIN = ASIN;
      this.color = color;
      this.display = display;
      this.camera = camera;
      this.bluetooth = bluetooth;
      this.casingColor = casingColor;
      this.lensSize = lensSize;
      this.cameraQuality = cameraQuality;
      this.bluetoothVersion = bluetoothVersion;
    }
  
    // Methods for Iphone4 class
    dial() {
      return "tring.. tring...";
    }
  
    sendMessage() {
      return "Sending message...";
    }
  
    cameraClick() {
      return "Camera clicked";
    }
  
    connectBluetooth() {
      return "Bluetooth connected successfully...";
    }
  }
  
  // Creating an instance of Iphone4 using the ES6 class
  let i4 = new Iphone4(
    1,
    "B09X67JBQV",
    7.8,
    "IOS",
    "128mb",
    "Gray",
    "90mm",
    "2.0 MP",
    "5.1"
  );
  
  // Accessing properties
  console.log(i4.ASIN); // 1
  console.log(i4.color); // B09X67JBQV
  console.log(i4.display); // 7.8
  console.log(i4.camera); // IOS
  console.log(i4.bluetooth); // 128mb
  
  // Accessing methods
  console.log(i4.dial()); // "tring.. tring..."
  console.log(i4.sendMessage()); // "Sending message..."
  console.log(i4.cameraClick()); // "Camera clicked"
  console.log(i4.connectBluetooth()); // "Bluetooth connected successfully..."
  