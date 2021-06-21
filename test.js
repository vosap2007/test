const chooseBestDistance = (t, k, ls) => {
    let sum = 0;
    const recurs = (n, j) => {
      if (n)
        ls.forEach(el => {
          let arr = Array.from(new Set([...j, el]));
          recurs(n - 1, arr);
        });
      else if (j.length === k) {
        const presum = j.reduce((acc, item) => (acc += item), 0);
        if (presum > sum && presum <= t) sum = presum;
      }
    };
  
    recurs(k, []);
  
    return sum || null;
  };
  
  console.log(chooseBestDistance(174, 3, [51, 56, 58, 59, 61]));
  console.log(chooseBestDistance(163, 3, [50]));
  

/*const chooseBestDistance = (t, k, ls) => {
    const results = [];
    ls.forEach((el, i, ls) =>
    ls.forEach((deepEl, j) =>
    ls.forEach(
          (deepestEl, y) =>
            i !== j &&
            i !== y &&
            j !== y &&
            results.push(el + deepEl + deepestEl),
        ),
      ),
    );
    return Array.from(new Set([...results])).sort((a, b) => a - b);
  //return null;
};


  console.log(chooseBestDistance(174, 3, [51, 56, 58, 59, 61])); //173
// chooseBestDistance(163, 3, [50]); // null

// ls (список відстаней, всі відстані є додатними або нульовими цілими числами, і цей список містить принаймні один елемент). 
//  t (максимальна сума відстаней, ціле число >= 0),
// k (кількість міст, які потрібно відвідати, k> = 1)
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //массив, можно использовать массив объектов
let size = 3; //размер подмассива
let subarray = []; //массив в который будет выведен результат.
for (let i = 0; i <Math.ceil(array.length/size); i++){
    subarray[i] = array.slice((i*size), (i*size) + size);
}
console.log(subarray);*/