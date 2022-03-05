// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

const addToZero = (num) => {
    for(let i = 0; i < num.length; i++){
        for(let j =1; j < num.length; j++){
            if(num[i] + num[j] === 0){  
                return true
            }
        }
    }

    return false
}
console.log(addToZero([1,1,5,8, 5, 1,8]))
//run time complexity O(n^2)

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


//run time complexity O(n^2)

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

//run time complexity O(n)

// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one

const findLongestWord = (word) => {
    let results = 0

    for(let i = 0; i < word.length; i++){
        if(word[i].length > results){
            results = word[i].length
        }
    }
    return results
}

console.log(findLongestWord(['big', 'small', 'orange', 'it', 'blankenship']))

//time complexity O(n)