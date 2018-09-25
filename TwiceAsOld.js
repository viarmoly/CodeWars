function twiceAsOld(dadYearsOld, sonYearsOld) {
    let age = sonYearsOld * 2 - dadYearsOld;
    if (age < 0) {
        return -age;
    }
    return age;
}

console.log(twiceAsOld(36,7) , 22);
console.log(twiceAsOld(55,30) , 5);
console.log(twiceAsOld(42,21) , 0);