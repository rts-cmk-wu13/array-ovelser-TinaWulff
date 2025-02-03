document.addEventListener("DOMContentLoaded", function() {

    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
 
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]



    /// OPGAVE 1
/*
    let newNumbers = numbersArray.filter(num => num > 20)
    console.log("Opgave 1", newNumbers)
*/

        function bigNumbers(value) {
            return value > 20;
        }

        const newNumbers = numbersArray.filter(bigNumbers);

        console.log("Opgave 1", newNumbers);

/*  Mdn's eksempel:

function isBigEnough(value) {
    return value >= 10;
  }
  
  const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtered is [12, 130, 44]
*/


// OPGAVE 2

catsArray.push('Sniffles');
console.log("Opgave 2", catsArray);


// OPGAVE 3

/* 
Opgave 3a
Check om der i dogsArray er en hund som hedder "Trixie".

Udskriv "true" eller "false" i konsollen afhængig af svaret.

console.log("Opgave 3a", ...)

Opgave 3b
Check om der i dogsArray er en hund som hedder "Baxter".

Udskriv "true" eller "false" i konsollen afhængig af svaret.

console.log("Opgave 3b", ...)

*/

// OPGAVE 3a

let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];

console.log("opgave 3a " + (dogsArray.includes('Trixie')));

// OPGAVE 3b

console.log("opgave 3b " + (dogsArray.includes('Baxter')));


// OPGAVE 4a

//TEST NEDENSTÅENDE
console.log("opgave 4prøve " + (catsArray.includes('Bagheera')));


const result = catsArray.find(({ name }) => name === "Bagheera");

console.log("opgave 4a", result);

// OPGAVE 4b

















}) // ends DOMContentLoaded



