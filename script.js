function colorAll(myColor) {
   var row = document.getElementsByClassName("column");
   for (let i=0; i<row.length; i++)
    row[i].style.backgroundColor = myColor;
}

let myColor = "grey";
function colorCollector()
{
    myColor = document.getElementsByClassName("colorDropdown")[0].value;
}

function colorRemain(s) {
    let row = document.getElementsByClassName("column")[0];
    for (let i=0; i<row.length; i++)
    { let element = row[i];
        if (element.style.backgroundColor == "grey") {
            element.style.backgroundColor = myColor;
        }
    }
}

function colorReset() {
    let row = document.getElementsByClassName("column");
    for (let i=0; i<row.length; i++)
    { let element = row[i];
      element.style.backgroundColor = "grey";
    } 
}