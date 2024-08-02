// Get the main HTML element and the cursor element
const main = document.querySelector("html");
const cursor = document.querySelector(".cursor");
const body = document.querySelector("body");

body.addEventListener("mouseover", () => {
    cursor.style.display = "inline-block";
    cursor.style.animation = "appear 0.18s linear forwards"
});

body.addEventListener("mouseleave", () => {
    cursor.style.display = "none";
});

main.addEventListener("mousemove", (event) => {
    // Update the cursor position based on the mouse coordinates and scroll position
    const x = event.clientX - 7.5;
    const y = event.clientY - 7.5;
    cursor.style.transform = `translate(${x}px, ${y}px)`;
});

let feat_videos = document.querySelectorAll(".feat-item-video");
feat_videos.forEach(video => {
    video.addEventListener("mouseover", function(){
        video.play();
    })
    video.addEventListener("mouseleave", function(){
        video.pause();
        video.currentTime = 0;
    })
});

