function repetitiveSym(arr){

    for (let i = 0; i < arr.length; i++) {

        let j;
    
        for (j = 0; j < arr.length; j++) {

            if (i != j && arr[i] == arr[j]) {
                break;
            }
        }
        if (j == arr.length) {

            console.log("The first non-repeated element is:", arr[i]);
            nonRepeatedFound = true;
            break;
        }
    }
    if (!nonRepeatedFound) {
        console.log( "All elements in the array are repeated.");
    }

}

let arr = [9, 4, 9, 6, 7, 4];
let nonRepeatedFound = false;

repetitiveSym(arr);


