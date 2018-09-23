function even_or_odd(number) {
    if(number%2 == 0){ // узнаем остаток от деления на 2, если оно равно 0 то число четное
        return "Even"
    }
    return "Odd"; // во всех остальных случаях число будет не четным
}
//  тоже самое можно сделать с помощью тернарки, но мне пока привычней через if
console.log(even_or_odd(2), "Even");
console.log(even_or_odd(0), "Even");
console.log(even_or_odd(7), "Odd");
console.log(even_or_odd(1), "Odd");