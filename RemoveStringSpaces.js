// мое решение
function noSpace(x){
     var arr  = [];
     var str = x.split(' ') // разбиваем строку по пробелам и запихиваем это все в массив
         for (var i = 0; i< str.length;i++) { //проходим по массиву
         if(str[i] != ""){ // если значения массива не равно нулю или простой строке
             arr.push(str[i]); // пушим подходящие значения в новый массив
         }
    }
    str = arr.join(''); // склеваем содержимое массива в строку
    return str; // вуалля
}

// второе решение
function noSpace(x){
    return x.split(' ').join(''); // тоже работает, ибо сплит разбивает строку по пробелам) тоесть сам пробел он не может запихнуть в массив, а пустое место между двумя пробелами будет пустая строка,а джоин склевает элементы в массиве которые не пустые)
}

// третье решение
function noSpace(x){
    return x.replace(/\s/g, ''); // решение с помощью регулярного выражения. Метод реплаейс относится к методам regExp, где первое значение это регулярка, а второе то на то что мы меняем искомое
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd');
console.log((noSpace('8aaaaa dddd r     '), '8aaaaaddddr'));
console.log()