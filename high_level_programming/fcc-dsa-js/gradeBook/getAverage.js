/*
Step 1:
 * A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.
 *
 * Complete the getAverage function which takes in an array of test scores and returns the average score.
 *
 * The average is calculated by adding up all the scores and dividing by the total number of scores.
 *
 * average = sum of all scores / total number of scores
 */

const getClassAverage = (scores) => {
  let totalScore = 0;

  for (const score of scores) {
    totalScore += score;
  }
  return totalScore / scores.length;
};

// test

/*
console.log(getClassAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getClassAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
*/

module.exports = getClassAverage;
