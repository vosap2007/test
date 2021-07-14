// const numbers = [1,2,3,4,5,6,7,8,9,10];

// numbers.forEach( function (number, index, array) {
//     array[2] = 333;
// });

// console.log(numbers);

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const newArr = numbers.map((num) => {
//     return num + 10;
// })

// console.log(newArr);


// const players =[
//     {id: 'Player-1', name: 'Poly', timePlayd: 310, points: 45, online: false},
//     {id: 'Player-2', name: 'Mark', timePlayd: 280, points: 32, online: false},
//     {id: 'Player-3', name: 'Jorg', timePlayd: 510, points: 98, online: true},
//     {id: 'Player-4', name: 'Mango', timePlayd: 458, points: 75, online: false},
//     {id: 'Player-5', name: 'Lili', timePlayd: 154, points: 55, online: true},
// ]

// const names = players.map((name) => {return name.name});

// console.log(names);


// const timePlayds = players.map((time) => {
   
//    return time.timePlayd;
// }); 

// console.log(timePlayds)

// let total = 0;

// players.forEach(t => total += t.timePlayd); 
 
//  console.log(total);

// const res = players.map(({name, points}) => ({name, points,}))

// console.log(res)

// const players =[
//     {id: 'Player-1', name: 'Poly', timePlayd: 310, points: 45, online: false},
//     {id: 'Player-2', name: 'Mark', timePlayd: 280, points: 32, online: false},
//     {id: 'Player-3', name: 'Jorg', timePlayd: 510, points: 98, online: true},
//     {id: 'Player-4', name: 'Mango', timePlayd: 458, points: 75, online: false},
//     {id: 'Player-5', name: 'Lili', timePlayd: 154, points: 55, online: true},
// ]

// console.log(players.map(player => ({...player, 
// points: player.points * 1.5})) );

// const ghangePlayerTimePlayd = players.map(player => {
//     if(player.id === 'Player-3') {
//         return{
//         ...player,
//         timePlayd: 1000,
//     }
//     }
//     return player;
// })

// console.log(ghangePlayerTimePlayd);

// const ghangePlayerTimePlayd = players.map(player => 
//     player.id === 'Player-3' 
//     ? { ...player, timePlayd: 1000 } 
//     : player)

// console.log(ghangePlayerTimePlayd);


// const arrayNumbers = [1,2,5,8,12,18,25,38];

// const arrayFilter = arrayNumbers.filter(number => number < 12);

// console.log(arrayFilter);


// const players =[
//     {id: 'Player-1', name: 'Poly', timePlayd: 310, points: 45, online: false},
//     {id: 'Player-2', name: 'Mark', timePlayd: 280, points: 32, online: false},
//     {id: 'Player-3', name: 'Jorg', timePlayd: 510, points: 98, online: true},
//     {id: 'Player-4', name: 'Mango', timePlayd: 458, points: 75, online: false},
//     {id: 'Player-5', name: 'Lili', timePlayd: 154, points: 55, online: true},
// ]

// const arrayNumbers = [1,2,5,8,12,18,25,38];

// const filterPlayers = players.filter(player => player.timePlayd > 300);

// console.table(filterPlayers);

// const isOnline = players.filter(player => player.online === true)

// console.table(isOnline)

// const findNumber = arrayNumbers.find(num => num < 12)

// console.log(findNumber)

// const findNumber = players.find(({id}) => id === 'Player-3')

// console.log(findNumber)

// const findById = (players, player) => 
// players.find(({id}) => id === player);

// console.log(findById(players, 'Player-4'))

// const players =[
//     {id: 'Player-1', name: 'Poly', timePlayd: 310, points: 45, online: false},
//     {id: 'Player-2', name: 'Mark', timePlayd: 280, points: 32, online: false},
//     {id: 'Player-3', name: 'Jorg', timePlayd: 510, points: 98, online: true},
//     {id: 'Player-4', name: 'Mango', timePlayd: 458, points: 75, online: false},
//     {id: 'Player-5', name: 'Lili', timePlayd: 154, points: 55, online: true},
// ]

// const numbers = [1,2,5,8,12,18,25,38];

// const searchBigNumbers = players.every( ({timePlayd}) => timePlayd > 150);

// console.log(searchBigNumbers);

// const searchBigNumbers = players.some( ({online}) => online);

// console.log(searchBigNumbers);

// const test = numbers.reduce((acc, number) => {
//     console.log('acc -', acc);
//     console.log('number -', number);
//     return acc + number;
// }, 0);

// console.log(test);

// const test = numbers.reduce((acc, number) => acc + number, 0);

// console.log(test);

// const test = numbers.reduce ((acc, number) => acc + number, 0);

// console.log(test);



// const salary = {
//     mango: 1500,
//     poly: 2300,
//     den: 4500,
//     irina: 800,
// }

// const totalSalary = Object.values(salary).reduce((acc, salary) => acc + salary, 0);

// console.log(totalSalary);


// const players =[
//         {id: 'Player-1', name: 'Poly', timePlayd: 310, points: 45, online: false},
//         {id: 'Player-2', name: 'Mark', timePlayd: 280, points: 32, online: false},
//         {id: 'Player-3', name: 'Jorg', timePlayd: 510, points: 98, online: true},
//         {id: 'Player-4', name: 'Mango', timePlayd: 458, points: 75, online: false},
//         {id: 'Player-5', name: 'Lili', timePlayd: 154, points: 55, online: true},
//     ]

//     const totalTimePlayd = players.reduce((acc, {timePlayd}) => acc + timePlayd, 0);

//     console.log(totalTimePlayd);


// const cart =[
//     {label: 'Apples', price: 20, quantiti: 2},
//     {label: 'Banans', price: 29, quantiti: 8},
//     {label: 'Lemon', price: 40, quantiti: 1},
// ];

// const totalAmount = cart.reduce((acc, {price, quantiti}) => 
//     acc + price * quantiti, 0);

// console.log(totalAmount);

// const tweets =[
//             {id: 'Player-1', like: 5, tags: ['js', 'Node.js']},
//             {id: 'Player-2', like: 2, tags: ['html', 'css']},
//             {id: 'Player-3', like: 17, tags: ['html', 'css', 'Node.js']},
//             {id: 'Player-4', like: 10, tags: ['js', 'React']},
//             {id: 'Player-5', like: 14, tags: ['css', 'React']},
//         ];

// const allTags = tweets.reduce((acc, value) => {
//     // acc.push(...value.tags);

//     return [...acc, ...value.tags];
// }, []);

// // const analiticTags = allTags.reduce((acc, value) => {
// //     if (acc[value]) {
// //         acc[value] += 1;
// //         return acc;
// //      };
// //      acc[value] = 1;
// //     return acc;
// // }, {});

// // console.log(analiticTags);

// const analiticTags = allTags.reduce((acc, value) => {
//     if (acc[value]) {
//        return {
//            ...acc,
//            [value]: acc[value] + 1,
//        } 
        
//      };
//      acc[value] = 1;
//     return {
//         ...acc,
//         [value]:  1,
//     }
// }, {});

// console.log(analiticTags);

const obj = {
    login: 'Bob',
};

//const key = 'login';

console.log(obj['login'])