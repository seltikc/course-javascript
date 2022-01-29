// Задание 4:

// Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

// Пример:
//   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']

// const arche = {
//   name: "mike"
// };

// function upperProps(obj) {
//   let arch = [];
//   for (let item in obj) {
//       item = obj[item].toUpperCase();
//       arch.push(item);
//   }
//   return arch;
// }

// const result = upperProps(arche);
// console.log(result);

// let arr= [1, 2, 3, 4];

// let result = arr.reduce (function(array, fn, initial) {
//   return array + fn;
// })

// console.log(result)
// let ert = [1, 2, 3]

// function reduce(array, fn, initial) {
//   let sum;
//   let i;
//   if(initial == undefined) {
//     sum = array[0];
//     i = 1
//   } else {
//     sum = initial,
//     item  = 0
//   }
//   for(i; i < array.length; i++){
//     let result = fn(sum, array[i], i, array)
//     sum = result;
//   }
//  return sum;
// }

// function forEach(array, fn) {
// for (let i = 0; i < array.length; i++) {
//   fn(array[i], i, array);
// }
// }
// forEach([1, 2, 3], (el) => console.log(el))

/*Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
 */

// // function map(array, fn) {
// // const newArray = [];
// // for (let i = 0; i < array.length; i++) {
// //  newArray[i] = fn(array[i], i, array);
// // }
// // // return newArray;
// // // }
// // // let result = map([1, 2, 3], (el) => el ** 2);
// // // console.log(result) /*Вот тут будет результат  // [1, 4, 9]*/

// // function reduce(array, fn, initial) {
// //   initial = array[0]; i=1;

// //   for (i; i < array.length; i++) {
// //     initial = fn(initial, array[i], i, array);
// //   }
// //   return initial;
// // }
// // let result = reduce([1, 2, 3], (all, current) => all + current);
// // console.log(result)

// // // function upperProps(obj) {
// // //   const arr = [];
// // //   for (let key in obj) {
// // //     arr.push(key.toUpperCase)
// // //   }
// // //   return arr;
// // // }

// // const obj = createProxy({});
// // obj.foo = 2;
// // function createProxy(obj) {
// //   return new Proxy(obj, {
// //       set(obj, key, value) {
// //           obj[key] = value ** 2;
// //           return true;
// //       }
// //   });
// // }

// // console.log(obj.foo)

// /*Задание 1:

// 1.1: Функция принимает массив и фильтрующую функцию и должна вернуть true или false
// Функция должна вернуть true только если fn вернула true для всех элементов массива

// 1.2: Необходимо выбрасывать исключение в случаях:
//   - array не массив или пустой массив (с текстом "empty array")
//   - fn не является функцией (с текстом "fn is not a function")

// Запрещено использовать встроенные методы для работы с массивами

// Пример:
//   isAllTrue([1, 2, 3, 4, 5], n => n < 10) // вернет true
//   isAllTrue([100, 2, 3, 4, 5], n => n < 10) // вернет false
// */

// // function isAllTrue(array, fn) {

// //   if (( array == 0 ) || (array.length == undefined)) { /*array - не массив и равен 0, (Логическое || или), длинна длинна неизвестна*/
// //       throw new Error('empty array'); /*выбрасываем стору 'empty array'*/
// //   } else if (typeof fn != 'function') { /*typeof возвращает строку, что fn не является функцией*/
// //       throw new Error("fn is not a function");/*выбрасываем стору 'fn is not a function'*/
// //   }
// // };

// function isAllTrue(array, fn) {
//   if(typeof fn !== 'function') {
//     throw new Error('fn is not a function');
//   }

// if(!Array.isArray(array) || !array.length) {
//   throw new Error('empty array');
// }

// for (let item of array) {
//   if(!fn(item)) {
//     return false;
//   }
// }
// return true;
// }

// let res = isAllTrue([1, 2, 3, 4, 5], n => n < 10);
// let res1 = isAllTrue([100, 2, 3, 4, 5], n => n < 10);

// console.log(res);
// console.log(res1)

function isSomeTrue(array, fn) {
  if (typeof fn !== 'function') {
    throw new Error('fn is not a function');
  }

  if (!Array.isArray(array) || !array.length) {
    throw new Error('empty array');
  }

  for (const item of array) {
    if (fn(item)) {
      return true;
    }
  }
  return false;
}

const res = isSomeTrue([1, 2, 30, 4, 5], (n) => n > 20); // вернет true
const res1 = isSomeTrue([1, 2, 3, 4, 5], (n) => n > 20); // вернет false
console.log(res);

console.log(res1);
