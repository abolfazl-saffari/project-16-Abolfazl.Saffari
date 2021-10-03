//CompleteNumber
function  completeNum(inpA){
   let sum = 0;
   if(inpA >= 1 && inpA <= 200000){
      for(let i = 1; i<= inpA/2; i++){
         if(inpA%1 ===0)
           sum +=i
    }
    if(sum === inpA)
        return 'Yes'
    else
       return 'NO'
}
else
  return 'inp is out the rng'
}
console.log(completeNum(27))
console.log(completeNum(6))
console.log(completeNum(0))