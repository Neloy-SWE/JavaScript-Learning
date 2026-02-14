/**
 * HTML events are actions, occurrences, or signals recognized by the browser that happen to HTML elements, often triggered by user interaction (clicks, keystrokes) or system processes (page load, media play). They serve as hooks for JavaScript to execute code in response, enabling dynamic, interactive web pages.
 * 
 * common event types:
    - Mouse events: click, dblclick, mouseover, mouseout, mousedown, mouseup
    - Keyboard events: keydown, keyup, keypress
    - Form events: submit, change, focus, blur
    - Window events: load, resize, scroll, unload
    - Touch events: touchstart, touchmove, touchend
    - Media events: play, pause, ended, volumechange
    - Drag and drop events: dragstart, dragover, drop, dragend
    - Clipboard events: copy, cut, paste
    - etc.
 * 
 * When JavaScript is used in HTML pages, JavaScript can react on events
 * JavaScript lets you execute code when events are detected.
 * HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.
 * 
 */

// calling function on onclick event:
const tagShowDate = document.getElementById("idShowDate");
const buttonShowDate = document.getElementById("buttonShowDate");

buttonShowDate.style.padding = "10px 20px";
buttonShowDate.style.border = "none";
buttonShowDate.style.borderRadius = "10px";
buttonShowDate.style.color = "white";
buttonShowDate.style.backgroundColor = "blue";

let isClear = false;

const showDate = () => {
    if (isClear) {
        tagShowDate.innerHTML = "";
        buttonShowDate.innerHTML = "Show Date";
        buttonShowDate.style.backgroundColor = "blue";
        isClear = false;
    } else {
        buttonShowDate.innerHTML = "Clear Date";
        tagShowDate.innerHTML = Date();
        buttonShowDate.style.backgroundColor = "red";
        isClear = true;
    }
}

/**
 * An event handler is JavaScript code that runs when an event happens.
 * 
 * Event handlers can be used to handle and verify user input, user actions, and browser actions:
    - Things that should be done every time a page loads
    - Things that should be done when the page is closed
    - Action that should be performed when a user clicks a button
    - Content that should be verified when a user inputs data
    - And more ...
 * 
 * Many different methods can be used to let JavaScript work with events:
    - HTML event attributes can execute JavaScript code directly
    - HTML event attributes can call JavaScript functions
    - You can assign your own event handler functions to HTML elements
    - You can prevent events from being sent or being handled
    - And more ...
 */

// using addEventListener() is the recommended way to handle events.
const buttonEventListener = document.getElementById("buttonWithListener");
buttonEventListener.style.padding = "10px 20px";
buttonEventListener.style.border = "none";
buttonEventListener.style.borderRadius = "10px";
buttonEventListener.style.color = "white";
buttonEventListener.style.backgroundColor = "green";

// buttonEventListener.addEventListener("click", () => {
//     alert("Button clicked using addEventListener!");
// });

// You can add many event handlers to one element using addEventListener():
buttonEventListener.addEventListener("mouseover", (event) => {
    buttonEventListener.style.backgroundColor = "red";
    let x = event.clientX;
    let y = event.clientY;
    console.log(`Mouse overed at coordinates: (${x}, ${y})`);
});

buttonEventListener.addEventListener("mouseout", () => {
    buttonEventListener.style.backgroundColor = "green";
});

// click, mouseover, mouseout are mouse events. now let's check some other mouse events:
// dblclick:
buttonEventListener.addEventListener("dblclick", () => {
    alert("Button double-clicked!");
});

// mousemove: Fires continuously as the mouse pointer moves over an element, providing positional information (coordinates) about the cursor.
buttonEventListener.addEventListener("mousemove", (event) => {
    let x = event.clientX;
    let y = event.clientY;
    console.log(`Mouse moved at coordinates: (${x}, ${y})`);
});

// difference between mouseover and mouseemove is that mouseover fires only once when the pointer enters the element, while mousemove fires continuously as the pointer moves within the element.

// mouseenter: Similar to mouseover, but fire when the pointer enters an element, not its descendants, making it more sensible for use cases like CSS :hover behavior.
const divElementParent = document.getElementById("divParent");
const divElementChild = document.getElementById("divChild");

// divElementParent.addEventListener("mouseover", () => {
//     divElementParent.style.backgroundColor = "red";
// });
divElementParent.addEventListener("mouseout", () => {
    divElementParent.style.backgroundColor = "aqua";
});

divElementParent.addEventListener("mouseenter", () => {
    divElementParent.style.backgroundColor = "blue";
});
divElementParent.addEventListener("mouseleave", () => {
    divElementParent.style.backgroundColor = "green";
});
/**
 * difference bwtween mouseout and mouseleave is that mouseout fires when the pointer leaves the element or any of its descendants, while mouseleave fires only when the pointer leaves the entire element itself, not its descendants.
 * 
 * difference bwtween mouseover and mouseenter is that mouseover fires when the pointer enters the element or any of its descendants, while mouseenter fires only when the pointer enters the element itself, not its descendants.
 * 
 * mouserenter has more priority than mouseover. when pointer move to the descendants, priority shift to the mouseover and before leaving the entire element pointer holds mouseover event.
 * 
 * if we leave element and move to the descendants, mouseout event will fire and hold and if we leave the entire element, first mouseout fire and only then mouseleave will fire.
 * 
 */

// wheel:
const divElementWheel = document.getElementById("divWheel");
let scale = 1;
divElementWheel.addEventListener("wheel", (event) => {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(0.125, scale), 4);
    divElementWheel.style.transform = `scale(${scale})`;

});
// wheel and scroll events are similar but wheel is more specific to mouse wheel interactions, while scroll can be triggered by various means (mouse wheel, keyboard, touch) and is more general for tracking scrolling behavior on elements.

// keyboard events:
// keydown:
const keyCheck = document.getElementById("keyCheck");
const keydownEventOutput = document.getElementById("keydownEventOutput");
const keyupEventOutput = document.getElementById("keyupEventOutput");

keyCheck.addEventListener("keydown", function (event) {
  keydownEventOutput.innerHTML = "latest input at press: " + event.key;
});

// keyup:
keyCheck.addEventListener("keyup", function (event) {
  keyupEventOutput.innerHTML = "latest input at release: " + event.key;
  console.log(event.code);
});

// keydown fires the moment a key is pressed down, while keyup fires when the key is released.

const domLoad = document.getElementById("idDOMLoad");
// added listener with document, not the element.
document.addEventListener("DOMContentLoaded", () => {
    // domLoad.textContent = "DOM loaded at start!";
    // domLoad.innerHTML = "DOM loaded at start!";
    domLoad.innerText = "DOM loaded at start!";
});
// The DOMContentLoaded event fires when the browser has fully loaded the HTML and built the Document Object Model (DOM) tree, but has not necessarily finished loading external resources like images and stylesheets.

// added listener with window, not the element or document.
window.addEventListener("load", () => {
    domLoad.innerText = "DOM fully loaded!";
});
// The load event fires when the entire page has fully loaded, including all dependent resources such as images, stylesheets, and sub-frames.
