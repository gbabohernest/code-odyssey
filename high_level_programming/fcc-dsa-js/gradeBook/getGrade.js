/**
 * Step 2
 * Now the teacher needs your help converting the student score to a letter grade.
 *
 * Complete the getStudentGrade function that takes a number score as a parameter. Your function
 * should return a string representing a letter grade based on the score.
 *
 *   100 -> A++ | 90 - 99 ->  A | 80 - 89 ->  B | 70 - 79 ->  C |  60 - 69 ->  D | 0 - 59 ->   f
 */

const getStudentGrade = (score) => {
  if (score === 100) return 'A++';
  if (score >= 90 && score <= 99) return 'A';
  if (score >= 80 && score <= 89) return 'B';
  if (score >= 70 && score <= 79) return 'C';
  if (score >= 60 && score <= 69) return 'D';
  if (score <= 59) return 'F';
};

// test;
/*
console.log(getStudentGrade(96));
console.log(getStudentGrade(82));
console.log(getStudentGrade(56));
*/

module.exports = getStudentGrade;
