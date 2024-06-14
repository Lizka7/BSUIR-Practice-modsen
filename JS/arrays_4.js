function minNumber(arr){

    let min=arr[0];

    for(let i=0; i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}

let arr=[7,5,3,9];
let result=minNumber(arr);

console.log(arr);
console.log(result);
