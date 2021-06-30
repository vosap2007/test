/*let number = 0;
number = Number(prompt('Введите число'));

let power = 0;
power = Number(prompt('Введите степень'));

let result = number ** power;

console.log(result);*/



/*const max = color;
const min = 22;

const result = Math.round(Math.random() * (max-min) + min);

console.log(result);*/



/*const colors = ['tomato', 'green', 'write', 'black', 'orange', 'green'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;*/


/*let x = 'ksjdh';
//x = prompt('Введите имя');

let y = 'slkdjn';
//y = prompt('Введите фамилию');

let z = 'sldkj';
//z = prompt('Введите название отеля');

let q = 5;
//q = prompt('Введите номер желаемого номера в отеле');

//const result = `Гость ${x} ${y} поселяется в отель ${z} номер ${q}.`
const resultOld = "Гость" + ' ' + x + ' ' + y + ' ' + "поселяется в отель" + z +' ' + "номер" + ' ' + q;

//console.log(result);
console.log(resultOld);*/

/*const x = 20;
const y = 50;

const number = 80;

const toX = number < x;
const xToY = x < number && number < y;
const toY = y < number;

console.log(toX);
console.log(xToY);
console.log(toY);*/

/*
const isOnline = true;
const isFrend = true;
const isDnd = false;

const openChat = isOnline && isFrend && !isDnd ;

console.log('Чат открыт:', openChat );
*/


/*
const subscription = 'free';

const result = subscription === 'pro' || subscription === 'vip';

console.log('Доступ открыт?', result);
*/

// 7,1 
/*let balance = 3000;
const paymeny = 2750;

const massage = `Общая стоимость заказа ${paymeny} кредитов. Проверяем доступное количество средств на счету`;
console.log(massage);

if (paymeny <= balance) {
balance = balance - paymeny;
console.log(`На счету осталось ${balance} кредитов.`);
} else if (paymeny > balance) {
    console.log(`На счету не достаточно средств для проведения операции.`);
} 
    console.log(`Операция завершена.`);  */


    //7,2
    /*const totalSpent = 30;
    let payment = 500;
    let discont = 0;

    if (totalSpent > 100 && totalSpent < 1000) {
        payment = payment - (payment/100*2);
        console.log(`Оформляем заказ на сумму ${payment} со скидкой 2%`);
    } else if (totalSpent > 1000 && totalSpent < 5000) {
        payment = payment - (payment/100*5);
        console.log(`Оформляем заказ на сумму ${payment} со скидкой 5%`);
    } else if (totalSpent > 5000) {
        payment = payment - (payment/100*10);
        console.log(`Оформляем заказ на сумму ${payment} со скидкой 10%`);
    } else {
        console.log(`Оформляем заказ на сумму ${payment} со скидкой 0`); 
    }*/


/*const stars = 1;
let price;

if (stars === 1) {
    price = 20;
} else if(stars === 2) {
    price = 30;
} else if(stars === 3) {
    price = 50;
} else if(stars === 4) {
    price = 70;
} else if(stars === 5) {
    price = 120;
} else {
    console.log('Такого количества звезд нет.')
}

console.log(`Стоимость ${stars} звездночного отеля ${price}$`);*/

/*const stars = 9;
let price;

switch (stars) {
    case 1:
        price = 20;
        break;

        case 2:
        price = 30;
        break;

        case 3:
        price = 50;
        break;

        case 4:
        price = 70;
        break;

        case 5:
        price = 120;
        break;

    default:
        console.log('Такого количества звезд нет.')
}
console.log(`Стоимость ${stars} звездночного отеля ${price}$`);*/

/*const stars = 6;
let price;

if (stars === 1 || stars === 2) {
    price = 20;
} else if(stars === 3 || stars === 4) {
    price = 50;
} else if(stars === 5) {
    price = 120;
} else {
    console.log('Такого количества звезд нет.')
}

console.log(`Стоимость ${stars} звездночного отеля ${price}$`);
*/

/*const stars = 6;
let price;

switch (stars) {
    case 1:
    case 2:
        price = 20;
        break;

        case 3:
        case 4:
        price = 50;
        break;

        case 5:
        price = 120;
        break;

    default:
        console.log('Такого количества звезд нет.')
}
console.log(`Стоимость ${stars} звездночного отеля ${price}$`);*/

/*const option = 8;
let massage;

switch (option) {
    case 1:
        massage = 'Самовывоз';
        break;

        case 2:
            massage = 'Курер';
        break;

        case 3:
            massage = 'Почта';
        break;

    default:
        massage = 'Вам перезвонит менеджер';
        break;
}
console.log(massage);*/

/*
for (let i = 5; i < 10; i += 1) {
console.log(i);
}*/


/*
const employees = 5;
const max = 5000;
const min = 500;
let totalSalary=0;

for (let i = 1; i <= employees; i += 1) {
let salary = Math.round(Math.random() * (max-min) + min);
totalSalary += salary;
console.log (`Заработная плата работника ${i} ${salary}`);
}

console.log(totalSalary);
*/

/*const min = 6;
const max = 13;
let total = 0;

for (let i = min; i <= max; i += 1) {

if (i % 2 !== 0) {
    continue
}
console.log(i);
    total += i;
};

console.log(total);*/

/*
let balance = 10000;
const payment = 5000;

console.log(`Общая сумма покупки ${payment} гривен. Проверяем доступное количество средств на счету.`);

if (payment <= balance) {
    balance -= payment;
    console.log(`На счету осталось ${balance} гривень.`);
} else {
    console.log(`На счету осталось не достаточно средств.`);
};

console.log('Операция завершена');
*/

/*
const buttonAdd = document.querySelector('button[data-add]');
const buttonReset = document.querySelector('button[data-reset]');
const inpudAdd = document.querySelector('input[data-value]');
const autput = document.querySelector('.js-autput span');
let total = 0;

buttonAdd.addEventListener('click', () => {
    const value = Number(inpudAdd.value);

    total += value;
    autput.textContent = total;

    inpudAdd.value = '';
});

buttonReset.addEventListener('click', () => {
    total = 0;
    autput.textContent = 0;
});
*/

/*const arr = ['Poly','Evhen','Djorj','Ben','Olha','Korbi'];

for (let i = 0; i <= arr.length - 1; i += 1) {
console.log(arr[i]);
}*/

/*const arr = ['fruts', 'vejetebles', 'oil', 'juses', 'gum'];

for (let ar of arr) {
   console.log(ar);
};*/


// const arr = [54, 65, 654, 2, 64];
// let sum = 0;

// for (const s of arr) {
//      sum += s;
// };

// console.log(sum);


// const arr = [54, 65, 654, 2, 64];
// let sum = 0;

// for (let i = 0; i < arr.length; i += 1) {
//     arr[i] = Math.round(arr[i] * 1.2);
//     console.log(arr[i]);
//     sum += arr[i];
// };

// console.log(sum);


// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let total = 0;

// for (const one of arr) {
    
//     if (one % 2 === 0) {
//      console.log (one);    
//         total += one;
//     };
// };

// console.log('Total:', total);


// const logins = ['valera95', 'JORA47', 'Nastja', 'OleNa'];
// const loginToFinde = 'Nastja';
// let message = '';

// for (let index = 0; index < logins.length; index++) {
//     const login = logins[index];
    
//     if(login !== loginToFinde) {
//         message = `Пользователь ${loginToFinde} не найден!`; 
//     } else {
//         message = `Пользователь ${loginToFinde} найден!`;
//         break;
//     }
// };

// console.log(message);

// const logins = ['valera95', 'JORA47', 'Nastja', 'OleNa'];
// const loginToFinde = 'Nastja';
// let message = '';

// for (const login of logins) {

//     if(login !== loginToFinde) {
//         message = `Пользователь ${loginToFinde} не найден!`; 
//     } else {
//         message = `Пользователь ${loginToFinde} найден!`;
//         break;
//     }
// };

// console.log(message);

// const logins = ['valera95', 'JORA47', 'Nastja', 'OleNa'];
// const loginToFinde = 'Nastja';
// let message = '';

// let ansver = logins.includes(loginToFinde);
// if (ansver === true) {
//     message = `Пользователь ${loginToFinde} найден!`;
// } else {
//     message = `Пользователь ${loginToFinde} не найден!`;
// };

// console.log(message);

// const logins = ['valera95', 'JORA47', 'Nastja', 'OleNa'];
// const loginToFinde = 'Nastja';
// let message = '';

// let ansver = logins.includes(loginToFinde);

// ansver ? message = `Пользователь ${loginToFinde} найден!` :  message = `Пользователь ${loginToFinde} не найден!`;

// console.log(message);


// const numbers = [55,68,85,5,45,32,21,10,100];
// let num = numbers[0] ;

// // console.log(Math.min.apply(null, numbers));

// for (const number of numbers) {
//    if (number >  num) {
//     num = number;  
//    }
// };

//  console.log(num);

// const friends = ['Poly','Evhen','Djorj','Ben','Olha','Korbi'];
// let slise = '';

// for (const friend of friends) {
        
//     slise += friend + ',';
// };

// console.log(slise.slice(0, slise.length - 1));

// const friends = ['Poly','Evhen','Djorj','Ben','Olha','Korbi'];
// const slise = friends.join(',');

// console.log(slise);

// const string = 'JavaScript';
//  const arrString = string.split('');
//  let newString = '';

//  for (const leter of arrString) {

//     if (leter === leter.toLowerCase()) {
//       newString += leter.toUpperCase();  
//     } else {
//         newString += leter.toLowerCase();
//     }
//  };

//  console.log(newString);

// const string = 'JavaScript';
//  const arrString = string.split('');
//  let newString = '';

// for (const leter of arrString) {
//  leter === leter.toLowerCase() ? 
//  newString += leter.toUpperCase() : 
//  newString += leter.toLowerCase();
// }

//  console.log(newString);

// const title = 'Top 10 benefist of react framework';

// const nomalizadeTitle = title.toLowerCase();
// const titleOne = nomalizadeTitle.split(' ');

// console.log(titleOne.join('-'));



// const title = 'Top 10 benefist of react framework';

// const newTitle = title.toLowerCase().split(' ').join('-');
// console.log(newTitle);


// const array1 = [65,75,12,5,6];
// const array2 = [4,89,21,20,100];

// let sum1 = 0;
// let sum2 = 0;


// for (let index = 0; index < array1.length; index++) {
//     const element = array1[index];

//     sum1 += element;
// };

// for (let index = 0; index < array2.length; index++) {
//     const element = array2[index];

//     sum2 += element;
// };

// const sumAll = sum1 + sum2;

// console.log(sum1);
// console.log(sum2);
// console.log(sumAll);

// const array = array1.concat(array2);
// let sum = 0;

// for (const element of array) {
//     sum += element;
// };

// console.log(sum);

// const card = [
//     'Card-1',
//     'Card-2',
//     'Card-3',
//     'Card-4',
//     'Card-5',
// ];

// const cartToRemove = 'Card-3';

// const index = card.indexOf(cartToRemove);
// const delCard = card.splice(index, 1); 

// console.log(card);



// const cartToRemove = 'Card-6';
// const index = 3;

// card.splice(index, 1, cartToRemove);
// console.log(card);

// const card = [
//     'Card-1',
//     'Card-2',
//     'Card-3',
//     'Card-4',
//     'Card-5',
// ];

// const delCard = 'Card-4';

// const index = card.indexOf(delCard);

// card.splice(index, 1, 'Hello');

// console.log(card);


// const add = function (a, b, c) {
//    return a+b+c;
// };

// const result = add(1,2,3);

// console.log(result);


// const count = function (countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
  
//     for (let i = countFrom; i <= countTo; i += step) {
//       console.log(i);
//     }
//   };
  
//   count(1, 5); // countFrom = 1, countTo = 5, step = 1
//   count(2); // countFrom = 2, countTo = 10, step = 1
//   count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
//   count(); // countFrom = 0, countTo = 10, step = 1

// const sum = function () {
//   let res = 0;
  
//   for (const argument of arguments) {
//       res += argument;
//   };
//   return res
// };

// console.log(sum(1,2,3));

// const fn = function (...args) {
//     console.log(args);
//   };

//   fn(1,2,3,4,5,6,7,8,9,10);


// const cash = function (amaunt, balance) {
//     let message = '';

//     if (amaunt === 0) {
//         message = 'Введите коректную сумму денег';
//     } else if (balance >= amaunt) {
//         message = `Операция успешна! Остаток на балансе ${balance - amaunt} денег`;
//     } else {
//         message = `На вашем счету не достаточно денег! Вы привысили баланс на ${amaunt - balance} денег`;
//     }

//     return message;
// };

// console.log(cash(0, 100));


// const withdraw = function (amount, balance) {
//     if (amount === 0) {
//       console.log('Для проведения операции введите сумму больше нуля.');
//     } else if (amount > balance) {
//       console.log('Недостаточно средств на счету.');
//     } else {
//       console.log('Операция снятия средств проведена.');
//     }
//   };

// const cash = function (amaunt, balance) {
//     let message = '';

//     if (amaunt === 0) {
//         console.log('Введите коректную сумму денег');

//         return;
//     }; 
    
//     if (balance >= amaunt) {
//         console.log(`Операция успешна! Остаток на балансе ${balance - amaunt} денег`);
        
//         return;
//     }; 

//     console.log(`На вашем счету не достаточно денег! Вы привысили баланс на ${amaunt - balance} денег`);
    
// };

// console.log(cash(101, 100));

// console.log(add(1,2,3));

// console.log(1,2,3);


// function add (a,b,c) {
//     return a+b+c;
// }

// console.log(add(1,2,3));

// const a = 5;

// const add = function () {
//    const b = 20;

//     return a + b;
// };

// console.log(add());





// const calculateTotalPrice = function (carts) {
//     let total = 0;

//     for (const value of carts) {
//         total += value;
//     };

//     return total;
// };

// console.log(calculateTotalPrice([11, 12, 78, 105, 478, 10, 68, 99, 5, 128]));

// console.log(calculateTotalPrice([12, 15, 47, 5, 128]));
// console.log(calculateTotalPrice([111, 182, 8, 15, 78, 108, 8, 100, 5]));


// const logItems = function (item) {
//      for (const i of item) {
//          console.log(i);
//      }
// };

// logItems  (['Voder', 'Vaik', 'Gorid', 'Obnova', 'Colin']);
// logItems ([1, 2, 3, 4, 5, 6]);
// logItems (['Рубашка', "Штаны", 'Шапка', 'Носки']);


// const logins = ['Voder', 'Vaik', 'Gorid', 'Obnova', 'Colin'];
// const loginToFinde = 'Gorid';

// const findLogin = function (allLogins, login) {

//     // for (const i of allLogins) {
//     //     if (i === login) {
//     //        return `Пользователь ${login} найден`;
//     //     };
//         return allLogins.includes(login) ? `Пользователь ${login} найден` :  `Пользователь ${login} не найден`;
//      };
//     // return `Пользователь ${login} не найден`;

// console.log(findLogin(logins, loginToFinde));



// const nummbers = [5, 45, 89, 4, 12];

// const findSmillestNumber = function (nummbers) {

//     let smillestNumber = nummbers[0];

//     for (const number of nummbers) {
//         if (number < smillestNumber) {
//             smillestNumber = number;
//         };
//     };

//     return smillestNumber;
// };

// console.log(findSmillestNumber(nummbers));


// const changeCase = function(string) {
// const array = string.split('');
// let newArr = '';

//     for (const i of array) {

//       newArr += i === i.toLowerCase() ? i.toUpperCase() : i.toLowerCase() 
//     };

//     return newArr;
// };

// console.log(changeCase('JavaScript'));
// console.log(changeCase('JDhsjhJHHDFKJHkjkjh'));



// const string = 'Top 10 benefist of react framework';

// const slugify = function (string) {
//     return string.toLowerCase().split(' ').join('-');
// };

// console.log(slugify(string));


const add = function (...args) {
    let total = 0;

    for (const i of args) {
        total += i;
    };

    return total;
};

console.log(add(1,2,3));
console.log(add(1,2,3,4,5,6,7,8,9));