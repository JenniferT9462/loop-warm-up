// Loop Warm-Up
// Every for loop has the same 3 parts:
//   START       where i begins          let i = 1
//   KEEP GOING  check before each run   i <= 10
//   STEP        change i after each run i++   (i++ means add 1)
// Only those 3 parts and the inside { } change. The shape never does.

// Count from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Count down
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
// Loop thru a string
let text = "hello";
for(let i = 0; i < text.length; i++) {
    console.log(text[i]);
}

// Loop thru an array of number
let numbers = [34, 56, 78, 23, 55];
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Add each number in an array
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
   sum = sum + numbers[i]; 
}
console.log("Sum:", sum);



