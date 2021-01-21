// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digitalRoot(num) { 
    var sum=0;
    var value = num.toString(10).split("").map((x)=>parseInt(x));
   
    while (value.length > 1) {
        sum = 0;
        value.forEach( function(number) {
            sum = sum + number;
        });
        
        value = sum.toString(10).split("").map((x)=>parseInt(x));
    } 
    
    return sum;         
}
console.log(digitalRoot(16));
console.log(digitalRoot(942));
