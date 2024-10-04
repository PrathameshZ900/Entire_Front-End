function processFiles(files) {
    // Calculate total size of all files
    const totalSize = files.reduce((acc, file) => acc + file.size, 0);
  
    // Get the 5 largest files sorted by size in descending order
    const largestFiles = files
      .slice() // Create a shallow copy to avoid mutating the original array
      .sort((a, b) => b.size - a.size) // Sort by size in descending order
      .slice(0, 5) // Take the first 5 largest files
      .map(file => ({ name: file.name, size: file.size })); // Map to new objects
  
    // Organize files by extension
    const filesByExtension = files.reduce((acc, file) => {
      const extension = file.name.split('.').pop(); // Get file extension
      if (!acc[extension]) {
        acc[extension] = []; // Initialize array if it doesn't exist
      }
      acc[extension].push(file.name); // Add file name to the respective extension array
      return acc;
    }, {});
  
    // Return the summary object
    return {
      totalSize,
      largestFiles,
      filesByExtension
    };
  }
  
  // Example usage
  const files = [
    { name: "document1.pdf", size: 500 },
    { name: "document2.pdf", size: 700 },
    { name: "image1.png", size: 200 },
    { name: "image2.png", size: 300 },
    { name: "text1.txt", size: 100 },
    { name: "text2.txt", size: 150 },
    { name: "photo1.jpg", size: 400 },
    { name: "photo2.jpg", size: 350 },
    { name: "program1.exe", size: 1000 },
    { name: "program2.exe", size: 1200 },
    { name: "data1.csv", size: 600 }
  ];
  
  const result = processFiles(files);
  console.log(result);
  