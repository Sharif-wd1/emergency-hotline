1. What is the difference between getElementById, getElementsByClassName, and querySelector /  querySelectorAll?
ans: getElementById → use to select a specific element by its ID.

getElementsByClassName → use to select all elements with the same class.

querySelector → use to select any element using a CSS selector.

querySelectorAll → use to select all elements matching a CSS selector.


2. How do you create and insert a new element into the DOM?
ans: Use createElement to create a new element and then insert it into the DOM using methods     like appendChild or append.


3. What is Event Bubbling and how does it work?
ans: Event Bubbling is a behavior in DOM. When an event happens on a child element, it bubbles up to its parent elements and then to the document.


4. What is Event Delegation in JavaScript? Why is it useful?
ans: Event Delegation is a technique where we set an event listener on a parent element to handle events for its child elements.

It is useful because:
We don’t need to add listeners to every child element.
It works for dynamically added elements as well.


5. What is the difference between preventDefault() and stopPropagation() methods?
ans: preventDefault() → use to stop any element’s default behavior (like link redirect or form submit).

stopPropagation() → use to stop an event from bubbling up to parent elements.