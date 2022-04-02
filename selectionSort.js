const array1 = [5, 4, 8, 2, 7, 1, 6, 3, 10, 9];
let min, temp, index;

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = 9999;
    console.log(i);
    for (let j = i; j < array.length; j++) {
      if (min > array[j]) {
        min = array[j];
        index = j;
      }
    }
    temp = array[i];
    array[i] = array[index];
    array[index] = temp;
  }
  console.log(array);
  return array;
};

console.log(selectionSort(array1));
