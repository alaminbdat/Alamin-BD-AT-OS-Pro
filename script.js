document.addEventListener("DOMContentLoaded", () => {

const windowArea = document.getElementById("windowArea");
const startButton = document.getElementById("startButton");
const startMenu = document.getElementById("startMenu");
const clock = document.getElementById("clock");

function openWindow(title, content){
    windowArea.innerHTML = `
    <div class="window">
        <h2>${title}</h2>
        <hr>
        ${content}
    </div>`;
}

document.getElementById("fileExplorer").onclick = () =>
openWindow("📁 File Explorer","<p>File Explorer Ready.</p>");

document.getElementById("browser").onclick = () =>
openWindow("🌐 Browser","<p>Browser Ready.</p>");

document.getElementById("notepad").onclick = () =>
openWindow("📝 Notepad",
"<textarea style='width:100%;height:250px'></textarea>");

document.getElementById("settings").onclick = () =>
openWindow("⚙️ Settings","<p>Settings Ready.</p>");

document.getElementById("garments").onclick = () =>
openWindow("🏭 Garments Tools",`
<button onclick="alert('Excel Production Sheet Coming Soon')">📊 Excel Production Sheet</button><br><br>
<button>📋 Daily Report</button><br><br>
<button>📦 Shipment Report</button><br><br>
<button>🧮 SMV Calculator</button><br><br>
<button>📈 Efficiency Calculator</button>
`);

startButton.onclick = () => {
    if(startMenu.style.display==="block"){
        startMenu.style.display="none";
    }else{
        startMenu.style.display="block";
    }
};

function updateClock(){
    const now = new Date();
    clock.innerHTML = now.toLocaleTimeString();
}
setInterval(updateClock,1000);
updateClock();

});
