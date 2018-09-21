function greet(language) {
    var obj = { // создаем обьект с преветствиями
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'};

    if(obj.hasOwnProperty(language)){ // если искомая пропертя находится в обьекте то с помощью hasOwnPropery мы получаем тру
        return obj[language];// и получаем значение проперти
    }else {
        return obj.english; // в случае отсутвия искомой проперти, мы по умолчанию будем получать значение проперти english
    }
}
console.log();
//Test.assertEquals(greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
//Test.assertEquals(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
//Test.assertEquals(greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");