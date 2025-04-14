const username = "Shlok";

console.log("Application Starting...");
console.log(`Hello, ${username}! Welcome to the async demo `);

console.log(" Setting a timeout for 2 seconds...");

setTimeout(() => {
  console.log("Timeout completed after 2 seconds!");
  console.log("This message comes from inside the asynchronous callback!");
  console.log("Hope you got the idea of how setTimeout works!");
}, 2000);

console.log("Timer is running in the background...");
console.log("Meanwhile, other tasks can continue executing.");
console.log("End of synchronous task execution.");
