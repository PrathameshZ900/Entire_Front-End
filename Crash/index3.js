let subjectsHash = {
    1: "Javascript",
    2: "HTML",
    3: "CSS",
    4: "Java",
    5: "Rust",
  };
  
  let students = [
    { id: 1, name: "Prateek", subjectID: 5 },
    { id: 2, name: "Yogesh", subjectID: 2 },
    { id: 3, name: "Nrupul", subjectID: 4 },
    { id: 4, name: "Prateek", subjectID: 1 },
  ];
  
  // Create the output object
  let result = {};
  
  // Iterate over the students array
  students.forEach(student => {
    const subject = subjectsHash[student.subjectID]; // Get the subject name from subjectID
    
    // If the student name doesn't exist in the result object, initialize it
    if (!result[student.name]) {
      result[student.name] = [];
    }
    
    // Push the subject into the student's array of subjects
    result[student.name].push(subject);
  });
  
  console.log(result);
  



  let prateekMarksData = {
    name: "Prateek",
    subject1: "Javascript",
    subject2: "HTML",
    subject3: "CSS",
    subject4: null,
    subject5: null,
    marks1: 90,
    marks2: 81,
    marks3: 80,
    marks4: null,
    marks5: null,
  };
  
  let nrupulMarksData = {
    name: "Nrupul",
    subject1: "Java",
    subject2: "Python",
    subject3: null,
    subject4: null,
    subject5: null,
    marks1: 95,
    marks2: 85,
    marks3: null,
    marks4: null,
    marks5: null,
  };
  
  let allStudentsMarksData = [prateekMarksData, nrupulMarksData];
  
  // Function to transform the data
  function transformData(studentsData) {
    return studentsData.map((student) => {
      let marks = [];
      for (let i = 1; i <= 5; i++) {
        let subject = student[`subject${i}`];
        let score = student[`marks${i}`];
        if (subject && score !== null) {
          marks.push({ subject: subject, score: score });
        }
      }
      return {
        name: student.name,
        marks: marks,
      };
    });
  }
  
  let transformedData = transformData(allStudentsMarksData);
  
  console.log(transformedData);
    


  const voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ];
  
  // Function to classify voters
  function classifyVoters(voters) {
    return voters.reduce(
      (acc, voter) => {
        if (voter.age <= 20) {
          acc.numYoungPeople++;
          if (voter.voted) acc.numYoungVotes++;
        } else if (voter.age > 20 && voter.age <= 45) {
          acc.numMidsPeople++;
          if (voter.voted) acc.numMidVotesPeople++;
        } else if (voter.age > 45) {
          acc.numOldsPeople++;
          if (voter.voted) acc.numOldVotesPeople++;
        }
        return acc;
      },
      {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0,
      }
    );
  }
  
  const result1 = classifyVoters(voters);
  
  console.log(result1);
  



const data = [
  {
    name: "Superman",
    favoriteIceCreams: [
      "Strawberry",
      "Vanilla",
      "Chocolate",
      "Cookies & Cream",
    ],
  },
  {
    name: "Batman",
    favoriteIceCreams: [
      "Cookies & Cream",
      "Mint Chocolate Chip",
      "Chocolate",
      "Vanilla",
    ],
  },
  {
    name: "Flash",
    favoriteIceCreams: ["Chocolate", "Rocky Road", "Pistachio", "Banana"],
  },
  {
    name: "Aquaman",
    favoriteIceCreams: ["Vanilla", "Chocolate", "Mint Chocolate Chip"],
  },
  {
    name: "Green Lantern",
    favoriteIceCreams: [
      "Vanilla",
      "French Vanilla",
      "Vanilla Bean",
      "Strawberry",
    ],
  },
  {
    name: "Robin",
    favoriteIceCreams: ["Strawberry", "Chocolate", "Mint Chocolate Chip"],
  },
];

// Function to count favorite ice creams
function countIceCreams(data) {
  return data.reduce((acc, person) => {
    person.favoriteIceCreams.forEach((flavor) => {
      acc[flavor] = (acc[flavor] || 0) + 1;
    });
    return acc;
  }, {});
}

const iceCreamCounts = countIceCreams(data);

console.log(iceCreamCounts);


function UniqueString(strings) {
  return strings.reduce((acc, string) => {
    acc[string] = (acc[string] || 0) + 1;
    return acc;
  }, {});
}

const strings = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "pear",
  "apple",
];

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



function ProductOfMultipleOfThreeOrFive(numbers) {
  return numbers.reduce(
    (acc, num) => (num % 3 === 0 || num % 5 === 0 ? acc + num : acc),
    0
  );
}

const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
console.log(ProductOfMultipleOfThreeOrFive(numbers)); // Output: 1817


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


