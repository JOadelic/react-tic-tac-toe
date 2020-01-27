const array = [2, 4, 6, 8, 10, 13, 19];

const arrayTransformed = array.map(num => num + 2);
console.log(arrayTransformed);

const filterTwo = numbers => {
  const result = [];
  for (let num of numbers) {
    if (num > 6) {
      result.push(num);
    }
  }
  return result;
};

// console.log(filterTwo(array));
