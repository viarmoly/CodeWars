function reverseWords(str) {
    var word = str.split(" ").reverse(). join(" ");
    var char = word.split("").reverse().join("");
    return char;
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.') === 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple') === 'elppa');
console.log(reverseWords('a b c d') === 'a b c d');
console.log(reverseWords('double  spaced  words') === 'elbuod  decaps  sdrow');