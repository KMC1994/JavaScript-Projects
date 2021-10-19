function my_dictionary() { //function that pairs with the key value in the HTML file
    var Animal = {
      Species: "Cat",
      Color: "Grey",
      Breed: "British Shorthair",
      Age: 3,
      Sound: "Meow!",
    };
    delete Animal.Sound; //This statement removes the key before its value is displayed
    document.getElementById("my_dictionary").innerHTML = Animal.Sound;
  }
