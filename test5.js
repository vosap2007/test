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




  
