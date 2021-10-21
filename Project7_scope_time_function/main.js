var time = new Date().getHours();

function get_Date () {
    if (time<12) {
        document.getElementById("Greeting").innerHTML = "Good morning!";
    }
    if (time>12 && time<18) {
        document.getElementById("Greeting").innerHTML = "Good afternoon!";
    }

    else {
        document.getElementById("Greeting").innerHTML = "Good evening!";
    }
}

function Time_func(){
    var reply;
    if(time < 12 == time > 0) {
        reply = "It is morning time!";
    }
    else if (time > 12 == time < 18) {
        reply = "It is the afternoon!";
    }
    else {
        reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = reply;
}

function Time_func_error(){
    var reply;
    if(time < 12 == time > 0) {
        reply = "It is morning time!";
    }
    else if (time < 12 == time < 18) {
        reply = "It is the afternoon!";
    }
    else {
        reply = "It is evening time!";
    }
    console.log(reply);
    document.getElementById("Time_of_day_error").innerHTML = reply;
}