var a = 100;
var b = 20;

// with 3rd variable 

const swap2Nos = (num1, num2) => {
    var temp = num1;
    num1 = num2;
    num2 = temp;

    console.log(`swapped values: ${num1} ${num2}` );
} 

// swap2Nos(a, b);

//without 3rd variable

const swap2Numbers = (num1, num2) => {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;

    return num1, num2;
    //console.log(`${num1} ${num2}`);
}  

console.log(swap2Numbers(a, b));