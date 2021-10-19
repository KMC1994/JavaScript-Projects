var A = Add(10, 7);                            //Addition
document.getElementById("add").innerHTML = A;

function Add (a, b) {
    return a + b;
}

var B = Subtract(21, 3);                        //Subtraction
document.getElementById("subtract").innerHTML = B;

function Subtract (a, b) {
    return a - b;
}

var C = Multiply(5, 3);                         //Multiplication
document.getElementById("multiply").innerHTML = C;

function Multiply (a, b) {
    return a * b;
}

var D = Divide(81, 9);                          //Division
document.getElementById("divide").innerHTML = D;

function Divide (a, b) {
    return a / b;
}

var E = simpleMath(99, 9);                      //MultiMath
document.getElementById("equation").innerHTML = -E;

function simpleMath (a, b) {
    return a / b + A - B * C % D;
}

var F = 5;                                      //Increment
F++;
document.write(F);
document.getElementById("incre").innerHTML = F;

var G = 11;                                      //Decrement
G--;
document.write(G);
document.getElementById("decre").innerHTML = G;


window.alert(Math.random()* 5);                //Random Math Window
