function my_dictionary() {
    var Animal = {
      Species: "Cat",
      Color: "Grey",
      Breed: "British Shorthair",
      Age: 3,
      Sound: "Meow!",
    };
    delete Animal.Sound;
    document.getElementById("my_dictionary").innerHTML = Animal.Sound;
  }