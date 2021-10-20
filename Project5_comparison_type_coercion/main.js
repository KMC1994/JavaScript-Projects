document.write(typeof "10" ); //typeof operator is string 

//NOT function
function not_Function() {
    document.getElementById("not").innerHTML = !(10 < 1); //true
}

//OR function
function or_Function() {
    document.getElementById("or").innerHTML = (5>10 || 10>20); //false
}

//AND function
function and_Function() {
    document.getElementById("and").innerHTML = (5<10 && 10>4); //true
}


//EQUALS function
function equal_Function() {
    document.getElementById("equal").innerHTML = (10==10); //true
}

//LESS THAN function
function less_Function() {
    document.getElementById("less").innerHTML = (10<2); //false
}

//GREATER THAN function
function greater_Function() {
    document.getElementById("greater").innerHTML = (10>2); //true
}

//STRING function
function string_Function() {
    document.getElementById("string").innerHTML = X = 82; Y = "82"; document.write(X === Y); //false
}