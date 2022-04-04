const array1 = [5, 4, 8, 2, 7, 1, 6, 3, 10, 9];

const bubbleSort = (array) => {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 -i; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j]; //5
        array[j] = array[j + 1]; //5
        array[j + 1] = temp;
      }
    }
  }
  console.log(array);
  return array;
};

console.log(bubbleSort(array1));
