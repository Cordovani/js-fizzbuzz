// stampare i numeri da 1 a 100
for (var i = 1; i <= 100; i++){
    
    // verificare le condizioni
    // se è divisibile per 3 stampo Fizz
    // se è divisibile per 5 stampo Buzz
    // se è divisibile per 5 e per 3 stampo FizzBuzz
    var div3 = i % 3 === 0;
    var div5 = i % 5 === 0;
    
    // gestisco i 3 possibili casi 
    // stampo l'output
    if (div3 && div5) {
        console.log("FizzBuzz");
    } else if (div5) {
        console.log("Buzz");
    } else if (div3) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}



