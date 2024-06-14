function division(a,b){

    const truthyValue = true;
    const falsyValue = false;

    if (a%b === 0){
        return truthyValue;
    }
    return falsyValue;
}

let a=6;
let b=3;

let result=division(a,b);
console.log(a,b);
console.log(result);

