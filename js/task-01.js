const logItems = function (arr) {
    for (let index = 0; index < arr.length; index +=1) {
        console.log((index + 1) + "-" + arr[index])
    } 
};

/* Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);



