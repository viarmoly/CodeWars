// самый безопасный способ ибо ничего не поломается в случае слишком большого массива(так говорит MDN)
var min = function (list) {
    var mini = list.reduce(function (a, b) {
        return Math.min(a, b)
    });
    return mini;
}

var max = function (list) {
    var maxi = list.reduce(function (a, b) {
        return Math.max(a, b)
    });
    return maxi;
}

// два разных решения
var min = function (list) { // с помощью spread operator, более элегантно
    return Math.min(...list);
}

var max = function (list) {//  с помощью apply,
    return Math.max.apply(null, list);
}


console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log(min([42, 54, 65, 87, 0]), 0);
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
console.log(max([5]), 5);