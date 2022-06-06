let numbers = `<ul class="numbers">
    <li> <button class="number">1</button> </li>
    <li> <button class="number">2</button> </li>
    <li> <button class="number">3</button> </li>
    <li> <button class="number">4</button> </li>
    <li> <button class="number">5</button> </li>
    <li> <button class="number">6</button> </li>
    <li> <button class="number">7</button> </li>
    <li> <button class="number">8</button> </li>
    <li> <button class="number">9</button> </li>
    <li> <button class="delete-btn">Del</button> </li>
    <li> <button class="number">0</button> </li>
    <li> <button class="reset-btn">Reset</button> </li>
</ul>`;

let opretors = `
    <ul class="opretors">
        <li class="opretor"> + </li>
        <li class="opretor"> - </li>
        <li class="opretor"> x </li>
        <li class="opretor"> ÷ </li>
        <li class="equal">=</li>
</ul>`;

document.body.querySelector(".uls").innerHTML += numbers;
document.body.querySelector(".uls").innerHTML += opretors;

let numberButtons = document.querySelectorAll(".numbers li button.number");
let arthimticOpretors = document.querySelectorAll(".opretor");
let showResultDiv = document.querySelector(".show-result");

let reg = /-|x|\+|÷/i;

/*
    showing opretors in ".show result" element
*/


arthimticOpretors.forEach((opretor) => {

    opretor.addEventListener("click", function (event) {
    
        if (showResultDiv.innerHTML == "" || reg.test(showResultDiv.innerHTML)) {
        
        return;

        } else {
            
            showResultDiv.innerHTML += this.innerHTML;
            
    }
    });
});

/*
    showing numbers in ".show result" element
*/
numberButtons.forEach((button) => {
  button.addEventListener("click", function () {
    showResultDiv.innerHTML += this.innerHTML;
  });
});

/*
working on delete button
*/

let deleteBtn = document.querySelector(".delete-btn");

deleteBtn.addEventListener("click", function () {

    let stringText = showResultDiv.innerHTML;
    
    showResultDiv.innerHTML = stringText.substring(0, stringText.length - 1);
    
});

/*
Working on reset button
*/

let resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener("click", function () {
  showResultDiv.innerHTML = "";
});

// summation of two numbers
let summation = function (input1, input2) {
    
    return parseFloat(input1) + parseFloat(input2);

}

// divison of two numbers
let divison = function (input1, input2) {
    
    return parseFloat(input1) / parseFloat(input2);

}

// multiplication of two numbers
let multiplication = function (input1, input2) {
    
    return parseFloat(input1) * parseFloat(input2);

}

// subtraction of two numbers
let subtraction = function (input1, input2) {
    
    return parseFloat(input1) - parseFloat(input2);

}


//working on opretaion 
let equalSign = document.querySelector(".equal");

equalSign.addEventListener("click", function () {
    let sign = showResultDiv.innerHTML.match(reg)[0];
    console.log(sign);
    if (sign == null) {
        return;
    } else {
        let numbersArray = showResultDiv.innerHTML.split(sign);

        if (numbersArray.includes("")) return;
        switch (sign) {
            case "+":
                showResultDiv.innerHTML = summation(numbersArray[0], numbersArray[1]);
                break;
            case "-":
                showResultDiv.innerHTML = subtraction(numbersArray[0], numbersArray[1]);
                break;
            case "x":
                showResultDiv.innerHTML = multiplication(numbersArray[0], numbersArray[1]);
                break;
            case "÷":
                showResultDiv.innerHTML = divison(numbersArray[0], numbersArray[1]);
                break;
            default:
                break;
        }
    }
})
