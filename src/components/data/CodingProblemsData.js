const problems = {
    'easy': [
        "Print all even numbers from 0 to 10",
        "Write a function that takes an array as input and returns a string with the elements of the array in a reversed order. Use array methods to solve this problem.\nCall the function on: [1, 2, 3, 4, 5]. It should output: 5, 4, 3, 2, 1",
        "Write a function that will count the number of character in a string.\nCall it on a string 'happy shrimp' 🦐",
    ],
    'medium': [
        "Write a function that takes a sentence as input and returns a new string with the words reversed. Use string methods to solve this problem.\nCall the function on the sentence: 'Shrimps are the best!'. Expected output: 'best! the are Shrimps'", 
        "Write a function to calculate the sum of numbers inside an array.\nCall your function on the array: [17, 67, 145, 34]", 
        "Write a function that takes a sentence as input and returns the longest word in the sentence. If there are multiple words with the same maximum length, return the first occurrence. You can assume that the sentence doesn't have any punctuation. Use string and array methods to solve this problem.\nCall the function on: 'I love to eat code'. The output should be: 'love'",
        "Write a function that takes a sentence as input and returns a new sentence with the first letter of each word capitalized. Use string and array methods to solve this problem.\nCall your function on: 'i hope i'm your favourite pet. don't tell your cat!'. The output will be: 'I Hope I'm Your Favourite Pet. Don't Tell Your Cat!'"
    ],
    'hard': [
        "An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.\nCall your function on the word: 'ambidextrously'. It should return 'true'", 
        "Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case. Note that all triangles must have surface greater than 0 to be accepted.\nTest it on the values: 2, 5, 11. The function should return 'false'", 
        "Write a function that generates factors for a given number. The function takes an integer as parameter and returns a list of integers. That list contains the prime factors in numerical sequence.\nCall it on the number 12.\nExamples:\n1  ==> [],\n3  ==>  [3],\n8  ==>  [2, 2, 2],\n9  ==>  [3, 3],\n12 ==>  [2, 2, 3]"
    ]
}

const solutions = {
    'easy': [
        "function printEvenNumbers() { let array = []; for (let i = 0; i <= 10; i += 2) { array.push(i);} return array.join(', ')} printEvenNumbers();",
        "[1, 2, 3, 4, 5].reverse().join(', ')",
        "'happy shrimp'.length"
    ],
    'medium': [
        "const reverseWords = sentence => sentence.split(' ').reverse().join(' '); reverseWords('Shrimps are the best!');", 
        "const calculateSum = numbers => numbers.reduce((a, b) => a + b, 0);const inputArray = [17, 67, 145, 34]; calculateSum(inputArray);", 
        "const findLongestWord = sentence => sentence.split(' ').reduce((longestWord, currentWord) => currentWord.length > longestWord.length ? currentWord : longestWord); findLongestWord('I love to eat code');", 
        "const capitalizeFirstLetters = sentence => sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); capitalizeFirstLetters('i hope i'm your favourite pet. don't tell your cat!');"],
    'hard': [
        "const isIsogram = word => new Set(word.toLowerCase()).size === word.length; isIsogram('ambidextrously');", 
        "const isTrianglePossible = (a, b, c) => a + b > c && a + c > b && b + c > a; isTrianglePossible(2, 5, 11);", 
        "const generatePrimeFactors = number => {const factors = []; let divisor = 2;            while (number > 2) { if (number % divisor === 0) { factors.push(divisor); number /= divisor; } else { divisor++; } } return factors; }; generatePrimeFactors(12);"
    ]
}

export { problems, solutions };