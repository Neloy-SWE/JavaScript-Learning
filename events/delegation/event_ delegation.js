const category = document.getElementById("category");
const laptops = document.getElementById("laptops");
const cameras = document.getElementById("cameras");
const mobiles = document.getElementById("mobiles");

// category.addEventListener("click", (event) => {
//     console.log("Category clicked");
//     console.log(event);
// });

// laptops.addEventListener("click", (event) => {
//     console.log("Laptops clicked");
// });

// cameras.addEventListener("click", (event) => {
//     console.log("Cameras clicked");
// });

// mobiles.addEventListener("click", (event) => {
//     console.log("Mobiles clicked");
// });

/**
 * in the above code, there are 3 event listeners attached. whenever we click on any of the child elements, the event will bubble up to the parent element, triggering the event listener attached to the parent element as well.
 * 
 * this can lead to performance issues, especially if there are many child elements or if the event listeners are doing heavy processing. to avoid this, we can use event delegation by attaching a single event listener to the parent element and using the event object to determine which child element was clicked.
 * 
 * Event delegation is a JavaScript technique that attaches a single event listener to a parent element to manage events for all its current and future child elements.
 * 
 */

category.addEventListener("click", (event) => {
    console.log(event.target.id);
    // window.location.href = `/${event.target.id}`; // this will redirect the user to baseurl/childElementId when the child element is clicked.
    console.log(event.target.tagName);
});

/**
 * we can perform different actions based on the clicked element's id or tag name, allowing us to manage events for multiple child elements with a single event listener on the parent element, which is more efficient and easier to maintain than attaching individual event listeners to each child element.
 */

/**
 * though there are benifits of event delegation, there are some limitations as well. not all events bubble up to the parent element, such as focus, blur, resize window, etc. events. 
 * 
 * also using stopPropagation() method on the event object can prevent the event from bubbling up to the parent element, which can break the event delegation mechanism.
 * 
 */