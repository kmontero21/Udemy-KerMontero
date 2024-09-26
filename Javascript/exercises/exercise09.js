let lifetimeSupply = (age,amount) => (amount * 365) * age;


for(let x = 0; x < 3; x++){
    let age = 85;
    let amount = prompt("Enter amoun of snack per day: ");

    document.getElementById("output").innerHTML += "You will need " + lifetimeSupply(age,amount).toLocaleString("en-US") 
                                                + " to last you until the age of " + age  +"<br/>";
}

//Using arrow function
// let celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
// let fahrenheitToCelsius = (fahrenheit) => parseFloat((fahrenheit - 32) * 5/9).toFixed(2);

//Using return
let celsiusToFahrenheit = function(temperature){
    let fahrenheit = (temperature * 9/5) + 32;
    return fahrenheit;
}

let fahrenheitToCelsius = function(temperature){
    let celsius = parseFloat((temperature - 32) * 5/9).toFixed(2);
    return celsius;
}
let temperature = prompt("Enter temperature: ");

document.getElementById("output1").innerHTML = celsiusToFahrenheit(temperature) + " Degree Fahrenheit" + "<br/>";
document.getElementById("output1").innerHTML += fahrenheitToCelsius(temperature) + " Degree Celsius";