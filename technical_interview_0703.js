// Write a function in Javascript that takes in a string and returns the word(s) that occur(s) most frequently in the sentence in an array. 
//If there are multiple words with the same highest frequency, return all of them in the array.

// mostFrequentWord("the cat and the dog played in the garden"); 
// Should return ["the"]

// mostFrequentWord("I think programming is fun programming is creative and programming is rewarding"); 
// Should return ["programming", "is"]

const mostFrequentWord = function(s){
    //input: a string
    //Case sensitive
    //1. split the string => will split to array of words
    s = s.split(" ")
    console.log("s: ", s)
    
    //2. put word to freq map
    const freqMap = new Map()
    for(const word of s){
        //check if the key exist: not exist => create the key and set value to 1
        if(!freqMap.has(word)){
            freqMap.set(word, 1)
        }
        else{
            freqMap.set(word, freqMap.get(word) + 1)
        }
    }
    // console.log("freqMap: ", freqMap)
    
}
mostFrequentWord("the cat and the dog played in the garden"); 
// Should return ["the"]