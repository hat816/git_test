//Uso de .map
function sumOfTripledEvens(num) {

    // Step 1: If the element is an even number
    if (num % 2 === 0) {
      // Step 2: Multiply this number by three
       const tripleEvenNumber = num * 3;

       return tripleEvenNumber;
    } else {
        return false;
    }

}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mappedArr= arr.map(sumOfTripledEvens);
console.log(mappedArr);

//Uso de .filter

const tripleEvenNumber = arr.filter(sumOfTripledEvens)
.map(num => num *3);
console.log(tripleEvenNumber);

//  Uso de .reduce
const factorial = arr.reduce((tripleEvenNumber, num) => {
    return tripleEvenNumber * num
} , 1);

console.log(factorial);
console.log(arr);