const array1 = [5, 4, 8, 2, 7, 1, 6, 3, 10, 9];

const insertionSort = (array) => {
  let temp, j;
  for (let i = 0; i < array.length - 1; i++) {
    j = i;
    while (array[j] > array[j + 1]) {
      temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
      j--;
    }
  }
  console.log(array);
  return array;
};

console.log(insertionSort(array1));
