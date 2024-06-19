new Promise(function(resolve, reject) {

    setTimeout(() => resolve(2), 1000); 

}).then(function(result) {
    console.log("The first result is:", result); 
    return new Promise(function(resolve) {
        setTimeout(() => resolve(result * result), 3000); 
    });
}).then(function(result) {
    console.log("The second result is:" , result); 
    return new Promise(function(resolve) {
        setTimeout(() => resolve(result * result), 3000); 
    });
}).then(function(result) {
    console.log("The third result is:" , result);
});
