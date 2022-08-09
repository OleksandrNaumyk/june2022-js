// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function pr (a, b) {
//     let c = a * b;
//
//     console.log(c);
// }
//
// pr(5, 4);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

    // function kolo (r) {
    //     let p = 3.14;
    //     let s = p * (r * r);
    //     console.log(s);
    // }
    //
    // kolo(5);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

    // function cyl(h, r) {
    //     let p = 3.14;
    //     let s = 2 * p * r * (h + r);
    //     console.log(s);
    // }
    //
    // cyl(7,3);

// - створити функцію яка приймає масив та виводить кожен його елемент

    // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //
    // function mas (arr) {
    //     for (let i = 0; i < arr.length; i++) {
    //         const arrElement = arr[i];
    //         console.log(arrElement);
    //     }
    // }
    //
    // mas(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

    // let text = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, dolorum!</p>`;
    //
    // function txt (text) {
    //     document.write(text);
    // }
    //
    // txt(text);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

    // let txt = 'Some text';
    //
    // function ulLi(txt) {
    //     document.write(`
    //         <ul>
    //             <li>${txt}</li>
    //             <li>${txt}</li>
    //             <li>${txt}</li>
    //         </ul>
    //     `)
    // }
    //
    // ulLi(txt);

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulLiUp(text, count) {
//     document.write(`<ul>`);
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// ulLiUp('Text', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [34, 'etet', true, 65, 77, false];
//
// function list(arr) {
//     document.write(`<ul>`);
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ul>`);
// }
//
// list(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
//
// let array = [
//     {
//         id: 1,
//         name: 'ALex',
//         age: 30
//     },
//     {
//         id: 2,
//         name: 'Ivan',
//         age: 32
//     },
//     {
//         id: 3,
//         name: 'Natalka',
//         age: 25
//     }
// ];
//
// function list(arr) {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id} - ${arrElement.name} - ${arrElement.age}</div>`);
//     }
// }
//
// list(array);

// - створити функцію яка повертає найменьше число з масиву

// let array = [23, 45, 2, 55];
//
// function min(arr) {
//     let mi = arr[0];
//     for (const miElement of arr) {
//         if (miElement < mi) {
//             mi = miElement;
//         }
//     }
//     return mi;
// }
//
// console.log(min(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let array = [4, 5, 6, 10];

function sum(arr) {
    let su = 0;
    for (const arrElement of arr) {
        su += arrElement;
    }
    return su;
}

console.log(sum(array));