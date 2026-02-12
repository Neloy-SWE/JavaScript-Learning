// Document Object Model
// access element using id: (returns HTMLElement)
const p = document.getElementById("p"); // here document is the HTML document
p.textContent = "Hello World!";

/**
 * The DOM is a W3C Standard (World Wide Web Consortium):
 * The W3C DOM standard is separated into 3 different parts:
    - Core DOM - standard model for all document types
    - XML DOM - standard model for XML documents
    - HTML DOM - standard model for HTML documents
 * 
 * 
 * Application Programming Interface:
 * The DOM API (Application Programming Interface) is a set of Methods and Properties that allow JavaScript to change the content, structure, and style of any HTML elements.
 */

// access element using tag name: (HTMLCollectionOf<HTML{tag}Element>; here {tag} is the specific tag name like HTMLHeadingElement, HTMLDivElement)
const headings = document.getElementsByTagName("h1");
for (let i = 0; i < headings.length; i++) {
    headings[i].textContent = "Modified Heading v:" + (i + 1);
}

// access element using class name: (returns HTMLCollectionOf<Element>)
const classElements = document.getElementsByClassName("element");

for (let i = 0; i < classElements.length; i++) {
    classElements[i].textContent = "Modified tags with class: element v:" + (i + 1);
}

// access element using query selector: select the first matching element
// const queryElement = document.querySelector("#p"); // (returns Element)
// const queryElement = document.querySelector(".element"); // (returns Element)
const queryElement = document.querySelector("h2"); // (returns HTML{tag}Element)
queryElement.textContent = "Modified using query selector";

// access elements using query selector all: select all matching elements
const queryElements = document.querySelectorAll(".query-selectorAll"); // (returns NodeListOf<Element>)
queryElements.forEach((el, index) => {
    el.textContent = "Modified using query selector all v:" + (index + 1);
});

// changing innter html;
const newHtml = document.getElementById("dynamicContent");
const dynamicContent = () => {
    newHtml.innerHTML = "<h3 id='innerHeader'>This content is added dynamically using innerHTML</h3><p>This paragraph is also added dynamically.</p>";

    // changes the style:
    document.getElementById("innerHeader").style.color = "blue";
}
