// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr1 = ['hello', 44, 33, 22, 'okten', 655, 'school', 432, 65, 'javascript'];
console.log(arr1);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let obj1 = {
    title: 'Alex',
    pageCount: 99,
    genre: 'detective'
}

let obj2 = {
    title: 'Natalia',
    pageCount: 245,
    genre: 'novel'
}
let obj3 = {
    title: 'Oleh',
    pageCount: 34,
    genre: 'history'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age

let obj4 = {
    title: 'Javascript',
    pageCount: 456,
    genre: 'Text',
    authors: [{name: 'Oleh', age: 44}, {name: 'Ivan', age: 42}]
}

let obj5 = {
    title: 'Java',
    pageCount: 432,
    genre: 'Text',
    authors: [{name: 'Vitaliy', age: 33}, {name: 'Ivan', age: 47}]
}

let obj6 = {
    title: 'Python',
    pageCount: 333,
    genre: 'Text',
    authors: [{name: 'Alex', age: 25}, {name: 'Natalia', age: 39}]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arr2 = [
    {
        name: 'Alex',
        username: 'Oleksandr Oleksandr',
        password: '123456'
    },
    {
        name: 'Oleh',
        username: 'Oleh Oleh',
        password: '123457'
    },
    {
        name: 'Ivan',
        username: 'Ivan Ivan',
        password: '123458'
    },
    {
        name: 'Ihor',
        username: 'Igor Igor',
        password: '123459'
    },
    {
        name: 'Ivanka',
        username: 'Ivanka Ivanka',
        password: '1234510'
    },
    {
        name: 'Natalia',
        username: 'Natalia Natalia',
        password: '1234511'
    },
    {
        name: 'Margarita',
        username: 'Margarita Margarita',
        password: '1234512'
    },
    {
        name: 'Maria',
        username: 'Maria Maria',
        password: '1234513'
    },
    {
        name: 'Tanya',
        username: 'Tanya Tanya',
        password: '1234514'
    },
    {
        name: 'Vitaliy',
        username: 'Vitaliy Vitaliy',
        password: '1234515'
    }
];

console.log(arr2[arr2].password);
