// const functionCallback = function (string) {
//     console.log(string);
// };

// const higherOrderFunction = function (functionCallback) {
//     const message = 'Hello word!';

//     functionCallback(message);
// };

// higherOrderFunction(functionCallback);


// const repeatLog = function (n) {
//     for (let i = 0; i < n; i += 1) {
//         console.log(i);
//     };
// };

// repeatLog(5);



// const outputsCleanData = function(data) {
//     console.log(data);
// };

// const outputsDataWithSignature = function(data) {
//     console.log('Это номер строки массива', data);
// };

// const higherOrderFunction = function (n, callbeck) {

//     for (let i = 0; i < n; i +=1) {
//         callbeck(i);
//     };
// };

// higherOrderFunction(3, outputsCleanData);
// higherOrderFunction(5, outputsDataWithSignature);


// const firstFunction = {

//     a: 5,

//     treisFunction() {
//         console.log(this.a);
//     },

//     seyThis() {
//         console.log(this);
//     },
// };



// firstFunction.treisFunction();
// firstFunction.seyThis();





// function showThis() {
//     console.log('this in showThis: ', this);
//   }
  
//   // Вызываем в глобальном контексте
//   showThis();


// const showThis = function () {
//     console.log('Show THIS', this);
// };

// showThis();

// const showContex = {
//     name: 'Mango',
// };

// showContex.metodShow = showThis;

// showContex.metodShow();
 

// const showThis = () => {
//     console.log(this);
// };

// showThis();

// const user = {
//     name: 'Vlad',
// };

// user.showContext = showThis;

// console.log(user);

// user.showContext();


// const showThis = function () {
//     console.log(this);
// };

// showThis();

// const user = {
//     name: 'Vlad',
// };

// user.showContext = showThis;

// user.showContext();


// const greet = function () {
//     console.log(`Приветствуем Вас в отеле: ${this.name}`);
// };

// const hotel = {
//     name: 'Ukraine',
// };

// greet.call(hotel);



// const seeResult = function (klient, stars) {
//   console.log(`Уважаемый ${klient} приветствуем Вас в ${this.name} уровня ${stars} звезд!`);  
// };

// const hotel = { name: 'Resolt Hotel'};

// ;


// const director = function (callbeck) {
// callbeck.bind(hotel, 'Victor', 5);
// };

// director(seeResult);



// const fnA = function (callback) {
//     console.log('Hello fnA');

//     callback(120);
// };

// const fnB = function (number) {
//     console.log('Helo fnB !!!', number);
// };

// fnA(fnB);


// const doMath = function (a, b, callback ) {
//     return callback(a, b);
// };

// const callFu = function (a, b) {
//     return a + b;
// };

// const call = function (a, b) {
//     return a - b;
// };

// console.log(doMath(2, 8, callFu));
// console.log(doMath(8, 4, call));


// const doMath = function (a, b, callback) {
//     return callback(a, b);
// };

// console.log(doMath(5, 8, (x, y) => {
//     return x + y;
// }));


// const button = document.querySelector('.js-button');

// const callback = function () { console.log('Hello word!')}

// const regicterButton = button.addEventListener('click', callback);


// const fu = function () {
//     console.log('это fn');
// };

// console.log('до fn');

// setTimeout(fu, 3000);

// console.log('после fn');

// const arr = [1,2,3,4,5];
// const arr2 = [1,2,3,4,5,6,7,8];



// const filter = function (array, callback) {
//     const filteredArray = [];

//     for (let e of array) {
//         let res = callback(e);

//         if(res) {
//             filteredArray.push(e);
//         };
//     };
 
//     return filteredArray;
// };

// const callback1 = function (i) {
//     return i >= 3;
// };

// const callback4 = function (i) {
//     return i <= 4;
// };


// console.log(filter(arr, callback1));
// console.log(filter(arr2, callback4));



// const array1 = [1,2,3,4,5,6];
// const array2 = [1,2,3,4,5,6,7,8,9,10];

// const filter = function (array, callback) {
//     const resArray = [];

//     for (let e of array) {
//        let res = callback(e);

//        if(res) {
//         resArray.push(e); 
//        }
//     };

//     return resArray;
// };

// const callback1 = function (e) {
//     return e > 2;
//     };

//     const callback2 = function (e) {
//         return e < 6;
//         };

// console.log(filter(array1, callback1));
// console.log(filter(array2, callback2));


// const fruts = [
//     {name: 'apples', quantiti: 200, isFresh: true},
//     {name: 'grapes', quantiti: 150, isFresh: false},
//     {name: 'bananas', quantiti: 100, isFresh: true},
// ];

// const filter = function (array, callback) {
//     const arrFilter = [];
    
//     for (let e of array) {
//        const res = callback(e);
       
//        if(res) {
//            arrFilter.push(e);
//        };
//     };

//     return arrFilter;
// };

// const callback = function(e) {
//     return e.quantiti >= 150;
// };

// console.log(filter(fruts, callback));


// const test1 = function (a) {
//     const name = 'Viktor';

//     const testFunction = function (b) {
//         console.log(name);
//         console.log(5);
//         console.log(b);
//     };

//     return testFunction;
// };

// const fNa = test1(5);


// console.log(fNa(10));


// makeDish('mango', 'пирог');
// makeDish('mango', 'котлеты');
// makeDish('mango', 'торт');

// makeDish('poly', 'крем');
// makeDish('poly', 'суп');
// makeDish('poly', 'чай');

// const createSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`Повар ${name} приготовил ${dish}`);
//     };
//     return makeDish;
// };

// const fNa = createSheff('Mango');
// fNa('пирог');
// fNa('котлеты');
// fNa('торт');

// const fNb = createSheff('Poly');
// fNa('крем');
// fNa('суп');
// fNa('чай');


// const transform = function (value) {
//     const modifiesByCondition = function(number) {
//         console.log(Number(number.toFixed(value)));
//     };
//     return modifiesByCondition;
// };

// const transformFunction = transform(2);
// transformFunction(3.7584);
// transformFunction(5.254);
// transformFunction(4.258745);


// const calculatesSalary = function (name, value = 0) {
//     let salary = value;

//     const calculates = {
//         addSalary (number) {
//             salary += number;
//         },

//         removeSalary (number) {
//             salary -= number;  
//         },

//         showSalary () {
//             console.log(`Заработная плата ${name} составляет ${salary}`);
//         },
//     };

//     return calculates;
// };

// const result = calculatesSalary('Valerchik', 15000);
// result.showSalary();
// result.addSalary(5000);
// result.showSalary();
// result.removeSalary(7000);
// result.showSalary();

// console.log(result.salary);



// const fruts = [
//     {name: 'apples', quantiti: 200, isFresh: true},
//     {name: 'grapes', quantiti: 150, isFresh: false},
//     {name: 'bananas', quantiti: 100, isFresh: true},
// ];


// const filter = (array, callback) => {
//         const arrFilter = [];
        
//         for (let e of array) {
//            const res = callback(e);
           
//            if(res) {
//                arrFilter.push(e);
//            };
//         };
    
//         return arrFilter;
//     };
    
//     console.log(filter(fruts, e => e.quantiti >= 150));