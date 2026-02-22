// bubbling

/**
 * Event bubbling is a mechanism in JavaScript where an event triggered on a deeply nested DOM element propagates upward through its ancestor elements in the DOM hierarchy.
 */

document.querySelector("#bGrandparent").addEventListener("click", () => {
    console.log("B Grandparent clicked");
    // });
}, false); // by default the third parameter is false, which means the event will bubble up.

document.querySelector("#bParent").addEventListener("click", () => {
    console.log("B Parent clicked");
    // });
}, false);

document.querySelector("#bChild").addEventListener("click", () => {
    console.log("B Child clicked");
    // });
}, false);

// currntly we can see that, by default when we click on the child element, the event will bubble up to the parent and then to the grandparent, triggering all three event listeners in the process.


// capturing or trickling

/**
 * Event capturing, also known as event trickling, is a mechanism in JavaScript where an event triggered on a deeply nested DOM element propagates downward from the root of the DOM tree to the target element.
 */

document.querySelector("#cGrandparent").addEventListener("click", () => {
    console.log("C Grandparent clicked");
}, true); // setting the third parameter to true enables event capturing.

document.querySelector("#cParent").addEventListener("click", () => {
    console.log("C Parent clicked");
}, true);
// }, false); // bubbling.

document.querySelector("#cChild").addEventListener("click", () => {
    console.log("C Child clicked");
}, true);

// In this case, when we click on the child element, the event will first trigger the grandparent's event listener, then the parent's, and finally the child's, following the capturing phase of event propagation.


// bubbling and capturing have performance issues, because they can trigger multiple event listeners for a single event, which can lead to unnecessary processing and slow down the application.

// to stop the event propagation, we can use the stopPropagation() method on the event object. This will prevent the event from bubbling up or capturing down to other elements.

document.querySelector("#nGrandparent").addEventListener("click", (event) => {
    console.log("N Grandparent clicked");
    // event.stopPropagation();
    },);
// }, true);

document.querySelector("#nParent").addEventListener("click", (event) => {
    console.log("N Parent clicked");
    event.stopPropagation(); // this will stop the event from bubbling up to the grandparent.
    // },);
}, true);

document.querySelector("#nChild").addEventListener("click", (event) => {
    console.log("N Child clicked");
    // event.stopPropagation();
    // },);
}, true);
// now, if we click on the child element, only the child's and parent's event listeners will be triggered, and the grandparent's event listener will not be triggered due to the stopPropagation() method called in the parent's event listener.