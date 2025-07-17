// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
const FIRST_NUMBER = 1;
const LAST_NUMBER = 20;

let sum = 0;

let i = FIRST_NUMBER;
while (i <= LAST_NUMBER){
    sum += i;
    i++;
}
console.log("сумма " + sum);
