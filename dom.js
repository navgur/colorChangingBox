let box = document.getElementsByClassName("box");
let red =document.getElementById("red");
red.onclick=function() {
    box[0].style.backgroundColor="red";
};
let yellow = document.getElementById("yellow");
yellow.onclick = function() {
    box[0].style.backgroundColor = "yellow";
};

let blue = document.getElementById("blue");
blue.onclick = function() {
    box[0].style.backgroundColor = "blue";
};

let green = document.getElementById("green");
green.onclick = function() {
    box[0].style.backgroundColor = "green";
};

let h1 =document.getElementsByTagName("p");
let a =document.getElementsByTagName("a");
a[0].onclick = function() {
    h1[0].innerHTML="Honesty is the best policy";
}
