//Задание 6.1 — Проверка на палиндром
function checkPalindrome(word) {
    const formatted = word.toLowerCase().replace(/\s/g, '');
    const reversed = formatted.split('').reverse().join('');
    
    if (formatted === reversed) {
        console.log(`Слово ${word} является палиндромом`);
    } else {
        console.log(`Слово ${word} не является палиндромом`);
    }
}

checkPalindrome("Довод");       
checkPalindrome("Сантимент"); 


//Задание 6.2 — Уникальные значения в массиве
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', "don't", 'know', 'that', 'we', 'know', 'that', 'they', 'know'];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

//Задание 6.3 — Создание массива от 0 до введённого числа
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Введите число: ", (input) => {
  const num = Number(input);
  const result = [];

  for (let i = 0; i <= num; i++) {
    result.push(i);
  }

  console.log(result);

  rl.close();
});


//Задание 6.4 — Поле крестики-нолики
const field = [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'],
    ['x', 'o', 'x']
];

for (let row of field) {
    console.log(row.join(' '));
}


//Задание 6.5 — Объединение значений объекта в массив
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = [];

for (let key in obj) {
    if (Array.isArray(obj[key])) {
        arrValues.push(...obj[key]);
    } else {
        arrValues.push(obj[key]);
    }
}

console.log(arrValues);



