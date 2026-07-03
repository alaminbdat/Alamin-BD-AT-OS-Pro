document.addEventListener("DOMContentLoaded", () => {

const windowArea = document.getElementById("windowArea");

function openWindow(title, content){
    windowArea.innerHTML = `
    <div class="window">
        <h2>${title}</h2>
        <hr>
        ${content}
    </div>`;
}

document.getElementById("fileExplorer").onclick = () =>
openWindow("📁 File Explorer",`
<div style="padding:10px">
<h3>Quick Access</h3>

<button onclick="
openWindow('📁 Documents', `
<h3>My Documents</h3>
<ul>
  <li>📄 Resume.docx</li>
  <li>📄 Report.pdf</li>
  <li>📄 Notes.txt</li>
  <li>📄 Production.xlsx</li>
</ul>
`);
">
📄 Documents
</button>

<button onclick="alert('📥 Downloads Folder')">📥 Downloads</button><br><br>

<button onclick="alert('🖼 Pictures Folder')">🖼 Pictures</button><br><br>

<button onclick="alert('🎥 Videos Folder')">🎥 Videos</button><br><br>

<button onclick="window.open('./GIRLS SHACKET-G074 Up.xlsx','_blank')">
📊 Excel Production Sheet
</button>

</div>
`);

document.getElementById("browser").onclick = () =>
    window.open("https://www.google.com","_blank");

document.getElementById("edge").onclick = () =>
    window.open("https://www.microsoft.com/edge","_blank");

document.getElementById("notepad").onclick = () =>
    openWindow("📝 Notepad",
    "<textarea style='width:100%;height:250px'></textarea>");

document.getElementById("settings").onclick = () =>
    openWindow("⚙️ Settings","<p>Settings Ready.</p>");

document.getElementById("garments").onclick = () =>
   openWindow("🏭 Garments Tools",
`
<button onclick="window.open('./GIRLS SHACKET-G074 Up.xlsx','_blank')">
📊 Excel Production Sheet
</button><br><br>

<button>📋 Daily Report</button><br><br>
<button>📦 Shipment Report</button><br><br>
<button>🧮 SMV Calculator</button><br><br>
<button>📈 Efficiency Calculator</button>
`); 

const startButton = document.getElementById("startButton");
const startMenu = document.getElementById("startMenu");

startButton.onclick = () => {
    startMenu.style.display =
        startMenu.style.display === "block" ? "none" : "block";
};

const clock = document.getElementById("clock");

function updateClock(){
    clock.innerHTML = new Date().toLocaleTimeString();
}

setInterval(updateClock,1000);
updateClock();

});
