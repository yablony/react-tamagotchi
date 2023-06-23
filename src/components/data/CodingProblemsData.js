const easyLevelProblems = [
    "Print all even numbers from 0 to 10", 
    "Create a length converter function.\nCall it on a string 'happy shrimp' 🦐", 
    "Write a function that takes an array as input and returns a new array with the elements reversed. Use array methods to solve this problem.\nCall the function on: [1, 2, 3, 4, 5]. It should output: [5, 4, 3, 2, 1]"
];

const easyLevelSolutions = ["0, 2, 4, 6, 8, 10", "12", "[5, 4, 3, 2, 1]"];

const mediumLevelProblems = [
    "Write a function that takes a sentence as input and returns a new string with the words reversed. Use string methods to solve this problem.\nCall the function on the sentence: 'Shrimps are the best!'. Expected output: 'best! the are Shrimps'", 
    "Write a function to calculate the sum of numbers inside an array.\nCall your function on the array: [17, 67, 145, 34]", 
    "Write a function that takes a sentence as input and returns the longest word in the sentence. If there are multiple words with the same maximum length, return the first occurrence. You can assume that the sentence doesn't have any punctuation. Use string and array methods to solve this problem.\nCall the function on: 'I love to eat code'. The output should be: 'love'",
    "Write a function that takes a sentence as input and returns a new sentence with the first letter of each word capitalized. Use string and array methods to solve this problem.\nCall your function on: 'i hope i'm your favourite pet. don't tell your cat!'. The output will be: 'I Hope I'm Your Favourite Pet. Don't Tell Your Cat!"
];

const mediumLevelSolutions = ["best! the are Shrimps", "263", "love", "I Hope I'm Your Favourite Pet. Don't Tell Your Cat!"]

const hardLevelProblems = [
    "An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.\nCall your function on the word: 'ambidextrously'. It should return 'true'", 
    "Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case. Note that all triangles must have surface greater than 0 to be accepted.\nTest it on the values: 2, 5, 11. The function should return 'false'", 
    "Write a function that generates factors for a given number. The function takes an integer as parameter and returns a list of integers. That list contains the prime factors in numerical sequence.\nCall it on the number 12.\nExamples:\n1  ==> [],\n3  ==>  [3],\n8  ==>  [2, 2, 2],\n9  ==>  [3, 3],\n12 ==>  [2, 2, 3]"
];

const hardLevelSolutions = ["true", "false", "[2, 2, 3]"];

export { easyLevelProblems, easyLevelSolutions, mediumLevelProblems, mediumLevelSolutions, hardLevelProblems, hardLevelSolutions };