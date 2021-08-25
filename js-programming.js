                    //log all pairs of an array

const pairArrValues = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++){
            console.log(`Pairs: ${arr[i]} ${arr[j]}`);
        }
    }
}   

//  pairArrValues([1, 2, 3, 4, 5])


                    // check if no or their sum is 100

const checkSum100 = (num1, num2) => {
    if (num1 === 100 && num2 === 100 || num1 + num2 === 100){
        console.log(true); 
    } 
    else {
        console.log(false);
    }
    return;  
}

// const checkSum100Fn = checkSum100(90, 0)
// console.log(checkSum100Fn);


                    // return new String

const returnNewString = (str) => {
    // if (str.length <= 3) {
    //     return str; 
    // }
 
    // var strArr = str.split("");
    // var strLength = strArr.length;d

    // var slicedArrStart = strArr.slice(0, 3);
    // var slicedArrEnd = strArr.slice(strLength - 3, strLength);

    // console.log(`${slicedArrStart},${slicedArrEnd}`);

            // OR

    return str.length <= 3 ? str : str.slice(0, 3) + str.slice(-3);
}  

// const returnNewStringFn = returnNewString("hel");
// console.log(returnNewStringFn);


                    // extract the 1st half of a str
                    
const extractFirstHalf = (str) => {
    var strHalf = (str.length/2);
    var slicedArr = str.slice(0, strHalf);
 
    console.log(slicedArr);
}   

// const extractFirstHalfFn = extractFirstHalf("Lotus Evija");
// console.log(extractFirstHalfFn);


                    // concat 2 strings without concatenating their first character

const concatStrings = (str1, str2)  => {
    // var str1Arr = str1.split("").slice(1, str1.length);
    // var str2Arr = str2.split("").slice(1, str2.length);

    // var concatArr = str1Arr.concat(str2Arr);
   
    // return concatArr;

    return str1.slice(1) + str2.slice(1)
}                   
// console.log(concatStrings("thello there", "tthis is tanish")); 


                    // find value nearest to 100 

const nearestTo100 = (num1, num2) => {
    return (100 - num1) < (100 - num2) ? num1 : num2
}    

// console.log(nearestTo100(120, 140));


                    // check for 2-4 occurences of a specified character

const filterChars = (str, char) => {  
    str.split("").filter(elem => elem === char).length;    
}       

const check2To4Chars = (str, char) => { 
    filterChars(str, char) >= 2 && filterChars(str, char) <= 4
}

// console.log(check2To4Chars("hello there all", "e"));


                    // find even numbers from an array
                    
const findEvenNos = (arr) => {
    var evenArr = []

    arr.forEach(num => {
        if (num % 2 === 0) {
            evenArr.push(num)
        }
        else{
            
        }
    });

    return evenArr;
}

// console.log(findEvenNos([2, 5, 8, 22, 81, 3, 45, 88]));


                    // find the no of even values upto a certain number (arg)

const numArrUptoNum = (num) => {
    var count = [];

    for (let i = 1; i < num; i++) {
        count.push(i);
    }
    return count.filter((num) => num % 2 === 0);
}          

// console.log(numArrUptoNum(80));


                    // check whether the array is in ascending or descending order

const isAscOrDesc = (arr) => {
    
        // with sort 
    // const sortedArr = arr.sort((a, b) => {
    //     return b - a;  // descending order
    //     //return a - b;  // ascending order
    // })

    // return sortedArr;

        // without sort
    var temp = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}                    

// console.log(isAscOrDesc([200, 4, 56, 22]));


                    // largest even no from arr of integers

const largestEvenNumber = (arr) => {
    var largestEvenNo = Math.max(...arr.filter((no) => no % 2 === 0));
    console.log(largestEvenNo);
}            

// console.log(largestEvenNumber([200, 4, 56, 22, 123, 34, 222, 444, 31]));


                    // replace 1st digit in a string with $

const replaceWith$ = (str) => {
   str.replace(/[^0-9]/, "$");
   return str;
}                    

// console.log(replaceWith$("bklbdd333dl3iu33h2eghjvjed"));


                    // sum of all array elements

const sumArrElem = (arr) => {
    var sumOfArrElem = 0;
    var arrSum = arr.forEach((num) => sumOfArrElem += num);

    return sumOfArrElem;
}   

// console.log(sumArrElem([20, 200, 2000]));


const isLeapYear = (year) => {
    if (year % 400 === 0 && year % 100 === 0) {
        return "The year is a leap year !!"
    }
    else return "The year is not a leap year !!"
}

// console.log(isLeapYear(2001));


                    // compare 2 objects (keys) for similarity

const object1 = {
    name: "p1",
    power: 903,
    type: "hybrid"
}        

const object2 = {
    name: "laferrari",
    power: 950
}   

const object3 = {
    name: "evija",
    power: 2000,
    type: "electric"
}  

const objComparo = (obj1, obj2) => {
    // var obj1Keys = Object.keys(obj1);
    // var obj2Keys = Object.keys(obj2);

    // if (JSON.stringify(obj1Keys) === JSON.stringify(obj2Keys)) {
    //     return true;
    // }
    // else {
    //     return false
    // };

    return Object.keys(obj1).every((key) => obj2[key])
}                    

// console.log(objComparo(object1, object2));


                     