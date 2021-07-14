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


