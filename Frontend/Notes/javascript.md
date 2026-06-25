 Javascript

Brendan Eich created Javascript within 10days.

JS is Interpreted Language.

Interpreted Language is executed line by line unlike Compiled Language.

windows.alert("Hello, World");

OR

alert("Hello, World"); //shorter
^ ^ ^
function Message End

if its not obvious enough "" is for string

"" and '' works the same way in JS

but i prefer "" for texts and '' for letters.

Everyone must write code like theyre the same person so its understandable by all.

https://github.com/rwaldron/idiomatic.js

DataType:

    string (text) - "hello", 'a' (no separate char type, a single letter is just a string)
    number (any number) - 42, 3.14 (no separate int/float, JS treats all numbers the same)
    boolean (true or false)
    undefined (variable declared but no value assigned)
    null (intentionally empty)
    bigint (huge numbers) - 9007199254740991n
    symbol (unique identifier) - Symbol("id")

typeof(23);
typeof(true);
typeof("Kuro");

typeof identifies the datatype of whatever is inside.

var myName = "Cy";
keyword

var Race = prompt("Whats your race?");

you now store the data when you enter it.

alert("you are a " + Race);

    TEMPLATE LITERALS (BACKTICKS)

    `` is the key under Esc. lets you drop variables into a string using ${}.
    cleaner than gluing with +.

    var port = 3000;

    console.log(`Server running on port ${port}.`);  // Server running on port 3000.
    console.log("Server on port " + port + ".");     // old way, messier

    ${} runs any expression inside, not just variables.
    `Total: ${5 + 3}`   // Total: 8

    ${} only works in backticks. in "" or '' it prints as plain text.
    backticks also allow multi-line strings and apostrophes (What's) without breaking.

    WORD COUNTING

    var name = "Cy";

    name.length; // which will show 2

    example of usage:

        var text = prompt("Paste a text here");

        alert("you have written " + text.length + " Characters, you have " + (140 - textCount) + " Characters left!")

    SLICE

    //var.slice(x,y);

    var name = "Kuroo";
    name.slice(0,4);

        (0) = the start of the word you wanna include
        (4) = up to but not including 4.

    (0,4) = Kuro

    TIP

    (0,4) = 4-0 = 4 letters (Kuro);
    (2,5) = 5-2 - 3 letters (roo);


    Slice Usage

    var text = prompt("Tweet here!");
    var newtext = text.slice(0,140);

    alert("you have written " + newtext.length + " Characters, you have " + (140 - newtext.length) + " Characters left")
    alert(newtext);

    OR SHORTER

    alert(prompt("Tweet here").slice(0,140));

    LOWERCASE AND UPPERCASING

    //Makes the first name capital and the rest lowercase.

    var name = prompt("What's your name? ");

    var lowername = name.toLowerCase();
    var firstchar = lowername.slice(0,1)
    var firstCharUpper = firstchar.toUpperCase();
    var restofname = lowername.slice(1,lowername.length);
    var wholename = firstCharUpper + restofname;

    alert("Hello, " + wholename +".");


    FUNCTION 1

    Creating function -- function GoDoIt(){ blah }
    Calling funciton -- GoDoIt();
    a series of actions that individually does something,
    but to achieve efficiency you only need to write it once,
    package it into a function, and whenever you call it
    it will complete that whole complicated series of steps for you.

    basically: write once, use forever.

    function GoDoIt() {
        alert("Step 1: Wake up");
        alert("Step 2: Brush teeth");
        alert("Step 3: Make coffee");
        alert("Step 4: Start coding");
    }

    // now instead of writing those 4 lines every single time,
    // you just call:

    GoDoIt();

    // and it does ALL of that for you. every time.

    // you can also make functions that take inputs:

    function greet(name) {
        alert("Hello, " + name + "!");
    }

    greet("Kuroo");  // Hello, Kuroo!
    greet("Cy");     // Hello, Cy!

    // the (name) part is called a parameter.
    // its like a placeholder that gets replaced
    // with whatever you pass in when you call it.


    Console.log is only for debugging, only developer can see not the user.

    FUNCTIONS: PARAMETERS AND ARGUMENTS

    FUNCTION 2

    Creating function:
        function GoDoIt(coffee){
            var cost = coffee * 1 (how much a coffee cost)
        }

    calling a function:
        GoDoIt(2); // basically saying that i will make 2 coffees

    function GoDoIt() {
        alert("Step 1: Wake up");
        alert("Step 2: Brush teeth");
        alert("Step 3: Make coffee");
        alert("Step 4: Start coding");
    }

    Another type of function

    Input is money and the money determines how many coffee can be bought
    cost of coffee is 1.5

    Math.floor(x); // you can round down a number by using this.


    RETURN FUNCTION

    FUNCTION 3

        Creating a function:
            function GoDoIt(coffee){
                return money % 1.5;
            }
        Calling a function:
            var change = GoDoIt(6);


        function GoDoIt(money) {
        console.log("Wake up");
        console.log("Brush teeth");

        var numberofcoffee = Math.floor(money / 1.5);

        console.log("Buy " + numberofcoffee +" coffee" );
        console.log("Start coding");

        return money % 1.5;
     }

    GoDoIt(11);

    The money will return the remaining money.

    so that means we can use it as fetching like

    var change = GoDoIt(5);

    if we buy coffee 5 times, the return will be the change.

    THATS THE 3 TYPES OF FUNCTIONS. 3RD IS THE MOST COMPLEX

    Example of the 3rd function.

    This shows that functions can CALL other functions and USE their return value.
    Instead of doing all the math inside GoDoIt, we split the coffee calculation
    into its own function (bottlecalc) and the change calculation into another (calcMoney).

     function GoDoIt(money, costPerBottle){
        console.log("Wake up");
        console.log("Brush teeth");

        console.log("Buy " + bottlecalc(money, costPerBottle) +" coffee" );
        console.log("Start coding");

        return calcMoney(money, costPerBottle);
     }

     function bottlecalc(startingMoney, costPerBottle){
        var numberofcoffee = Math.floor(startingMoney / costPerBottle);

        return numberofcoffee;
     }

     function calcMoney(StartingAmount, costPerBottle){
        var change = StartingAmount % costPerBottle;
        return change;
     }

     console.log("Sup Cy, Here is your " + GoDoIt(5, 1.5) + " change");

    What happens step by step when that last line runs:

        GoDoIt(5, 1.5) is called.
        - 5 is your money. It goes into the "money" parameter.
        - 1.5 is the cost per coffee. It goes into the "costPerBottle" parameter.

        1. "Wake up" prints
        2. "Brush teeth" prints
        3. JS hits bottlecalc(money, costPerBottle) — which is bottlecalc(5, 1.5)
           - JS pauses GoDoIt and jumps into bottlecalc
           - 5 goes into "startingMoney", 1.5 goes into "costPerBottle"
           - Math.floor(5 / 1.5) = Math.floor(3.33) = 3
           - bottlecalc returns 3 back to GoDoIt
           - That line becomes: "Buy " + 3 + " coffee" → prints "Buy 3 coffee"
        4. "Start coding" prints
        5. JS hits calcMoney(money, costPerBottle) — which is calcMoney(5, 1.5)
           - JS pauses GoDoIt and jumps into calcMoney
           - 5 goes into "StartingAmount", 1.5 goes into "costPerBottle"
           - 5 % 1.5 = 0.5 (% gives the remainder — you spent 4.5 on 3 coffees, 0.5 is left)
           - calcMoney returns 0.5 back to GoDoIt
        6. GoDoIt returns that 0.5 back to the console.log that called it
        7. Final output: "Sup Cy, Here is your 0.5 change"

    The point: return lets functions talk to each other.
    bottlecalc does one job (count the coffees), calcMoney does another (get the change),
    and GoDoIt ties them all together. Each function is simple and reusable on its own.
 
Another math

This allows user to multiply x to howmany times it is inputted after the comma ","
Math.pow(x, 2); 

as it said, it generates random number from 0 to 0.999999... up to 16 decimal.
Math.random();

how to create a pseudo random generator.

var n = Math.random();
n = n * 6; // 6 is the range that we need cause we need it for dice roll.
n = Math.floor(n) + 1; // you add 1 because it only works for 0-5. we need to make it 1-6.
console.log(n);

pseudorandom number is not random, its a pattern. If you repeat it long enough it will repeat itself.
it depends on the size of the seed needed to generate random number.

thats why as technology advance, so does the seed because of security.

    CONTROL STATEMENTS

var loveScore = myRandomGen();  // i made it a var because i cant access the chance alone since its a local variable inside the function.

function myRandomGen()
{
    var chance = Math.random();
    chance = chance * 100
    chance = Math.floor(chance) + 1;
    return chance;

    console.log(chance);
}

if (loveScore >= 90) { 
    alert("You guys are meant to be."); 
} 
else { 
    alert("There's still a chance, but you might wanna work harder."); 
}

    COMPARATORS AND EQUALITY

    === equal to (checks data type, Exact equal)
    == equal to (does not check datatype)
    !== not equal to 
    > greater than 
    < less than 
    >= greater or equal to 
    <= lesser or equal to 

    COMBINING COMPARATORS 

    && AND
    || OR ( Shift + \ )
    !  NOT 

    Example: 

    if (loveScore == 100){
        alert("You guys are meant to be.");
    }
    if (loveScore >= 90 && loveScore < 100 ) { 
        alert("Its a guaranteed confession. Go Do It."); 
    } 
    else if (loveScore < 90 && loveScore >= 50 ) { 
        alert("There's still a chance, but you might wanna work harder."); 
    }
    else if (loveScore < 50 && loveScore >= 10) {
        alert("Your score is below half, chances are slim.");
    }
    else {
        alert("Your score didnt even reach 2 digits, you should quit right now.");
    }


    Another Example(This one is a nightmare):

        1. Cramped Nested If's

            function myLeap(year) {
                if (year % 4 == 0) {                                                                                                                                      if (year % 100 == 0) {
                    if (year % 400 == 0) {                            
                        return "Leap year.";
                        }
                    return "Not leap year.";
                    }
                return "Leap year.";
                }   
            return "Not leap year.";
            }

        2. Normal way

            if (year % 400 == 0) {                                                                                                                                                                                                                                                                                                                       return "Leap year.";
            }
            else if (year % 100 == 0) {
                return "Not leap year.";
            }
            else if (year % 4 == 0) {
                return "Leap year.";
            }

            return "Not leap year.";
    
    ARRAYS!!

    //Collection of items that are related.
    [] - sign that its a collection type of data


    var number = [0, 1, 2, 3, 4];

    var myNumber = number[0]; // you call out the contents inside the array through this method.
    number.length; // counts the length of array
    number.includes(4); // this code will check the array if it includes 4 in boolean output.
    number.push(5); // pushes the content into the end of the array.
    number.pop; // removes the last content in the array.


    ITERATION ON ARRAY 

        var number = [];

        function fizzbuzz(){
            var num;
            if (number.length == 0){
                num = 1;
            }
            else{
                num = number.length + 1;
            } 
            number.push(num);
            console.log(number);
        }

    
    LOOP SECTION

    While loop 

        var i = 0;
        
        while (i<2){
            console.log(i);

            i++;
        }

    For loop 
        // 3 i's in for loop
        // initialize; iterate; increment;
        
        for (i = 0; i<2; i++){
            //do something
        }

        EXAMPLE OF FOR LOOP: 

            FIBONACCI SEQUENCE


                function fibonacciGenerator (n) {
                    var db = [];
                    var first;
                    var second;
                    
                    for (var i = 0; i < n; i++){
                        if (i === 0){
                            db.push(0);                                                 
                        }else if(i === 1){
                            db.push(1);
                        }else{
                            db.push(db[db.length - 2] + db[db.length - 1]);
                        }
                    }
                    return db;
                }

