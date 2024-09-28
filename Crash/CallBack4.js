// Question 1: Coding Score Check
function codingScoreCheck(marks, cutOffScore) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const total = marks.reduce((sum, mark) => sum + mark, 0);
        const average = total / marks.length;
        
        if (average >= cutOffScore) {
          resolve(`Average score is ${average}, you cleared the coding round.`);
        } else {
          reject("Sorry you haven’t cleared the coding round.");
        }
      }, 2000);
    });
  }
  
  // Question 2: HUKUMU Score Check
  function HUKUMUScoreCheck(marks, cutOffScore) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const total = marks.reduce((sum, mark) => sum + mark, 0);
        const average = total / marks.length;
  
        if (average >= cutOffScore) {
          resolve(`Average score is ${average}, you cleared the HUKUMU round.`);
        } else {
          reject("Sorry you haven’t cleared the HUKUMU round.");
        }
      }, 2000);
    });
  }
  
  // Question 3: Unit Movement Check
  function unitMovementCheck(averageCodingScore, averageHukumuScore, cutOffScore) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const average = (averageCodingScore + averageHukumuScore) / 2;
  
        if (average >= cutOffScore) {
          resolve(`Average score is ${average}, you cleared the final cutoff.`);
        } else {
          reject("Sorry you haven’t cleared the final cutoff.");
        }
      }, 2000);
    });
  }
  
  // Example Usage:
  const codingMarks = [80, 85, 90]; // Array of marks
  const hukumuMarks = [75, 80, 85]; // Array of marks
  const cutOffScore = 80;
  
  // Calling the functions
  codingScoreCheck(codingMarks, cutOffScore)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  HUKUMUScoreCheck(hukumuMarks, cutOffScore)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  unitMovementCheck(85, 82, cutOffScore)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  