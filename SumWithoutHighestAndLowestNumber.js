// два решения через лоб и более элегантное через сорт

function sumArray(array) {
    if (array == null || array.length <= 2) {
        return 0
    }
    let sum = array.reduce((a,b) => a+b);
    let newSum = sum - Math.min(...array) - Math.max(...array);
    return newSum;
}

function sumArray(array) {
    if (array) {
        array.sort(function(a,b) { return a-b });
        var newAry = array.slice(1,-1)
        return newAry.reduce(function(acc,val) { return acc + val},0);
    } else {
        return 0;
    }
}

console.log(sumArray([ 6, 2, 1, 8, 10 ]), 16);