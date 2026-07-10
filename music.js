let audio = new Audio("1.aac");
audio.loop = true;
audio.volume = 0.5;

window.addEventListener("load", () => {
    let isPlaying = localStorage.getItem("music");

    if(isPlaying === "on"){
        audio.play();
    }
});

document.addEventListener("click", () => {
    audio.play();
    localStorage.setItem("music","on");
});