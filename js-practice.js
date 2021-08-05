                                // FREE CODE CAMP

// reversing a string

const reverseString = (str) => {
    const reversedStr = str.split("").reverse().join("")

    console.log(reversedStr);
}

// reverseString("hello");


        // return a factorial

const factorial = (num) => {
    if(num === 0 || num === 1){
        return "Number must be a Positive Number !!"
    }
    else{
        let fact = 1; 
        
        for(let i = 1; i <= num; i++){
        fact *= i; 
        } 
        console.log(`Factorial of ${num} is ${fact}`);
    }
}

// console.log(factorial(10));


        // check for a palindrome

const palindrome = (str) => {
    const reversedStr = str.split("").reverse().join("")  // split returns an array of strings.. 

    if(str === reversedStr){
        console.log(reversedStr);
    }
    else{
        console.log("The entered String is not a Palindrome !!"); 
    }
    return reversedStr;
}

// palindrome("racecar")


        // find the longest word

const longestWord = (str) => {
    var wordsArr = str.split(" ")
    var longestword = ""

    wordsArr.forEach((word) => {
        console.log(word);

        if(word.length > longestword.length){
            longestword = word;
        }
    })
    console.log(`The length of the ${longestword} is ${longestword.length}`);
}                   

// longestWord("This is Lotus Evija2000hp") 


        // Title case

const TitleCase = (str) => {
    var titleCase = ""

    //titlecase = str.charAt(0).toUpperCase() + str.slice(1);

    capsFirstLetter = str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)); 
    console.log(capsFirstLetter);
}             

// TitleCase("this is title case")


        // largest num in array [1d array]

const largestNum = (arr) => {
    var largest = 0;

    for(let i = 0; i <= arr.length; i++){
        if (arr[i] > largest){
            largest = arr[i]
        }
    }
    console.log(largest);
}          

// largestNum([11, 22, 33, 44, 55])  


    // largest number from 2d array

const largestNo = (arr2d) => {
    var largestno = [];

    for (var i = 0; i < arr2d.length; i++) {
        var tempMax = arr2d[i][0];

        for (var j = 0; j < arr2d[i].length; j++){
            var currentNo = arr2d[i][j];
                
            if (currentNo > tempMax) {
                tempMax = currentNo;
            }
        }
        largestno.push(tempMax)
    }
    console.log(largestno); 
}    

// largestNo([[10, 20, 30, 40], [11, 22, 33, 44], [100, 200, 300, 400], [1000, 2000, 3000, 4000]]);


        // confirm the ending

// str should end with the word thats target (2nd arg)        
const confirmEnding = (str, target) => {
    var strToArr = str.split(" ");
    var strEnd = strToArr.slice(-1);

    if(strEnd == target){
        return true;
    }
    return false;
}          

// console.log(confirmEnding("hello there", "there")); 


        // repeat string num (parameter) times
    
// repeat the str arg as many times specified in the num (2nd arg)
const repeatString = (str, num) => {
    // var repeatedStr = "";

    // if (num <= 0) return " ";

    // for(var i = 0; i <= num; i++){
    //     repeatedStr += str;
    // }
    // console.log(repeatedStr);

        // OR (Recursion)

    if (num === 0 || num === 1) return "";

    return str + repeatString(str, num - 1);  

        // OR

    // if (num <= 0){
    //   return " "
    // }

    // return str.repeat(num)
}       

// console.log(repeatString("Hello There ", 10));


                    // Truncate a String

// truncate the str according to the 2nd arg minus 3 reserved for "..."                    
const truncateString = (str, num) => {
    var truncatedString = "";
    
    var reqStrLength = num - 3;
    var truncateStr = str.substr(0, reqStrLength) + "...";
    
    truncatedString += truncateStr;
  
    console.log(truncatedString);
}           
  
// truncateString("Programming is taxing but well worth it !!", 20);


                    // Chunk Array into Groups

// 1st arg (arr) divided into chunks as per the chunksize (2nd arg)                    
const arrTo2dArr = (arr, chunkSize) => {
    var nestedArr = [];
    
    for (var i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        nestedArr.push(chunk);
    }
    console.log(arguments.length);

    return nestedArr;
}

// console.log(arrTo2dArr(["a", "b", "c", "d", "e", "f"], 3));


                    // Slashing an array

// slashing the array according to the 2nd arg                    
const slashArr = (arr, slashSize) => {
    var resArr = [];

    const slicedArr = arr.slice(0, slashSize);
    resArr.push(slicedArr);

    return resArr;
}      

// console.log(slashArr([20, "M1", 2022, "Air"], 2));


                    // Mutations

// 1st array element should have all the elements of the 2nd element (array is passed as arg)
const mutation = (arr) => {
    var firstElem = arr[0];
    var secondElem = arr[1]

    if (firstElem.indexOf(secondElem) === -1){
        return false;
    }
    return true;


    // var firstElem = arr[0].toLowerCase();
    // var secondElem = arr[1].toLowerCase();

    // if (firstElem.includes(secondElem)) {
    //     return true;
    // }
    // else{
    //     return false;
    // }
}           

// console.log(mutation(["racecar", "tar"]));


                    // remove falsy values from an array

const removeFalsy = (arr) => {
    var truthyArr = []

    truthyArr = arr.filter((truthies) => {  // filter returns only truthy values
        return truthies;
    })
    return truthyArr;
}   

// console.log(removeFalsy([2, "hello", false, "", '', "world", undefined, null, "racecar"]));


                   // where do i belong

// placing the 2nd & subsequent arguments in the proper order in the 1st arg (arr)                   
const getIndexToInsert = (arr, num) => {
    let sortedArr = arr.sort();
    var resArr = [];
    
    for (let i = 0; i < sortedArr.length; i++) {

        if (num < sortedArr[i]) {
            return i;
        }
    }
    return sortedArr.length;;
}

// console.log(getIndexToInsert([18, 10, 22, 2, 44], 1));


                    // Caesar's Cipher

 const rot13 = (str) => {
    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphabetsArr = alphabets.split("")
      
    for (let i = 0; i < str.length; i++) {  
        var decodedCipher = "";

        var char = str[i];
        var isChar = alphabetsArr.includes(char);

        if(!isChar) {
            decodedCipher += char;
        }
        else {
            var charIndex = alphabetsArr.findIndex((alph) => {
                alph == char;
            })   
            decodedCipher += alphabetsArr[charIndex + 13] || alphabetsArr[charIndex - 13] 
        }
    }
        
    return decodedCipher;
}   

// console.log(rot13("SERR PBQR PNZC"));


                    // sum all numbers in the range 

const sumAllNosInRange = (arr) => {
    let sum = 0;

    if (arr[0] < arr[1]) {
        for (let i = arr[0]; i <= arr[1]; i++) {
            sum += i;
        }
    }
    else {
        for (let i = arr[0]; i >= arr[1]; i--) {
            sum += i;
        }
    }
    
    return sum;
}                

console.log(sumAllNosInRange([10, 5]));