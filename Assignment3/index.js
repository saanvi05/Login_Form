// onload
function loaded() {
    alert("PAGE is loaded");
}

// onkeypress
function check() {
    alert("You pressed a key inside the input field");
}

//onfocus
function color() {
    document.getElementById("email").style.background = "yellow";
}

// onmouseup
function textColorDef() {
    document.getElementById("passColor").style.color = "black";
    document.getElementById("emailColor").style.color = "black";
}

// onmousedown
function textColorCust() {
    document.getElementById("passColor").style.color = "red";
    document.getElementById("emailColor").style.color = "red";
}