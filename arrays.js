document.addEventListener("DOMContentLoaded", function() {

    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
 
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];

    /// OPGAVE 1
    // METHOD : filter
/*
    let newNumbers = numbersArray.filter(num => num > 20)
    console.log("Opgave 1", newNumbers)
*/

        function bigNumbers(value) {
            return value > 20;
        }
 
        let newNumbers = numbersArray.filter(bigNumbers);

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



console.log("opgave 3a " + (dogsArray.includes('Trixie')));

// OPGAVE 3b

//console.log("opgave 3b " + (dogsArray.includes('Baxter')));

let hasBaxter = dogsArray.some((dog) => dog == "Baxter" );
console.log("opgave 3b " + hasBaxter);
//OPGAVE 4
 //METHOD : find

// OPGAVE 4a

//TEST NEDENSTÅENDE
//console.log("opgave 4prøve " + (catsArray.includes('Bagheera')));


const result = catsArray.find((cat) => cat === "Bagheera");

console.log("opgave 4a", result);


// OPGAVE 4b


// function findcat(catsArray.find(({ name }) => name === "Salem")) {
//     console.log("opgave 4b", );

// } 

/*
function findCat() {
    console.log("Debug: catsArray is", catsArray);
return catsArray.find(cat => cat === "Salem");

}
        console.log("opgave 4b", findCat());
*/

// SIMPLERE UDGAVE UDEN FUNKTION
console.log("opgave 4b", catsArray.find(cat => cat === "Salem"));

// OPGAVE 5
// METHOD : flatMap / map

let newNumberArray = numbersArray.map((x) => [x * 3]);

console.log("opgave 5", newNumberArray); 


//OPGAVE 6
// METHOD : join (toString, hvis kommaer skal bevares, forsøgte jeg først med)
/*Udskriv alle hundene i dogsArray i én lang streng.

(Sådan her: BarneyMollyBaxter...)*/

console.log("opgave 6 " + dogsArray.toString());
console.log("opgave 6 " + dogsArray.join(""));


//Opgave 7
// Opgave 7a
console.log("Opgave 7a " + fruitsArray.indexOf('Mango'));

//Opgave 7b

console.log("Opgave 7b " + fruitsArray.indexOf('Blåbær'));

// OPGAVE 8


 //let modifiedDogs = dogsArray.splice(3, 1); //same same som nedenunder, findes på anden måde
 let modifiedDogs = dogsArray.splice(dogsArray.indexOf("Polly"), 1);
console.log("Opgave 8 ", modifiedDogs);

// En anden metode hvor den faktisk viser det gældende array
let dogsModified = dogsArray.filter(dog => dog != "Polly")
console.log(dogsModified);


// EKSTRA OPGAVE
// METHOD : reduce

//console.log("Ekstraopgave ", reduce(numbersArray))


// const initialValue = 0;
const sum = numbersArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue //,initialValue
);
  //accumulator: Holder den løbende sum, der bliver opdateret med hver iteration.
  //currentValue: Er det nuværende element i numbersArray, der bliver lagt til summen.
  //initialValue (ikke nødvendig her, men er startværdien der skal lægges til)


console.log("Ekstraopgave",(sum));


}) // ends DOMContentLoaded



