//Fizzbuzz
function Fizzbuzz (DRX){
    if (DRX % 15 ===0) return 'Fizzbuzz';
    else if (DRX % 3 ===0) return 'Fizz';
    else if (DRX % 5 ===0) return 'buzz';
   else return DRX;
}
console.log(Fizzbuzz(45))
console.log(Fizzbuzz(9))
console.log(Fizzbuzz(10))
console.log(Fizzbuzz(17))
console.log(Fizzbuzz('DRX'))