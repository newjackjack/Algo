//create a function take a string as input and output the reverse string.
//example:
//input: 'abcd e'
//ouput: 'e dcba'

function foo(input) {
    // implement the logic below
    //output the reverse string
    res = ""
    // console.log("length of input: ", input.length)
    for(let i = input.length -1; i >= 0; i--){
        res += input[i]
    }
    return res
}

// test case
console.log(foo('abcd e')); // should output 'e dcba' in the console
console.log(foo('233c de')); // should output 'ed c332' in the console