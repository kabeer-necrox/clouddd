// const numbers = [1, 2, 3, 4, 5];
// const evens = numbers.filter((number) => number % 2 === 0);

// console.log(evens); 



// Promise.resolve('some')
//   .then(function(string) { // <-- This will happen after the above Promise resolves (returning the value 'some')
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         string += 'thing';
//         resolve(string);
//       }, );
//     });
//   })
//   .then(function(string) { // <-- This will happen after the above .then's new Promise resolves
//     console.log(string); // <-- Logs 'something' to the console
//   });





// let response = await fetch('/non-existence.txt');

// console.log(response.status); // 400
// console.log(response.statusText); // Not Found


// function greet(name) {
//     console.log("Hello, " + name + "!");


//   }
  
//   greet("John"); // output: "Hello, John!"
  
// function greet(name) {
//     console.log("hello," + name + "!");
// }
// greet("kabeer")





fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data));



















