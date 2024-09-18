const strings = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "pear",
    "apple",
  ];
  
  const countOccurrences = (arr) => {
    return arr.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
  };
  
  const result = countOccurrences(strings);
  console.log(result);
  

  function ProductOfMultipleOfThreeOrFive(numbers) {
    return numbers.reduce(
      (acc, num) => (num % 3 === 0 || num % 5 === 0 ? acc + num : acc),
      0
    );
  }
  
  const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
  console.log(ProductOfMultipleOfThreeOrFive(numbers)); // Output: 1817
  
  

  function palindromesString(words) {
    return words.filter((word) => word === word.split("").reverse().join(""));
  }
  
  const words = [
    "racecar",
    "hello",
    "deified",
    "world",
    "level",
    "programming",
    "radar",
    "civic",
    "javascript",
  ];
  console.log(palindromesString(words)); // Output: ["racecar", "deified", "level", "radar", "civic"]




  function findImage(filePaths) {
    return filePaths.filter(
      (filePath) => filePath.endsWith(".png") || filePath.endsWith(".jpg")
    );
  }
  
  const filePaths = [
    "/images/pic1.jpg",
    "/images/pic2.png",
    "/assets/img/background.jpg",
    "/assets/img/logo.png",
    "/downloads/document.pdf",
    "/downloads/image.png",
    "/downloads/image.jpg",
  ];
  console.log(findImage(filePaths)); // Output: ["/images/pic1.jpg", "/images/pic2.png", "/assets/img/background.jpg", "/assets/img/logo.png", "/downloads/image.png", "/downloads/image.jpg"]

  



  function swapStrings(strings) {
    return strings.map((string) =>
      string.length > 1
        ? string[string.length - 1] + string.slice(1, -1) + string[0]
        : string
    );
  }
  
  const stringsSwap = [
    "Hello",
    "world",
    "this",
    "is",
    "an",
    "example",
    "array",
    "of",
    "strings",
  ];
  console.log(swapStrings(stringsSwap)); // Output: ["oellH", "dorlw", "shit", "si", "na", "example", "yrraa", "fo", "strings"]



  function countWords(sentences) {
    sentences.forEach((sentence, index) => {
      const words = sentence.split(" ").filter((word) => word !== ""); // Split the sentence into words and remove empty strings
      console.log(`Sentence ${index + 1} contains ${words.length} words.`);
    });
  }
  
  // Example usage:
  const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "I have a dream that one day this nation will rise up.",
    "To be or not to be, that is the question.",
    "In the beginning, God created the heavens and the earth.",
  ];
  
  countWords(sentences);

  const numbers2 = [1, 2, 3, 4, 5, 7];

const sumOfSquaresOfOdds = (arr) => {
  return arr
    .filter(num => num % 2 !== 0)       // Filter odd numbers
    .map(num => num * num)              // Square each odd number
    .reduce((sum, num) => sum + num, 0); // Sum the squared values
};

const result3 = sumOfSquaresOfOdds(numbers2);
console.log(result3);


