console.log(" Домашка #12 — Методы массивов ");
console.log("");


console.log(" 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе. ");
let arr1First = [1, 2, 3];
let arr2Second = [4, 5, 6];
let arr1New = arr1First.concat(arr2Second);
console.log(arr1New);
console.log("");


console.log(" 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. ");
let arr2 = [1, 2, 3];
arr2.reverse();
console.log(arr2);
console.log("");


console.log(" 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6. ");
let arr3 = [1, 2, 3];
arr3.push(4, 5, 6);
console.log(arr3);
console.log("");


console.log(" 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6. ");
let arr4 = [1, 2, 3];
arr4.unshift(4, 5, 6);
console.log(arr4);
console.log("");


console.log(" 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент. ");
let arr5 = ['js', 'css', 'jq'];
let firstElement = arr5.shift();
console.log(firstElement);
// alert(firstElement);
console.log("");


console.log(" 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент. ");
let arr6 = ['js', 'css', 'jq'];
let lastElement = arr6.pop();
console.log(lastElement);
// alert(lastElement);
console.log("");


console.log(" 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3]. ");
let arr7 = [1, 2, 3, 4, 5];
let arr7New = arr7.slice(0 , 3);
console.log(arr7New);
console.log("");


console.log(" 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5]. ");
let arr8 = [1, 2, 3, 4, 5];
let arr8New = arr8.slice(-2 , 5);
console.log(arr8New);
console.log("");


console.log(" 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5]. ");
let arr9 = [1, 2, 3, 4, 5];
arr9.splice(1 , 2);
console.log(arr9);
console.log("");


console.log(" 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4]. ");
let arr10 = [1, 2, 3, 4, 5];
let arr10New = arr10.slice(1 , 4);
console.log(arr10New);
console.log("");


console.log(" 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]. ");
let arr11 = [1, 2, 3, 4, 5];
arr11.splice(3 , 0,'a', 'b', 'c');
console.log(arr11);
console.log("");


console.log(" 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].");
let arr12 = [1, 2, 3, 4, 5];
arr12.splice(1 , 0, 'a', 'b');
arr12.splice(6 , 0, 'c');
arr12.push('e');
console.log(arr12);
console.log("");


console.log(" 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.");
let arr13 = [3, 4, 1, 2, 7];
arr13.sort();
console.log(arr13);
console.log("");

// Исправлено
// Исправлено
console.log(" 14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.");
let arr14 = [5, 6, 7, 8, 9];
let summaArray = 0;
    summaArray = arr14.reduce(function(summa, elem) {
        return summa + elem;
    }, 0);
console.log("Сумма чисел масива = " + summaArray);
console.log("");



console.log(" 15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.");
let arr15 = [5, 6, 7, 8, 9];

    arr15.forEach(
        function (item, index, array) {
            array[index] = item * item;
        }
    );
console.log(arr15);
console.log("");



console.log(" 16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.");
let arr16 = [1,-3, 5, 6,-7, 8, 9,-11];

    let arr16New = arr16.filter(
        function (item) {
            if( item < 0){
                return true;
            }
            return false;
        }
    );
console.log(arr16New);
console.log("");



console.log(" 17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.");
let arr17 = [1,-3, 5, 6,-7, 8, 9,-11];

    let arr17New = arr17.filter(
        function (item) {
            if( item % 2 ===0){
                return true;
            }
            return false;
        }
    );
console.log(arr17New);
console.log("");



console.log(" 18. Дан массив со строками ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']. ");
console.log(" Оставьте в нем только те строки, длина которых больше 5-ти символов.");
let arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];

    let arr18New = arr18.filter(
        function (item) {
            if( item.length >= 5){
                return true;
            }
            return false;
        }
    );
console.log(arr18New);
console.log("");



console.log(" 19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. ");
console.log(" Оставьте в нем только подмассивы.");
let arr19 = [1, 2, [3, 4], 5, [6, 7]];

    let arr19New = arr19.filter(
        function (item) {
            if(Array.isArray(item)){
                return true;
            }
            return false;
        }
    );
console.log(arr19New);
console.log("");



console.log(" 20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.");
let arr20 = [5,-3, 6,-5, 0,-7, 8, 9];

    let arr20NewMinus = arr20.filter(
        function (item) {
            if( item < 0){
                return true;
            }
            return false;
        }
    );
console.log("Отрицательных чисел в массиве = " + arr20NewMinus.length);
console.log("");
