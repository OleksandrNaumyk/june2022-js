// - Створити змінні.
// Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

let h = 'hello';
let o = 'owu';
let c = 'com';
let u = 'ua';
let f = 1;
let t = 10;
let n = -999;
let s = 123;
let p = 3.14;
let tw = 2.7;
let six = 16;
let tr = true;
let fal = false;

//     Вивести кожну змінну за допомогою: console.log , alert, document.write

console.log(h);
alert(h);
document.write(h);

console.log(o);
alert(o);
document.write(o);

console.log(c);
alert(c);
document.write(c);

console.log(u);
alert(u);
document.write(u);

console.log(f);
alert(f);
document.write(f);

console.log(t);
alert(t);
document.write(t);

console.log(n);
alert(n);
document.write(n);

console.log(s);
alert(s);
document.write(s);

console.log(p);
alert(p);
document.write(p);

console.log(tw);
alert(tw);
document.write(tw);

console.log(six);
alert(six);
document.write(six);

console.log(tr);
alert(tr);
document.write(tr);

console.log(fal);
alert(fal);
document.write(fal);

//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//

let firstName = 'Oleksandr';
let lastName = 'Naumyk';
let middleName = 'Mykolayovych';
let person = firstName + ' ' + lastName + ' ' + middleName;


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//

let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими
// Імям, По-Батькові та роками. та вивести в консоль

let name = 'Oleksandr';
let surname = 'Mykolayovych';
let age = 41;

prompt(name);
console.log(name);

prompt(surname);
console.log(surname);

prompt(age);
console.log(age);