
function navClose() {

}
function navOpen() {

}
function createTextBox() {
    var text = document.createElement("P");
    text.style.backgroundColor = display.style.backgroundColor;
    text.style.color = displayfont.style.backgroundColor; 
    text.style.fontSize = document.getElementById("fontsize").value + 'px';
    text.innerHTML = document.getElementById("textinput").value;
    text.style.width = document.getElementById("boxsize").value + 'px';
    document.getElementById("texts").appendChild(text);
    
}

function toJSON(){
    var pag = '{'
    + '"background-color: "' + text.style.backgroundColor + ","
    + '"color: "' + text.style.color + ","
    + '"font-size: "' + text.style.fontSize + ","
    + '"text: "' + text.innerHTML + ","
    + '""'
}