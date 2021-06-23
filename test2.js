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

const employees = 5;
const max = 5000;
const min = 500;
let totalSalary;

for (let i = 1; i <= employees; i += 1) {
let salary = Math.round(Math.random() * (max-min) + min);
totalSalary = salary;
console.log (`Заработная плата работника ${i} ${totalSalary}`);
}




