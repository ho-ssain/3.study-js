const bucket = ["coffee", "chips", "vegetables", "salt", ""];

const pm = new Promise((resolve, reject) => {
  if (bucket.includes("vegetables") && bucket.includes("rice")) {
    resolve({ value: "Fried Rice" });
  } else {
    reject(new Error("Couldn't do it"));
  }
});

// consume
pm.then((fRice) => {
  console.log("Let's eat", fRice.value);
}).catch((error) => {
  console.error(error);
});
