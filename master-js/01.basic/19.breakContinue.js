// break

for (let i = 1; i < 11; i++) {
  if (i === 5) {
    console.log("break/jump-of the loop!");
    break;
  }
  console.log(i);
}

// continue

for (let i = 1; i < 11; i++) {
  if (i === 5) {
    console.log("Continue to next iteration!");
    continue;
  }
  console.log(i);
}
