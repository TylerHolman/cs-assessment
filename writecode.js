// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

const addToZero = (num) => {
    for(let i = 0; i < num.length; i++){
        for(let j = 1; j < num.length; j++){
            if(num[i] + num[j] === 0){
                
                return true
            }else {
                return false
            }
        }
    }
}
console.log(addToZero([1,1]))

// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

const hasUniqChar = (word) => {
    for(let i = 0; i < word.length; i++){
        for(let j = i + 1; j < word.length; j++){
            if(word[i]  ===  word[j]){
                return false 
            }
        }
    }
    return true
}
console.log(hasUniqChar("Monday"))




// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.
const panContain = (string) => {
    strArr = string.toLowerCase()
    alphabet = `abcdefghijklmnopqrstuvwxyz`.split(``)
    
    for(let i = 0; i < alphabet.length; i++){
        if(strArr.indexOf(alphabet[i]) < 0){
            return `not pangram`
        }
    }   
        return `pangram`
}
console.log(panContain(`The quick brown fox jumps over the lazy dog.`))

// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one