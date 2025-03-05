/*
 * Step 3
 * The Teacher is really happy the program you have created so far.
 * But now they want to have an easy way to check if a student has a passing grade.
 * A passing grade is anything that is not an 'F'.
 *
 * Complete the function isPassingGrade that takes a student score as parameter. Your function
 * should return true if the student has a passing grade and false if they do not.
 */

const getStudentGrade = require('./getGrade');

const isPassingGrade = (score) => {
  const grade = getStudentGrade(score);

  if (grade !== 'F') {
    return true;
  }
  return false;
};

console.log(isPassingGrade(100));
console.log(isPassingGrade(53));
console.log(isPassingGrade(87));
