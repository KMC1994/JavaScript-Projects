function Function1() {                        
    var sentence = "You clicked \"change\"";
    document.getElementById("paragraph").innerHTML = sentence; //This function calls the sentence to change 
  }
  
  function Function2() {
    var sentence = "It is October 18th ";
    sentence += " I am working on Javascript today";
    document.getElementById("concatenate").innerHTML = sentence; //This function prints the var sentence 
                                                                 //which has been concatenated with a second sentence
  }
  