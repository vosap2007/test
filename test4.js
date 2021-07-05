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


