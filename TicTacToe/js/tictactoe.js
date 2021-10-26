//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores and array of moves. We use this to determine win conditions.
let selectedSquares = [];


//this function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a square hasnt been selected already
    //the .some() method is used to check each element of selectedSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(Element => Element.includes(squareNumber))) {
        //This variable retrieves the html elemenent that hasnt been clicked
        let select = document.getElementById(squareNumber);
        if (activePlayer === "X") {
            //if activeplayer is equal to X the x.png is placed in html
            select.style.backgroundImage = 'url("images/x.png")' ;
            //active player may only be x or o so  if not x it must be o
        } else {
            //If activePlayer is equal to O the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and active player are concacted and added to a array
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions
        checkWinConditions();
        //this condition is for changing the active player
        if (activePlayer === 'X') {
            //if active player is x change it to o
            activePlayer = 'O';
        //if active player is anything other than X
        } else {
            //change the activeplayer to X
            activePlayer = 'X';
        }
        //this function plays placement sound
        audio("./media/place.mp3");
        //this condition checks to see if it is computers turn
        if(activePlayer === 'O') {
            //this function disables clicking for computer choice
            disableClick();
            //this function waits 1 second before computer places image and enables click
            setTimeout(function () { computersTurn (); }, 1000)
        }
        //returning true is need for out computersTurn function to work
        return true;
    }
    //this function results in a random square being selected
    function computersTurn() {
        //this boolean is needed for our while loop
        let success = false;
        //this variable stores a randdom number
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected already
        while(!success) {
            //a random number between 0-8 selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluated returns true the square hasnt been selected
            if (placeXOrO(pickASquare)) {
                //this line calls the function
                placeXOrO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
            } ;
        }
    }
}
//this function parses the selected squares array to search for win conditions
//drawWinLine function is called to draw line if condition is met
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50,100,558,100)}
    else if (arrayIncludes('3X','4X','5X')) { drawWinLine(50,304,558,304)}
    else if (arrayIncludes('6X','7X','8X')) { drawWinLine(50,508,558,508)}
    else if (arrayIncludes('0X','3X','6X')) { drawWinLine(100,50,100,558)}
    else if (arrayIncludes('1X','4X','7X')) { drawWinLine(304,50,304,558)}
    else if (arrayIncludes('2X','5X','8X')) { drawWinLine(508,50,508,558)}
    else if (arrayIncludes('6X','4X','2X')) { drawWinLine(100,508,510,90)}
    else if (arrayIncludes('0X','4X','8X')) { drawWinLine(100,100,520,520)}
    else if (arrayIncludes('0O','1O','2O')) { drawWinLine(50,100,558,100)}
    else if (arrayIncludes('3O','4O','5O')) { drawWinLine(50,304,558,304)}
    else if (arrayIncludes('6O','7O','8O')) { drawWinLine(50,508,558,508)}
    else if (arrayIncludes('0O','3O','6O')) { drawWinLine(100,50,100,558)}
    else if (arrayIncludes('1O','4O','7O')) { drawWinLine(304,50,304,558)}
    else if (arrayIncludes('2O','5O','8O')) { drawWinLine(508,50,508,558)}
    else if (arrayIncludes('6O','4O','2O')) { drawWinLine(100,508,510,90)}
    else if (arrayIncludes('0O','4O','8O')) { drawWinLine(100,100,520,520)}
    //this condition checks for tie
    //squares are selected the code executes
    else if (selectedSquares.length >= 9) {
        //this function plays the tie game sound
        audio('./media/tie.mp3');
        setTimeout(function () { resetGame();}, 1000);
    }
    //THIS FUNCTION checks if an array includes 3 strings it is used to check for 
    //each win condition

    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        //if the 3 variables return true our else if condition executes drawwinline
        if (a === true && b === true && c === true) { return true}
    }
}
//this function makes our body element temporarily unclickable
function disableClick() {
    //this makes our body unclickable
    body.style.pointerEvents = 'none';
    //this makes our body clickable again after 1 second
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//this function takes a string parameter of the path you set earlier for
//placement sound
function audio(audioURL) {
    //we create a new audio object and we pass the path as a parameter
    let audio = new Audio(audioURL);
    //play method plays our audio sound
    audio.play();
}
//this function utilizes html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
//this line accesses our html canvas element
    const canvas = document.getElementById('win-lines')
    //this line gives us access to methods and properties on canvas
    const C = canvas.getContext('2d');
    //this line indicates where the start of a lines x axis is
    let x1 = coordX1,
        //this line indicates where the start of a line y axis
        y1 = coordY1,
        //this line indicates where the start of a lines x axis is
        x2 = coordX2,
        //this line indicates where the end of a lines y axis is 
        y2 = coordY2,
        //this cariable stores temp x axis data
        x = x1,
        //this var stores temp y axis data
        y = y1;

    //This function interacts with the canvas    
    function animateLineDrawing() {
        //this var creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //this clears recent path
        C.clearRect(0,0,608,608)
        //this method starts path
        C.beginPath();
        //this method indicates start point
        C.moveTo(x1,y1)
        //this methods sets end point
        C.lineTo(x,y)
        //sets width
        C.lineWidth = 10;
        //this sets the color of the line
        C.strokeStyle = 'rgba(70,255,33,.8)';
        //this method sets the color of our line
        C.stroke();
        //this condition checks if we've reached the endpoint
        if (x1 <= x2 && y1 <= y2) {
            //this condition adds 10 to previous end x point
            if (x < x2) {x += 10;}
            //this condition adds 10 to previous y point
            if (y < y2) {y += 10;}
            //this condition is similar to the one above
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {x += 10;}
            if (y > y2) {y -= 10;}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }
        //this function clears our canvas after our win line is drawn
        function clear() {
            //this line starts our animation loop
            const animationLoop = requestAnimationFrame(clear);
            //this line clears our canvas
            C.clearRect(0,0,608,608);
            //this line stops our animation loop
            cancelAnimationFrame(animationLoop);
        }
        //this line disallows clicking while the win sound is playing
        disableClick(); 
        //this line plays win sound
        audio('./media/winGame.mp3');
        //this line calls our animation loop
        animateLineDrawing();
        //this line calls our main animation loop.
        setTimeout(function () {clear(); resetGame();}, 1000);
}
//this function resets the game in the event of a tie or a win
function resetGame() {
    //this for loop iterates through each html square element
    for (let i = 0; i < 9; i++) {
        //this variable gets the html element of i
        let square = document.getElementById(String(i))
        //this removes our elements backgroundimage
        square.style.backgroundImage = '';
    }
    //this resets our array so it is empty and we can start over
    selectedSquares = [];
}