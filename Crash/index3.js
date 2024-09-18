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
  