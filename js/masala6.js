function isPrimeNumber(number){
  let isPrime = 1;
  for(let i = 2; i < number; i++){
    if(number%i==0){
      isPrime=0;
      break;
    }
  }
  if(isPrime == 1 && typeof number == "number" ) {
    return true;
  } 
  else {
    return false;
  } 
}
let number = 100;
let count = 0;
for(let i = 2; i < number; i++){
  if(isPrimeNumber(i)) {
    count++;
  }
}
console.log(count);