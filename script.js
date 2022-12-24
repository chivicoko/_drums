document.getElementById("w").addEventListener("click", function () {
    alert("clicked w!");
});
document.getElementById("a").addEventListener("click", function () {
    alert("clicked a!");
});
document.getElementById("s").addEventListener("click", function () {
    alert("clicked s!");
});
document.getElementById("d").addEventListener("click", function () {
    alert("clicked d!");
});
document.getElementById("j").addEventListener("click", function () {
    alert("clicked j!");
});
document.getElementById("k").addEventListener("click", function () {
    alert("clicked k!");
});
document.getElementById("l").addEventListener("click", function () {
    alert("clicked l!");
});


// keyboard press listener
document.addEventListener("keypress", function(event){
    alert("pressed a key: " + event.key);
});
