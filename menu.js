var num = 0;
document.getElementById("open").addEventListener("click", function() {
    document.getElementById("menu").style.left = num + "px";
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("menu").style.left = -110 + "px";
});