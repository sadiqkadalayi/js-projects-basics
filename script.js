// HTML


// JavaScript
const quotes = [  "The only way to do great work is to love what you do. - Steve Jobs",  
                    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",  
                    "Believe you can and you're halfway there. - Theodore Roosevelt",  ];

const quoteButton = document.getElementById("quoteButton");
const quoteText = document.getElementById("quoteText");

quoteButton.addEventListener("click", generateQuote);

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
}



// JavaScript
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const task = taskInput.value.trim();
  if (task !== "") {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

// taskList.addEventListener("click", completeTask);

// function completeTask(event) {
//   const clickedElement = event.target;
//   clickedElement.classList.toggle("completed");
// }