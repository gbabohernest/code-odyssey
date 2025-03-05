/*
 * Step 4
 * Now that the teacher has all of the information they need, they want to be able to message the student with results.
 *
 * Complete the studentMsg function with totalScores and studentScore for params. The function should return string
 * representing a message to the student.
 *
 * If the student passed the course, the string should follow this format:
 *  Example: Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.
 *
 * If the student failed the course, the string should follow this format instead.
 * Example: Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.
 */

const getClassAverage = require('./getAverage');
const getStudentGrade = require('./getGrade');

const studentMsg = (totalScores, studentScore) => {
  const classAverage = getClassAverage(totalScores);
  const studentGrade = getStudentGrade(studentScore);

  if (studentGrade === 'F') {
    return `Class average: ${classAverage}. Your grade: ${studentGrade}. You failed the course.`;
  }

  return `Class average: ${classAverage}. Your grade: ${studentGrade}. You passed the course.`;
};

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
