/**
 * Report whether or not a number is odd/even!
 *
 *  Create a for loop, that iterates from 0 to 20.
 *  Create a conditional statement that checks if the value of the counter variable is odd or even.
 *  If it's odd, log to the console The number [PUT_NUMBER_HERE] is odd!.
 *  If it's even, log to the console The number [PUT_NUMBER_HERE] is even!.
 */
for (let i = 0; i <= 20; i++) {
  // Loop from 0 to 20
  // Check if the number is even or odd
  if (i % 2 === 0) {
    // If the number is even
    // Log to the console that the number is even
    console.log(`The number ${i} is even!`); // Log the number and that it is even
    // If the number is odd
  } else {
    // If the number is odd
    // Log to the console that the number is odd
    console.log(`The number ${i} is odd!`); // Log the number and that it is odd
  }
}
