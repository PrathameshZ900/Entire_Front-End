const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
  ];
  
  function analyzeVoterData(voters) {
      // Initialize counters
      let numYoungVotes = 0;
      let numYoungPeople = 0;
      let numMidVotesPeople = 0;
      let numMidsPeople = 0;
      let numOldVotesPeople = 0;
      let numOldsPeople = 0;
  
      // Loop through each voter to count
      voters.forEach(voter => {
          if (voter.age >= 18 && voter.age <= 25) {
              numYoungPeople++;
              if (voter.voted) numYoungVotes++;
          } else if (voter.age >= 26 && voter.age <= 35) {
              numMidsPeople++;
              if (voter.voted) numMidVotesPeople++;
          } else if (voter.age >= 36) {
              numOldsPeople++;
              if (voter.voted) numOldVotesPeople++;
          }
      });
  
      // Return the analysis object
      return {
          numYoungVotes,
          numYoungPeople,
          numMidVotesPeople,
          numMidsPeople,
          numOldVotesPeople,
          numOldsPeople
      };
  }
  
  console.log(analyzeVoterData(voters));
  