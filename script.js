
    /* Adds number or operation simbols to the display  */
function appendOperation (operation) {
    let container = document.getElementById("display");  //----------- Get the display

    if (container.innerHTML.endsWith('r')) {  //---------------------- Changes the "Error" to the clicked number or simbol
        container.innerHTML = operation;
    }
    else {
        container.innerHTML += operation;  //------------------------- Adds the element to the display
    }
  }

    /* Deletes every element from the display (cleaning up) */
function deleteAll () {
    let container = document.getElementById("display");

    container.innerHTML = '';  //------------------------------------- Sets empty string (i.e. empties the display)
}

    /* Deletes the last element from the display */
function deleteLast () {
    let container = document.getElementById("display");
    if (container.innerHTML.endsWith('r')) {  //---------------------- Deletes the "Error"
        container.innerHTML = '';
    }
    else if (container.innerHTML.endsWith(' ')) {  //----------------- Deletes the simbols which contains the empty space.
        container.innerHTML = container.innerHTML.slice(0, -3);
    }
    else {  //-------------------------------------------------------- Deletes the numbers and other simbols
        container.innerHTML = container.innerHTML.slice(0, -1);
    }
}
    /* Calculates the operation and shows the result on display */
function calculateResult () {
    let container = document.getElementById("display");
    let result = eval(container.innerHTML);  //----------------------- Evaluates from the mathematical expression

    if (result > 9999999999 || result < -9999999999) {  //------------ Sets a limit for the result
        result = "Error";
        container.innerHTML = result;  //----------------------------- and shows a "Error" message
    }
    else if (result % 1 != 0) {  //----------------------------------- Checks if it is a decimal number
        let a = result.toFixed(3);  //-------------------------------- and limits the decimal places by 3
        container.innerHTML = a;
    }
    else {
        container.innerHTML = result;
    }
}