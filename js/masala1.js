function mySort(arr){

    for(let i=0; i<arr.length; i++){
        
        for(let j=i; j<arr.length; j++){
            if(arr[i]>arr[j]){
                let item = arr[j];
                arr[j] = arr[i];
                arr[i] = item;
            }
        }
    }
    console.log(arr);
    
}
mySort([10,1,3,5,8,9]);
