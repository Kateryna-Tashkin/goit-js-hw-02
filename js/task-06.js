let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введите число');
  if (input === null) {
    for (const num of numbers) {
      total += num;
    }
    console.log(`Общая сумма чисел равна ${total}`);
  }
  let num = Number(input);
  if (Number.isNaN(num)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(num);
  }
}
