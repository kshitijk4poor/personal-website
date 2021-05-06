var icon = document.getElementById("dark mode");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme"))
    icon.src="/assets/light mode.png";
else
    icon.src="assets/dark mode.png";
}
