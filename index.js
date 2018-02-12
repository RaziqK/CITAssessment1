var bg = 0;
var show = 0;
var h = 70;
var w = 100;



document.getElementById("bg1").addEventListener("click", function() {  
   bg = 1; document.getElementById("ch1").style.backgroundImage="url(i1.jpg)";
});
document.getElementById("bg1").addEventListener("click", function() {  
   bg = 1; document.getElementById("ch2").style.backgroundImage="url(i2.jpg)";
});
document.getElementById("bg1").addEventListener("click", function() {  
   bg = 1; document.getElementById("ch3").style.backgroundImage="url(i3.jpg)";
});
document.getElementById("bg2").addEventListener("click", function() {  
   bg = 2; document.getElementById("ch1").style.backgroundImage="url(i4.jpg)";
});
document.getElementById("bg2").addEventListener("click", function() {  
   bg = 2; document.getElementById("ch2").style.backgroundImage="url(i5.jpg)";
});
document.getElementById("bg2").addEventListener("click", function() {  
   bg = 2; document.getElementById("ch3").style.backgroundImage="url(i6.jpg)";
});
document.getElementById("bg3").addEventListener("click", function() {  
   bg = 3; document.getElementById("ch1").style.backgroundImage="url(i7.jpg)";
});
document.getElementById("bg3").addEventListener("click", function() {  
   bg = 3; document.getElementById("ch2").style.backgroundImage="url(i8.jpg)";
});
document.getElementById("bg3").addEventListener("click", function() {  
   bg = 3; document.getElementById("ch3").style.backgroundImage="url(i9.jpg)";
});
document.getElementById("bg4").addEventListener("click", function() {  
   bg = 4; document.getElementById("ch1").style.backgroundImage="url(i10.jpg)";
});
document.getElementById("bg4").addEventListener("click", function() {  
   bg = 4; document.getElementById("ch2").style.backgroundImage="url(i11.jpg)";
});
document.getElementById("bg4").addEventListener("click", function() {  
   bg = 4; document.getElementById("ch3").style.backgroundImage="url(i12.jpg)";
});
document.getElementById("ch1").addEventListener("mouseenter", function(){
	if (bg == 1) {document.getElementById("zoom").style.backgroundImage = ("url(i1.jpg)");
		show = 1;}
	if (bg == 2) {document.getElementById("zoom").style.backgroundImage = ("url(i4.jpg)");
		show = 4;}
	if (bg == 3) {document.getElementById("zoom").style.backgroundImage = ("url(i7.jpg)");
		show = 7;}
	if (bg == 4) {document.getElementById("zoom").style.backgroundImage = ("url(i10.jpg)");
		show = 10;}
});
document.getElementById("ch2").addEventListener("mouseenter", function(){
	if (bg == 1) {document.getElementById("zoom").style.backgroundImage = ("url(i2.jpg)");
		show = 2;}
	if (bg == 2) {document.getElementById("zoom").style.backgroundImage = ("url(i5.jpg)");
		show = 5;}
	if (bg == 3) {document.getElementById("zoom").style.backgroundImage = ("url(i8.jpg)");
		show = 8;}
	if (bg == 4) {document.getElementById("zoom").style.backgroundImage = ("url(i11.jpg)");
		show = 11;}
});

document.getElementById("ch3").addEventListener("mouseenter", function(){
	if (bg == 1) {document.getElementById("zoom").style.backgroundImage = ("url(i3.jpg)");
		show = 3;}
	if (bg == 2) {document.getElementById("zoom").style.backgroundImage = ("url(i6.jpg)");	
	show = 6;}
	if (bg == 3) {document.getElementById("zoom").style.backgroundImage = ("url(i9.jpg)");
		show = 9;}
	if (bg == 4) {document.getElementById("zoom").style.backgroundImage = ("url(i12.jpg)");
		show = 12;}
});
document.getElementById("makebg").addEventListener("click", function(){
	document.getElementById("bg").style.backgroundImage = ("url(i" + show + ".jpg")
});

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("bg").style.backgroundImage="none";
});
document.getElementById("showapp").addEventListener("click", function() {
    document.getElementById("app1").style.display="block";
});
document.getElementById("hideapp").addEventListener("click", function() {
    document.getElementById("app1").style.display="none";
});
document.getElementById("z1").addEventListener("click", function(){
	h =h + 7;
	w =w+ 10;
	document.getElementById("zoom").style.height = (h + "%")
	document.getElementById("zoom").style.width = (w + "%")
});
document.getElementById("z2").addEventListener("click", function(){
	h =h- 7;
	w =w- 10;
	document.getElementById("zoom").style.height = (h + "%")
	document.getElementById("zoom").style.width = (w + "%")
});
document.getElementById('zoom').addEventListener('click', function(){
    document.getElementById('zoomcontrols').style.display =('block')
});