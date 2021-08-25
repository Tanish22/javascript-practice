const numbers = [2, 22, 43, 44, 81, 88] 

const predicateFunction = (arr) => {
    const evenNos = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 2 === 0) {
            evenNos.push(arr[i])
        }
    }
    return evenNos;
}
 
const evenNumbers = predicateFunction(numbers);
console.log(evenNumbers);