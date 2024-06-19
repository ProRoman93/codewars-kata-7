// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

// const getCount = (str) => {
//     let count = 0;
//     const vowels = ['a', 'o', 'u', 'i', 'e']
//     const strLength = str.length
//     for(let i = 0; i < strLength; i++) {
//         if(vowels.includes(str[i])){
//             count++
//         }
//     }
//     return count
    //use reduce
    //use regex //how to count someth...
// }

const getCount = str => {
    const vowels = ['a', 'o', 'u', 'i', 'e']

    return str.split('').reduce((acc, el) => {
        if(vowels.indexOf(el) > -1) acc++
        return acc
    },0)
}
console.log(getCount("abracadabra")) // 5
console.log(getCount("abracadabr")) // 4
console.log(getCount("abracadbr")) // 3
console.log(getCount("abracdbr")) // 2
console.log(getCount("abrcdbr")) // 1
console.log(getCount("brcdbr")) // 0