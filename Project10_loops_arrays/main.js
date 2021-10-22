//while loop
function Count_To_Ten(){
    var Digit = ""
    var X = 1;
    while (X < 11) {
        Digit+= "<br>" + X;
        X++;
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;
}


//for loop
var Instruments = ["Guitar", "Drums" , "Piano" , "Bass" , "Violin" , "Trumpet" , "Flute"];
var Content = "";
var Y;
function for_Loop(){
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//array
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + 
        Cat_Picture[2] + ".";
}

//let keyword
var x = 82;
document.write("<br>" + x);
{
    let x = 47;
    document.write("<br>" + x);
}
document.write("<br>" + x);