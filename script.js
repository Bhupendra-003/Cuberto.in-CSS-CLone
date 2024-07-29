// Get the main HTML element and the cursor element
const main = document.querySelector("html");
const cursor = document.querySelector(".cursor");

// Add an event listener to the main element for mouse movement
main.addEventListener("mousemove", (event) => {
    // Update the cursor position based on the mouse coordinates and scroll position
    const x = event.clientX - 7.5;
    const y = event.clientY - 7.5;
    cursor.style.transform = `translate(${x}px, ${y}px)`;
});



