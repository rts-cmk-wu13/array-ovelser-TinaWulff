document.addEventListener("DOMContentLoaded", function() {

    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

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






}) // ends DOMContentLoaded



