function filter_list(l) {

    var newArr = []; // создаем новый массив

    for (var i = 0; i < l.length; i++) { //проходим по всему массиву
        if (typeof l[i] == 'number') { //сравниваем по типам элементы из массива с типом number
            newArr.push(l[i]);//  если true то элемменты из массива добавляеться в новый  массив
        }
    }
    return newArr;// возвращаем новый массив
}
//filter_list([1,2,'a','b']) == [1,2]
//filter_list([1,'a','b',0,15]) == [1,0,15]
//filter_list([1,2,'aasf','1','123',123]) == [1,2,123]