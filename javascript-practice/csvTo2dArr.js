
                // convert commma-separated value (CSV) into 2d array
const str = `abc, def, ghi
jkl, mno, pqr
stu, uvw, xyz`        

const csvTo2dArr = (csvStr) => {
    var splitCSV = csvStr.split("\n").map((row) => row.split(','));
    return splitCSV;
}   

console.log(csvTo2dArr(str)); 


