// Files 


const files = [
    "document1.pdf",
    "document2.pdf",
    "image1.png",
    "image2.png",
    "text1.txt",
    "text2.txt",
    "photo1.jpg",
    "photo2.jpg",
    "program1.exe",
    "program2.exe",
    "data1.csv",
    "data2.csv",
    "report1.pdf",
    "report2.pdf",
    "image3.png",
    "text3.txt",
    "photo3.jpg",
    "document3.pdf"
  ];


  function categorizeFiles(files) {
    return {
      pdf: files.filter(file => file.endsWith(".pdf")).slice(),
      png: files.filter(file => file.endsWith(".png")).slice(),
      txt: files.filter(file => file.endsWith(".txt")).slice(),
      jpg: files.filter(file => file.endsWith(".jpg")).slice(),
      exe: files.filter(file => file.endsWith(".exe")).slice(),
      csv: files.filter(file => file.endsWith(".csv")).slice(),
    };
  }
  
  const result = categorizeFiles(files);
  console.log(result);
 
  
  