let numberArray = ['ZERO' , 'ONE' , 'TWO' , 'THREE' , 'FOUR' , 'FIVE' , 'SIX' , 'SEVEN' , 'EIGHT' , 'NINE'];
//Get the HTML Elements
let inputField = document.querySelector('#number');
let displayElement = document.querySelector('#text-number');

let convertToWordNumber = (str) => {
    let tempString = '';
    for (let i=0 ; i<str.length ; i++) {
        let digit = Number.parseInt(str.charAt(i));
        tempString += `${numberArray[digit]} `;
    }
    return tempString;
};

inputField.addEventListener('keyup', function () {
    let textEntered = inputField.value;
    displayElement.innerText = convertToWordNumber(textEntered);
});