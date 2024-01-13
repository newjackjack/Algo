// The Fibonacci sequence is defined as follows: the first number of the sequence is 0, 
// the second number is 1, and the nth number is the sum of the (n -1)th and (n -2)th numbers.
// Write a function that takes in an integer n and returns the nth Fibonacci number.

// Important note: the Fibonacci sequence is often defined with its first two numbers as F0 = 0 and F1 = 1.
//  For the purpose of this question, the first Fibonnacci number is F0; 
//  therefore, getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc..

function getNthFib(n) {
    let lastTwo = [0,1];
    //Your code here
    //this for loop will first check if n is greater than or equal to n
    for (var i = 2; i < n; i++){
        lastTwo[i] = lastTwo[i-1]+lastTwo[i-2];
    }
    return lastTwo[lastTwo.length - 1];
    //
    return n > 1 ? lastTwo[1] : lastTwo[0];
    
  }
  console.log(getNthFib(8));