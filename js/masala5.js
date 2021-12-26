function getPrimeNumbersArray(...arr){

  for(let i=0; i<arr.length; i++){
      for(let j=2; j<arr[i]; j++){
          if(arr[i]%j ==0){
              arr[i]=1
              break
          }
      }
      if(arr[i]!=1){
          console.log(arr[i])
      }
  }
}
getPrimeNumbersArray(7,11,17,23,31,37)