// Write a method that will search an array of strings for all strings that contain another string,
// ignoring capitalization. Then return an array of the found strings.
//
// The method takes two parameters, the query string and the array of strings to search, and returns an array.
//
// If the string isn't contained in any of the strings in the array,
// the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)
//
// Examples
// If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"],
// the method should return ["home", "Mercury"].

// const wordSearch = (query, seq) => {
//     const emptyCaseResult = ['Empty']
//     if(!seq.length) return emptyCaseResult
    // const result = []

    // for(let i = 0; i < seq.length; i++) {
    //     const seqItemLowerCased = seq[i].toLowerCase()
    //     const queryLowerCased = query.toLowerCase()
    //     if(seqItemLowerCased.indexOf(queryLowerCased) !== -1) result.push(seq[i])
    // }
    // return result.length ? result : emptyCaseResult
// }
const wordSearch = (query, seq) => {
    const emptyCaseResult = ['Empty']
    if(!seq.length) return emptyCaseResult
    const result = seq.filter(item => item.toLowerCase().indexOf(query.toLowerCase()) > -1)
    return  result.length ? result : emptyCaseResult
}

console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"])) //["ab", "abc", "zab"]
console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"])) //["ab", "abc", "zab"]
console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"])) //["aB", "Abc", "zAB"]
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"])) //["Empty"]