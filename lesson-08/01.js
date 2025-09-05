/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
    str = str.trim();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    for(let i = 1; i < str.length - 1; i++) {
        if (str.charAt(i) === " "){
            str = str.slice(0, i+1) + str.charAt(i+1).toUpperCase() + str.slice(i+2);
        }
    }
    return str;
}
