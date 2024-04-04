let firstName = "Hossain Kabir";

// start with 0
// in memory this store like this sequentially
// |H| |o| |s| |s| |a| |i| |n| | | |K| |a| |b | |i | |r |
// |0| |1| |2| |3| |4| |5| |6| |7| |8| |9| |10| |11| |12|

console.log("🚀 ~ firstName:", firstName.length);
console.log(firstName[8]);

// last index
let lastIndexOfFirstName = firstName[firstName.length - 1];
console.log("🚀 ~ lastIndexOfFirstName:", lastIndexOfFirstName);
