
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
    let row = document.getElementsByClassName("column");
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

// let cell = document.querySelectorAll(".column")
// for (let i=0; i<cell.length; i++){
// cell[i].onclick = function() {
//     cell[i].style.backgroundColor = myColor
//     }
// }

let isDrawing = false;
const cells = document.getElementsByTagName("td");
document.onmousemove = function(){
    beginDraw();
};
let beginDraw = () => {
    for (let cell of cells){
        cell.addEventListener('mousedown',event => {
            isDrawing = true;
            cell.style.backgroundColor = myColor
        });

        cell.addEventListener('mousemove',event => {
            if(isDrawing){
                    cell.style.backgroundColor = myColor
            }
        });

        cell.addEventListener('mouseup',event => {
            if(isDrawing){
                isDrawing = false;
            }
        });
    }
} 