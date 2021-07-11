// const obg1 = {full: false};
// // const obg2 = {goin: true};
// // const obg3 = {bar: true};

// //obg2.__proto__ = obg1;
// const obg2 = Object.create(obg1);
// obg2.goin = true;
// //obg3.__proto__ = obg2;
// const obg3 = Object.create(obg2);

// console.log(obg2);



// const obg1 = {
//     dogs: 5,
// };

// const obg2 = Object.create(obg1);
// obg2.cats = 7;
// obg2.perets = 10;


// // for(const key in obg2) {
// //     if(!obg2.hasOwnProperty(key)) continue;
// //     console.log(key);
// // }

// const obg2Keys = Object.keys(obg2);

// console.log(obg2Keys);


// const Guest = function (name, room) {
//     this.name = name;
//     this.room = room;

// };

// console.log(Guest('Den', 5));

// const Guest = function (name, room) {
//     this.name = name;
//     this.room = room;
//   };
  
//   const denis = new Guest('Denis', 5);

//   console.log(denis);
  

// const Guest = function (name, room) {
//     this.name = name;
//     this.room = room;
//   };

//   Guest.prototype.ShowGest = function() {
//       console.log(`Гость ${this.name} поселился в номере ${this.room}`)
//   }
  
//   const mango = new Guest('Mango', 28);
//   const poly = new Guest('Poly', 54);
  
//   mango.ShowGest()


// const createGuest = function(name, room, hotel) {
//     this.name = name;
//     this.room = room;
//     this.hotel = hotel;
// };

// createGuest.prototype.showGest = function() {
//     console.log(`Гость ${this.name} проживает в номере ${this.room} отеля ${this.hotel}`)
// }

// const den = new createGuest('Den', 5, 'Resolt');
// const olha = new createGuest('Olha', 60, 'Plaza');
// const vova = new createGuest('Volodymyr', 3, 'Aloha');



// den.showGest();
// olha.showGest();
// vova.showGest();


// const c = {z:5};

// const b = Object.create(c);
//       b.y = 18;

//       const a = Object.create(b);
//       a.x = 23;

// console.log(a)


// const Car = function({brend, model, price} = {}) {

//     this.brend = brend;
//     this.model = model;
//     this.price = price;
// };

// Car.prototype.changePrice = function(newPrice) {
//     this.price = newPrice;
// };


// const myCar = new Car({
//     brend: 'Kia', 
//     model: 'Sportage', 
//     price: 25000,
//     });
// myCar.changePrice(27000);

// const myCar2 = new Car({
//     brend: 'BMW', 
//     model: 'Coper', 
//     price: 35000,
//     });
// const myCar3 = new Car(
//     // {
//     // brend: 'Jeep', 
//     // model: 'GT-2', 
//     // price: 40000,
//     // }
//     );

// console.log(myCar);
// console.log(myCar2);
// console.log(myCar3);
  

// const Car = function({brend, model, price}) {
//     this.brend = brend;
//     this.model = model;
//     this.price = price;
// };

// Car.prototype.changePrice = function(newPrice) {
//     this.price = newPrice;
// };

// const myCar = new Car({
//     brend: 'Kia',
//     model: 'Sportage',
//     price: 25000,
// });

// console.log(myCar);

// myCar.changePrice(30000);

// console.log(myCar);


// const User = function({name, email, password}) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
// };

// User.prototype.changeName = function(newName) {
//     this.name = newName;
// };

// User.prototype.changeEmail = function(newEmail) {
//     this.email = newEmail;
// };

// User.prototype.changePassword = function(newPassword) {
//     this.password = newPassword;
// };

// const myUser = new User({
//     name: 'Volodymyr',
//     email: 'rodastars@i.ua',
//     password: 123123,
// });

// console.log(myUser);

// myUser.changeName('Denis');
// myUser.changeEmail('fdsa@d.ya');
// myUser.changePassword(987987987);

// console.log(myUser);


// const House = function({ clas, room, state}) {
//     this.clas = clas;
//     this.room = room;
//     this.state = state;
// };

// House.prototype.changeClass = function(newClas) {
//     this.clas = newClas;
// };

// const myHouse = new House({
//     clas: 'bisnes',
//     room: 3,
//     state: 'new house',
// });

// console.log(myHouse);

// myHouse.changeClass('vip');

// console.log(myHouse);
// console.dir(House)



// const Counter = function({value = 0, step = 1}) {
//     this.value = value;
//     this.step = step;
// };

// Counter.prototype.decrement = function() {
//     this.value -= this.step;
// };

// Counter.prototype.increment = function() {
//     this.value += this.step;
// };

// const counter1 = new Counter({
//     value: 0, 
//     step: 2,
// });

// const decrementBtn = document.querySelector('.js-decrement');
// const incrementBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value');

// decrementBtn.addEventListener('click', () => {
//     counter1.decrement();
//     valueEl.textContent = counter1.value;
// }); 

// incrementBtn.addEventListener('click', () => {
//     counter1.increment();
//     valueEl.textContent = counter1.value;
// }); 


// class Gest {
//     constructor({name, room, price}){
//         this.name = name;
//         this.room = room;
//         this.price = price;
//     };

//     changePrice (newPrice) {
//     this.price = newPrice;
// };

//     get roomGet() {
//         return this.room;
//     };

//     set roomGet(newRoom) {
//         this.room = newRoom;
//     }
// }



// const fred = new Gest({
//     name: 'Freddi',
//     room: 47,
//     price: 35,
// })

// console.log(fred);

// fred.changePrice(30);

// console.dir(fred);

// console.dir(fred.roomGet);
// console.dir(fred.roomGet = 50);

// console.dir(Gest);


class Gest {
    constructor(name = 'gest', room = 0) {
        this.name = name;
        this.room = room;
    };

    get changeName() {
        console.log(`Имя клиента ${this.name}`)
    };

    set changeName(newName) {
        this.name = newName;
    };

    changePrice(newPrice) {
        this.price = newPrice;
    }
};

class GestVip extends Gest {
    constructor({price, ...restProps}) {
        super(restProps);

        this.price = price;
    }
}

const myGest = new GestVip({name:'Leonardo', room: 17, price: 350});
console.log(myGest);
// console.log(myGest.changeName = 'Leo');

// myGest.changePrice(250);
// console.dir(myGest);