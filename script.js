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
    // div3 && div5 deve essere la prima condizione altrimenti l'if si ferma alla prima true
    // forse è più corretto considerare la 2nd e 3rd come (div3 || !div5) e (div5 || !div3)
    if (div3 && div5) {
        console.log("FizzBuzz");
    } else if (div5 && !div3) {
        console.log("Buzz");
    } else if (!div3 && div5) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}



