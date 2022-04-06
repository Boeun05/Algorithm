const stack = () => {
  let arr = [];
  let index = 0;
  return {
    push: (item) => {
      arr[index] = item;
      index++;
      return arr;
    },
    pop: () => {
      if (index <= 0) [];
      index--;
      arr.splice(index);
      return arr;
    },
  };
};

const myStack = stack();
console.log(myStack.push(1));
console.log(myStack.push(2));
console.log(myStack.push(3));
console.log(myStack.push(4));
console.log(myStack.push(5));
console.log(myStack.push(6));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
