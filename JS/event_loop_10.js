function processData(data) {
    return new Promise((resolve, reject) => {
        if (typeof data !== 'number') {
            reject(new Error('Error')); 
        } else if (data % 2 !== 0) {
            setTimeout(() => {
                resolve('Odd');
            }, 1000);
        } else {
            setTimeout(() => {
                resolve('Even');
            }, 2000);
        }
    });
}

// Пример 1:
processData(5)
    .then(result => {
        console.log('Result:', result); // 'Odd' через 1 секунду
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

// Пример 2:
processData(4)
    .then(result => {
        console.log('Result:', result); // 'Even' через 2 секунды
    })
    .catch(error => {
        console.error('Error:', error.message); 
    });

// Пример 3: (выведет 1-ым,т.к.синхрон.)
processData('Hello')
    .then(result => {
        console.log('Result:', result); 
    })
    .catch(error => {
        console.error('Error:', error.message); 
    });
