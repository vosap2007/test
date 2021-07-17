// let productName = "Droid";
// let pricePerItem = 2000;

// productName = 'Repair droid';
// pricePerItem += 1500;

// console.log(productName, pricePerItem);

// Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.

// topSpeed - число 160.
// distance - число 617.54.
// login - строка "mango935".
// isOnline - буль true.
// isAdmin - буль false.

// const topSpeed = 160;
// const distance = 617.54;
// const login = 'mango935';
// const isOnline = true;
// const isAdmin = false;


// Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа. 
// Переменная pricePerItem хранит цену одной единицы товара, 
// а orderedQuantity - количество единиц товара в заказе.

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;


// Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате:
//  "You picked <имя товара>, price per item is <цена товара> credits". 
//  Где <имя товара> и <цена товара> это значения переменных productName 
//  и pricePerItem. Используй синтаксис шаблонных строк.

// const productName = "Droid";
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;


// const orderedQuantity = 6;
// const pricePerDroid = 800;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(message);

// Объяви функцию sayHi, внутри которой добавь console.log() 
// со строкой "Hello, this is my first function!". После объявления вызови функцию sayHi.

// function sayHi() {
//     console.log('Hello, this is my first function!');
// };

// sayHi();


// Функция add должна уметь складывать три числа и выводить результат в консоль.
//  Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.

// Дополни console.log() так, чтобы он логировал строку 
// "Addition result equals <result>", где <result> это сумма переданных чисел.

// function add(a,b,c) {
//    const result = a + b + c;

// console.log(`Addition result equals ${result}`);
// };

// function add(a, b, c) {
//     return a+b+c;
//   }
  
//   add(2, 5, 8); // 15
  
//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));

// function makeMessage (name, price) {
//     // Change code below this line
//      const message = ;
//     // Change code above this line
//     return message;
//   };

// const calculateTotalPrice = (orderedQuantity, pricePerItem) => orderedQuantity * pricePerItem;

//   calculateTotalPrice();


// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line
  
  
  
//     // Change code above this line
//     return message;
//   }

//   function checkAge(age) {
//     let message;
  
//     if () { // Change this line
//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }
  
//     return message;
//   }

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//     if(available - ordered >= 0) {
//         message = 'Order is processed, our manager will contact you.';
//     } else {
//         message = 'Not enough goods in stock!'
//     }
  
//     // Change code above this line
//     return message;
//   }


// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     let totalPrice = pricePerDroid * orderedQuantity;

//     if(pricePerDroid * orderedQuantity > customerCredits) {
//         message = "Insufficient funds!";
//     } else {
//         customerCredits -= totalPrice;

//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//     }

//     return message;
//   };

//   console.log(makeTransaction(3000, 5, 23000));
  
//   console.log(makeTransaction(1000, 3, 15000));
  

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
  
//     if () { // Change this line
//       message =  'Canceled by user!';
//     } else if () { // Change this line
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }
  
//     return message;
//   }

// function checkStorage(available, ordered) {
//     let message;
//     if (ordered === 0) {
//         message = 'There are no products in the order!';
//     } else if(ordered > available) {
//         message = 'Your order is too large, there are not enough items in stock!';
//     } else {
//         message = 'The order is accepted, our manager will contact you';
//     }
//     return message;
//   }
  


// function isNumberInRange(start, end, number) {
//     const isInRange = start <= number && number <= end ;
  
//     return isInRange;
//   }


// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
    
//     if(totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT;
//     } else if( (totalSpent < 50000) && (totalSpent >= 20000)) {
//         discount = SILVER_DISCOUNT;
//     } else if( (totalSpent < 20000) && (totalSpent >= 5000)) {
//         discount = BRONZE_DISCOUNT;
//     } else{
//         discount = BASE_DISCOUNT;
//     };

//     return discount;
//   };

//   console.log(getDiscount(8250))


// function checkStorage(available, ordered) {
//     let message;
    
//     (ordered > available) ?  message = "Not enough goods in stock!" : message = "The order is accepted, our manager will contact you";
  
//     // if (ordered > available) {
//     //   message = "Not enough goods in stock!";
//     // } else {
//     //   message = "The order is accepted, our manager will contact you";
//     // }
  
//     // Change code above this line
//     return message;
//   }

//   console.log(checkStorage(5, 13));


// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
    
//     password === ADMIN_PASSWORD ? 
//     message = "Access is allowed" :
//     message = "Access denied, wrong password!"
  
//     // Change code above this line
//     return message;
//   }

//   console.log(checkPassword("jqueryismyjm"));
  

// function getSubscriptionPrice(type) {
//     let price;
//     // Change code below this line
  
//    switch (type) { // Change this line
//       case "starter": 
//         price = 0; // Change this line
//         break;
  
//       case "professional": // Change this line
//         price = 20; // Change this line
//         break;
  
//       case "organization": // Change this line
//         price = 50; // Change this line
//         break;
//     }
  
//     // Change code above this line
//     return price;
//   }

  
  
  

//   console.log(getSubscriptionPrice("professional"));
//   console.log(getSubscriptionPrice("organization"));
//   console.log(getSubscriptionPrice("starter") );

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
    
//     switch (password) {
//         case null:
//            message = "Canceled by user!"; 
//             break;

//             case ADMIN_PASSWORD:
//                 message = "Welcome!"; 
//             break;
    
//         default:
//             message = "Access denied, wrong password!";
//     }
    
//     return message;}

//     console.log(checkPassword(null));

// China - 100 кредитов
// Chile - 250 кредитов
// Australia - 170 кредитов
// Jamaica - 120 кредитов

//  "Sorry, there is no delivery to your country"

// function getShippingCost(country) {
//     let message;
    
//     switch (country) {
//         case 'China':
//             message = `Shipping to China will cost 100 credits`
//             break;

//             case 'Chile':
//             message = `Shipping to China will cost 250 credits`
//             break;

//             case 'Australia':
//             message = `Shipping to China will cost 170 credits`
//             break;

//             case 'Jamaica':
//             message = `Shipping to China will cost 120 credits`
//             break;
    
//         default:
//             message = "Sorry, there is no delivery to your country"
//     }

//     return message;
//   }

//   console.log(getShippingCost('Australia'))


// function formatMessage(message, maxLength) {
//     let result;
    
//     if (message.length <= maxLength) {
//         result = message;
//     } else {
//         result = message.slice(0, maxLength)+'...';
//     }

//     return result;
//   }

//   console.log(formatMessage("Vestibulum facilisis purus nec", 20))

// function checkForName(fullName, name) {
//     const result = fullName.includes(name);
//      return result;
//    };

//    console.log(checkForName("Egor Kolbasov", "egor"))

// function checkForSpam(message) {
//     let result;
    
//     result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
//     return result;
//   }

//   console.log(checkForSpam("Get best sale offers now!"))

