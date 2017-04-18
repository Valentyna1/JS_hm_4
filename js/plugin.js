//---------------------------------------ЗАМЫКАНИЯ----------------------------

// // Задание
// getBigName(userName);
// function getBigName(name) {
//     name = name + '';
//     return name.toUpperCase();
// }
// var userName = 'Ivan';   // IVAN

// // Задание
// function test() {
//     var name = 'Vasyl';
//     return getBigName(userName);
// }
// function getBigName(name) {
//     name = name + '';
//     return name.toUpperCase();
// }
// var userName = 'Ivan';
// test(); // IVAN

// // Задание
// var food = 'cucumber';
// (function () {
//     var food = 'bread';
//     getFood()
// })();
// function getFood() {
//     console.log(food);     //cucumber
// }

//---------------------------------------ЗАМЫКАНИЯ----------------------------
// // Задание 1
// var dollar,
//     getDollar;
// (function () {
//     var dollar = 0;
//     getDollar = function () {
//         return dollar;
//     }
// })();
// dollar = 30;
// getDollar();

// // Задание 2
// var greet = 'Hello';
// (function () {
//     var  text = 'World';
//     console.log(greet + text);
// })();
// console.log(greet + text);

// // Задание 3
// var a, b;
// function minus(a) {
//     return function(b) {
//         return a-b
//     }
// }

// // Задание 4
// function MultiplyMaker() {
//     var num = 1;
//
//     return function (number) {
//         num *= number;
//         return num;
//     }
// }
// var multiply = MultiplyMaker();

// // Задание 5
// var module = (function () {
//     var str = '';
//     var strNew = '';
//
//     function string(str) {
//         return str;
//     }
//
//     function getLength(str) {
//         return str.length;
//     }
//
//     function getReverse(str) {
//         for (var i = str.length-1; i>=0; i--) {
// 	        strNew += str[i];
//         }
//         return strNew;
//     }
//
//     return {
//         string,
//         getLength,
//         getReverse
//     }
// })();
// str = 'abcdefg';
// console.log(module.string(str));
// console.log(module.getLength(str));
// console.log(module.getReverse(str));

// // Задание 6
// var module = (function () {
//     var index = 10;
//
//     function getPlus(number) {
//         return index += number;
//     }
//
//     function getMultiply(number) {
//         return index *= number;
//     }
//
//     function getDivision(number) {
//         return index /= number;
//     }
//
//     function getIndex() {
//         return `Конечное значение = ${index.toFixed(2)}`;
//     }
//
//     return {
//         getPlus,
//         getMultiply,
//         getDivision,
//         getIndex
//     }
// })();
// console.log(module.getPlus(5));
// console.log(module.getMultiply(2));
// console.log(module.getDivision(2.75));
// console.log(module.getIndex());

//---------------------------------------КОНСТРУКТОРЫ----------------------------
// // Задание 1
// function Car(name, year) {
//     this.name = name;
//     this.year = 2017 - year;
// }
// var lexus = new Car ('Lexus', 5);

// // Задание 2
// function StringN(str) {
//     this.str = str;
//     this.leng = str.length;
//     this.plus = str + ' like Hello';
// }
// var str = 'Some Text', strNew ='';
// var string = new StringN(str, str.length, str);

// Задание 3
function ClassString(str) {
    this.str = str;
    this.leng = str.length;
    this.toString = function () {
        return this.str;
    };
    this.valueOf = function () {
        return this.str;
    }
}
var str = new ClassString('test');
