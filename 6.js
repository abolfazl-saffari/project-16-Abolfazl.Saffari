//isPrime
function isPrime(x){
   let sum = 0;
   let i = 2;
   while (i < x){
      if (x % i === 0){
          sum = 1;
         break
      }
     i++
   }
   if (sum ===0) return ('Yes')
   else return ('No')
}
function min(x, y){
  let i =x;
 let arr=[]
 while (i<y){
     if (isPrime(i) === 'Yes') arr.push(i);
     i++
  }
  return arr
}
console.log(min(2,20))