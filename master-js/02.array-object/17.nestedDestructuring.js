const users = [
  { id: 1, name: "john", age: 22 },
  { id: 2, name: "jack", age: 23 },
  { id: 3, name: "jame", age: 24 },
];

// let [{ name }] = users;
// console.log("🚀 ~ a:", name);

for (let i = 0; i < users.length; i++) {
  let { name: userName, age } = users[i];
  console.log(`Mr/Ms. ${userName} is ${age} years old!`);
}
