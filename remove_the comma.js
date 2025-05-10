/**
 * We want to remove the comma's in the given string (myString), replace them with a space and log it to the console.
 * 
 * The end result should be: 
 *   hello this is a difficult to read sentence
 */

let myString = 'hello,this,is,a,difficult,to,read,sentence';// The string we want to change

myString = myString.split(',').join(' '); // solution from HYF // this is a common way to replace all occurrences of a substring in a string

myString = myString.replace(/,/g, ' '); // solution from MDN // this is a more modern way to replace all occurrences of a substring in a string



/* --- Code that will test your solution, do NOT change. Write above this line --- */

console.assert(myString === 'hello this is a difficult to read sentence', 'There is something wrong with your solution');