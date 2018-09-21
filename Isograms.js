function isIsogram(str){ // создаем функцию которая принимает на вход стрингу
    var newStr = str.toLowerCase(); //создаем новую строку и переводим ее в lowerCase что бы сравнение символов проходило правильно) A > a = true
    for (var i = 0; i < newStr.length; i++) { //создаем цикл для обхода по стринге
        for(var j = i+1; j<newStr.length; j++){ // создаем еще один цикл с той же целью , только с двумя нюансами, первый  - этот цикл для сравнения с первым, второй - индекс старта=> i+1 чтобы , брать следующий индекс в стринге для сравненни,
            if(newStr[i] == newStr[j]){ // сравниваем буквы в случае совпадения фалсе
                return false;
            }
        }
    }
    return true; // в другом случае  тру
}
console.log(isIsogram( "Dermatoglyphics" ));
console.log(isIsogram( "aba" ));