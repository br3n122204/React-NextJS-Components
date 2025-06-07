// 1. Working with Variables
function showMessage() {
    // Get the input element where user types their name
    let nameInput = document.getElementById('nameInput');
    // Get the paragraph where we'll show our greeting
    let greetingText = document.getElementById('greeting');
    
    // Get the value from the input and remove extra spaces
    let name = nameInput.value.trim();
    
    // Check if the user typed something
    if (name !== '') {
        // If they did, show a greeting
        greetingText.textContent = 'Hello, ' + name + '! Welcome to JavaScript!';
        greetingText.className = 'success';
    } else {
        // If they didn't, show an error message
        greetingText.textContent = 'Please type your name first!';
        greetingText.className = 'error';
    }
}

// 2. Working with Numbers
function addNumbers() {
    // Get both number inputs
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    
    // Get the element where we'll show the result
    let resultText = document.getElementById('result');
    
    // Check if both numbers are provided
    if (number1 === '' || number2 === '') {
        resultText.textContent = 'Please enter both numbers!';
        resultText.className = 'error';
        return;
    }
    
    // Convert string values to numbers and add them
    let sum = Number(number1) + Number(number2);
    
    // Show the result
    resultText.textContent = number1 + ' + ' + number2 + ' = ' + sum;
    resultText.className = 'success';
}

// 3. Working with Arrays (Lists)
// Create an empty array to store our fruits
let fruits = [];

function addFruit() {
    // Get the input element
    let fruitInput = document.getElementById('fruitInput');
    // Get the list element where we'll show our fruits
    let fruitList = document.getElementById('fruitList');
    
    // Get the fruit name and remove extra spaces
    let fruitName = fruitInput.value.trim();
    
    if (fruitName !== '') {
        // Add the fruit to our array
        fruits.push(fruitName);
        
        // Create a new list item
        let listItem = document.createElement('li');
        listItem.textContent = fruitName;
        
        // Add the list item to our list
        fruitList.appendChild(listItem);
        
        // Clear the input
        fruitInput.value = '';
    }
}

// 4. Changing Page Content
function changeText() {
    // Get the paragraph element
    let text = document.getElementById('changeMe');
    
    // Change its content
    text.textContent = 'Text changed! JavaScript is fun!';
    text.style.color = '#2196F3';
}

function changeColor(color) {
    // Get the color box element
    let box = document.getElementById('colorBox');
    
    // Change its background color
    box.style.backgroundColor = color;
}

// Variables Exercise
function displayName() {
    const nameInput = document.getElementById('nameInput');
    const nameDisplay = document.getElementById('nameDisplay');
    const name = nameInput.value.trim();
    
    if (name) {
        nameDisplay.textContent = `Hello, ${name}! Welcome to JavaScript Fundamentals.`;
        nameDisplay.style.color = '#1a73e8';
    } else {
        nameDisplay.textContent = 'Please enter a name!';
        nameDisplay.style.color = '#dc3545';
    }
}

// Arrays Exercise
const items = [];

function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');
    const newItem = itemInput.value.trim();

    if (newItem) {
        // Add to array
        items.push(newItem);
        
        // Create new list item
        const li = document.createElement('li');
        li.textContent = `${newItem} (at index ${items.length - 1})`;
        
        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.onclick = () => {
            const index = items.indexOf(newItem);
            if (index > -1) {
                items.splice(index, 1);
                itemList.removeChild(li);
            }
        };
        
        li.appendChild(deleteBtn);
        itemList.appendChild(li);
        
        // Clear input
        itemInput.value = '';
    }
}

// Objects Exercise
function createPerson() {
    const name = document.getElementById('personName').value.trim();
    const age = document.getElementById('personAge').value;
    const city = document.getElementById('personCity').value.trim();
    const personDisplay = document.getElementById('personDisplay');

    if (name && age && city) {
        // Create person object
        const person = {
            name: name,
            age: parseInt(age),
            city: city,
            introduce: function() {
                return `Hi, I'm ${this.name}, ${this.age} years old, from ${this.city}.`;
            }
        };

        // Display person information
        personDisplay.innerHTML = `
            <p><strong>Person Object Created:</strong></p>
            <p>${person.introduce()}</p>
            <p>Object properties: ${JSON.stringify(person, (key, value) => 
                key === 'introduce' ? undefined : value, 2)}</p>
        `;
    } else {
        personDisplay.innerHTML = '<p style="color: #dc3545;">Please fill in all fields!</p>';
    }
}

// DOM Manipulation Exercise
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff'];
let colorIndex = 0;

function changeColor() {
    const colorBox = document.getElementById('colorBox');
    colorIndex = (colorIndex + 1) % colors.length;
    colorBox.style.backgroundColor = colors[colorIndex];
}

function addElement() {
    const dynamicContent = document.getElementById('dynamicContent');
    const newElement = document.createElement('div');
    newElement.textContent = 'New Element ' + (dynamicContent.children.length + 1);
    newElement.style.padding = '10px';
    newElement.style.margin = '5px';
    newElement.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    newElement.style.color = 'white';
    newElement.style.borderRadius = '4px';
    
    // Add remove functionality
    newElement.onclick = () => dynamicContent.removeChild(newElement);
    
    dynamicContent.appendChild(newElement);
}

// Event Handling Exercise
const mouseTracker = document.getElementById('mouseTracker');
const coordinates = document.getElementById('coordinates');

mouseTracker.addEventListener('mousemove', (e) => {
    const rect = mouseTracker.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    coordinates.textContent = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;
});

mouseTracker.addEventListener('mouseleave', () => {
    coordinates.textContent = 'Move your mouse here!';
});

const clickCounter = document.getElementById('clickCounter');
let clicks = 0;

clickCounter.addEventListener('click', () => {
    clicks++;
    clickCounter.textContent = `Click me! (${clicks} clicks)`;
});

// Exercise 1: Simple Button Click
function sayHello() {
    // This finds the paragraph where we want to show our message
    let messageBox = document.getElementById('message');
    
    // This puts the text "Hello!" in that paragraph
    messageBox.textContent = "Hello!";
}

// Exercise 2: Changing Text Colors
function makeRed() {
    // This finds the text we want to change
    let text = document.getElementById('colorText');
    
    // This makes it red
    text.style.color = "red";
}

function makeBlue() {
    // This finds the text we want to change
    let text = document.getElementById('colorText');
    
    // This makes it blue
    text.style.color = "blue";
}

// Exercise 3: Simple Counter
// This keeps track of our count
let number = 0;

function addOne() {
    // Add 1 to our number
    number = number + 1;
    
    // This finds the span where we show the number
    let countDisplay = document.getElementById('count');
    
    // This shows the new number
    countDisplay.textContent = number;
} 