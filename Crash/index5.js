function iPhone1(ASIN, color, display, OS, storage, bodyColor, height, camera) {
    return {
      ASIN: ASIN,
      color: color,
      display: display,
      OS: OS,
      storage: storage,
      bodyColor: bodyColor,
      height: height,
      camera: camera,
      
      // Methods
      dial: function() {
        return "tring.. tring...";
      },
      sendMessage: function() {
        return "Sending message...";
      },
      cameraClick: function() {
        return "Camera clicked";
      }
    };
  }
  
  // Creating an iPhone1 object
  let i1 = iPhone1(
    1,
    "B09X67JBQV",
    7.8,
    "IOS",
    "128mb",
    "Gray",
    "90mm",
    "2.0 MP"
  );
  
  // Accessing properties
  console.log(i1.ASIN);         // 1
  console.log(i1.color);        // "B09X67JBQV"
  console.log(i1.display);      // 7.8
  console.log(i1.camera);       // "2.0 MP"
  
  // Accessing methods
  console.log(i1.dial());       // "tring.. tring..."
  console.log(i1.sendMessage()); // "Sending message..."
  console.log(i1.cameraClick()); // "Camera clicked"

  


  function iPhone2(ASIN, color, display, OS, storage, bodyColor, height, camera, bluetooth) {
    return {
      ASIN: ASIN,
      color: color,
      display: display,
      OS: OS,
      storage: storage,
      bodyColor: bodyColor,
      height: height,
      camera: camera,
      bluetooth: bluetooth,
      
      // Methods
      dial: function() {
        return "tring.. tring...";
      },
      sendMessage: function() {
        return "Sending message...";
      },
      cameraClick: function() {
        return "Camera clicked";
      },
      connectBluetooth: function() {
        return "Bluetooth connected successfully...";
      }
    };
  }
  
  // Creating an iPhone2 object
  let i2 = iPhone2(
    1,
    "B09X67JBQV",
    7.8,
    "IOS",
    "128GB", // Corrected "128mb" to "128GB" as it's related to storage
    "Gray",
    "90mm",
    "2.0 MP",
    "5.1"
  );
  
  // Accessing properties
  console.log(i2.ASIN);          // 1
  console.log(i2.color);         // "B09X67JBQV"
  console.log(i2.display);       // 7.8
  console.log(i2.camera);        // "2.0 MP"
  console.log(i2.bluetooth);     // "5.1"
  
  // Accessing methods
  console.log(i2.dial());         // "tring.. tring..."
  console.log(i2.sendMessage());  // "Sending message..."
  console.log(i2.cameraClick());  // "Camera clicked"
  console.log(i2.connectBluetooth()); // "Bluetooth connected successfully..."
  