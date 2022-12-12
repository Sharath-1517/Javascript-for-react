window.onload = function() {
    let mb = document.getElementById("ctrl-btn");
    mb.addEventListener("click", main);
}

function main(val) {
    // console.log(value);
    let value  = document.getElementById("tb").value;
    let invalid = document.getElementById("invalid");
    invalid.innerHTML = "";
    if(value==0) invalid.innerHTML = "Invalid input<br>Enter only a non-zero positive number.";
    else{
        display(value);
    }
}

function display(val) {

    // declaring html variables
    let displayLength = document.getElementById("display-Length");
    let displayVolume = document.getElementById("display-volume");
    let displayMass = document.getElementById("display-mass");

    // calculating values
    displayLength.innerHTML = `
        ${val} meters = ${Number(val*3.28).toFixed(3)} feet | ${val} feet = ${Number(val*0.3048).toFixed(3)} meters
    `;
    displayVolume.innerHTML = `
        ${val} liters = ${Number(val*0.26417).toFixed(3)} gallons | ${val} gallons = ${Number(val*3.785).toFixed(3)} liters
    `;
    displayMass.innerHTML = `
        ${val} kilos = ${Number(val*2.2046).toFixed(3)} pounds | ${val} pounds = ${Number(val*0.45359).toFixed(3)} kilos
    `;
}