/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/
debugger

function doubleEachCharacter(str) {
    let strArr = str.split('');
    for( let i = 0; i < strArr.length; i+=2) {
        strArr.splice( i, 0, strArr[i]);
    }
    str = strArr.join('');
    return str;
}



