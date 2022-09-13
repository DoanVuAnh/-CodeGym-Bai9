let imgObj = null;
imgObj = document.getElementById("myimg");
function init() {
    imgObj = document.getElementById("myimg");
    imgObj.style.position= "relative";
    imgObj.style.left = "0px";
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) +100 + "px";
}
window.onload = init;
