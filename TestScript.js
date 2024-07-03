// /* <button id="quoteButton">Generate Quote</button>
// <p id="quoteText"></p> */

const quoteButton = document.getElementById('quoteButton');
const quoteText = document.getElementById('quoteText');
const quoteList = document.getElementById('quoteList');
const DigitButton = document.getElementById('DigitButton');
const DigitText = document.getElementById('DigitText');

const DigitButtonDisply = () => {
    const DigitButtonRandom = Math.floor(Math.random() * 10000000);
    
    DigitText.innerHTML = DigitButtonRandom;
}
DigitButton.addEventListener('click',DigitButtonDisply);

const quotes = ['Pooda moonae dineasha','kalikanda nee..','paryaipikallae ne'];

const displQt = () => {
    const randomIndexQuotes = Math.floor(Math.random() * quotes.length);
    quoteText.innerHTML = quotes[randomIndexQuotes];
    for (let Arr of quotes){
        const element = document.createElement('li');
        element.innerHTML=Arr;
        quoteList.appendChild(element);
        quoteButton.disabled=true;
    }

}
const quoteDisplay = quoteButton.addEventListener('click', displQt);

//<input type="text" id="taskInput" placeholder="Enter a task">
//<button id="addButton">Add</button> 

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

const Tododisplay = () => {
    const task = taskInput.value.trim();
    if (task !== ""){
        const ele = document.createElement('li');
        ele.innerHTML = task;
        taskList.appendChild(ele);
        taskInput.value = "";
    }
}
const LDispl = addButton.addEventListener('click', Tododisplay);


const KtaskInput = document.getElementById('KtaskInput');
const KaddButton = document.getElementById('KaddButton');
const KtaskList = document.getElementById('KtaskList');

const Kododisplay = () => {
    const task = KtaskInput.value.trim();
    if (task !== ""){
        KtaskList.innerHTML = task;
    }
}
