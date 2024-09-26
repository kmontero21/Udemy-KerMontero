let artists = ["SpongeCola", "RiverMaya", "Nirvana", "SlipKnot", "KORN"];

// console.log(artists);

let input = prompt("What is the name of your favorite band?");

for (let x = 0; x < artists.length; x++) {
    let name = artists[x].toLowerCase();
    let inputName = input.toLowerCase();

    if (name == inputName) {
        document.getElementById("output1").innerHTML = "That's one of my favorites. too!!";
        break;
    }
    else {
        document.getElementById("output1").innerHTML = "Sorry, not a favorite of mine";
    }
}

let myIntegers = [];
let userInput = "";
let sum = 0;
let product = 1;

while(userInput != "xxx"){
    userInput = prompt("Enter a NUMBER!! or xxx to EXIT");
    if(userInput != "xxx"){
        myIntegers.push(userInput);
        // sum = sum + parseInt(userInput);
        // product += product  * parseInt(userInput);

    }
    else {
        for (let i = 0; i < myIntegers.length; i++){
            sum += parseInt(myIntegers[i]);
            product *= parseInt(myIntegers[i]);   
        }
        document.getElementById("output2").innerHTML = 

        "THE SUM OF THE INTEGERS: " + sum + "<br/>" +
        "THE AVERAGE OF THE INTEGERS: " + parseFloat(sum/myIntegers.length).toFixed(2) + "<br/>" +
        "THE PRODUCT OF THE INTEGERS: " + product; 
    }
}
console.log(myIntegers);
