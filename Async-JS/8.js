const p = Promise.resolve(5);

p.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

console.log(p);
