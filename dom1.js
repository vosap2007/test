import products from "./data/products.js";
import transaction from './data/transaction.js';

// const heading = document.createElement('h1');

// heading.textContent = 'Привет! Я заголовок Н1';

// console.log(heading);

// const listItemEl = document.querySelector('.site-nav_item');
// listItemEl.textContent = 'New fragment'
// console.log(listItemEl);\

// const inputEl = document.querySelector('.js-input');
// inputEl.addEventListener('value', () => {
//     console.log(inputEl)
// })

// const buttonEl = document.querySelector('.js-magic-btn');
// buttonEl.classList.toggle('helo')
// console.log(buttonEl)

// const buttonEl = document.querySelector('.js-magic-btn');

// buttonEl.addEventListener('click', () => {
//     buttonEl.classList.toggle('hello')
// })

// const currentPageUrl = '/photo';

// const linkEl = document.querySelector(`.site-nav_link[href='${currentPageUrl}']`);
// const buttonEl = document.querySelector('.js-magic-btn-add');

// buttonEl.addEventListener('click', () => {
//    linkEl.classList.toggle('riggin') ;
// })

// const buttonEl = document.querySelector('.js-magic-btn');

// const textButton = buttonEl.textContent;

// console.log(textButton);

// const searchButton = document.querySelector
// ('.js-magic-btn[textContent = "Click my!"]');

// console.log(searchButton)

// const navEl = document.querySelector('.site-nav');
// console.log(navEl.children[2]);

// const titleEl = document.createElement('h1');
// titleEl.classList.add('double');
// titleEl.textContent = ('Hello. I am title h1')

// const navEl = document.querySelector('.site-nav');
// const linkEl = document.querySelectorAll('.site-nav_link');

//  const linkElement = linkEl[2];
//  console.log(linkElement)

// navEl.insertBefore(titleEl, linkElement)


// const imageEl = document.createElement('img');
// imageEl.src = 'https://lh3.googleusercontent.com/proxy/kth-gfFdetZS9IhEb1PeD4RukIteSrb_dTUKqVsplbdLjy1AMgyRhLcihVf6c56ADRUNW32gxUFMopgWyd6Z47fTap8lMDY-5-7vt3y3O-8h8uIdjhm1fZc';
// imageEl.alt = 'Angry Birds';
// imageEl.width = 640;

// document.body.appendChild(imageEl);

// console.log(imageEl)


// const imageEl = document.createElement('img');
// imageEl.src = 'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg';
// imageEl.alt = 'Minhons';
// imageEl.width = 640;

// document.body.appendChild(imageEl);
// //.prepend(imageEl) - добавляет nodes в начало elem

// console.log(imageEl)


// const ulEl = document.querySelector('.site-nav');
// const liEl = document.createElement('li');
// const navLinkEl = document.createElement('a');

// liEl.classList.add('site-nav_item');

// navLinkEl.href = '/about';
// navLinkEl.classList.add('link-about');
// navLinkEl.textContent = 'О нас';

// liEl.appendChild(navLinkEl);
// //ulEl.appendChild(liEl);

// // const navItemEl = document.querySelectorAll('.site-nav_item');
// // console.log(navItemEl[2]);

// ulEl.insertBefore(liEl, ulEl.children[1])



// const element = colorPicterOption.map(e => {
// const btnEl = document.createElement('button');
// btnEl.type = 'button';
// btnEl.textContent = `${e.lable}`;
// btnEl.style.backgroundColor = `${e.color}`;

// return btnEl;
// })

// parentEl.append(...element);

// const colorPicterOption = [
//     {lable: 'red', color: 'red'},
//     {lable: 'green', color: 'green'},
//     {lable: 'blue', color: 'blue'},
//     {lable: 'grey', color: 'grey'},
//     {lable: 'pink', color: 'pink'},
//     {lable: 'indigo', color: 'indigo'},
// ];
// const parentEl = document.querySelector('.js-color-picker');

// const createColorPicterOption = (options) => {
//     return options.map(e => {
//         const btnEl = document.createElement('button');
//         btnEl.type = 'button';
//         btnEl.textContent = `${e.lable}`;
//         btnEl.style.backgroundColor = `${e.color}`;
        
//         return btnEl;
//         })}

// parentEl.append(...createColorPicterOption(colorPicterOption));

// const buttonEl = colorPicterOption[0];

// const btnEl = document.createElement('button');
// btnEl.type = 'button';
// btnEl.textContent = `${buttonEl.lable}`;
// btnEl.style.backgroundColor = `${buttonEl.color}`;

// const parentEl = document.querySelector('.js-color-picker');

// parentEl.appendChild(btnEl);

// const btnCopy = btnEl.cloneNode(true);
// parentEl.appendChild(btnCopy);

// console.log(btnCopy);


// const product = {
//     name: 'PlayStation',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     price: 2000,
//     available: true,
//     onSale: true,
// };

// const productCardEl = document.querySelector('.js-product-card');

// const createProductCardEl = products => {
//     return products.map(({name, description, price}) => {
//         const artCard = document.createElement('article');
//     artCard.classList.add('product');

//     const titleCard = document.createElement('h2');
//     titleCard.classList.add('product_name');
//     titleCard.textContent = name;

//     const descrCard = document.createElement('p');
//     descrCard.classList.add('product_descr');
//     descrCard.textContent = description;

//     const priceCard = document.createElement('p');
//     priceCard.classList.add('product_price');
//     priceCard.textContent = price;

//     artCard.append(titleCard, descrCard, priceCard);

//     return artCard;
//     });
// }

// productCardEl.append(...createProductCardEl(products));

// const parensEl = document.querySelector('.js-product-card');

// parensEl.insertAdjacentHTML('beforeend', '<a href = "Это ссылка"></a>');

// const createCardProduct = (product) => {
//     const articleEl = document.createElement('article');
//     articleEl.classList.add('products');

//     const nameEl = document.createElement('h2');
//     nameEl.classList.add('name_el');
//     nameEl.textContent = product.name;

//     const textEl = document.createElement('p');
//     textEl.classList.add('text_el');
//     textEl.textContent = product.description;

//     const priceEl = document.createElement('p');
//     priceEl.classList.add('price_el');
//     priceEl.textContent = product.price;

//     articleEl.append(nameEl, textEl, priceEl);

//     return articleEl;
// };

// const createCards = products.map(product => 
//     createCardProduct(product)
//     );

// parensEl.append(...createCards);

// const createTransaction = (transaction) => {
//     // const idEl = document.createElement('table');
//     // idEl.classList.add('transaction-table');
//     // idEl.classList.add('js-transaction-table');

//     // const theadEl = document.createElement('thead');
//     const trEl = document.createElement('tr');

//     const thElId = document.createElement('th');
//     thElId.textContent = transaction.id;

//     const thElAmout = document.createElement('th');
//     thElAmout.textContent = transaction.amout;

//     const thElDate = document.createElement('th');
//     thElDate.textContent = transaction.date;

//     const thElBusines = document.createElement('th');
//     thElBusines.textContent = transaction.busines;

//     const thElName = document.createElement('th');
//     thElName.textContent = transaction.name;

//     const thEltype = document.createElement('th');
//     thEltype.textContent = transaction.type;

//     const thElAccount = document.createElement('th');
//     thElAccount.textContent = transaction.account;

//     trEl.append(thElId, thElAmout, thElDate, thElBusines, thElName, thEltype, thElAccount);
//     //theadEl.append(trEl);

//     return trEl;
// };

// const theadEl = document.querySelector('thead');

// const createTransactionAll = transaction.map((tranOne => createTransaction(tranOne)))

// theadEl.append(...createTransactionAll);


// const createTransaction = ({id, amout, date, busines, name, type, account}) => {

//    return `<tr>
//           <th>${id}</th>
//           <th>${amout}</th>
//           <th>${date}</th>
//           <th>${busines}</th>
//           <th>${name}</th>
//           <th>${type}</th>
//           <th>${account}</th>
//         </tr>`
// };

// const theadEl = document.querySelector('thead');

// const createTransactionAll = transaction.map((tranOne => createTransaction(tranOne)))

// theadEl.insertAdjacentHTML('beforeend', createTransactionAll);

// const buttonEl = document.querySelector('.js-button');
// const onceFileEl = document.querySelector('.js-once-file');

// buttonEl.addEventListener('click', handleClick);

// function handleClick () {
//     onceFileEl.insertAdjacentHTML('beforeend', '<p>Hello! You click button! Good!!!</p>')
// }

// const formEl = document.querySelector('.js-register-form');

// formEl.addEventListener('submit', onFormSubmit);

// function onFormSubmit (event) {
// event.preventDefault();

// const formData = new FormData(event.currentTarget);

// formData.forEach((name, value) => {
//     console.log(name);
//     console.log(value);
// })
// };

// const inputEl = document.querySelector('.js-input');
// // inputEl.addEventListener('focus', onInputFocus);
// // inputEl.addEventListener('blur', onInputBlur);
//  inputEl.addEventListener('input', onInput);

// const nameSpan = document.querySelector('.js-button > span');
// const licenseEl = document.querySelector('.js-license');
//       licenseEl.addEventListener('change', onLicense);

// const buttonEl = document.querySelector('.js-button');

// // function onInputFocus() {
// //     console.log('Инпут получил фокус');
// // } 

// // function onInputBlur() {
// //     console.log('Инпут потерял фокус');
// // } 

// function onInput(event) {
//          nameSpan.textContent = event.currentTarget.value
//      };

// function onLicense(event) {
//     buttonEl.disabled = !event.currentTarget.checked;
// }


