let main = document.querySelector("html");
let cursor = document.querySelector(".cursor");
main.addEventListener("mousemove", (dets)=>{
    cursor.style.left = dets.clientX + "px";
    cursor.style.top = dets.clientY + "px";
})