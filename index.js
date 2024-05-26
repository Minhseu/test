var randomNumber1 = Math.floor((Math.random() * 6)) + 1; // creat random num(1-6)
var randomImages1 = "./dice" + randomNumber1 + ".png"; // create combonation of dynamic source images
var Image1 = document.querySelectorAll("img")[0]; // stall or catch the static image
Image1.setAttribute("src", randomImages1); // replay the static with dynamic


var randomNumber2 = Math.floor((Math.random() * 6) + 1)
var randomImages2 = "./dice" + randomNumber2 + ".png";
var Image2 = document.querySelectorAll("img")[1];
Image2.setAttribute("src", randomImages2 );

if(randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = "Player 1 is hot";
else if(randomNumber1 < randomNumber2)
    document.querySelector("h1").innerHTML = "Player 2 is lit";
else 
    document.querySelector("h1").innerHTML = "Drawwwwwwwwwwwww";


// function giveNum(){
//     var arr = [];
//     var i = 0;
//     while(i<2){
//         var randomNum = Math.floor((Math.random()) * 6 ) + 1 ;
//         arr.push(randomNum);
//         i++
//     }
//     return arr;
// }
// var getNum = giveNum();// console.log(getNum[0]); // console.log(getNum[1]);

// var randomImages2 = "./images/dice" + getNum[1] + ".png";
// var Image2 = document.querySelectorAll("img")[1];
// Image2.setAttribute("src", randomImages2 );

// var randomImages1 = "./images/dice" + getNum[0] + ".png";
// var Image1 = document.querySelectorAll("img")[0];
// Image1.setAttribute("src", randomImages1 );

// Best Choice:

//     If performance is your primary concern, and you only need to generate random numbers for this specific purpose, then Code 1 might be a better choice.
//     However, if readability, maintainability, and potential for future enhancements are important, then Code 2 is the preferred option.



