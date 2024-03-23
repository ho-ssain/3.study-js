function risePromise() {
  const bucket = ["coffee", "chips", "vegetables", "salt", ""];

  new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("rice")) {
      resolve({ value: "Fried Rice" });
    } else {
      reject(new Error("Couldn't do it"));
    }
  });
}

risePromise()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
