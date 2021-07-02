// let name = 'Resort Hotel';
// let stars = 5;

// const hotel = {
//     name,
//     stars,
//     capacity: 100,
//   };

//   hotel.adress = 'Seleshina, Gorovana, 4';

//   console.log(hotel);


// const string = 'firstName';
// const age = function () {
//    return 'ears';    
// };

// let object = {
//    [string]: 'Valera',
//    [age()]: 30,
// };

// console.log(object);


// const hotel = {
//     name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
//   qualityControl() {
//       console.log('Welcome!');
//   },
// };

// console.log(hotel.capacity);
// hotel.capacity;




// const hotel = {
//     name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// hotel.qualityControl = function () {
//     console.log('Welcome!');
// };



// console.log(hotel);


// const hotel = {
//     name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,

//   qualityControl() {
//          console.log(this.capacity);
//      },

//   changesТumberЕenants(value) {
//       this.capacity = value;
//   },
// };

// hotel.qualityControl();
// hotel.changesТumberЕenants(120);

// console.log(hotel.capacity);

// for (let key in hotel) {
//     console.log(key);
//     console.log(hotel[key]);
// };

// console.log(Object.keys(hotel));
// console.log(Object.values(hotel));
// console.log(Object.entries(hotel));


// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };

//   const hotelKey = Object.entries(hotel);

//   for (let key of hotelKey) {
//       let keys = key[0];
//       let value = key[1];

//       console.log(`${keys}: ${value}`);
//   };


// const goods = {
//     apples: 6,
//     grapes: 3,
//     bread: 4,
//     cheese: 7,
//   };

//   let total = 0;

//   const totalQuantity = function(product) {
//       const numbers = Object.values(product);

//       for (const number of numbers) {
//           total += number;
//       };
//   };

//   totalQuantity(goods);

//   console.log(total);



// const temperatures = [18, 14, 12, 1, -17, 21, 17, 29];
// // let lowestTemperature = temperatures[0];

// // for (const iterator of temperatures) {
// //     if (iterator < lowestTemperature) {
// //         lowestTemperature = iterator;
// //     };
// // };

// // console.log(lowestTemperature);


// console.log(Math.max(...temperatures));


// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];

// const newHouses = [... houses.slice(0, 3), '100', ...houses.slice(4, 6)];

// console.log(newHouses);


// const a = {lengs:5, 'name':'Valera'};
// const b = {'head': 2, 'live':'Poltava'};

// const c = {...a, ...b};

// console.log(c);


// const add = function (value, ...args) {
//     console.log(value); // первый аргумент
//     console.log(args); // массив всех остальных аргументов
//   };
  
//   add(10, 1, 2, 3);
//   add(15, 1, 2, 3, 4, 5);
  

// const add = function (value, ...args) {
//     let total = value;

//     for(const i of args) {
//         total += i;
//     };

//     return total;
// };

// console.log(add (10, 1, 2, 3));


// const name = 'firstName';
// const value = 'Vova';

// const object = {
//     [value]:name,
// };

// console.log(object);



// const newName = 'My playlist';
// const newTrack = 'track4';

// const playlist = {
//     name: 'Playlist',
//     track: ['track1', 'track2', 'track3'],
//     trackCount: 3,
//     style: 'Rock',

//     changeName(value) {
//         this.name = value;
        
//     },

//     addNewTrack(value) {
//         this.track.push(value);
//         this.trackCount = this.track.length;     
//     },
// };

// playlist.changeName(newName);
// playlist.addNewTrack(newTrack);
// playlist.addNewTrack('track5');

// console.log(playlist);
// console.log(playlist);


// const object = {
//     dor: 3,
//     windows: 7,
//     tables: 4,
// };

// const keys = Object.keys(object);

// for (const key of keys) {
//    console.log(object[key]); 
// }


// const object = {
//     dor: 3,
//     windows: 7,
//     tables: 4,
// };

// const values = Object.values(object);

// for (const value of values) {
//    console.log(value); 
// }



// const friends = [
//     {name:'Mango', online: false}, 
//     {name:'Poly', online: false},
//     {name:'Jek', online: true},
//     {name:'Vlad', online: false},
// ];

// for (const friend of friends) {
//     console.log(friend.online);

//     friend.ears = 30;
// };

// console.log(friends);



// const friends = [
//         {name:'Mango', online: false}, 
//         {name:'Poly', online: false},
//         {name:'Jek', online: true},
//         {name:'Vlad', online: false},
//     ];

//     const findFriendByName = function(friends, nameOneFriend) {
//         let message = '';

//         for (const friend of friends) {
            
//             if(friend.name === nameOneFriend && friend.online === true) {
//                 message = `Пользователь ${nameOneFriend} найден и он в сети!`;
//                 break;
//             } else if 
//                 (friend.name === nameOneFriend && friend.online === false) {
//                     message = `Пользователь ${nameOneFriend} найден, но он НЕ в сети!`;
//                     break;
//             } else {
//                 message = `Пользователь ${nameOneFriend} НЕ найден!`;
//             };
//         };

//         return message;
//     };

//     console.log(findFriendByName(friends, 'Jek'));
//     console.log(findFriendByName(friends, 'Poly'));
//     console.log(findFriendByName(friends, 'Robert'));


// const friends = [
//     {name:'Mango', online: false}, 
//     {name:'Poly', online: false},
//     {name:'Jek', online: true},
//     {name:'Vlad', online: false},
// ];

// const allName = function(friends) {
//     let names = [];

//     for (const friend of friends) {
//         names.push(friend.name);
//     };

//     return names;
// };

// console.log(allName(friends));



// const friends = [
//     {name:'Mango', online: true}, 
//     {name:'Poly', online: false},
//     {name:'Jek', online: true},
//     {name:'Vlad', online: false},
// ];

// const allName = function(friends) {
//     const names = [];

//     for (const friend of friends) {
//         if (friend.online === false) {
//           names.push(friend);
//        };
//     };

//     return names;
// };

// console.log(allName(friends));



// const friends = [
//     {name:'Mango', online: true}, 
//     {name:'Poly', online: false},
//     {name:'Jek', online: true},
//     {name:'Vlad', online: false},
// ];

// const allName = function(friends) {
//     const friendsStstus = {
//     online: [],
//     ofline: [],
//     }
    

//     for (const friend of friends) {
//         if (friend.online) {
//             friendsStstus.online.push(friend);
//        } else {friendsStstus.ofline.push(friend);
//     }; 
//     };


//     return friendsStstus;
// };

// console.table(allName(friends));


const x = {
    a: 5,
    b: 10,
    c: 30,
    d: 100,
};

console.log(Object.keys(x).length);

