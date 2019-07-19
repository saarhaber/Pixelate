
function addCol(event)
{
	var allrows = document.getElementsByClassName("row");
	newcol = document.createElement("td");
	newcol.setAttribute('class', 'column');
	for(var step = 0; step < allrows.length; step++)
	{
		allrows[step].appendChild(newcol);
	}
}

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

function colorRemain() {
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
