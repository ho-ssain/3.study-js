// const myFunc1 = (fn) => {
//   console.log("function is doing task 1");
//   fn();
// };

// myFunc1(() => {
//   console.log("function is doing  task 2");
// });

const getTwoNumbers = (num1, num2, addTwoNums, errorfn) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    const res = addTwoNums(num1, num2);
    console.log(res);
  } else {
    errorfn();
  }
};

getTwoNumbers(
  23,
  "45",
  (n1, n2) => n1 + n2,
  () => console.log("Wrong type!!")
);
