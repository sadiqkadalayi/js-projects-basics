// /* <button id="quoteButton">Generate Quote</button>
// <p id="quoteText"></p> */

const quoteButton = document.getElementById('quoteButton');
const quoteReplacePTag = document.getElementById('quoteText');

const quotesNames = ['Mohammed sadiqali', 'Mohammed Junaid', 'Mohammed Anas', 'Mohammed K'];

const QuoteNamesDis = () => {
    const RandomNames = Math.floor(Math.random() * quotesNames.length);
    quoteReplacePTag.innerHTML = Math.floor(Math.random()*10000);
}

const display = quoteButton.addEventListener('click', QuoteNamesDis);



/* <input type="text" id="taskInput" placeholder="Enter a task">
<button id="addButton">Add</button>
<ul id="taskList"></ul> */

const input = document.getElementById('taskInput');
const btn = document.getElementById('addButton');
const Listitem = document.getElementById('taskList');

btn.addEventListener('click', TaskDisplay);

const TaskDisplay = () => {
    const task = input.value.trim();
    if ( task !== "" ){
        const TaskLi = document.createElement('li');
        TaskLi.innerHTML = task;
        Listitem.appendChild(TaskLi);
        input.value = "";
    }
}



