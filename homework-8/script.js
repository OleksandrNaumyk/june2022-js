// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// //
//     function User (id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
//
//     let userArr = [];
//
//     userArr.push(new User(1, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
//     userArr.push(new User(2, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
//     userArr.push(new User(3, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
//     userArr.push(new User(4, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
//     userArr.push(new User(5, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
//     userArr.push(new User(6, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
//     userArr.push(new User(7, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
//     userArr.push(new User(8, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
//     userArr.push(new User(9, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
//     userArr.push(new User(10, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
//
//     console.log(userArr);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

    // function User (id, name, surname, email, phone) {
    //     this.id = id;
    //     this.name = name;
    //     this.surname = surname;
    //     this.email = email;
    //     this.phone = phone;
    // }
    //
    // let userArr = [];
    //
    // userArr.push(new User(1, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    // userArr.push(new User(2, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    // userArr.push(new User(3, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    // userArr.push(new User(4, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    // userArr.push(new User(5, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    // userArr.push(new User(6, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    // userArr.push(new User(7, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    // userArr.push(new User(8, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    // userArr.push(new User(9, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    // userArr.push(new User(10, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    //
    //
    //
    // for (let i = 0; i < userArr.length; i++) {
    //     if (userArr[i].id%2 === 0) {
    //         console.log(userArr[i]);
    //     }
    // }

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//

    // function User (id, name, surname, email, phone) {
    //     this.id = id;
    //     this.name = name;
    //     this.surname = surname;
    //     this.email = email;
    //     this.phone = phone;
    // }
    //
    // let userArr = [];
    //
    // userArr.push(new User(1, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    // userArr.push(new User(2, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    // userArr.push(new User(3, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    // userArr.push(new User(4, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    // userArr.push(new User(5, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    // userArr.push(new User(6, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    // userArr.push(new User(7, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    // userArr.push(new User(8, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    // userArr.push(new User(9, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));
    // userArr.push(new User(10, 'Oleh', 'Chikatylo', 'nnn@ukr.net', '+380501112233'));

    // let newUserArr = userArr.sort((a, b) => a.id - b.id);
    // console.log(newUserArr);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)

    // class Client {
    //
    //     constructor(id, name, surname , email, phone, [order]) {
    //         this.id = id;
    //         this.name = name;
    //         this.surname = surname;
    //         this.email = email;
    //         this.phone = phone;
    //         this.order = order;
    //     }
    // }



// створити пустий масив, наповнити його 10 об'єктами Client
//
//     class Client {
//
//         constructor(id, name, surname , email, phone, [order]) {
//             this.id = id;
//             this.name = name;
//             this.surname = surname;
//             this.email = email;
//             this.phone = phone;
//             this.order = order;
//         }
//     }
//
//     let newClient = [];
//     newClient.push(new Client(1, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp']));
//     newClient.push(new Client(2, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp']));
//     newClient.push(new Client(3, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp']));
//     newClient.push(new Client(4, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp']));
//     newClient.push(new Client(5, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp']));
//     newClient.push(new Client(6, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp']));
//     newClient.push(new Client(7, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp']));
//     newClient.push(new Client(8, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp']));
//     newClient.push(new Client(9, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp']));
//     newClient.push(new Client(10, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp']));
//
//     console.log(newClient);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)
//
//
// class Client {
//
//         constructor(id, name, surname , email, phone, [order]) {
//             this.id = id;
//             this.name = name;
//             this.surname = surname;
//             this.email = email;
//             this.phone = phone;
//             this.order = order;
//         }
//     }
//
//     let newClient = [];
//     newClient.push(new Client(1, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp']));
//     newClient.push(new Client(2, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp', 'Phone']));
//     newClient.push(new Client(3, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp']));
//     newClient.push(new Client(4, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp']));
//     newClient.push(new Client(5, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp']));
//     newClient.push(new Client(6, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp', 'Phone', 'Paper']));
//     newClient.push(new Client(7, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp']));
//     newClient.push(new Client(8, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp', 'Phone', 'Paper']));
//     newClient.push(new Client(9, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp']));
//     newClient.push(new Client(10, 'Oleh', 'Pas'
//         , 'pass@ukr.net', '+390502223344', ['TV', 'Comp']));
//
//     let newClientSort = newClient.sort((a,b) => a.order.length - b.order.length);
//     console.log(newClientSort);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//


    // function Car(model, marka, year, speed, engine) {
    //     this.model = model;
    //     this.marka = marka;
    //     this.year = year;
    //     this.speed = speed;
    //     this.engine = engine;
    //     this.drive = function () {
    //       return console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    //     };
    //     this.info = function() {
    //         return console.log(`model - ${this.model}, marka - ${this.marka}, year - ${this.year}`);
    //     };
    //     this.increaseMaxSpeed = function increaseMaxSpeed() {
    //         return console.log(`increaseMaxSpeed = ${this.speed * 1.2}`);
    //     };
    //     this.changeYear = function changeYear() {
    //         return console.log(`changeYear = ${this.year + 2}`);
    //     };
    //    this.addDriver = function (driver) {
    //        this.driver = driver;
    //    }
    // }
    //
    // let newCar = new Car('Opel', 'Omega', 2010
    //     , 300, 2000);
    // console.log(newCar.drive());
    // newCar.addDriver({name: 'Ivan', age: 22});
    // console.log(newCar);

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

    // class Car{
    //
    //     constructor(model, marka, year, speed, engine) {
    //         this.model = model;
    //         this.marka = marka;
    //         this.year = year;
    //         this.speed = speed;
    //         this.engine = engine;
    //     }
    //     drive() {
    //         return console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    //     };
    //     info() {
    //         return console.log(`model - ${this.model}, marka - ${this.marka}, year - ${this.year}`);
    //     };
    //     increaseMaxSpeed() {
    //         return console.log(`increaseMaxSpeed = ${this.speed * 1.2}`);
    //     };
    //     changeYear() {
    //         return console.log(`changeYear = ${this.year + 2}`);
    //     };
    //     addDriver(driver) {
    //         this.driver = driver;
    //     }
    // }
    //
    // let newCar = new Car('Opel', 'Omega', 2010
    //     , 300, 2000);
    //
    // console.log(newCar.drive());
    // newCar.addDriver({name: 'Ivan', age: 22});
    // console.log(newCar);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

    class Cinderella {

        constructor(name, age, footSize) {
            this.name = name;
            this.age = age;
            this.footSize = footSize;
        }

    }

    let cinderella1 = new Cinderella('Oksana', 19, 11);
    let cinderella2 = new Cinderella('Oksana', 19, 37);
    let cinderella3 = new Cinderella('Oksana', 19, 36);
    let cinderella4 = new Cinderella('Oksana', 19, 35);
    let cinderella5 = new Cinderella('Oksana', 19, 34);
    let cinderella6 = new Cinderella('Oksana', 19, 39);
    let cinderella7 = new Cinderella('Oksana', 19, 40);

    let arr = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7];

    class Prince extends Cinderella{

        constructor(name, age, findFootSize) {
            super(name, age);
            this.findFootSize = findFootSize;
        }

    }

    let prince = new Prince('Stepan', 30, 37);

    let find = (arr, prince) => {
        for (const item of arr) {
            if (prince.findFootSize === item.footSize); {
                return `My Sun Names ${item.name} -- ${item.age} -- ${item.footSize}`;
            }
        }
    }

    console.log(find(arr, prince));

    let cinderella = arr.find(value => prince.findFootSize === value.footSize);
    console.log(cinderella);

