const bigArr = new Array(1000000).fill(["Tanish", 22, "Gupte", "April"]) 

const fillArr = (arr) => {
    let start = console.time();
    for (var i = 0; i < arr.length; i++){
        console.log(`Found Array ${arr[i]} times !!`);
    }
    let end = console.timeEnd();

    console.log(`It took ${end-start} to complete the loop ${arr[i]} times !!`);
}   

fillArr(bigArr)