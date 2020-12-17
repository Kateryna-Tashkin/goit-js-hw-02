const findLongestWord = function (string) {
    let arr = string.split(' ');
    let stringMaxWidth = 0;
    let responseIndex;
    for (let index = 0; index < arr.length; index +=1) {
        if (stringMaxWidth < arr[index].length) {
            stringMaxWidth = arr[index].length;
            responseIndex = index;
        }
    }
    return arr[responseIndex];
};

/* Вызовы функции для проверки работоспособности твоей реализации.
 */

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
