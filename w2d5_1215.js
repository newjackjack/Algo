/* 
Challenge: Create Pascal's Triangle see: https://www.mathsisfun.com/pascals-triangle.html

Your task is to write a JavaScript function that takes an integer n as input and returns an array of arrays 
that represents the first n rows of Pascal's triangle.

Pascal's triangle is a triangular array of numbers in which the first and last number in each row is 1,
and each remaining number is the sum of the two numbers above it in the previous row.

For example, if n is 5, the function should return the following array:


[
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1]

]

hint: How many digits are in row n? 

*/


function generatePascalsTriangle(n) {
    //Your code here
    //n =0
    if( n === 0){
        return [[]];
    }
    //n =1
    if( n === 1){
        return [[1]]
    }
    let triangle = [];
    for(var i = 0; i < n;i++ ){
        let row = [];
        for( var j = 0; j <= i ; j++){
            if(j === 0 || j ===i){
                row.push(1);//first and last element is one
            }
            else{//
                const prevRow = triangle;
                //[i-1][j]+[i-1][j-1]
                row.push(triangle[i-1][j]+triangle[i-1][j-1])
            }
        }
        triangle.push(row);
    }
    return triangle;
}


console.log(generatePascalsTriangle(1));
// => [[1]]

console.log(generatePascalsTriangle(2));
// => [[1], [1, 1]]

console.log(generatePascalsTriangle(5));
// => [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

console.log(generatePascalsTriangle(6));
// => [
//   [ 1 ],
//   [ 1, 1 ],
//   [ 1, 2, 1 ],
//   [ 1, 3, 3, 1 ],
//   [ 1, 4, 6, 4, 1 ],
//   [ 1, 5, 10, 10, 5, 1 ]
// ]