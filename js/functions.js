
function navClose() {
    document.getElementById("sidebar-wrapper").style.display = "none";
}
function navOpen() {
    document.getElementById("sidebar-wrapper").style.display = "block";
}

function createTextBox() {
    var text = document.createElement("P");
    text.style.backgroundColor = display.style.backgroundColor;
    text.style.color = displayfont.style.backgroundColor; 
    text.style.fontSize = document.getElementById("fontsize").value + 'px';
    text.innerHTML = document.getElementById("textinput").value;
    text.style.width = document.getElementById("boxsize").value + 'px';
    text.style.padding ='1em';
    text.id = "txt";
    text.className = "ui-widget-content";
    document.getElementById("texts").appendChild(text);
    
}
function toJSON(){
    const TextElem = e => ({
        toJSON: () => ({
          type:
            'TextElem',
          textContent:
            e.textContent
        })
      })
      
      const Elem = e => ({
        toJSON : () => ({
          type:
            'Elem',
          id: 
            e.id,
          attributes:
            Array.from(e.attributes, ({name, value}) => [name, value]),
          children:
            Array.from(e.childNodes, fromNode)
        })
      })
      
      // fromNode :: Node -> Elem
      const fromNode = e => {
        switch (e.nodeType) {
          case 3:  return TextElem(e)
          default: return Elem(e)
        }
      }
      
      // html2json :: Node -> JSONString
      const html2json = e => JSON.stringify(Elem(e), null, '  ')
        
      console.log(html2json(document.querySelector("#texts")))
      sessionStorage.setItem('ElementsAtributes', html2json(document.querySelector("#texts")));
}

function getJSON(){
    var items = JSON.parse(sessionStorage.getItem('ElementsAtributes'));
    console.log(items);
    //console.log(typeof items.children[0].children[0].textContent);
    //console.log(typeof items.children[0].attributes[2][1]);

    for(var i = 0; i < items.children.length; i++) {
        var P = document.createElement("P");
        P.id = items.children[i].attributes[0][1];
        P.className = items.children[i].attributes[1][1];
        P.style = items.children[i].attributes[2][1];
        P.textContent = items.children[i].children[0].textContent;  
        document.getElementById("content").appendChild(P);
    }

}
