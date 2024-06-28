/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/
const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];
const expected1 = 2;
/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
  left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
  right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
  absolute difference = 0
*/


function diagonalDifference(sqrMatrix) {
    // R.I.O.T.
    // create a sum variable
    let sum = 0;
    // create two temp variables one is the first(temp1) and one is the last element 
    let temp1 = 0;
    let temp2 = 0;
    // one loop to go through arr, stating at i = 0
    for (let i = 0; i < sqrMatrix.length; i++) {
        //  set temp1 = arr[i], temp2 = arr[arr.length - (i+1)]
        //temp1 go into the first element in the first
        temp1 = sqrMatrix[i][i];
        temp2 = sqrMatrix[i][sqrMatrix.length - (i + 1)];
        // console.log("temp1", temp1);
        // console.log("temp2", temp2);
        sum += (temp1 - temp2);
        // console.log("sum", sum);
    }
    
    return Math.abs(sum)
}
console.log(diagonalDifference(squareMatrix1))
console.log(diagonalDifference(squareMatrix2))