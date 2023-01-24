let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("main");
let button = document.getElementById("btn");


button.addEventListener("click", () => {
    let random1 = Math.floor(Math.random()* fighters.length);
    let random2 = Math.floor(Math.random()* fighters.length);
    stageEl.innerHTML = fighters[random1] + " VS " + fighters[random2];
    
})