var xpositionHome = 20;
var ypositionHome = 18;
var xpositionAbout = 15;
var ypositionAbout = 22;
var xpositionProjects = 14;
var ypositionProjects = 40;
var xpositionNews = 15;
var ypositionNews = 45;
var xpositionContact = 15;
var ypositionContact = 42;

var homeIntervalLeft =	setInterval(homeAnimationLeft, 10);
var	homeIntervalTop	= setInterval(homeAnimationTop, 25);
var	aboutIntervalLeft = setInterval(aboutusAnimationLeft, 7.4);
var	aboutIntervalTop	= setInterval(aboutusAnimationTop, 100);
var	projectIntervalLeft = setInterval(ourprojectsAnimationLeft, 6.7);
var	projectIntervalTop	= setInterval(ourprojectsAnimationTop, 25);
var	newsIntervalLeft = setInterval(newsAnimationLeft, 6.9);
var	newsIntervalTop	= setInterval(newsAnimationTop, 66.7);
var	contactIntervalLeft = setInterval(contactusAnimationLeft, 7.4);
var	contactIntervalTop	= setInterval(contactusAnimationTop, 9.1);


function startSlideShow(){
	setInterval(changeImage, 5000);
}

function changeImage(){
	var imageSrc = document.getElementById("backgroundHome").getAttribute("src");
	var currentImageNumber= imageSrc.substring(imageSrc.lastIndexOf("/") + 1, imageSrc.lastIndexOf("/") + 2);
	if (currentImageNumber == 4) {
		currentImageNumber = 0;
	}
	document.getElementById("backgroundHome").setAttribute("src", "pictures/" + (Number(currentImageNumber) + 1) + ".PNG");	
}

function homeAnimationLeft(){
	if (xpositionHome == 40) {
		clearInterval(homeIntervalLeft);
	} else {
		xpositionHome++;
		document.getElementById("home").style.left = xpositionHome + '%';
	}
}

function homeAnimationTop(){
	if (ypositionHome == 10) {
		clearInterval(homeIntervalTop);
	} else {
		ypositionHome--;
		document.getElementById("home").style.top = ypositionHome + '%';
	}
}

function aboutusAnimationLeft(){
	if (xpositionAbout == 42) {
		clearInterval(aboutIntervalLeft);
	} else {
		xpositionAbout++;
		document.getElementById("aboutus").style.left = xpositionAbout + '%';
	}
}

function aboutusAnimationTop(){
	if (ypositionAbout == 20) {
		clearInterval(aboutIntervalTop);
	} else {
		ypositionAbout--;
		document.getElementById("aboutus").style.top = ypositionAbout + '%';
	}
}

function ourprojectsAnimationLeft(){
	if (xpositionProjects == 44) {
		clearInterval(projectIntervalLeft);
	} else {
		xpositionProjects++;
		document.getElementById("ourprojects").style.left = xpositionProjects + '%';
	}
}

function ourprojectsAnimationTop(){
	if (ypositionProjects == 32) {
		clearInterval(projectIntervalTop);
	} else {
		ypositionProjects--;
		document.getElementById("ourprojects").style.top = ypositionProjects + '%';
	}
}

function newsAnimationLeft(){
	if (xpositionNews == 44) {
		clearInterval(newsIntervalLeft);
	} else {
		xpositionNews++;
		document.getElementById("news").style.left = xpositionNews + '%';
	}
}

function newsAnimationTop(){
	if (ypositionNews == 48) {
		clearInterval(newsIntervalTop);
	} else {
		ypositionNews++;
		document.getElementById("news").style.top = ypositionNews + '%';
	}
}

function contactusAnimationLeft(){
	if (xpositionContact == 42) {
		clearInterval(contactIntervalLeft);
	} else {
		xpositionContact++;
		document.getElementById("contactus").style.left = xpositionContact + '%';
	}
}

function contactusAnimationTop(){
	if (ypositionContact == 64) {
		clearInterval(contactIntervalTop);
	} else {
		ypositionContact++;
		document.getElementById("contactus").style.top = ypositionContact + '%';
	}
}

function changeColourAbout() {
	document.getElementById("aboutus").style.color = '#77C9D4';
	
}

function changeWhiteAbout() {
	document.getElementById("aboutus").style.color = '#FFFFFF';
}

function changeColourProjects() {
	document.getElementById("ourprojects").style.color = '#77C9D4';
	
}

function changeWhiteProjects() {
	document.getElementById("ourprojects").style.color = '#FFFFFF';
}

function changeColourNews() {
	document.getElementById("news").style.color = '#77C9D4';
	
}

function changeWhiteNews() {
	document.getElementById("news").style.color = '#FFFFFF';
}

function changeColourContact() {
	document.getElementById("contactus").style.color = '#77C9D4';
	
}

function changeWhiteContact() {
	document.getElementById("contactus").style.color = '#FFFFFF';
}

function wordswitchNews() {
	if (document.getElementById("myInputNews").style.display == "") {
		document.getElementById("myInputNews").style.display = "none";
	} else if (document.getElementById("myInputNews").style.display == "none"){
		document.getElementById("myInputNews").style.display = "";
	}
}

function searchfieldNews(){
	if (document.getElementById("myInputNews").style.display == "none") {
		document.getElementById("myInputNews").style.display = "";
	} else if (document.getElementById("myInputNews").style.display == ""){
		document.getElementById("myInputNews").style.display = "none";
	}
}

function wordswitchEvents() {
	if (document.getElementById("myInputEvents").style.display == "") {
		document.getElementById("myInputEvents").style.display = "none";
	} else if (document.getElementById("myInputEvents").style.display == "none"){
		document.getElementById("myInputEvents").style.display = "";
	}
}

function searchfieldEvents(){
	if (document.getElementById("myInputEvents").style.display == "none") {
		document.getElementById("myInputEvents").style.display = "";
	} else if (document.getElementById("myInputEvents").style.display == ""){
		document.getElementById("myInputEvents").style.display = "none";
	}
}