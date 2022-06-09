
let a = prompt(" enter  firs number");
console.log("num1",a);
let b = prompt(" enter  second number");
console.log("num2",b);
function result(num1,num2){
    var num1,num2;
let x = prompt("operater");
let text=0;


switch (x) {
    case "+":
        text = parseInt(num1) +parseInt(num2) ;
        console.log("addition");
        break;
    case "-":
        text = num1 - num2;
        console.log("subtraction");
        break;
    case "*":
        text = num1 * num2;
        console.log("multiplication")
        break;
    case "/":
        text = num1 / num2;
        console.log("division")
}
return text;
}
var process=result(a,b);
console.log(+process);